const candidates = [{
  name: 'Vitória Roas',
  favoriteColor: 'blue',
  hobby: 'painting',
}, {
  name: 'Jonah Allen',
  favoriteColor: 'blue',
  hobby: 'sleeping',
}, {
  name: 'Adrian Perdomo',
  favoriteColor: 'purple',
  hobby: 'cooking',
}, {
  name: 'Kevin Choi',
  favoriteColor: 'blue',
  hobby: 'roller blading',
}, {
  name: 'Jarue Johnson',
  favoriteColor: 'blue',
  hobby: 'making beats',
}, {
  name: 'Nikki Allen',
  favoriteColor: 'purple',
  hobby: 'plants',
}, {
  name: 'F. Cesar',
  favoriteColor: 'invisible',
  hobby: 'skipping',
}]

exports.getCandidates = (request, response) => {
  response.status(200).json({
    status: 200,
    data: candidates,
    message: 'Records read successfully'
  })
}

exports.getSingleCandidate = (request, response) => {
  const { favoriteColor } = request.params
  response.status(200).json({
    status: 200,
    data: candidates.filter(candidate => candidate.favoriteColor === favoriteColor),
    message: 'Records read successfully'
  })
}