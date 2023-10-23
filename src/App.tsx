import './App.scss';
import TenTopicsDtoTable from './components/ui/TenTopicsTable/TenTopicsDtoTable';
import TitleComponent from './components/layouts/title/TitleComponent';

function App() {
    return (
        <section>
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
