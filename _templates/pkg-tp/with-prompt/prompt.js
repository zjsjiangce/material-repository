// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

  
module.exports = [
  {
    type: 'input',
    name: 'folder',
    message: '请输入物料工程名: ',
    validate (value) {
      if (!value.length) {
        return '物料工程名不能为空！'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'business',
    message: '请输入业务线名: ',
    validate (value) {
      if (!value.length) {
        return '业务线名不能为空！'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'name',
    message: '请输入物料名: ',
    validate (value) {
      if (!value.length) {
        return '物料名不能为空！'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'description',
    message: '请输入工程描述: ',
  },
  {
    type: 'input',
    name: 'author',
    message: '请输入作者名: ',
    validate (value) {
      if (!value.length) {
        return '作者名不能为空！'
      }
      return true
    }
  }
]
