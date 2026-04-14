# Struktura Aplikacji Recipe Book

> **Jak zobaczyć grafikę?**
> Otwórz ten plik w VS Code i naciśnij `Ctrl + K`, a następnie `V` (Windows/Linux) lub kliknij ikonę "Open Preview to the Side" w prawym górnym rogu edytora. VS Code wyrenderuje poniższy kod jako diagram.

```mermaid
graph TD
    subgraph Context ["Recipe Context"]
        Store[("Global State<br/>(recipes)")]
        Dispatch[("Dispatch Actions<br/>(ADD, DELETE, TOGGLE)")]
    end

    Main[main.tsx] --> App[App.tsx]
    
    subgraph Components ["Component Tree"]
        App -- wraps --> Provider[RecipeProvider]
        Provider --> Container[div.container]
        
        Container --> Title[h1 Title]
        Container --> Controls[div.controls]
        
        Controls --> SearchBar[SearchBar]
        Controls --> AddForm[AddRecipeForm]
        
        Container --> List[RecipeList]
        List -. maps .-> Card[RecipeCard]
    end

    %% Data Flow
    App -- "useState (searchQuery)" --> SearchBar
    Store -.-> List
    Dispatch -.-> AddForm
    Dispatch -.-> Card
    
    style Context fill:#f9f,stroke:#333,stroke-width:2px
    style Components fill:#e1f5fe,stroke:#01579b
    style Store fill:#fff3e0,stroke:#e65100
    style Dispatch fill:#e0f2f1,stroke:#004d40
```
