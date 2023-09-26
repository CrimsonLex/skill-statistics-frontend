import './App.scss';
import TenTopicsDtoTable from './components/ui/TenTopicsTable/TenTopicsDtoTable';
import Navbar from './components/layouts/Navbar';
import TitleComponent from './components/layouts/title/TitleComponent';

function App() {
    //const [count, setCount] = useState(0)

    return (
        <section>
            <nav className="app">
                <Navbar />
            </nav>
            <section className="container">
                <header className="container__header">
                    <TitleComponent
                        name={'Top ten topics'}
                        size={64}
                    ></TitleComponent>
                </header>
                <main className="container__table">
                    <TenTopicsDtoTable />
                </main>
            </section>
        </section>
    );
}

export default App;
