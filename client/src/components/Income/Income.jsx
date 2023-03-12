import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import { Rupee } from "../../utils/icons";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

const Income = () => {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  // console.log("This", incomes)

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        {/* <h1>Incomes</h1> */}
        <h2 className="total-income">Total Income: <span>{Rupee} {totalIncome()}</span></h2>
        <div className="income-content">
          <div className="form-container"></div>
          <div className="incomes">
            <Form />
          </div>
          <div className="incomes">
          {incomes.map((income) => {
            console.log(income)
              const { _id, title, amount, date, category, description, type } = income
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
              deleteItem={deleteIncome}
              />
             
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeStyled = styled.div`
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
`;
export default Income;
