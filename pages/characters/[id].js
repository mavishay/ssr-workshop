import Layout from '../../components/layout'
import { Card, CardBody, CardHead, Row, Col, Button } from 'reactstrap';
import Image from 'next/image'
import Link from 'next/link'

export default function characters({ character }) {
    return <Layout>
        <Card>
            <CardBody>
                <Row><Col><h3>{character?.name}</h3></Col></Row>
                <Row>
                    <Col md={4}><Image src={character?.image ?? ''} width={144} height={144} /></Col>
                    <Col md={8}>
                        <div>Status: <strong>{character.status}</strong></div>
                        <div>Species: <strong>{character.species}</strong></div>
                        <div>Gender: <strong>{character.gender}</strong></div>
                        <div>Origin: <strong>{character.origin?.name}</strong></div>
                    </Col>
                </Row>
            </CardBody>
            <div className="d-flex w-100">
                <Link href={`/characters/${parseFloat(character.id) - 1}`}><Button>&lt; Prev</Button></Link>
                <Link href={`/characters/${parseFloat(character.id) + 1}`}><Button>Next &gt;</Button></Link>
            </div>
        </Card>
    </Layout>
}

export const getStaticPaths = async () => {
    const map = Array.from(Array(5)).map((ind, key) => ({
        params: {
            id: (key + 1).toString()
        }
    }))
    return { paths: map, fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    const data = await res.json()
    return {
        props: {
            character: data
        }
    }
}