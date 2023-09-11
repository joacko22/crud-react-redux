import { Button, Card, TextInput, Title } from "@tremor/react";
import React from "react";
import {useUserActions} from "../hooks/useUserActions"

export function CreateNewUser() {

    const {addUser} = useUserActions()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        addUser({name, email, github})
    }
    return (
        <Card style={{ marginTop: '16px' }}>
            <Title>Create New User</Title>
            <form className="" onSubmit={handleSubmit}>
                <TextInput placeholder="First Name" name="name" />
                <TextInput placeholder="Email" name="email" />
                <TextInput placeholder="Github" name="github" />
                <div>
                    <Button type="submit" className=""
                        style={{ marginTop: '16px' }}>Crear Usuario</Button>
                </div>
            </form>
        </Card>

    )

}