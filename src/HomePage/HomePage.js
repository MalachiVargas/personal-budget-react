import React from "react";

function HomePage() {
  return (
    <main className='container center'>
      <article className='page-area'>
        <h2 className='article-title'>Our Key Features</h2>
        <div className='text-box'>
          <h3>Stay on track</h3>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </div>

        <div className='text-box'>
          <h3>Alerts</h3>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </div>
        <div className='text-box'>
          <h3>Results</h3>
          <p>
            People who stick to a financial plan, budgeting every expense, get
            out of debt faster! Also, they to live happier lives... since they
            expend without guilt or fear... because they know it is all good and
            accounted for.
          </p>
        </div>
        <div className='text-box'>
          <h3>Free</h3>
          <p>This app is free!!! And you are the only one holding your data!</p>
        </div>
        <div className='text-box'>
          <h3>Stay on track</h3>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </div>
        <div className='text-box'>
          <h3>Alerts</h3>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </div>
        <div className='text-box'>
          <h3>ChartJS</h3>
          <canvas id='myChart' width='250' height='250'></canvas>
        </div>
        <div className='text-box'>
          <h3>Results</h3>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </div>
      </article>
      <h3 id='d3js'>D3JS</h3>
      <div id='my_dataviz'></div>
    </main>
  );
}

export default HomePage;
