import CreateEvent from "./modal"

export default function EventList() {

    return(
        <div id="test-asd" className="d-flex flex-column p-4 mt-3">
            <h5>Você não tem nenhum evento adicionado.</h5>
            <p className="text-white">Para adicionar, clique no botão abaixo ou no '+'</p>
            <hr />
            {/* <Button variant="success">+ Criar novo evento</Button> */}
            <CreateEvent />
        </div>
    )
}