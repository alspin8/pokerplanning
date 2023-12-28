import {useState} from "react";

const _initialState = [
    {text: "Créer la structure de base de la base de données.",                                 card: undefined},
    {text: "Élaborer le diagramme de classes pour l'architecture logicielle.",                  card: undefined},
    {text: "Mettre en place un système de gestion des versions avec Git.",                      card: undefined},
    {text: "Rédiger la documentation technique pour le module de traitement des données.",      card: undefined},
    {text: "Effectuer des tests unitaires pour la fonctionnalité de recherche",                 card: undefined},
    {text: "Intégrer les API externes nécessaires au bon fonctionnement de l'application.",     card: undefined},
    {text: "Créer une maquette graphique pour l'interface utilisateur.",                        card: undefined},
    {text: "Mettre en place des mécanismes de sécurité pour protéger les données sensibles.",   card: undefined},
    {text: "Effectuer des tests de charge pour évaluer les performances de l'application.",     card: undefined},
    {text: "Réviser et optimiser le code source pour améliorer l'efficacité.",                  card: undefined},
    {text: "Mettre en œuvre la fonction de notification en temps réel.",                        card: undefined},
    {text: "Configurer les serveurs de développement, de test et de production.",               card: undefined},
]

const useTask = (initialState = _initialState) => {
    const [tasks, setTasks] = useState(initialState);

    const add = (task) => {
        setTasks(prev => [...prev, task]);
    }

    const remove = (idx) => {
        setTasks(prev => prev.filter((_, i) => i !== idx))
    }

    const set = (idx, task) => {
        setTasks(prev => {
            prev[idx] = {...prev[idx], ...task}
            return [...prev];
        })
    }

    const clear = () => {
        setTasks([]);
    }

    return [tasks, add, remove, set, clear];
}

export default useTask;