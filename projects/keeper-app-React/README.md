## Setup Keeper app

This is a pretty basic React todo list app. With components like Header, Footer, Card, CreateCard. 
![alt text](https://raw.githubusercontent.com/junjun107/Web_Development_Bootcamp/main/projects/keeper-app-React/public/snapshot.png)


## Setup note app
- Create a Header.js component
  - dynamic year
- Create a Footer.js
- Create a Note.js component
- Create a CreateArea.js component
- Add styles

- import all components into app.js
  - render note with custom props for title and content

## Add a note using

- The add function happens at App.js, the function is passed down as a prop

  - state
  - pass new note back to App.js
    -life the state up
  - add new note to an array

    ```
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
    setNotes(prevNotes =>{
      return [...prevNotes, note]
    })
    ```

  - take array and render separate NoteCard.js for each note item

```
 {notes.map((noteItem, index) => {
       return (
         <Note
           key={index}
           id={index}
           title={noteItem.title}
           content={noteItem.content}
           onDelete={deleteNote}
         />
       );
     })}
```

## Delete a note

- The delete function happens at App.js, the function is passed down as a prop
- callback from NoteCard.js to trigger a delete function
  `<button onClick={handleClick}>Delete</button>`
- use the filter() to remove note item

```
 const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
```

- pass a id from Note.js to App.js to delete

```
{notes.map((noteItem, index) => {
        return (
          <NoteCard
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
```

## Add Material UI styles

- replace word button with icon button
- Use Floating Action Buttons to style the button with hover affect
- use Zoom to transition text box in and out

Take away:
pass state up is very interesting and a little difficult to understand at first.
... spread operator is great for state with an object
MaterialUI is my new best friend
