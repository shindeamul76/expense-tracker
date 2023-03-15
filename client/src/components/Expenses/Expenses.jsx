import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import { Rupee } from "../../utils/icons";
// import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";
import Ricontainer from "../Ricontainer/Ricontainer";
import ExpenseForm from "./ExpenseForm";

const Expenses = () => {
  const { expenses, getExpenses, totalExpense, deleteExpense } = useGlobalContext();

  // console.log("This", incomes)

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>
          Expenses 
        <span className="ric-con">
        <Ricontainer />
        </span>
        </h1>
       
        <h2 className="total-income">Total Expense: <span>{Rupee} {totalExpense()}</span></h2>
        <div className="income-content">
          <div className="form-container"></div>
          <div className="incomes">
            <ExpenseForm />
          </div>
          <div className="incomes">
          {expenses.map((expense) => {
            console.log(expense)
              const { _id, title, amount, date, category, description, type } = expense
              return <IncomeItem
              key={_id}
              id={_id} 
              title={title} 
              description={description} 
              amount={amount} 
              date={date} 
              type={type}
              category={category} 
              indicatorColor="var(--color-green)"
              deleteItem={deleteExpense}
              />
             
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
};

const ExpenseStyled = styled.div`
display: flex;
  overflow: auto;

  .total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
        font-size: 2rem;
        font-weight: 800;
        color: var(--color-green);
    }
}

  .income-content{
    display: flex;
    gap: 2rem;
    .incomes{
        flex: 1;
    }
}

@media screen and (max-width: 1050px) {
  .total-income{
    padding: .9rem;
    margin: 1rem 0;
    margin-left: 1rem;
    font-size: 1.8rem;
    gap: .5rem;
    span{
        font-size: 1.8rem;
        font-weight: 700;
    }
}

}

@media screen and (max-width: 500px){

  .total-income{
    padding: .8rem;
    margin: 1rem 0;
    font-size: 1rem;
    span{
        font-size: 1rem;
    }
}
  
  .income-content{
    flex-direction: column;
    gap: 2rem;
}
}

@media screen and (min-width: 501px) and ( max-width: 989px) {
  .income-content{
    flex-direction: column;
    gap: 2rem;
}
`;
export default Expenses;
