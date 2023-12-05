import version from 'project-version';

const doc = {
  info: {
    version,
    title: 'api-reservs',
    description: '',
  },
  host: 'localhost:80',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Default',
      description: 'Endpoints of default endpoints',
    },
  ],
  securityDefinitions: {
    api_key: {
      type: 'apiKey',
      name: 'auth-token',
      in: 'header',
    },
  },
  definitions: {
    Error400: {
      message: 'Descrição sobre o erro',
    },
    Error406: {
      message: 'Descrição sobre o erro',
    },
    Error403: {
      message: 'Descrição sobre o erro',
    },
    ErrorTokenInvalid: { message: 'Token Invalid || Token not provided' },
    DefaultIndex: {
      version,
    },

    getIncentives: {
      version,
    },
    errLogin: {
      message: 'Email ou senha incorretos',
    },
    incentivoDeleteResponse: {
      message: 'Incentivo deletado com sucesso',
    },
    incentiveUpdateResponse: {
      message: 'Incentivo atualizado com sucesso',
    },
    responseGetUser: {
      result: [
        {
          user_id: 1,
          name: 'jhonata',
          email: 'jhonata55@gmail.com',
          password: '$2b$10$DDAATbHvLCbT9oyoty3xcO3xfFryrUJNEN0SlAoLgvIVOVGHfOl6S',
          rule: 'admin2',
        },
      ],
    },
    responseDeleteUser: {
      message: 'Usuario deletado com sucesso',
    },
    updateRuleUser: {
      rule: 'admin',
    },
    responseLogin:{
      "message": "Login realizado com sucesso",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impob25hdGE1NUBnbWFpbC5jb20iLCJpYXQiOjE3MDE3ODAzNTh9.CfvUft-MZajDCxRcXnDkL-eTf7vR3H99WcU-vXN8RHw",
      "email": "jhonata55@gmail.com"
    },
    loginInputs:{
      "email":"jhonata55@gmail.com",
       "password":"elementares"
      },
      responseLoginInputsErr:{
        "message": "Email ou senha incorretos"
      },
    updateResponseUser:{
      "message": "Usuario regras e permissões de usuário atualizada com sucesso"
    },
    responseUpdateUser: {
      message: 'Usuario atualizado com sucesso',
    },
    updateUserInput: {
      email: 'jhonata@gmail.com',
      name: 'jhonata',
      password: 'elementares2',
      rule: 'admin',
    },
    setUser: {
      email: 'jhonata55@gmail.com',
      name: 'jhonata',
      password: 'elementares',
      rule: 'admin',
    },
    responseSetUser: {
      message: 'Usuario criado com sucesso',
      user: {
        email: 'jhonata55@gmail.com',
        name: 'jhonata',
        password: 'elementares',
        rule: 'admin',
      },
    },
    inputReservation: {
      date: '04/12/2023',
      hour: '16:00:00',
      name_contact: 'Eduarda Liman',
      number_peoples: 4,
      contact: '81994880190',
    },
    inputReservationPut: {
      date: '04/12/2023',
      hour: '16:00:00',
      name_contact: 'Eduarda Liman',
      number_peoples: 4,
      contact: '81994880190',
      active: true,
    },
    inputResponsePut: {
      message: 'Reserva atualizada com sucesso',
    },
    deleteResponseReservation: {
      message: 'Reserva deletada com sucesso',
    },
    incentivesResponseGet: {
      result: [
        {
          incentive_id: 3,
          title: 'Desconto de 40%',
          description: 'Desconto de 40% bla bla bla',
          type: 'desconto',
        },
        {
          incentive_id: 4,
          title: 'Desconto de 20%',
          description: 'Desconto de 20% bla bla bla',
          type: 'desconto',
        },
      ],
    },
    responsePostIncentives: {
      message: 'Incentivo do tipo desconto criado com sucesso',
    },
    inputIncentives: {
      title: 'Desconto de 20%',
      description: 'Desconto de 20% bla bla bla',
      type: 'desconto',
    },
    priority: {
      priority: 'entre horarios',
    },
    ResponseGetReservation: {
      result: [
        {
          reservation_id: 2,
          date: '02/12/2023',
          hour: '15:00',
          number_peoples: '4',
          name_contact: 'Eduarda Liman',
          contact: '81994880190',
          active: null,
        },
        {
          reservation_id: 6,
          date: '02/12/2023',
          hour: '16:00',
          number_peoples: '4',
          name_contact: 'Eduarda Liman',
          contact: '81994880190',
          active: false,
        },
        {
          reservation_id: 8,
          date: '04/12/2023',
          hour: '16:00:00',
          number_peoples: '4',
          name_contact: 'Eduarda Liman',
          contact: '81994880190',
          active: true,
        },
        {
          reservation_id: 9,
          date: '04/12/2023',
          hour: '18:00:00',
          number_peoples: '4',
          name_contact: 'Eduarda Liman',
          contact: '81994880190',
          active: true,
        },
        {
          reservation_id: 7,
          date: '04/12/2023',
          hour: '16:00:00',
          number_peoples: '4',
          name_contact: 'Eduarda Liman',
          contact: '81994880190',
          active: false,
        },
        {
          reservation_id: 10,
          date: '04/12/2023',
          hour: '18:00:00',
          number_peoples: '4',
          name_contact: 'Eduarda Liman',
          contact: '81994880190',
          active: true,
        },
        {
          reservation_id: 11,
          date: '04/12/2023',
          hour: '18:00:00',
          number_peoples: '4',
          name_contact: 'Eduarda Liman',
          contact: '81994880190',
          active: true,
        },
      ],
    },
    responseCreateReservation: {
      message: 'Reserva criada com sucesso',
      incentives: {
        results: [
          '08:00:00',
          '09:00:00',
          '10:00:00',
          '11:00:00',
          '12:00:00',
          '13:00:00',
          '14:00:00',
          '15:00:00',
          '17:00:00',
          '18:00:00',
          '19:00:00',
          '20:00:00',
          '21:00:00',
          '22:00:00',
        ],
        incentives: {
          incentive_id: 3,
          title: 'Desconto de 40%',
          description: 'Desconto de 40% bla bla bla',
          type: 'desconto',
        },
      },
    },
    error400CreateReservation: {
      message: 'Reserva já existente',
      sugestions: [
        {
          reservation_id: 6,
          date: '02/12/2023',
          hour: '16:00',
          number_peoples: '4',
          name_contact: 'Eduarda Liman',
          contact: '81994880190',
          active: false,
        },
      ],
      incentives: {
        results: [
          '08:00:00',
          '09:00:00',
          '10:00:00',
          '11:00:00',
          '12:00:00',
          '13:00:00',
          '14:00:00',
          '15:00:00',
          '17:00:00',
          '18:00:00',
          '19:00:00',
          '20:00:00',
          '21:00:00',
          '22:00:00',
        ],
        incentives: {
          incentive_id: 3,
          title: 'Desconto de 40%',
          description: 'Desconto de 40% bla bla bla',
          type: 'desconto',
        },
      },
    },
  },
};

module.exports = doc;
