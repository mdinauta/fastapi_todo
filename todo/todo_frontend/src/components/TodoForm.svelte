<script>
    import {Button, Column, Grid, Row, TextInput} from "carbon-components-svelte";
    import { todos } from "../services/store";
    import { loadTodos } from "../services/todoService";


    export let submitTodo;
    let title = '';
    $: disabled = title.length < 3;
    const submit = async () => {
        submitTodo({ title: title, completed: false });
        const todoList = await loadTodos();
        todos.set(todoList);
        title = '';
    }
</script>

<Grid>
    <Row>
        <Column>
            <TextInput placeholder="Enter Todo" bind:value={title} />
        </Column>
        <Column>
            <Button type="submit" on:click={submit} disabled={disabled}>Add</Button>
        </Column>
    </Row>

</Grid>