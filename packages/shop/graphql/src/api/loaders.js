import DataLoader from 'dataloader';
import mongoose from 'mongoose';

const UserModel = mongoose.model('user');
const MessageModel = mongoose.model('message');
const SignalModel = mongoose.model('signal');
const PortfolioModel = mongoose.model('portfolio');
const _ = require('lodash');

const createUserLoader = () => new DataLoader(projectIds =>
  UserModel.find({ _id: { $in: projectIds } })
    .exec()
    .then((projects) => {
      console.log('projects loader batch: ', projectIds.length);
      const projectsById = _.keyBy(projects, '_id');
      return projectIds.map(projectId => projectsById[projectId]);
    }));

const createMessageLoader = () => new DataLoader(projectIds =>
  MessageModel.find({ _id: { $in: projectIds } })
    .exec()
    .then((projects) => {
      console.log('projects loader batch: ', projectIds.length);
      const projectsById = _.keyBy(projects, '_id');
      return projectIds.map(projectId => projectsById[projectId]);
    }));

const createSignalLoader = () => new DataLoader(projectIds =>
  SignalModel.find({ _id: { $in: projectIds } })
    .exec()
    .then((projects) => {
      console.log('projects loader batch: ', projectIds.length);
      const projectsById = _.keyBy(projects, '_id');
      return projectIds.map(projectId => projectsById[projectId]);
    }));


const createPortfolioLoader = () => new DataLoader(projectIds =>
  PortfolioModel.find({ _id: { $in: projectIds } })
    .exec()
    .then((projects) => {
      console.log('projects loader batch: ', projectIds.length);
      const projectsById = _.keyBy(projects, '_id');
      return projectIds.map(projectId => projectsById[projectId]);
    }));


module.exports = () => ({
  user: createUserLoader(),
  message: createMessageLoader(),
  signal: createSignalLoader(),
  portfolio: createPortfolioLoader()
});
