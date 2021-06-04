$('#btn').click(() =>{
    console.log('to funcionando')
    const data = $('#date').val()
    console.log(data)


  $.ajax({
           url: `https://api.nasa.gov/planetary/apod?api_key=FbFseZ1OzM5byG9bQ6g7zub1EJv2gkGgToUrvmfk&date=${data}`,

           success: (resposta)=>{
           console.log(resposta)
           $('#titulo').text(resposta.title)
        
          $('#image').attr('src',resposta.url)
          $('#text').text(resposta.explanation)
  }
    
    })

}) 


