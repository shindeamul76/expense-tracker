import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { InnerLayout } from '../../styles/Layouts'
import Chart from '../Chart/Chart'
import { Rupee } from '../../utils/icons'
import History from '../../History/History'
import Ricontainer from '../Ricontainer/Ricontainer'

const Dashboard = () => {

  const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

  useEffect(()=>{
    getIncomes()
    getExpenses()
  },[])
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>
          All Transactions
          <span className="ric-con">
        <Ricontainer />
        </span>
          </h1>
        <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {Rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {Rupee} {totalExpense()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {Rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>

          <div className="history-con">
            <History/>
            <h2 className="salary-title">Min <span>Salary</span>Max</h2>
            <div className="salary-item">
              <p>
                {Math.min(...incomes.map(item => item.amount))}
              </p>
              <p>
                {Math.max(...incomes.map(item => item.amount))}
              </p>
            </div>

            <h2 className="salary-title">Min <span>Expense</span>Max</h2>
            <div className="salary-item">
              <p>
                {Math.min(...expenses.map(item => item.amount))}
              </p>
              <p>
                {Math.max(...expenses.map(item => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`

.stats-con{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  .chart-con{
      grid-column: 1 / 4;
      height: 400px;
      .amount-con{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          .income, .expense{
              grid-column: span 2;
          }
          .income, .expense, .balance{
              background: #FCF6F9;
              border: 2px solid #FFFFFF;
              box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
              border-radius: 20px;
              padding: 1rem;
              p{
                  font-size: 3rem;
                  font-weight: 700;
              }
          }
          .balance{
              grid-column: 2 / 4;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              p{
                  color: var(--color-green);
                  opacity: 0.6;
                  font-size: 3rem;
              }
          }
      }
  }

    .history-con{
      grid-column: 4 / -1;
      h2{
          margin: 1rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .salary-title{
          font-size: 1.2rem;
          span{
              font-size: 1.8rem;
          }
      }
      .salary-item{
          background: #FCF6F9;
          border: 2px solid #FFFFFF;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          padding: 1rem;
          border-radius: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p{
              font-weight: 600;
              font-size: 1.6rem;
          }
      }
  }
  }

  @media screen and (max-width: 1050px) {

    .stats-con{
      .chart-con{
          height: 280px;
          .amount-con{
              margin-top: 1.9rem;
              .income, .expense, .balance{
                  padding: .7rem;
                  p{
                      font-size: 1rem;
                      font-weight: 700;
                  }
              }
              .balance{
                  p{
                      font-size: 1rem;
                  }
              }
          }
      }

      .history-con{
        h2{
            margin: .9rem 0;
        }
        .salary-title{
            font-size: 1.1rem;
            span{
                font-size: 1.4rem;
            }
        }
        .salary-item{
            padding: .8rem;
            p{
                font-weight: 700;
                font-size: 1.3rem;
            }
        }
    }
    }
  }

  

  @media screen and (max-width: 500px) {
    .stats-con{
      display: flex;
      flex-direction: column;
      .chart-con{
        flex-direction: column;
          height: 200px;
          margin-top:1rem;
          .amount-con{
              display: flex;
              flex-direction: column;
            
              .income, .expense{
                display: flex;
                flex-direction: column;
              }
              .income, .expense, .balance{
                  padding: .3rem;
                  justify-content: center;
                  align-items: center;
                  p{
                      font-size: 2rem;
                      font-weight: 700;
                  }
              }
              .balance{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  p{
                      font-size: 2rem;
                  }
              }
          }
      }

      .history-con{
        margin-top: 20rem;
        flex-direction: column;
        h2{
            margin: .9rem 0;
        }
        .salary-title{
            font-size: 1rem;
            span{
                font-size: 1rem;
            }
        }
        .salary-item{
            padding: .9rem;
            p{
                font-size: 1rem;
            }
        }
    }
    }
  }

  @media screen and (min-width: 501px) and ( max-width: 823px) {
    .stats-con{
      display: flex;
      flex-direction: column;
      .chart-con{
        flex-direction: column;
          height: 400px;
          margin-top:1rem;
          .amount-con{
              display: flex;
              flex-direction: column;
            
              .income, .expense{
                display: flex;
                flex-direction: column;
              }
              .income, .expense, .balance{
                  padding: .3rem;
                  justify-content: center;
                  align-items: center;
                  p{
                      font-size: 2.4rem;
                      font-weight: 700;
                  }
              }
              .balance{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  p{
                      font-size: 2.4rem;
                  }
              }
          }
      }

      .history-con{
        margin-top: 22rem;
        flex-direction: column;
        h2{
            margin: .9rem 0;
        }
        .salary-title{
            font-size: 1.4rem;
            span{
                font-size: 1.4rem;
            }
        }
        .salary-item{
            padding: .9rem;
            p{
                font-size: 1rem;
            }
        }
    }
    }
  }


`
export default Dashboard
