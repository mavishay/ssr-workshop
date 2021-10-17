import React from 'react';
import Layout from '../../components/layout'
import Timer from '../../components/timer'
import Head from 'next/head'
import Link from 'next/link'
import { Input } from 'reactstrap'

const multiple = ({ questions }) => {
    return (
        <Layout>
            <Head>
                <title>Trivia - Multiple</title>
            </Head>
            <h1>Select the correct answer</h1>
            <Timer />
            {questions?.map((question, key) =>
                <div key={`question-${key}`} className="d-flex align-items-center justify-content-between mb-1">
                    <div><strong>{(key + 1)}. </strong>{question.question}</div>
                    <Input type="select" onChange={(e) => e.target.value === question.correct_answer ? window.alert('Correct') : window.alert('Incorrect')}>
                        <option>-- Select answer --</option>
                        {[question.correct_answer, ...question.incorrect_answers].sort((a, b) => 0.5 - Math.random()).map((answer, key2) =>
                            <option key={`answer-${key}-${key2}`}>{answer}</option>
                        )}
                    </Input>
                </div>
            )}
            <Link href="/">Back Home &gt;</Link>
        </Layout>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    const data = await res.json()
    return {
        props: {
            questions: data?.results
        }
    }
}

export default multiple;