import React, { Component } from 'react';
import { Button, Input, Message, Tree, Dialog, Layout, Icon, Select, MessageBox } from 'element-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svn: '',
      name: '',
      password: '',
      isWork: false,
      tree: [{"label":"config.properties","full":"D:\\nodesvn\\repo/config.properties"},{"label":"config.txt","full":"D:\\nodesvn\\repo/config.txt"},{"label":"upload","children":[{"label":".svn","children":[{"label":"entries","full":"D:\\nodesvn\\repo/upload/.svn/entries"},{"label":"format","full":"D:\\nodesvn\\repo/upload/.svn/format"},{"label":"pristine","children":[{"label":"db","children":[{"label":"db7208b0765cc58b1aaef070d70d1f96b30c88e1.svn-base","full":"D:\\nodesvn\\repo/upload/.svn/pristine/db/db7208b0765cc58b1aaef070d70d1f96b30c88e1.svn-base"}],"full":"D:\\nodesvn\\repo/upload/.svn/pristine/db"}],"full":"D:\\nodesvn\\repo/upload/.svn/pristine"},{"label":"tmp","children":[],"full":"D:\\nodesvn\\repo/upload/.svn/tmp"},{"label":"wc.db","full":"D:\\nodesvn\\repo/upload/.svn/wc.db"},{"label":"wc.db-journal","full":"D:\\nodesvn\\repo/upload/.svn/wc.db-journal"}],"full":"D:\\nodesvn\\repo/upload/.svn"},{"label":"Any800Chat.zip","full":"D:\\nodesvn\\repo/upload/Any800Chat.zip"}],"full":"D:\\nodesvn\\repo/upload"}],
      options: {
        children: 'children',
        label: 'label'
      },
      dialogVisible: false,
      unzipVisible: false,
      configVisible: false,
      directories:[{
        id: 0,
        name: 'tomcat',
        dir: '/opt/ucc/conf'
      }],
      treeDefaultKey: [],
      copyDir: [],
      selectDir: '',
      fileDir: ''
    }
    this.resetRepo()
    this.resetDir()
    this.resetSvnSetting()
  }
  setSvn () {
    var url = '../svn/setSvn?username=' + this.state.name + '&password=' + this.state.password + '&svnroot=' + this.state.svn
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'text/html',
      },
    }).then((res)=>{
      if(res.ok){
        res.text().then((data)=>{
          Message({
            message: data ? '连接成功' : '连接失败',
            type: 'success'
          });
          this.setState({
            isWork: !!data
          })
          if (this.state.isWork) {
            this.saveSvnSetting()
          }
        })
      }
    })
  }
  saveSvnSetting () {
    fetch('../postMsg/svnSetting', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.name,
          password: this.state.password,
          svn: this.state.svn
        })
      }).then((res)=>{
        if(res.ok){
          res.text().then((data)=>{
            console.log(data);
          })
        }
      })
  }
  checkout () {
    var self = this
    var url = '../svn/checkout?url=' + this.state.svn
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'text/html',
      },
    }).then((res)=>{
      if(res.ok){
        res.text().then((data)=>{
          Message({
            message: data ? '连接成功' : '连接失败',
            type: 'success'
          });
          self.resetRepo()
        })
      }
    })
  }
  handleSvn (event) {
    this.setState({
      svn: event.target.value
    })
  }
  handleName (event) {
    this.setState({
      name: event.target.value
    })
  }
  handlePassword (event) {
    this.setState({
      password: event.target.value
    })
  }
  changeDirName (directory, index, event) {
    directory.name = event.target.value
    var copyDir = this.state.copyDir;  
    copyDir[index] = directory
    this.setState({
      copyDir: copyDir
    })
  }
  changeDir (directory, index, event) {
    directory.dir = event.target.value
    var copyDir = this.state.copyDir;  
    copyDir[index] = directory
    this.setState({
      copyDir: copyDir
    })
  }
  addDir (event) {
    this.state.copyDir.push({
      id: this.state.copyDir.length,
      name: '',
      dir: ''
    })
    this.setState({
      copyDir: this.state.copyDir
    })
  }
  removeDir (index, event) {
    this.state.copyDir.splice(index,1);
    this.setState({
      copyDir: this.state.copyDir
    })
  }
  modifyConfigFile (event) {
    window.open(window.location.href.replace('index','config'))
  }
  copyConfigFile (event) {
    if (!this.state.selectDir ) {
      Message({
        message: '请选择复制目录',
        type: 'warning'
      });
      return
    }
    var url = '../postMsg/copyConfig?to=' + this.state.selectDir + '/config.properties'
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'text/html',
      },
    }).then((res)=>{
      if(res.ok){
        res.text().then((data)=>{
          Message({
            message: '复制成功',
            type: 'success'
          });
        })
      }
    })
    this.setState({ configVisible: false });
  }
  unzipFile (event) {
    if (!this.state.selectDir ) {
      Message({
        message: '请选择解压目录',
        type: 'warning'
      });
      return
    }
    var url = '../zip/unzip?root=' + this.state.fileDir + '&zip=' + this.state.selectDir
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'text/html',
      },
    }).then((res)=>{
      if(res.ok){
        res.text().then((data)=>{
          Message({
            message: '解压成功',
            type: 'success'
          });
        })
      }
    })
    this.setState({ unzipVisible: false });
  }
  saveDir (event) {
    var directories = []
    for (let i = 0; i < this.state.copyDir.length; i++) {
      if (this.state.copyDir[i].name && this.state.copyDir[i].dir) {
        directories.push(this.state.copyDir[i]);
      }
    }
    if (directories.length>0) {
      fetch('../postMsg/directories', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          directories: directories
        })
      }).then((res)=>{
        if(res.ok){
          res.text().then((data)=>{
            console.log(data);
          })
        }
      })
      this.setState({
        directories: directories,
        selectDir: ''
      })
      Message({
        message: '保存成功',
        type: 'success'
      });
    } else {
      Message({
        message: '保存失败',
        type: 'success'
      });
    }
    this.setState({ dialogVisible: false });
  }
  resetRepo () {
    var self = this;
    var url = '../postMsg/repoFiles'
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res)=>{
      if(res.ok){
        res.text().then((data)=>{
          var tree = JSON.parse(data)
          self.setState({ tree: tree });
        })
      }
    })
  }
  resetDir () {
    var self = this;
    var url = '../postMsg/directories'
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res)=>{
      if(res.ok){
        res.text().then((data)=>{
          var directories = JSON.parse(data)
          self.setState({ directories: directories });
        })
      }
    })
  }
  resetSvnSetting () {
    var self = this;
    var url = '../postMsg/svnSetting'
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res)=>{
      if(res.ok){
        res.text().then((data)=>{
          var svnSetting = JSON.parse(data)
          self.setState({ 
            svn: svnSetting.svn || '',
            name: svnSetting.username || '',
            password: svnSetting.password || ''
          });
        })
      }
    })
  }
  deleteFile (file, event) {
    var self = this;
    
    MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      type: 'warning'
    }).then(() => {
      var url = '../postMsg/repoFiles'
      fetch(url, {
        method: 'delete',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: file.full,
            isDir: file.isDir,
          })
      }).then((res)=>{
        if(res.ok){
          res.text().then((data)=>{
            Message({
              type: 'success',
              message: '删除成功!'
            });
            self.resetRepo()
          })
        }
      })
    }).catch(() => {
      Message({
        type: 'info',
        message: '已取消删除'
      });
    });
    
  }
  
  renderContent(nodeModel, data, store) {
    return (
      <span>
        <span onClick={ () => {
          if (data.label.indexOf('.zip') + 4 === data.label.length) {
              this.setState({
                unzipVisible: true,
                fileDir: data.full
              })
            }
        }}>
          <span>{data.label}</span>
        </span>
        <span style={{float: 'right', marginRight: '20px'}}>
          <span>{data.mtime}</span>
          <Button size="mini" onClick={this.deleteFile.bind(this, data)}>删除</Button>
        </span>
      </span>);
  }
  render() {
    var _this = this
    return (
      <div className="App">
        <Input  prepend="svn地址" onInput={this.handleSvn.bind(this)} value={this.state.svn}   placeholder="" />
        <Input  prepend="用户名"  onInput={this.handleName.bind(this)} value={this.state.name} placeholder="" />
        <Input type="password" prepend="密码" onInput={this.handlePassword.bind(this)} value={this.state.password} placeholder="" />
        <Button onClick={this.setSvn.bind(this)}>连接</Button>
        { this.state.isWork ?
          <Button  onClick={this.checkout.bind(this)}>checkout</Button>
          :
          null 
        }
        <Button onClick={ () => {
          this.setState({dialogVisible: true});
          var [ ...copy ] = this.state.directories
          this.setState({copyDir: copy})} 
        }>解压设置</Button>
        <Button onClick={ () => {
          this.setState({
            configVisible: true
          })
        }}>config设置</Button>
        <Tree
          data={this.state.tree}
          options={this.state.options}
          isShowCheckbox={true}
          nodeKey="full"
          defaultExpandedKeys={this.state.treeDefaultKey}
          renderContent={(...args)=>this.renderContent(...args)}
          onNodeExpand={(data, reactElement,)=>{
            if (this.state.treeDefaultKey.indexOf(data.full) === -1) {
              this.state.treeDefaultKey.push(data.full)
            }
            this.setState({
              treeDefaultKey: this.state.treeDefaultKey
            })
          }}
          onNodeCollapse={(data, reactElement,)=>{
            if (this.state.treeDefaultKey.indexOf(data.full) !== -1) {
              this.state.treeDefaultKey.splice(this.state.treeDefaultKey.indexOf(data.full), 1)
            }
            this.setState({
              treeDefaultKey: this.state.treeDefaultKey
            })
          }}
        />
        <Dialog
          title="提示"
          size="large"
          modal={ false }
          visible={ this.state.dialogVisible }
          onCancel={ () => this.setState({ dialogVisible: false }) }
          lockScroll={ false }
        >
          <Dialog.Body>
            { this.state.copyDir.map((directory, index) => {
              return (
                <div key={directory.id}>
                  <Layout.Row>
                    <Layout.Col span="10"><Input onInput={_this.changeDirName.bind(this, directory, index)} prepend="目录名" value={directory.name}   placeholder="" /></Layout.Col>
                    <Layout.Col span="10"><Input onInput={_this.changeDir.bind(this, directory, index)} prepend="路径"  value={directory.dir} placeholder="" /></Layout.Col>
                    <Layout.Col span="2" ><div onClick={_this.addDir.bind(this)}><Icon name="plus"  /></div></Layout.Col>
                    { index !== 0 ?
                      <Layout.Col span="2" ><div onClick={_this.removeDir.bind(this, index)}><Icon name="close"  /></div></Layout.Col>
                      :
                      null 
                    }
                  </Layout.Row>
                </div>
              )
            })}
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={ () => this.setState({ dialogVisible: false }) }>取消</Button>
            <Button type="primary" onClick={ () => this.saveDir() }>保存</Button>
          </Dialog.Footer>
        </Dialog>
        <Dialog
          title="提示"
          size="large"
          modal={ false }
          visible={ this.state.unzipVisible }
          onCancel={ () => this.setState({ unzipVisible: false }) }
          lockScroll={ false }
        >
          <Dialog.Body>
              解压至：
              <Select value={this.state.selectDir} onChange={ (value) => this.setState({selectDir: value})}>
                {
                  this.state.directories.map((directory, index) => {
                    return <Select.Option key={directory.id} label={directory.name} value={directory.dir} />
                  })
                }
              </Select>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={ () => this.setState({ unzipVisible: false }) }>取消</Button>
            <Button type="primary" onClick={ () => {
              this.unzipFile();
            }}>解压</Button>
          </Dialog.Footer>
        </Dialog>
        <Dialog
          title="提示"
          size="large"
          modal={ false }
          visible={ this.state.configVisible }
          onCancel={ () => this.setState({ configVisible: false }) }
          lockScroll={ false }
        >
          <Dialog.Body>
              复制至：
              <Select value={this.state.selectDir} onChange={ (value) => this.setState({selectDir: value})}>
                {
                  this.state.directories.map((directory, index) => {
                    return <Select.Option key={directory.id} label={directory.name} value={directory.dir} />
                  })
                }
              </Select>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={ () => this.setState({ configVisible: false }) }>取消</Button>
            <Button type="primary" onClick={ () => {
              this.modifyConfigFile();
            }}>修改</Button>
            <Button type="primary" onClick={ () => {
              this.copyConfigFile();
            }}>复制</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }
}
export default App;
