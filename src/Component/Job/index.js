import React from 'react'
import { JobsWrap, JobMain, JobHeading, JobsName, JobBox } from './jobstyle'
import { job } from './joblinks'
import { BsCheckAll } from 'react-icons/bs'

function Jobs() {
    return (
        <>
            <JobsWrap>
                <JobMain data-aos="fade-up">
                    <JobHeading>
                        <h1>Career opportunities</h1>
                        <p>Do you have experience managing others and building relationships? Do you enjoy meeting aggressive timelines in a fast paced environment? Want to work from home long term?</p>
                    </JobHeading>

                    <JobsName>
                        {job.map((item) => {
                          return(
                            <>
                                <JobBox>
                                    <h1>{item.job}</h1>
                                    <p>{item.Location}</p>
                                    <p>{item.type}</p>
                                    <h3>{item.salary}</h3>
                                    <h2><BsCheckAll />{item.label}</h2>

                                    <ul>
                                        <li><h4>{item.reqA}</h4></li>
                                        <li><h4>{item.reqB}</h4></li>
                                        <li><h4>{item.reqC}</h4></li>
                                        <li><h4>{item.reqD}</h4></li>
                                    </ul>
                                    
                                    <button>Apply on Company Site</button>
                                </JobBox>
                            </>
                          )
                        })}
                    </JobsName>
                </JobMain>
            </JobsWrap>
        </>
    )
}

export default Jobs
