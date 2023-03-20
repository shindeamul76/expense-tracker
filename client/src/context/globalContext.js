
import React, { useContext, useState } from "react";
import axios from 'axios';
import Dashboard from "../components/Dashboard/Dashboard";
import Income from "../components/Income/Income";
import Expenses from "../components/Expenses/Expenses";


const BASE_URL = 'https://backend-expense-tracker.onrender.com/';

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const [ active, setActive ] = useState(1);

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
           .catch((err) => {
            setError(err.response.data.message)
           })

           getIncomes()
    }

    const getIncomes = async () => {
        try {
           const response = await axios.get(`${BASE_URL}get-incomes`)
           setIncomes(response.data.income)
        //    console.log("This", response.data.income)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)

        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;

        incomes.forEach((income) => {
            totalIncome += income.amount
        })

        return totalIncome;
    }

    //Calculate Expenses

    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
           .catch((err) => {
            setError(err.response.data.message)
           })

           getExpenses()
    }

    const getExpenses = async () => {
        try {
           const response = await axios.get(`${BASE_URL}get-expenses`)
           setExpenses(response.data.expense)
        //    console.log("This", response.data.income)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)

        getExpenses()
    }

    const totalExpense = () => {
        let totalExpense = 0;

        expenses.forEach((expense) => {
            totalExpense += expense.amount
        })

        return totalExpense;
    }

    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0,3)
    }

    const displayData = () => {
        switch(active) {
          case 1: 
           return <Dashboard active={active} setActive={setActive}/>
          case 2: 
           return <Dashboard/>
          case 3: 
           return <Income/>
          case 4: 
           return <Expenses/>
          default: 
           return <Dashboard/>
        }
      }




    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            expenses,
            getExpenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error, 
            setError,
            displayData,
            active,
            setActive
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
