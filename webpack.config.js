const webpack = require('webpack')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config();

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/main/resources/templates'),
    },
    port: 9000
  },
  entry: [
          path.resolve(__dirname, 'src/main/js/reactjs/application/app.jsx'),
  	      // path.resolve(__dirname,'script!jquery/dist/jquery.min.js'),
   	      // path.resolve(__dirname,'script!foundation-sites/dist/foundation.min.js')
          ],
  output: {
    path: path.resolve(__dirname,"src/main/resources/static/built"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src/main/js/'),
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
       'process.env': JSON.stringify(process.env)
    })
  ],
  resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
          //Generic Reusable Components
          client: path.resolve(__dirname, 'src/main/js/api/client.js'),
          follow: path.resolve(__dirname, 'src/main/js/api/follow.js'),
          IFrame: path.resolve(__dirname, 'src/main/js/reactjs/application/components/IFrame.jsx'),
          NoteDialog: path.resolve(__dirname, 'src/main/js/reactjs/application/components/note/NoteDialog.jsx'),
          DisplayDate: path.resolve(__dirname, 'src/main/js/reactjs/application/components/date/DisplayDate.jsx'),
          DisplayDateTime: path.resolve(__dirname, 'src/main/js/reactjs/application/components/date/DisplayDateTime.jsx'),

          //App Main Components
          Main: path.resolve(__dirname, 'src/main/js/reactjs/application/components/main/Main.jsx'),
          Parent: path.resolve(__dirname, 'src/main/js/reactjs/application/components/main/Parent.jsx'),
          MarketingBar: path.resolve(__dirname, 'src/main/js/reactjs/application/components/main/MarketingBar.jsx'),
          NavigationBar: path.resolve(__dirname, 'src/main/js/reactjs/application/components/main/NavigationBar.jsx'),
          FooterBar: path.resolve(__dirname, 'src/main/js/reactjs/application/components/main/FooterBar.jsx'),

          uriListConverter: path.resolve(__dirname, 'src/main/js/api/uriListConverter.js'),
          uriTemplateInterceptor: path.resolve(__dirname, 'src/main/js/api/uriTemplateInterceptor.js'),

          applicaitonStyles: path.resolve(__dirname, 'src/main/resources/static/app.css'),
          // END Generic Reusable Components

          //Form Components
          StartForm: path.resolve(__dirname, 'src/main/js/reactjs/application/components/form/StartForm.jsx'),
          ConfirmationForm: path.resolve(__dirname, 'src/main/js/reactjs/application/components/form/ConfirmationForm.jsx'),
          //Form Actions
          SaveAction: path.resolve(__dirname, 'src/main/js/reactjs/application/components/form/action/Save.jsx'),
          ConfirmAction: path.resolve(__dirname, 'src/main/js/reactjs/application/components/form/action/Confirm.jsx'),
          SubmitAction: path.resolve(__dirname, 'src/main/js/reactjs/application/components/form/action/Submit.jsx'),

          //Form Info
          FormInfo: path.resolve(__dirname, 'src/main/js/reactjs/application/components/form/Info.jsx'),

          //Filters Components
          StatusBar: path.resolve(__dirname, 'src/main/js/reactjs/application/components/filter/StatusBar.jsx'),
          FilterBar: path.resolve(__dirname, 'src/main/js/reactjs/application/components/filter/FilterBar.jsx'),

          //Workflow Components
          WorkflowMain: path.resolve(__dirname, 'src/main/js/reactjs/application/components/workflow/Main.jsx'),
          WorkflowInfo: path.resolve(__dirname, 'src/main/js/reactjs/application/components/workflow/Info.jsx'),
          WorkflowStartAction: path.resolve(__dirname, 'src/main/js/reactjs/application/components/workflow/action/Start.jsx'),

          //Task Components
          TaskMain: path.resolve(__dirname, 'src/main/js/reactjs/application/components/task/Main.jsx'),
          TaskList: path.resolve(__dirname, 'src/main/js/reactjs/application/components/task/List.jsx'),
          TaskLine: path.resolve(__dirname, 'src/main/js/reactjs/application/components/task/Line.jsx'),
          TaskDetail: path.resolve(__dirname, 'src/main/js/reactjs/application/components/task/Detail.jsx'),
          TaskInfo: path.resolve(__dirname, 'src/main/js/reactjs/application/components/task/Info.jsx'),
          TaskFilterBar: path.resolve(__dirname, 'src/main/js/reactjs/application/components/task/FilterBar.jsx'),
          TaskSearchForm: path.resolve(__dirname, 'src/main/js/reactjs/application/components/task/form/SearchForm.jsx'),
          CamundaForm: path.resolve(__dirname, 'src/main/js/reactjs/application/components/task/form/CamundaForm.jsx'),
          TaskActionApprove: path.resolve(__dirname, 'src/main/js/reactjs/application/components/task/action/Approve.jsx'),

          //Use-case Components
          UseCaseMain: path.resolve(__dirname, 'src/main/js/reactjs/application/usecase/adhoc/components/Main.jsx'),
          DetailForm: path.resolve(__dirname, 'src/main/js/reactjs/application/usecase/adhoc/components/DetailForm.jsx'),
          CaseInfo: path.resolve(__dirname, 'src/main/js/reactjs/application/usecase/case/components/Info.jsx'),

          // UseCaseMain: path.resolve(__dirname, 'src/main/js/reactjs/application/usecase/campaign/components/Main.jsx'),
          // DetailForm: path.resolve(__dirname, 'src/main/js/reactjs/application/usecase/campaign/components/DetailForm.jsx'),
          // CaseInfo: path.resolve(__dirname, 'src/main/js/reactjs/application/usecase/campaign/components/Info.jsx'),
          // FormInfo: path.resolve(__dirname, 'src/main/js/reactjs/application/usecase/campaign/components/FormInfo.jsx'),

          UserInfo: path.resolve(__dirname, 'src/main/js/reactjs/application/components/user/Info.jsx'),
          // END Use Case Components

      }
  }
}
