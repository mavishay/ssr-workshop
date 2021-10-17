import React from 'react';
import Layout from '../../components/layout'
import Timer from '../../components/timer'
import Head from 'next/head'
import { Button, ButtonGroup } from 'reactstrap'
import Link from 'next/link'

const trueFalse = ({ questions }) => {
    return (
        <Layout>
            <Head>
                <title>Trivia - True/False</title>
            </Head>
            <h1>Answer <span className="text-primary">True</span> or <span className="text-primary">False</span></h1>
            <Timer />
            {questions?.map((question, key) =>
                <div key={`question-${key}`} className="d-flex align-items-center justify-content-between mb-1">
                    <div><strong>{(key + 1)}. </strong>{question.question}</div>
                    <ButtonGroup size="sm">
                        <Button outline onClick={() => window.alert(question.correct_answer === 'True' ? 'Correct' : 'InCorrectAnswer')}>True</Button>
                        <Button outline onClick={() => window.alert(question.correct_answer !== 'True' ? 'Correct' : 'InCorrectAnswer')}>False</Button>
                    </ButtonGroup>
                </div>
            )}
            <Link href="/">Back Home &gt;</Link>
        </Layout>
    );
};
export const getStaticProps = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean')
    const data = await res.json()
    return {
        props: {
            questions: data?.results
        }
    }
}
export default trueFalse;