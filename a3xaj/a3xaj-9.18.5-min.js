var jg_oe=null;function A3xaAbsEnvironment()
{jg_oe=this;this.jm_bCanEdit=false;this.jm_bCanLike=false;this.jm_IdUser=0;this.jm_Itemid=0;this.jm_sDirBase="/";var jt_this=this;this.jm_bReady=false;jQuery(document).ready(function(){jt_this.jm_bReady=true;jt_this._OnDocumentReady();});this._OnDocumentReady=function()
{return true;};this.IsReady=function(){return this.jm_bReady;};this.jm_DebugLevel=0;this.jm_oModule={};this.Set_Debug=function(ji_DebugLevel,ji_oModule)
{this.jm_DebugLevel=ji_DebugLevel;this.jm_oModule=(ji_oModule||{});return true;};this.CanLogInfo=function(ji_oModule)
{if(!(this.jm_DebugLevel>0))
return false;if(!ji_oModule)
return false;if(ji_oModule.DB&&ji_oModule.DB<=this.jm_oModule.DB)
return true;if(ji_oModule.VW&&ji_oModule.VW<=this.jm_oModule.VW)
return true;return false;};this.LogInfo=function(ji_sMessage,ji_sTask,ji_sMethodName)
{if(!ji_sMessage)
ji_sMessage="*";if(!ji_sTask)
ji_sTask="*";if(!ji_sMethodName)
ji_sMethodName="*";var jt_s=ji_sMessage+" [tk: "+ji_sTask+", md: "+ji_sMethodName+" ]";try
{if(window.console)
console.log(jt_s);}
catch(e)
{}
return true;};this.LogErr=function(ji_sMessage,ji_sTask,ji_sMethodName)
{if(!ji_sMessage)
ji_sMessage="*";if(!ji_sTask)
ji_sTask="*";if(!ji_sMethodName)
ji_sMethodName="*";var jt_s="Error: "+ji_sMessage+" [tk: "+ji_sTask+", md: "+ji_sMethodName+" ]";try
{if(window.console)
console.log(jt_s);}
catch(e)
{}
return true;};this.ExceptionMessage=function(ji_exception,ji_procedure)
{if(!ji_procedure)
ji_procedure="";var jt_sMessage=(ji_exception&&ji_exception.message?ji_exception.message:"unknown");var jt_sFileName=(ji_exception&&ji_exception.fileName?ji_exception.fileName:"unknown");var jt_line=(ji_exception&&ji_exception.lineNumber?ji_exception.lineNumber:"unknown");alert("Turbo Mode Experimental - "+ji_procedure+"Fails with: "+
jt_sMessage+" - in file: "+jt_sFileName+" - at line: "+jt_line);return true;};this.jm_blsbReady=false;this.jm_alsb=new Array();this.IsStatusBarReady=function()
{if(this.jm_blsbReady===true)
return true;if(this.jm_blsbReady==-1)
return false;if(!this.IsReady())
return false;this.jm_blsbReady=-1;var jt_delay=setTimeout(function()
{jt_this.jm_blsbReady=true;},500);return false;};this.LogStatusBar=function(ji_sText,ji_bClear)
{if(ji_bClear)
this.jm_alsb=new Array();if(!this.IsReady())
{if(ji_sText)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("suspend:"+ji_sText,"","A3xaAbsEnvironment.LogStatusBar");this.jm_alsb.push(ji_sText);}
return true;}
if(ji_bClear)
jQuery("#A3xaStatusBar").html(" ");while(this.jm_alsb&&this.jm_alsb.length)
{var jt_sText=this.jm_alsb.shift();jg_oe.CanLogInfo()&&jg_oe.LogInfo("grant:"+jt_sText,"","A3xaAbsEnvironment.LogStatusBar");jQuery("#A3xaStatusBar").append((jt_sText||"")+"; ");}
if(ji_sText)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("w2sb:"+ji_sText,"","A3xaAbsEnvironment.LogStatusBar");jQuery("#A3xaStatusBar").append((ji_sText||"")+"; ");}
return true;};this.Set_CommonValues=function(ji_bDebug,ji_bCanEdit,ji_bCanLike,ji_IdUser,ji_Itemid,ji_sDirBase)
{return this.A3xaAbsEnvironment_Set_CommonValues(ji_bDebug,ji_bCanEdit,ji_bCanLike,ji_IdUser,ji_Itemid,ji_sDirBase);}
this.A3xaAbsEnvironment_Set_CommonValues=function(ji_bDebug,ji_bCanEdit,ji_bCanLike,ji_IdUser,ji_Itemid,ji_sDirBase)
{this.jm_bDebug=(ji_bDebug==true);this.jm_bCanEdit=ji_bCanEdit;this.jm_bCanLike=ji_bCanLike;this.jm_IdUser=ji_IdUser;this.jm_Itemid=ji_Itemid;this.jm_sDirBase=(ji_sDirBase?ji_sDirBase:"/");return true;};this.jm_bTurboZero=false;this.jm_bTurboBasic=false;this.jm_bTurboAuto=false;this.jm_bTurboOff=true;this.Set_TurboStatus=function(ji_b)
{this.jm_bTurboZero=false;this.jm_bTurboBasic=false;this.jm_bTurboAuto=false;this.jm_bTurboOff=false;this.Get_Storage(jc_gl.jc_oStorage.jc_FLY).Enable(true);this.Get_Storage(jc_gl.jc_oStorage.jc_SS).Enable(false);this.Get_Storage(jc_gl.jc_oStorage.jc_LS).Enable(false);this.Get_Storage(jc_gl.jc_oStorage.jc_IDB).Enable(false);if(ji_b==true)
{if(this.Get_Storage(jc_gl.jc_oStorage.jc_IDB).Available())
{this.jm_bTurboZero=true;this.Get_Storage(jc_gl.jc_oStorage.jc_IDB).Enable(true);this.jm_StorageTypeDefault=jc_gl.jc_oStorage.jc_IDB;return true;}
if(this.Get_Storage(jc_gl.jc_oStorage.jc_LS).Available())
{this.jm_bTurboBasic=true;this.Get_Storage(jc_gl.jc_oStorage.jc_LS).Enable(true);this.jm_StorageTypeDefault=jc_gl.jc_oStorage.jc_LS;return true;}}
if(this.Get_Storage(jc_gl.jc_oStorage.jc_SS).Available())
{this.jm_bTurboAuto=true;this.Get_Storage(jc_gl.jc_oStorage.jc_SS).Enable(true);this.jm_StorageTypeDefault=jc_gl.jc_oStorage.jc_SS;return true;}
this.jm_bTurboOff=true;this.jm_StorageTypeDefault=jc_gl.jc_oStorage.jc_FLY;return!ji_b;};this.IsTurboON=function(){return this.jm_bTurboZero||this.jm_bTurboBasic;};this.IsTurboAvailable=function()
{if(this.Get_Storage(jc_gl.jc_oStorage.jc_IDB).Available())
return true;if(this.Get_Storage(jc_gl.jc_oStorage.jc_LS).Available())
return true;return false;};this.Get_TurboString=function()
{var jr_s="";if(this.jm_bTurboZero)
jr_s+="ON,T0";else if(this.jm_bTurboBasic)
jr_s+="ON,TL";else if(this.jm_bTurboAuto)
jr_s+="OFF,TS";else if(this.jm_bTurboOff)
jr_s+="OFF,TF";else
jr_s+="OFF,TF";return jr_s;};this.Get_TurboDescr=function()
{var jr_s="";if(this.jm_bTurboZero)
jr_s+="activo por -=IndexedDB=-";else if(this.jm_bTurboBasic)
jr_s+="limitado por -=Local-Storage=-";else if(this.jm_bTurboAuto)
jr_s+="automático limitado por -=Session-Storage=-";else if(this.jm_bTurboOff)
jr_s+="apagado (navegador en modo privado y/o -=DOM-Storage=- apagado)";else
jr_s+="apagado";return jr_s;};this.jm_oAjax2=new A3xaAjax2();this.jm_StorageTypeDefault=jc_gl.jc_oStorage.jc_FLY;this.jm_aoStorage=new Array();this.Set_Storage=function(ji_oStorage)
{if(!ji_oStorage)
return false;this.jm_aoStorage[ji_oStorage.Get_Type()||0]=ji_oStorage;};this.Get_Storage=function(ji_Type)
{if(!this.jm_aoStorage)
return null;ji_Type=(ji_Type||0);if(ji_Type==jc_gl.jc_oStorage.jc_Default)
ji_Type=this.jm_StorageTypeDefault;return this.jm_aoStorage[ji_Type]||null;};this.ClearStorage=function()
{this.Get_Storage(jc_gl.jc_oStorage.jc_FLY).Clear();this.Get_Storage(jc_gl.jc_oStorage.jc_SS).Clear();this.Get_Storage(jc_gl.jc_oStorage.jc_LS).Clear();if(this.IsTurboON())
this.Get_Storage(jc_gl.jc_oStorage.jc_IDB).Clear();return true;};this.jm_odb=null;this.Set_Database=function(ji_odb){this.jm_odb=ji_odb;return true;};this.Get_Database=function(){return this.jm_odb;};this.jm_oHostReporter=null;this.Set_Reporter=function(ji_oHostReporter)
{this.jm_oHostReporter=ji_oHostReporter;return true;};this.Get_Reporter=function(){return this.jm_oHostReporter;};this.jm_oheSet=null;this.Get_HtmlSetEntity=function(){return this.jm_oheSet;};this.Set_HtmlSetEntity=function(ji_oheSet){this.jm_oheSet=ji_oheSet;return true;};}
function A3xaDateTime(ji_DateJS)
{this.jm_DateJS=(ji_DateJS||null);this.IsValid=function(){return this.jm_DateJS?true:false;};this.Get_Date=function()
{if(!this.IsValid())
return"";var jt_YYYY=this.jm_DateJS.getFullYear()+10000;var jt_MM=this.jm_DateJS.getMonth()+101;var jt_DD=this.jm_DateJS.getDate()+100;return jt_YYYY.toString().substr(1,4)+"-"+
jt_MM.toString().substr(1,2)+"-"+jt_DD.toString().substr(1,2);};this.Get_Time=function()
{if(!this.IsValid())
return"";var jt_hh=this.jm_DateJS.getHours()+100;var jt_mm=this.jm_DateJS.getMinutes()+100;var jt_ss=this.jm_DateJS.getSeconds()+100;return jt_hh.toString().substr(1,2)+":"+
jt_mm.toString().substr(1,2)+":"+jt_ss.toString().substr(1,2);};this.Get_DateTime=function(){return this.IsValid()?this.Get_Date()+" "+this.Get_Time():"";};this.Set_DateTime=function(ji_sDateTime)
{if(!(ji_sDateTime&&ji_sDateTime.length==19))
return false;if(!this.jm_DateJS)
this.jm_DateJS=new Date();var jt_YYYY=ji_sDateTime.substr(0,4);var jt_MM=ji_sDateTime.substr(5,2);var jt_DD=ji_sDateTime.substr(8,2);var jt_hh=ji_sDateTime.substr(11,2);var jt_mm=ji_sDateTime.substr(14,2);var jt_ss=ji_sDateTime.substr(17,2);jt_MM=Number(jt_MM)-1;this.jm_DateJS.setFullYear(jt_YYYY,jt_MM,jt_DD);this.jm_DateJS.setHours(jt_hh,jt_mm,jt_ss,0);return true;};this.Compare=function(ji_o3xDateTime)
{var jt_delta=this.jm_DateJS.getFullYear()-ji_o3xDateTime.jm_DateJS.getFullYear();if(jt_delta!=0)
return jt_delta<0?-1:1;jt_delta=this.jm_DateJS.getMonth()-ji_o3xDateTime.jm_DateJS.getMonth();if(jt_delta!=0)
return jt_delta<0?-1:1;jt_delta=this.jm_DateJS.getDate()-ji_o3xDateTime.jm_DateJS.getDate();if(jt_delta!=0)
return jt_delta<0?-1:1;jt_delta=this.jm_DateJS.getHours()-ji_o3xDateTime.jm_DateJS.getHours();if(jt_delta!=0)
return jt_delta<0?-1:1;jt_delta=this.jm_DateJS.getMinutes()-ji_o3xDateTime.jm_DateJS.getMinutes();if(jt_delta!=0)
return jt_delta<0?-1:1;jt_delta=this.jm_DateJS.getSeconds()-ji_o3xDateTime.jm_DateJS.getSeconds();if(jt_delta!=0)
return jt_delta<0?-1:1;return 0;};}
function A3xaToString(ji_v){return ji_v?ji_v:"";}
function EmailAntispam_Write(ji_Id,ji_email)
{document.getElementById(ji_Id).setAttribute('href',EmailAntispam_UrlLink(ji_email));}
function EmailAntispam_UrlLink(ji_email)
{return"mai"+"lto:"+ji_email.replace(/__nosp__/g,"").replace(/ba__at__/g,"@").replace(/__at2__/g,"@").replace(/__at__/g,"@").replace(/__dot__/g,".");}
function A3xaArray()
{var jt_this=this;this.jm_aa={};this.jm_ax=[];this.Get_Count=function()
{return this.jm_ax?this.jm_ax.length:0;};this.Set_Item=function(ji_key,ji_value)
{if(!ji_key)
return false;if(!ji_value)
return false;if(this.jm_aa&&this.jm_aa[ji_key])
{this.jm_aa[ji_key]=ji_value;return true;}
this.jm_aa[ji_key]=ji_value;this.jm_ax.push(ji_key);return true;};this.Add_Item=function(ji_key,ji_value)
{if(!ji_key)
return false;if(!ji_value)
return false;if(this.jm_aa&&this.jm_aa[ji_key])
return false;this.jm_aa[ji_key]=ji_value;this.jm_ax.push(ji_key);return true;};this.Get_Item=function(ji_key)
{if(!ji_key)
return null;return this.jm_aa[ji_key]||null;};this.Get_Key=function(ji_ix)
{if(!(this.jm_aa&&this.jm_ax))
return null;if(!(ji_ix>=0&&ji_ix<this.jm_ax.length))
return null;return this.jm_ax[ji_ix];};this.Get_Item_ByIndex=function(ji_ix)
{if(!(this.jm_aa&&this.jm_ax))
return null;if(!(ji_ix>=0&&ji_ix<this.jm_ax.length))
return null;return this.Get_Item(this.jm_ax[ji_ix]);};this.Find=function(ji_fnCheck)
{if(!ji_fnCheck)
return null;if(!(this.jm_aa&&this.jm_ax))
return null;var jt_count=this.Get_Count();for(var i=0;i<jt_count;i++)
{var jr_o=this.Get_Item(this.jm_ax[i]);if(!jr_o)
continue;if(ji_fnCheck(jr_o))
return jr_o;}
return null;};this.Sort=function(ji_fnCompare)
{if(!(this.jm_aa&&this.jm_ax))
return false;this.jm_ax.sort(function(ji_key_a,ji_key_b)
{if(!ji_fnCompare)
{if(ji_key_a<ji_key_b)
return-1;return 1;}
return ji_fnCompare(jt_this.jm_aa[ji_key_a]||null,jt_this.jm_aa[ji_key_b]||null);});};}
function A3xaUrl(ji_sUrlBase,ji_sUrlParams)
{this.IsValid=A3xaUrl_IsValid;this.CopyFrom=A3xaUrl_CopyFrom;this.Get_Url=A3xaUrl_Get_Url;this.Set_UrlBase=A3xaUrl_Set_UrlBase;this.Get_UrlBase=A3xaUrl_Get_UrlBase;this.Set_UrlParams=A3xaUrl_Set_UrlParams;this.Get_UrlParams=A3xaUrl_Get_UrlParams;this.Get_UrlParams_Array=A3xaUrl_Get_UrlParams_Array;this.Set_UrlParams_Array=A3xaUrl_Set_UrlParams_Array;this.Add_UrlParam2=A3xaUrl_Add_UrlParam2;this.Get_UrlParam=A3xaUrl_Get_UrlParam;this.Modify_UrlParam=A3xaUrl_Modify_UrlParam;this.Redirect=A3xaUrl_Redirect;this.History_ReplaceState=function(ji_sState,ji_sTitle)
{var jt_sUrl=this.Get_Url();if(!jt_sUrl)
return true;window.history.replaceState(ji_sState?ji_sState:{foo:'bar'},ji_sTitle?ji_sTitle:"A3xaPage",jt_sUrl);return true;};this.jm_sUrlBase=ji_sUrlBase;if(ji_sUrlParams&&ji_sUrlParams.charAt(0)!="&")
this.jm_sUrlParams="&"+ji_sUrlParams;else
this.jm_sUrlParams=ji_sUrlParams;}
function A3xaUrl_IsValid(){return!(!this.jm_sUrlBase);}
function A3xaUrl_CopyFrom(ji_o)
{if(!ji_o)
return false;this.jm_sUrlBase=ji_o.Get_UrlBase();this.jm_sUrlParams=ji_o.Get_UrlParams();return true;}
function A3xaUrl_Get_Url()
{if(!this.IsValid())
return"";var jt_sup=(this.jm_sUrlParams?this.jm_sUrlParams:"");if(!jt_sup)
return this.jm_sUrlBase;if(this.jm_sUrlBase.slice(-1)=="?"&&jt_sup.slice(0,1)=="&")
return this.jm_sUrlBase+jt_sup.slice(1);return this.jm_sUrlBase+jt_sup;}
function A3xaUrl_Set_UrlBase(ji_s){this.jm_sUrlBase=ji_s;}
function A3xaUrl_Get_UrlBase(){return this.jm_sUrlBase;}
function A3xaUrl_Set_UrlParams(ji_sUrlParams){this.jm_sUrlParams=ji_sUrlParams;}
function A3xaUrl_Get_UrlParams(){return this.jm_sUrlParams;}
function A3xaUrl_Get_UrlParams_Array()
{if(this.jm_sUrlParams==null)
return null;var jt_aUrlParamsDirty=this.jm_sUrlParams.replace(/&amp;/g,"&").replace(/&equals;/g,"=").split("&");if(jt_aUrlParamsDirty==null)
return null;var jr_aUrlParams=new Array();for(var i=0;i<jt_aUrlParamsDirty.length;i++)
{if(jt_aUrlParamsDirty[i]==null||jt_aUrlParamsDirty[i]=="")
continue;var jt_aNV=jt_aUrlParamsDirty[i].split("=");if(jt_aNV==null||(!jt_aNV.length)||jt_aNV[0]=="")
continue;if(jt_aNV.length<2)
jt_aNV.push("");jr_aUrlParams.push(jt_aNV);}
return jr_aUrlParams;}
function A3xaUrl_Set_UrlParams_Array(ji_aUrlParams)
{if(ji_aUrlParams==null)
{this.jm_sUrlParams=null;return true;}
var jt_sUrlParams="";for(var i=0;i<ji_aUrlParams.length;i++)
{var jt_aup=ji_aUrlParams[i];if(jt_aup[0])
{jt_sUrlParams+="&"+jt_aup[0]+"="+jt_aup[1];}}
this.jm_sUrlParams=jt_sUrlParams;return true;}
function A3xaUrl_Add_UrlParam2(ji_sUrlParamName,ji_sUrlParamValue,ji_bEscape)
{if(!ji_sUrlParamName)
return false;if(ji_bEscape==true&&typeof(ji_sUrlParamValue)=="string")
ji_sUrlParamValue=ji_sUrlParamValue.replace(/=/g,"__equ__");if(this.jm_sUrlParams==null)
this.jm_sUrlParams="";this.jm_sUrlParams+="&"+ji_sUrlParamName+"="+ji_sUrlParamValue;return true;}
function A3xaUrl_Get_UrlParam(ji_sUrlParamName)
{if(!ji_sUrlParamName)
return null;var jt_aUrlParams=this.Get_UrlParams_Array();if(!jt_aUrlParams)
return null;for(var i=0;i<jt_aUrlParams.length;i++)
{if(ji_sUrlParamName==jt_aUrlParams[i][0])
return jt_aUrlParams[i][1];}
return null;}
function A3xaUrl_Modify_UrlParam(ji_sUrlParamName,ji_sUrlParamValue)
{if(!ji_sUrlParamName)
return false;var jt_sUrlParamValueEscaped=ji_sUrlParamValue.replace(/=/g,"__equ__");var jt_aUrlParams=this.Get_UrlParams_Array();if(!jt_aUrlParams)
return false;var jt_aUrlParamsModified=new Array();for(var i=0;i<jt_aUrlParams.length;i++)
{var jt_aup=jt_aUrlParams[i];if(ji_sUrlParamName==jt_aup[0])
{var jt_aupm=new Array(jt_aup[0],jt_sUrlParamValueEscaped);jt_aUrlParamsModified.push(jt_aupm);}
else
jt_aUrlParamsModified.push(jt_aup);}
return this.Set_UrlParams_Array(jt_aUrlParamsModified);}
function A3xaUrl_Redirect()
{var jt_sUrl=this.Get_Url();if(!jt_sUrl)
return true;window.location.href=jt_sUrl;return true;}
function A3xaHtmlItem2(ji_FullName)
{this.Get_FullName=A3xaHtmlItem2_Get_FullName;this.Show=A3xaHtmlItem2_Show;this.IsVisible=A3xaHtmlItem2_IsVisible;this.IsValid=A3xaHtmlItem2_IsValid;this.Set_Src=A3xaHtmlItem2_Set_Src;this.jm_htmlItem=null;this.jm_FullName=ji_FullName;if(!this.jm_FullName&&(!this.jm_htmlItem))
return;}
function A3xaHtmlItem2_Get_FullName(){return this.jm_FullName;}
function A3xaHtmlItem2_IsValid()
{if(!this.jm_htmlItem)
{if(this.jm_FullName)
{this.jm_htmlItem=document.getElementById(this.jm_FullName);}}
return this.jm_htmlItem!=null;}
function A3xaHtmlItem2_IsVisible()
{if(!this.IsValid())
return false;return!(this.jm_htmlItem.style.visibility=="hidden");}
function A3xaHtmlItem2_Show(ji_bShow)
{if(!this.IsValid())
return false;if(ji_bShow==true)
{this.jm_htmlItem.style.visibility="inherit";this.jm_htmlItem.style.position="relative";this.jm_htmlItem.style.left="none";this.jm_htmlItem.style.top="none";}
else
{this.jm_htmlItem.style.visibility="hidden";this.jm_htmlItem.style.position="absolute";this.jm_htmlItem.style.left="0px";this.jm_htmlItem.style.top="0px";}
return true;}
function A3xaHtmlItem2_Set_Src(ji_Src)
{var jt_htmlItem=document.getElementById(this.jm_FullName);if(jt_htmlItem)
{jt_htmlItem.src=ji_Src;jt_htmlItem.onmouseout="this.src=".ji_Src;}
return true;if(!this.IsValid())
return false;this.jm_htmlItem.src=ji_Src;this.jm_htmlItem.onmouseout="this.src=".ji_Src;return true;}
function A3xaSimpleButton(ji_sUrlImg,ji_oUrlLink,ji_sTitle,ji_sAlt,ji_sId)
{this.IsValid=A3xaSimpleButton_IsValid;this.Set_Options=A3xaSimpleButton_Set_Options;this.Get_Html=A3xaSimpleButton_Get_Html;this.PrintHtml=A3xaSimpleButton_PrintHtml;this.jm_sUrlImg=ji_sUrlImg;this.jm_oUrlLink=ji_oUrlLink;this.jm_sTitle=ji_sTitle;this.jm_sAlt=(ji_sAlt?ji_sAlt:ji_sTitle);this.jm_sId=(ji_sId?ji_sId:null);this.jm_width=24;this.jm_height=24;this.jm_bTargetNew=true;this.jm_bShadow=false;this.jm_bParagraph=true;this.jm_bTipPopup=false;this.jm_sSimplePopupPlugin=null;}
function A3xaSimpleButton_IsValid()
{return(this.jm_sUrlImg&&this.jm_sUrlImg.length)||(this.jm_sTitle&&this.jm_sTitle.length);}
function A3xaSimpleButton_Set_Options(ji_width,ji_height,ji_bTargetNew,ji_bShadow,ji_bParagraph,ji_bTipPopup,ji_sSimplePopupPlugin)
{if(ji_width)
this.jm_width=ji_width;if(ji_height)
this.jm_height=ji_height;if(ji_bTargetNew===false)
this.jm_bTargetNew=false;if(ji_bShadow==true)
this.jm_bShadow=true;if(ji_bParagraph===false)
this.jm_bParagraph=false;if(ji_bTipPopup==true)
this.jm_bTipPopup=true;if(ji_sSimplePopupPlugin&&ji_sSimplePopupPlugin.length)
this.jm_sSimplePopupPlugin=ji_sSimplePopupPlugin;return true;}
function A3xaSimpleButton_Get_Html()
{var jr_shImg="";if(this.jm_sUrlImg)
jr_shImg="<img src='"+this.jm_sUrlImg+"'"+" border='0'"+" alt='"+this.jm_sAlt+"' title='"+this.jm_sTitle+"'"+" width='"+this.jm_width+"' height='"+this.jm_height+"'"+
(this.jm_bShadow?" style='box-shadow: 1px 1px 0px #404040;'":"")+"/>";else
{if(!this.jm_bShadow)
jr_shImg=this.jm_sAlt;else
jr_shImg="<span style='color: #8080F0; text-shadow: 1px 1px 0px #000000;'>"+"<strong>"+this.jm_sAlt+"</strong></span>";}
var jr_sh="";if(this.jm_sSimplePopupPlugin&&this.jm_sSimplePopupPlugin.length)
{jr_sh+=(this.jm_bParagraph?"<p>":"");jr_sh+="<a id='"+this.jm_sId+"' href='#spu_"+this.jm_sId+"'"+" title='"+this.jm_sTitle+"'>"+jr_shImg+"</a>";jr_sh+=(this.jm_bParagraph?"</p>":"");jr_sh+="<div style='display: none;'><div id='spu_"+
this.jm_sId+"' class='spu_content'>";jr_sh+="</div></div>";return jr_sh;}
var jt_sUrlLink="";if(this.jm_oUrlLink)
jt_sUrlLink=this.jm_oUrlLink.Get_Url();if(this.jm_bTipPopup&&!jt_sUrlLink.length)
{jr_sh+=(this.jm_bParagraph?"<p>":"");jr_sh+="<a href='javascript: alert(&quot;"+this.jm_sTitle+"&quot;);'"+" title='"+this.jm_sTitle+"'>"+jr_shImg+"</a>";jr_sh+=(this.jm_bParagraph?"</p>":"");return jr_sh;}
if(!jt_sUrlLink.length)
{jr_sh+=(this.jm_bParagraph?"<p>":"");jr_sh+=jr_shImg;jr_sh+=(this.jm_bParagraph?"</p>":"");return jr_sh;}
jr_sh+=(this.jm_bParagraph?"<p>":"");jr_sh+="<a href='"+jt_sUrlLink+"' title='"+this.jm_sTitle+"'"+
(this.jm_bTargetNew?" target='_blank'":"")+">"+
jr_shImg+"</a>";jr_sh+=(this.jm_bParagraph?"</p>":"");return jr_sh;}
function A3xaSimpleButton_PrintHtml(qi_oParent)
{if(!(qi_oParent&&qi_oParent.length))
return false;if(!this.IsValid())
return false;var jt_sh=this.Get_Html();if(!(jt_sh&&jt_sh.length))
return false;qi_oParent.append(jt_sh);if(this.jm_sSimplePopupPlugin&&this.jm_sSimplePopupPlugin.length)
{var qt_spuId='#spu_'+this.jm_sId;var jt_spuContent=this.jm_sSimplePopupPlugin;jQuery("#"+this.jm_sId).fancybox({'titlePosition':'inside','transitionIn':'elastic','transitionOut':'elastic','hideOnOverlayClick':false,'hideOnContentClick':false,'showCloseButton':true,'autoDimensions':true,'titleShow':true,'centerOnScroll':true,'onStart':function()
{qt_ospu=jQuery(qt_spuId);qt_ospuContent=qt_ospu.children().eq(0);if(!(qt_ospuContent&&qt_ospuContent.length))
qt_ospu.append(jt_spuContent);}});}
return true;}
function A3xaDDItem(ji_sKey,ji_sValue,ji_sDescr)
{this.jm_TreeLevel=1;this.jm_bVisible=true;this.jm_bOnChange=true;this.jm_CountChildren=Number(0);this.jm_CountRestricted=Number(0);this.jm_Count=Number(0);this.jm_sKey=(ji_sKey||"");this.jm_sValue=(ji_sValue||"");this.jm_sDescr=(ji_sDescr||"");this.jm_aoddiChildren=null;this.Get_Children=function(){return this.jm_aoddiChildren;};this.IsRestricted=function()
{if(this.jm_CountRestricted>0)
return false;return true;};this.Get_CountChildren=function()
{return(this.jm_aoddiChildren?this.jm_aoddiChildren.Get_Count():0);};this.Add_Child=function(ji_oddi)
{if(!ji_oddi)
return false;ji_oddi.jm_TreeLevel=this.jm_TreeLevel+1;if(!this.jm_aoddiChildren)
this.jm_aoddiChildren=new A3xaArray();return this.jm_aoddiChildren.Add_Item(ji_oddi.Get_Key(),ji_oddi);};this.Get_Child=function(ji_key)
{if(!this.jm_aoddiChildren)
return null;return this.jm_aoddiChildren.Get_Item(ji_key);};this.Get_Child_ByIndex=function(ji_index)
{if(!this.jm_aoddiChildren)
return null;return this.jm_aoddiChildren.Get_Item_ByIndex(ji_index);};this.Get_ChildKey=function(ji_index)
{if(!this.jm_aoddiChildren)
return null;return this.jm_aoddiChildren.Get_Key(ji_index);};this.Sort_Children=function(ji_fnCompare,ji_bAllTreeRecursion)
{if(!this.jm_aoddiChildren)
return false;this.jm_aoddiChildren.Sort(ji_fnCompare);if(ji_bAllTreeRecursion)
{var jt_count=this.jm_aoddiChildren.Get_Count();for(var k=0;k<jt_count;k++)
this.jm_aoddiChildren.Get_Item_ByIndex(k).Sort_Children(ji_fnCompare,ji_bAllTreeRecursion);}
return true;};this.IsEmpty=function()
{if(this.Get_Key())
return false;return true;};this.IncrementCounters=function(ji_bRestricted)
{this.jm_Count+=Number(1);if(ji_bRestricted)
this.jm_CountRestricted+=Number(1);return true;};this.Get_Count=function(ji_bRestricted)
{if(!ji_bRestricted)
return Number(this.jm_Count);return Number(this.jm_CountRestricted);};this.Set_Key=function(ji_s)
{this.jm_sKey=(ji_s||"");return true;};this.Get_Key=function()
{return this.jm_sKey;};this.Get_Value=function(){return this.jm_sValue||"";};this.Set_Value=function(ji_s)
{this.jm_sValue=(ji_s||"");return true;};this.ValueMatch=function(ji_s)
{if(!ji_s)
return!this.jm_sValue;return this.jm_sValue==ji_s;};this.Set_Descr=function(ji_s){this.jm_sDescr=(ji_s||"");return true;};this.Get_Descr=function(){return this.jm_sDescr||"";};this.Set_DDValue=function(ji_sDD)
{if(!ji_sDD)
return false;var jt_aDD=ji_sDD.split("_;_");if(!(jt_aDD&&jt_aDD.length>=3))
return false;var jt_aDDParams=jt_aDD[0].split(",");if(!(jt_aDDParams&&jt_aDDParams.length>=4))
return false;if(!(jt_aDDParams[0]>0))
return false;this.jm_TreeLevel=jt_aDDParams[0];this.jm_bVisible=(jt_aDDParams[1]=="V");this.jm_bOnChange=(jt_aDDParams[2]=="E");this.jm_CountChildren=jt_aDDParams[3];this.jm_CountRestricted=jt_aDDParams[4];this.jm_Count=jt_aDDParams[5];this.Set_Key(jt_aDD[1]);this.Set_Value(jt_aDD[2]);return true;};this.Get_DDValue=function()
{var jr_s=this.jm_TreeLevel+","+
(this.jm_bVisible?"V":"")+","+
(this.jm_bOnChange?"E":"")+","+
this.Get_CountChildren()+","+
this.Get_Count(true)+","+this.Get_Count(false)+"_;_"+
(this.Get_Key()||"")+"_;_"+(this.Get_Value()||"");return jr_s;};this.Get_DDDescr=function(ji_bShowCount)
{var jr_s="";if(!(ji_bShowCount===false))
jr_s+=this.Get_Count(true)+" ("+this.Get_Count(false)+") ";if(this.jm_TreeLevel==1)
jr_s+=this.Get_Descr().toUpperCase();else if(this.jm_TreeLevel==2)
jr_s+="---- "+this.Get_Descr().toUpperCase()+" ----";else if(this.jm_TreeLevel>=3)
jr_s=".  "+jr_s+this.Get_Descr();return jr_s;};this.FindDDItem=function(ji_oddi)
{if(!ji_oddi)
return null;if(ji_oddi.jm_TreeLevel==this.jm_TreeLevel)
{if(ji_oddi.Get_Key()==this.Get_Key())
return this;return null;}
if(ji_oddi.jm_TreeLevel>this.jm_TreeLevel)
{var jt_countChildren=this.Get_CountChildren();if(!(jt_countChildren>0))
return null;for(var i=0;i<jt_countChildren;i++)
{var jt_oddiChild=this.Get_Child_ByIndex(i);var jr_oddiFound=(jt_oddiChild?jt_oddiChild.FindDDItem(ji_oddi):null);if(jr_oddiFound)
return jr_oddiFound;}}
return null;};}
function A3xaDDItem_Iterator(ji_oddi)
{this.jm_oddi=ji_oddi;this.jm_IndexChild=-1;this.jm_oddiitCurrent=null;this.IsEnd=function()
{if(this.jm_IndexChild<0)
return false;if(this.jm_IndexChild<this.jm_oddi.Get_CountChildren())
return false;return true;};this.Get_DDItem=function()
{if(this.jm_IndexChild<0)
return this.jm_oddi;if(!this.jm_oddiitCurrent)
return null;return this.jm_oddiitCurrent.Get_DDItem();};this.Next=function()
{if(this.IsEnd())
return false;if(this.jm_IndexChild<0)
this.jm_IndexChild=0;else
{if(this.jm_oddiitCurrent&&this.jm_oddiitCurrent.Next())
return true;this.jm_IndexChild++;}
this.jm_oddiitCurrent=null;if(this.jm_IndexChild>=this.jm_oddi.Get_CountChildren())
return false;var jt_oddiChild=this.jm_oddi.Get_Child_ByIndex(this.jm_IndexChild);jg_oe.CanLogInfo()&&jg_oe.LogInfo("Child.dddescr: "+
(jt_oddiChild?jt_oddiChild.Get_DDDescr():"null")+" at:"+this.jm_IndexChild,"","A3xaDDItem_Iterator.Next");this.jm_oddiitCurrent=new A3xaDDItem_Iterator(jt_oddiChild);return true;};}
function A3xaDDSelectBox(ji_oddiRoot,ji_sName,ji_sLabel)
{var jt_this=this;this.jm_oddiRoot=(ji_oddiRoot||null);this.jm_sName=(ji_sName||"");this.jm_sLabel=(ji_sLabel||"");this.jm_sKeySelected=null;this.jm_sKeyGroupFocus=null;this.jm_bVisibleGroupFocus=false;this.jm_bShowCount=true;this.jm_bGrayRestricted=true;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Label="+this.jm_sLabel,"","A3xaDDSelectBox");this.jm_aColors=[[["808080","808080"],["808080","808080"]],[["FFFFFF","B0B0B0"],["000000","202020"]],[["FFFFFF","C0C0C0"],["000000","202020"]],[["FFFFFF","E0E0E0"],["000000","404040"]]];this.Set_ColorsBGHL=function(ji_aRGB)
{if(!ji_aRGB)
return false;for(var i=0;i<ji_aRGB.length;i++)
this.jm_aColors[i+1][0][0]=ji_aRGB[i];return true;}
this.Get_Color=function(ji_TreeLevel,ji_Type,ji_bFont)
{if(!ji_TreeLevel)
ji_TreeLevel=0;if(ji_TreeLevel>3)
ji_TreeLevel=3;if(!(ji_Type>=0&&ji_Type<=1))
ji_Type=0;return this.jm_aColors[ji_TreeLevel][ji_bFont?1:0][ji_Type];};this.NewDDItem=function(){return new A3xaDDItem();};this.Get_DDItemUpdated=function(ji_oddiReference)
{if(!ji_oddiReference)
return null;if(!this.jm_oddiRoot)
return null;var jt_LevelReference=ji_oddiReference.jm_TreeLevel;var jt_KeyReference=ji_oddiReference.Get_Key();var jt_oddiit=new A3xaDDItem_Iterator(this.jm_oddiRoot);while(!jt_oddiit.IsEnd())
{var jt_oddiUpd=jt_oddiit.Get_DDItem();if(jt_oddiUpd&&jt_oddiUpd.jm_TreeLevel==jt_LevelReference&&jt_oddiUpd.Get_Key()==jt_KeyReference)
return jt_oddiUpd;jt_oddiit.Next();}
return null;};this.PrintHtml=function(qi_oParent)
{if(!(qi_oParent&&qi_oParent.length))
return false;if(!this.jm_oddiRoot)
return false;if(!this.jm_sName)
return false;var jt_oddiit=new A3xaDDItem_Iterator(this.jm_oddiRoot);var jt_shDD="<div class='ccms_form_element cfdiv_select label_over'"+" id='"+this.jm_sName+"1_container_div' style=''>"+"<label>"+this.jm_sLabel+"</label>"+"<select size='1' class='' title=''"+" id='"+this.jm_sName+"' name='"+this.jm_sName+"'"+" style='width:180px;'>";var jt_selected=" selected='selected'";var jt_bSelected=false;var jt_style="background-color:#"+this.ColorHLRoot+";";var jt_idebug=0;while(!jt_oddiit.IsEnd())
{++jt_idebug;var jt_oddi=jt_oddiit.Get_DDItem();if(jt_oddi.jm_bVisible)
{if(jt_selected&&(!this.jm_sKeySelected||this.jm_sKeySelected==jt_oddi.Get_Key()))
jt_bSelected=true;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Sel,Y/N,Selkey==key: "+jt_selected+","+(jt_bSelected?"Y":"N")+","+(this.jm_sKeySelected||"")+"=="+(jt_oddi?jt_oddi.Get_Key():"null"),"","A3xaDDSelectBox.PrintHtml");jg_oe.CanLogInfo()&&jg_oe.LogInfo("dddescr: "+(jt_oddi?jt_oddi.Get_DDDescr():"null")+" at:"+jt_idebug,"","A3xaDDSelectBox.PrintHtml");jt_style="background-color:#"+this.Get_Color(jt_oddi.jm_TreeLevel,0,false)+";";jt_shDD+="<option value='"+jt_oddi.Get_DDValue()+"'"+(jt_bSelected?jt_selected:"")+" style='"+jt_style+"'>"+
jt_oddi.Get_DDDescr(this.jm_bShowCount)+"</option>";if(jt_bSelected)
{jt_bSelected=false;jt_selected="";}}
jt_oddiit.Next();}
jt_shDD+="</select><div class='clear'></div>"+"<div id='error-message-"+this.jm_sName+"'></div></div>";qi_oParent.append(jt_shDD);var qt_odd=jQuery("#"+this.jm_sName);if(qt_odd&&qt_odd.length)
{qt_odd.change(function(){return jt_this.A3xaDDSelectBox_OnChange(qt_odd);});}
return true;};this.A3xaDDSelectBox_OnChange=function(qi_oddbox)
{var jt_oddi=null;var jt_eddbox=qi_oddbox.get(0);if(!jt_eddbox)
return true;jt_oddi=this.NewDDItem();var jt_selIndex=jt_eddbox.selectedIndex;var jt_selValue=jt_eddbox.options[jt_selIndex].value;jt_oddi.Set_DDValue(jt_selValue);if(!jt_oddi.jm_bOnChange)
return true;return this.OnChange(jt_eddbox,jt_oddi);};this.OnChange=function(ji_eddbox,ji_oddi){return true;};this.Refresh=function()
{if(!this.jm_oddiRoot)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx-1","","A3xaDDSelectBox.Refresh");return false;}
if(!this.jm_sName)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx-2","","A3xaDDSelectBox.Refresh");return false;}
var jt_oddiit=new A3xaDDItem_Iterator(this.jm_oddiRoot);jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx1","","A3xaDDSelectBox.Refresh");var jt_this=this;var jt_bVisibleCurrentGroupFocus=true;if(this.jm_bVisibleGroupFocus)
jt_bVisibleCurrentGroupFocus=false;if(this.jm_bVisibleGroupFocus)
{jQuery('#'+this.jm_sName+' option').each(function()
{var jt_oddiOld=new A3xaDDItem();jt_oddiOld.Set_DDValue(this.value);if(jt_oddiOld.jm_TreeLevel>=3)
jQuery(this).remove();});jQuery('#'+this.jm_sName+' option').each(function()
{var jt_oddiOld=new A3xaDDItem();jt_oddiOld.Set_DDValue(this.value);if(jt_oddiOld.jm_TreeLevel==2)
{if(jt_oddiOld.Get_Key()==jt_this.jm_sKeyGroupFocus)
{var jt_oddiGroup=jt_this.jm_oddiRoot.Get_Child(jt_this.jm_sKeyGroupFocus);var jt_CountChildren=jt_oddiGroup.Get_CountChildren();for(var i=jt_CountChildren-1;i>=0;i--)
{var jt_oddiChild=jt_oddiGroup.Get_Child_ByIndex(i);jg_oe.CanLogInfo()&&jg_oe.LogInfo("+Focus items:"+jt_oddiChild.Get_DDValue()+";;;"+
jt_oddiChild.Get_DDDescr(),"","A3xaDDSelectBox.Refresh");jQuery(this).after(jQuery("<option></option>").val(jt_oddiChild.Get_DDValue()).text(jt_oddiChild.Get_DDDescr()).prop('selected',jt_this.jm_sKeySelected&&jt_this.jm_sKeySelected==jt_oddiChild.Get_Key()));}}}});}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx2","","A3xaDDSelectBox.Refresh");jQuery('#'+this.jm_sName+' option').each(function()
{var jt_value=this.value;var jt_text=this.text;jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx3","","A3xaDDSelectBox.Refresh");if(!jt_oddiit.IsEnd())
{var jt_oddiNew=null;var jt_bVisible=false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx4","","A3xaDDSelectBox.Refresh");while(!jt_bVisible)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx5","","A3xaDDSelectBox.Refresh");jt_oddiNew=jt_oddiit.Get_DDItem();jt_bVisible=jt_oddiNew.jm_bVisible;if(jt_bVisible&&jt_this.jm_bVisibleGroupFocus)
{if(jt_oddiNew.jm_TreeLevel==2)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("GroupFocus key:"+jt_oddiNew.Get_Key()+"=="+
jt_this.jm_sKeyGroupFocus,"","A3xaDDSelectBox.Refresh");if(!jt_bVisibleCurrentGroupFocus)
{if(jt_oddiNew.Get_Key()==jt_this.jm_sKeyGroupFocus)
jt_bVisibleCurrentGroupFocus=true;}
else
{if(jt_oddiNew.Get_Key()!=jt_this.jm_sKeyGroupFocus)
jt_bVisibleCurrentGroupFocus=false;}}
else if(jt_oddiNew.jm_TreeLevel>=3)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Hide-Show key:"+jt_oddiNew.Get_Key()+":"+
(jt_bVisibleCurrentGroupFocus?"Show":"Hide"),"","A3xaDDSelectBox.Refresh");jt_bVisible=jt_bVisibleCurrentGroupFocus;}}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx6","","A3xaDDSelectBox.Refresh");if(!jt_bVisible)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx7","","A3xaDDSelectBox.Refresh");jt_oddiit.Next();if(jt_oddiit.IsEnd())
return true;}}
var jt_oddiOld=new A3xaDDItem();jt_oddiOld.Set_DDValue(this.value);if(jt_oddiNew)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("itemnew:l,k,dv,dd"+
jt_oddiNew.jm_TreeLevel+","+jt_oddiNew.Get_Key()+","+
jt_oddiNew.Get_DDValue()+","+jt_oddiNew.Get_DDDescr(),"","A3xaDDSelectBox.Refresh");jg_oe.CanLogInfo()&&jg_oe.LogInfo("itemold:l,k,dv,dd"+
jt_oddiOld.jm_TreeLevel+","+jt_oddiOld.Get_Key()+","+
jt_oddiOld.Get_DDValue()+","+jt_oddiOld.Get_DDDescr(),"","A3xaDDSelectBox.Refresh");var jt_boddiNewOK=false;if(jt_oddiNew&&jt_oddiNew.jm_TreeLevel==jt_oddiOld.jm_TreeLevel&&jt_oddiNew.Get_Key()==jt_oddiOld.Get_Key())
{jt_boddiNewOK=true;}
else
{jt_oddiNew=jt_this.jm_oddiRoot.FindDDItem(jt_oddiOld);if(jt_oddiNew)
jt_boddiNewOK=true;}
if(jt_boddiNewOK)
{var jt_ValueNew=jt_oddiNew.Get_DDValue();var jt_DescrNew=jt_oddiNew.Get_DDDescr(jt_this.jm_bShowCount);this.value=jt_ValueNew;this.text=jt_DescrNew;var qt_oItem=jQuery(this);if(jt_this.jm_bGrayRestricted&&jt_oddiNew.IsRestricted())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx8-Gray: "+jt_DescrNew,"","A3xaDDSelectBox.Refresh");qt_oItem.css({"background-color":"#"+jt_this.Get_Color(jt_oddiNew.jm_TreeLevel,1,false),"font-style":"italic","color":"#"+jt_this.Get_Color(jt_oddiNew.jm_TreeLevel,1,true)});if(jt_oddiNew.jm_TreeLevel==1)
{}}
else
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx8-HL: "+jt_DescrNew,"","A3xaDDSelectBox.Refresh");qt_oItem.css({"background-color":"#"+jt_this.Get_Color(jt_oddiNew.jm_TreeLevel,0,false),"font-style":"normal","color":"#"+jt_this.Get_Color(jt_oddiNew.jm_TreeLevel,0,true)});}
qt_oItem.prop('selected',jt_this.jm_sKeySelected&&jt_this.jm_sKeySelected==jt_oddiNew.Get_Key());}
jt_oddiit.Next();}});jg_oe.CanLogInfo()&&jg_oe.LogInfo("pxx9","","A3xaDDSelectBox.Refresh");return true;};}
function A3xaAjaxResponse2(ji_responseXML,ji_sResponseText)
{this.IsValid=A3xaAjaxResponse2_IsValid;this.Get_ItemElement=A3xaAjaxResponse2_Get_ItemElement;this.Get_ItemValue=A3xaAjaxResponse2_Get_ItemValue;if(ji_responseXML==null)
{var jt_sResponseTextClean=null;if(ji_sResponseText!=null)
{jt_sResponseTextClean=ji_sResponseText.split("@#xmldata#@");}
if(jt_sResponseTextClean!=null&&jt_sResponseTextClean[1]!=null)
{var jt_xmlParser=new DOMParser();ji_responseXML=jt_xmlParser.parseFromString(jt_sResponseTextClean[1],"text/xml");}}
this.jm_responseXML=null;if(ji_responseXML&&ji_responseXML.documentElement)
this.jm_responseXML=ji_responseXML;}
function A3xaAjaxResponse2_IsValid()
{return this.jm_responseXML!=null&&this.jm_responseXML.documentElement;}
function A3xaAjaxResponse2_Get_ItemElement(ji_sItemName)
{if(!this.IsValid())
return null;if(!ji_sItemName)
return null;var jr_xmlElement=null;try
{jr_xmlElement=this.jm_responseXML.documentElement.getElementsByTagName(ji_sItemName);}
catch(e)
{jr_xmlElement=null;}
return jr_xmlElement;}
function A3xaAjaxResponse2_Get_ItemValue(ji_sItemName)
{var jt_xmlElement=this.Get_ItemElement(ji_sItemName);if(!jt_xmlElement)
return null;var jr_sItemValue=null;try
{var jt_curChild=jt_xmlElement.item(0).firstChild;var jt_lastChild=jt_xmlElement.item(0).lastChild;while(jt_curChild)
{if(jt_curChild.data&&jt_curChild.data.length)
{if(!jr_sItemValue)
jr_sItemValue=jt_curChild.data;else
jr_sItemValue+=jt_curChild.data;}
if(jt_curChild==jt_lastChild)
break;jt_curChild=jt_curChild.nextSibling;}}
catch(e)
{jr_sItemValue=null;}
return jr_sItemValue;}
function A3xaAjaxRequest2(ji_sUrlBase,ji_sUrlParams,ji_oListener)
{this.IsValid=A3xaAjaxRequest2_IsValid;this.GET=A3xaAjaxRequest2_GET;this.Get_UrlBase=A3xaAjaxRequest2_Get_UrlBase;this.Get_UrlParams=A3xaAjaxRequest2_Get_UrlParams;this.OnReadyFn=A3xaAjaxRequest2_OnReadyFn;this.jm_sUrlBase=ji_sUrlBase;this.jm_sUrlParams=ji_sUrlParams;this.jm_oListener=ji_oListener;}
function A3xaAjaxRequest2_IsValid()
{return this.jm_sUrlBase!=null;}
function A3xaAjaxRequest2_GET(ji_bUrlFull)
{var jr_s="";if(ji_bUrlFull==true)
jr_s=this.jm_sUrlBase;jr_s+=this.jm_sUrlParams;return jr_s;}
function A3xaAjaxRequest2_Get_UrlBase(){return this.jm_sUrlBase;}
function A3xaAjaxRequest2_Get_UrlParams(){return this.jm_sUrlParams;}
function A3xaAjaxRequest2_OnReadyFn(ji_ogAjaxResponse)
{if(this.jm_oListener)
return this.jm_oListener.OnAjaxReadyFn(ji_ogAjaxResponse);return false;}
function A3xaAjax2()
{this.QueueRequest=A3xaAjax2_QueueRequest;this.SendRequestQueued=A3xaAjax2_SendRequestQueued;this.SetTimeout=A3xaAjax2_SetTimeout;this.jm_aQueueRequest=new Array();this.jm_oAjaxRequestCurrent=null;this.jm_bBusy=false;this.jm_bTimeout=false;this.jm_oAjaXHR=null;this.jm_2ndTimer=null;this.jm_Id="a3xaajax2tag";}
function A3xaAjax2_QueueRequest(ji_oAjaxRequest2)
{if(ji_oAjaxRequest2==null)
return false;if(this.jm_aQueueRequest.length>3)
return false;this.jm_aQueueRequest.push(ji_oAjaxRequest2);return this.SendRequestQueued();}
function A3xaAjax2_SetTimeout()
{var jt_this=this;if(this.jm_oAjaXHR==null)
return false;this.jm_oAjaXHR.timeout=8000;this.jm_oAjaXHR.ontimeout=function()
{if(jt_this.jm_Id!="a3xaajax2tag")
return;jt_this.jm_bTimeout=true;clearTimeout(jt_this.jm_2ndTimer);alert("Ajax Timeout");};this.jm_2ndTimer=setTimeout(function()
{if(jt_this.jm_Id!="a3xaajax2tag")
return;jt_this.jm_oAjaXHR.abort();jt_this.jm_bTimeout=true;alert("Ajax 2nd Level Timeout");},10000);return true;}
function A3xaAjax2_SendRequestQueued()
{var jt_this=this;if(this.jm_aQueueRequest.length<=0)
return true;if(this.jm_bBusy&&!this.jm_bTimeout)
return true;this.jm_bTimeout=false;this.jm_bBusy=true;if(this.jm_oAjaXHR==null)
{try
{this.jm_oAjaXHR=new XMLHttpRequest();}
catch(e)
{this.jm_oAjaXHR=null;}
if(this.jm_oAjaXHR==null)
{this.jm_bBusy=false;alert("Can't connect to server:\n"+e.ToString());return false;}
else
{}}
var jt_oAjaxRequest=null;do
{jt_oAjaxRequest=this.jm_aQueueRequest.shift();if(jt_oAjaxRequest==null)
{this.jm_bBusy=false;return false;}}
while(jt_oAjaxRequest!=null&&(!jt_oAjaxRequest.IsValid()))
this.jm_oAjaxRequestCurrent=jt_oAjaxRequest;try
{var jt_bPost=true;var jt_sUrlBase=this.jm_oAjaxRequestCurrent.Get_UrlBase();var jt_sUrlParams=this.jm_oAjaxRequestCurrent.Get_UrlParams();this.jm_oAjaXHR.onreadystatechange=function()
{if(jt_this.jm_Id!="a3xaajax2tag")
return;if(jt_this.jm_oAjaXHR.readyState!=4)
return;var jt_oarc=jt_this.jm_oAjaxRequestCurrent;jt_this.jm_oAjaxRequestCurrent=null;clearTimeout(jt_this.jm_2ndTimer);jt_this.jm_bBusy=false;if(jt_this.jm_oAjaXHR.status==200)
{var jt_oxml=new A3xaAjaxResponse2(null,jt_this.jm_oAjaXHR.responseText);var jt_sA3xaDebug=jt_oxml.Get_ItemValue("A3xaDebug");jg_oe.CanLogInfo()&&jg_oe.LogInfo("jt_this.jm_oAjaXHR.responseText="+
jt_this.jm_oAjaXHR.responseText,"","A3xaAjax2_SendRequestQueued.onreadystatechange");if(jt_sA3xaDebug!=null);if(jt_oxml.IsValid()&&jt_oarc!=null)
jt_oarc.OnReadyFn(jt_oxml);}
jt_this.SendRequestQueued();};jg_oe.CanLogInfo()&&jg_oe.LogInfo("urlb,urlp: "+
jt_sUrlBase+","+jt_sUrlParams,"","A3xaAjax2_SendRequestQueued");if(jt_bPost)
{this.jm_oAjaXHR.open("POST",jt_sUrlBase,true);jt_sUrlParams="p_Post=y"+jt_sUrlParams;this.jm_oAjaXHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");}
else
this.jm_oAjaXHR.open("GET",jt_sUrlBase+jt_sUrlParams,true);this.SetTimeout();if(jt_bPost)
this.jm_oAjaXHR.send(jt_sUrlParams);else
this.jm_oAjaXHR.send(null);}
catch(e)
{this.jm_bBusy=false;alert("Can't connect to server:\n"+e.ToString());}
return true;}
function A3xaTaskManager(ji_fnOnChange)
{this.jm_oDTStatus=new GLDataStatus();this.jm_oDTStatus.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StReady;this.jm_oDTStatus.jm_fnOnChange=(ji_fnOnChange||null);this.jm_Semaph=0;this.jm_oTaskTimer=null;var jt_this=this;this._OnStart=function(){return true;};this._CheckStatus=function(){return null;};this._OnEnd=function(ji_oDTStatusEnd){return ji_oDTStatusEnd;};this.Reset=function()
{this.jm_oDTStatus.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StReady;return this._OnReset();};this._OnReset=function(){return true;};this.Start=function(ji_Operation,ji_Target)
{if(!this.IsReady())
return false;if(ji_Operation)
this.jm_oDTStatus.jm_Operation=ji_Operation;if(ji_Target)
this.jm_oDTStatus.jm_Target=ji_Target;this.jm_oDTStatus.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StOpen;this.jm_oTaskTimer=setTimeout(function()
{jt_this.jm_oTaskTimer=null;var jr_b=jt_this._OnStart();jt_this.Task();return jr_b;},10);};this.Release=function()
{this.jm_oDTStatus.jm_fnOnChange=null;jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaTaskManager.Release");return this._OnRelease();};this._OnRelease=function(){return true;};this.Task=function()
{if(jt_this.jm_Semaph>0)
{if(jt_this.jm_oDTStatus.IsDone())
return true;if(jt_this.jm_Semaph>=2)
return true;jt_this.jm_Semaph++;return true;}
else
jt_this.jm_Semaph++;while(jt_this.jm_Semaph>0)
{jt_this.jm_Semaph--;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","A3xaTaskManager.Task");var jt_oDTStatusNext=jt_this._CheckStatus();if(!jt_oDTStatusNext)
return true;jg_oe.CanLogInfo()&&jg_oe.LogInfo("DTSNext-Descr"+jt_oDTStatusNext.Get_Descr2(),"","A3xaTaskManager.Task");if(jt_oDTStatusNext.IsDone())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("IsDone","","A3xaTaskManager.Task");jt_this.jm_oDTStatus.SetFrom(jt_this._OnEnd(jt_oDTStatusNext));this.Release();}}
return true;};this.IsReady=function(){return this.jm_oDTStatus.IsReady();};this.IsInProgress=function(){return this.jm_oDTStatus.IsInProgress();};this.IsOpening=function(){return this.jm_oDTStatus.IsOpen();};this.IsDone=function(){return this.jm_oDTStatus.IsDone();};this.IsFail=function(){return this.jm_oDTStatus.IsFail();};this.IsSuccess=function(){return this.jm_oDTStatus.IsSuccess();};this.IsEmpty=function(){return this.jm_oDTStatus.IsEmpty();};this.Get_Target=function(){return this.jm_oDTStatus.jm_Target;};this.Get_Operation=function(){return this.jm_oDTStatus.jm_Operation;};this.Get_Status=function(){return this.jm_oDTStatus.jm_Status;};}
var jc_gl=new A3xaDefines();function A3xaDefines_Storage()
{this.jc_Default=1;this.jc_FLY=2;this.jc_SS=3;this.jc_LS=4;this.jc_FS=5;this.jc_IDB=6;this.Get_Descr=function(ji_StorageType)
{if(ji_StorageType==this.jc_Default)
return"Default Storage";if(ji_StorageType==this.jc_FLY)
return"FLY Storage";if(ji_StorageType==this.jc_SS)
return"Session Storage";if(ji_StorageType==this.jc_LS)
return"Local Storage";if(ji_StorageType==this.jc_IDB)
return"IDB Storage";return"Unknown Storage";};}
function A3xaDefines_A3xaDbZero()
{this.jc_GLSep_Block="__glk__";this.jc_GLSep_Header="__glv__";this.jc_GLSep_Field="__glf__";this.jc_GLSep_FieldArray="__glr__";this.jc_GLSep_Compact="~";this.jc_GLMID_DT="GLH";this.jc_GLMID_FieldNames="GLN";this.jc_GLMID_GT="GLG";this.jc_GLMID_AX="GLX";this.jc_GLMID_IX="GLI";this.jc_GLIDPREFIXLEN=3;this.jc_GLIDLEN=6;this.jc_GLIDMARKLEN=3;this.jc_GLID_All="ALLA3X";this.jc_GLID_Category="RMBA3X";this.jc_GLID_GeoArea="RGGA3X";this.jc_GLID_GeoRegion="RGRA3X";this.jc_GLID_GeoCity="RGCA3X";this.jc_GLID_GeoCountry="RGPA3X";this.jc_GLID_GeoState="RGSA3X";this.jc_GLID_Enterprise="REEA3X";this.jc_GLID_EnterprisePrefix="REE";this.jc_GLID_NCategory="NMBA3X";this.jc_GLID_NGeoArea="NGGA3X";this.jc_GLID_NGeoRegion="NGRA3X";this.jc_GLID_NGeoCity="NGCA3X";this.jc_GLID_NGeoCountry="NGPA3X";this.jc_GLID_NGeoState="NGSA3X";this.jc_GLID_NEnterprise="NEEA3X";this.jc_GLID_NEnterprisePrefix="NEE";this.XGlid2Mark=function(ji_s)
{if(!ji_s)
return"";if(ji_s.length!=jc_gl.jc_oA3xaDbZero.jc_GLIDLEN+jc_gl.jc_oA3xaDbZero.jc_GLIDMARKLEN)
return"";return ji_s.substr(jc_gl.jc_oA3xaDbZero.jc_GLIDLEN+0,jc_gl.jc_oA3xaDbZero.jc_GLIDMARKLEN);};this.XGlid2Glid=function(ji_s)
{if(!ji_s)
return"";if(ji_s.length==jc_gl.jc_oA3xaDbZero.jc_GLIDLEN)
return ji_s;if(ji_s.length!=jc_gl.jc_oA3xaDbZero.jc_GLIDLEN+jc_gl.jc_oA3xaDbZero.jc_GLIDMARKLEN)
return"";return ji_s.substr(0,jc_gl.jc_oA3xaDbZero.jc_GLIDLEN);};this.CheckGlid=function(ji_s)
{if(!ji_s)
return false;if(ji_s.length!=jc_gl.jc_oA3xaDbZero.jc_GLIDLEN)
return false;return true;};this.MakeGlid=function(ji_sPrefix,ji_sExtension)
{if(!ji_sPrefix)
return null;if(ji_sPrefix.length!=3)
return null;if(!ji_sExtension)
ji_sExtension="A3X";if(ji_sExtension.length!=3)
return null;return ji_sPrefix+ji_sExtension;};this.IsDefaultGlid=function(ji_s)
{if(!this.CheckGlid(ji_s))
return null;var jt_sExtension=ji_s.substr(jc_gl.jc_oA3xaDbZero.jc_GLIDPREFIXLEN,jc_gl.jc_oA3xaDbZero.jc_GLIDLEN-jc_gl.jc_oA3xaDbZero.jc_GLIDPREFIXLEN);return jt_sExtension=="A3X";};this.Glid2Default=function(ji_s)
{if(!this.CheckGlid(ji_s))
return"";return this.MakeGlid(ji_s.substr(0,jc_gl.jc_oA3xaDbZero.jc_GLIDPREFIXLEN));};this.jc_SubTable_EID=1;this.jc_SubTable_EBIS=2;this.jc_SubTable_EBID=4;this.jc_SubTable_EI=8;this.jc_sEifaName="glr_info";this.jc_Eifa_Typ=0;this.jc_Eifa_Cod=1;this.jc_Eifa_Id=2;this.jc_Eifa_IdParent=3;this.jc_Eifa_Info=4;this.jc_DTStatus2_StSuccess=1;this.jc_DTStatus2_StFail=4;this.jc_DTStatus2_StEmpty=5;this.jc_DTStatus2_StInProgress=6;this.jc_DTStatus2_StOpen=8;this.jc_DTStatus2_StReady=9;this.jc_DTStatus2_OpCache=10;this.jc_DTStatus2_OpClear=20;this.jc_DTStatus2_OpStore=30;this.jc_DTStatus2_OpLoad=40;this.jc_DTStatus2_TgTable=100;this.jc_DTStatus2_TgTableHeader=200;this.jc_DTStatus2_TgTableHX=300;this.jc_DTStatus2_TgRecord=400;this.jc_DTStatus2_TgCommonTable=1000;this.jc_DTStatus2_TgMainTable=2000;this.jc_DTStatus2_TgDependentTable=3000;this.jc_DTStatus2_TgExtTableHeader=4000;this.jc_DTStatus_Empty=0;this.jc_DTStatus_Cached=1;this.jc_DTStatus_CacheFail=4;this.jc_DTStatus_CacheInProgress=6;this.jc_DTStatus_Loaded=21;this.jc_DTStatus_LoadedRecord=22;this.jc_DTStatus_LoadedTable=23;this.jc_DTStatus_LoadFail=24;this.jc_DTStatus_LoadEmpty=25;this.jc_DTStatus_LoadRecordInProgress=26;this.jc_DTStatus_LoadTableInProgress=27;this.jc_DTStatus_LoadOpen=29;this.jc_DTStatus_Stored=31;this.jc_DTStatus_StoreFail=34;this.jc_DTStatus_StoreEmpty=35;this.jc_DTStatus_StoreInProgress=36;this.jc_DTStatus_StoreOpen=39;this.jc_DTStatus_Cleared=41;this.jc_DTStatus_ClearFail=44;this.jc_DTStatus_ClearInProgress=46;this.jc_DTStatus_ClearOpen=49;this.jc_DbVersion=33;this.jc_sDbDefaultPrimaryKeyName="xkey";this.jc_sDbName="A3xaDbZeroA";this.jc_aSchemaTables=[{jp_sName:this.jc_GLID_Category,jp_bTyp_Common:true,jp_bMandatory:true,jp_bCacheAll:true,jp_bAX:true,jp_sDescr:"Categories"},{jp_sName:this.jc_GLID_GeoArea,jp_bTyp_Common:true,jp_bMandatory:true,jp_bCacheAll:true,jp_bAX:true,jp_sDescr:"Areas"},{jp_sName:this.jc_GLID_GeoRegion,jp_bTyp_Common:true,jp_bMandatory:true,jp_bCacheAll:true,jp_bAX:true,jp_sDescr:"Regions"},{jp_sName:this.jc_GLID_GeoCity,jp_bTyp_Common:true,jp_bMandatory:false,jp_bCacheAll:true,jp_bAX:true,jp_sDescr:"Cities"},{jp_sName:this.jc_GLID_GeoCountry,jp_bTyp_Common:true,jp_bMandatory:false,jp_bCacheAll:true,jp_bAX:true,jp_sDescr:"Countries"},{jp_sName:this.jc_GLID_GeoState,jp_bTyp_Common:true,jp_bMandatory:false,jp_bCacheAll:true,jp_bAX:true,jp_sDescr:"States"},{jp_sName:this.jc_GLID_NCategory,jp_bTyp_Common:true,jp_bMandatory:true,jp_bCacheAll:true,jp_SubTable:this.jc_SubTable_EBID,jp_sParent:this.jc_GLID_Category,jp_sDescr:"Categories Scores"},{jp_sName:this.jc_GLID_NGeoArea,jp_bTyp_Common:true,jp_bMandatory:true,jp_bCacheAll:true,jp_SubTable:this.jc_SubTable_EBID,jp_sParent:this.jc_GLID_GeoArea,jp_sDescr:"Areas Scores"},{jp_sName:this.jc_GLID_NGeoRegion,jp_bTyp_Common:true,jp_bCacheAll:true,jp_SubTable:this.jc_SubTable_EBID,jp_sParent:this.jc_GLID_GeoRegion,jp_sDescr:"Regions Scores"},{jp_sName:this.jc_GLID_NGeoCity,jp_bTyp_Common:true,jp_bCacheAll:true,jp_SubTable:this.jc_SubTable_EBID,jp_sParent:this.jc_GLID_GeoCity,jp_sDescr:"Cities Scores"},{jp_sName:this.jc_GLID_NGeoCountry,jp_bTyp_Common:true,jp_bCacheAll:true,jp_SubTable:this.jc_SubTable_EBID,jp_sParent:this.jc_GLID_GeoCountry,jp_sDescr:"Countries Scores"},{jp_sName:this.jc_GLID_NGeoState,jp_bTyp_Common:true,jp_bCacheAll:true,jp_SubTable:this.jc_SubTable_EBID,jp_sParent:this.jc_GLID_GeoState,jp_sDescr:"States Scores"},{jp_sName:this.jc_GLID_Enterprise,jp_bTyp_Main:true,jp_bMandatory:true,jp_bAX:true,jp_sDescr:"Enterprises"},{jp_sName:this.jc_GLID_NEnterprise,jp_bTyp_Main:true,jp_bMandatory:true,jp_SubTable:this.jc_SubTable_EBID,jp_sParent:this.jc_GLID_Enterprise,jp_sDescr:"Enterprises Scores"}];this.Init=function(jc_oStorage)
{for(var i=0;i<this.jc_aSchemaTables.length;i++)
{if(this.jc_aSchemaTables[i].jp_bTyp_Main)
{this.jc_aSchemaTables[i].jp_DefaultStorageType=jc_oStorage.jc_FLY;this.jc_aSchemaTables[i].jp_ExtendedStorageType=jc_oStorage.jc_Default;}
else
this.jc_aSchemaTables[i].jp_DefaultStorageType=jc_oStorage.jc_Default;}
return true;}}
function A3xaDefines_Ajax()
{this.jc_AjaxOp_Write="AWR";this.jc_AjaxOp_WriteDelta="AWD";this.jc_sAjaxTypFans="XEF";this.jc_sAjaxTypControlIcons="XCI";this.jc_sAjaxTypEntity="XEN";this.jc_sAjaxTypEntitySet="XES";}
function A3xaDefines_Icons()
{this.jc_sIconExt=".png";this.jc_sFlagPrefix="Flag-";this.jc_sFlagUrlBase_GeoArea="a3xas/a3xam/icons-geoarea-flags/";this.jc_sFlagUrlBase_GeoAZ="a3xas/a3xam/icons-geoaz-flags/";this.jc_sFlagUrlBase_GeoCountry="a3xas/a3xam/icons-country-flags/";this.jc_sFlagUrlBase_GeoState="a3xas/a3xam/icons-state-flags/";this.jc_sBkgndPrefix_GeoAZ="bkgnd-Geoarea-32x32-";this.jc_sBkgndUrlBase_GeoAZ="a3xas/a3xam/icons-geoaz-bkgnd/";this.jc_sIconPrefix_Category="Category-icon-32x32-";this.jc_sIconUrlBase_Category="a3xas/a3xam/icons-category/";this.jc_sIconUrlBase_UVcat="a3xas/a3xam/icons-UVcat/";this.jc_sIconPrefix_StaticMapLA="StaticMapL-icon-32x32-";this.jc_sIconPrefix_StaticMapArea="StaticMapA-icon-32x32-";this.jc_sIconPrefix_StaticMapRegion="StaticMapR-icon-32x32-";this.jc_sIconPrefix_ViewEntity="Button-View-32x32";this.jc_sIconUrlBase_UserControls="a3xas/a3xam/icons-user-controls/";this.jc_sIconPrefixCtrl_Like="Like-icon-32x32-";this.jc_sIconPrefixCtrl_Turbo="Turbo-icon-32x32-";this.jc_sIconPrefixCtrl_GLMore="GLMore-icon-32x32-";this.jc_sIconUrlBase_Admin="a3xas/a3xam/icons-admin/";this.jc_sIconPrefix_EditEntity="Button-Edit-32x32";this.jc_sIconPrefix_NewEntity="Button-New-32x32";this.jc_sIconPrefix_NewSEntity="Button-New2-32x32";this.jc_sIconPrefix_DeleteEntity="Button-Trash-32x32";this.jc_sIconPrefix_EditEntityInfo="Button-FieldEdit-32x32";this.jc_sIconPrefix_NewEntityInfo="Button-FieldNew-32x32";this.jc_sIconPrefix_DeleteEntityInfo="Button-FieldTrash-32x32";this.jc_sIconUrlBase_QUR="a3xas/a3xam/icons-query/";this.jc_sIconPrefix_QTT="QTop10gold-icon-32x32-";this.jc_sIconPrefix_QEN="QENT-icon-32x32-";this.jc_sIconPrefix_QLE="QLE-icon-32x32-";this.jc_sIconUrlBase_UserEntityInfo="a3xas/a3xam/icons-entity-info/";this.jc_sIconEI_FacebookPage="facebook-logo-page-32x32";this.jc_sIconEI_FacebookGroup="facebook-logo-group-32x32";this.jc_sIconEI_FacebookUser="facebook-logo-profile-32x32";this.jc_sIconEI_Email="Email-icon-32x32";this.jc_sIconEI_Flickr="Flickr-icon-32x32";this.jc_sIconEI_Flickrtxt="Flickr-txt-32x32";this.jc_sIconEI_A3xaGallery="A3xaGallery-icon-32x32";this.jc_sIconEI_Googlemap="Googlemap-icon-32x32";this.jc_sIconEI_Gplus="Gplus-icon-32x32";this.jc_sIconEI_Person="Man-icon-32x32-cav";this.jc_sIconEI_Phone="Phone-Icon-32x32";this.jc_sIconEI_Skype="Skype-icon-32x32";this.jc_sIconEI_Skypetxt="Skype-txt-32x32";this.jc_sIconEI_Twitter="Twitter-icon-32x32";this.jc_sIconEI_Url="Www-icon-32x32";this.jc_sIconEI_Video="Youtube-icon-32x32";this.jc_sIconEI_VideoUrl="Youtubeuser-icon-32x32";this.jc_sIconEI_Wikipedia="Wikipedia-icon-32x32";this.jc_sIconEI_Wikiphoneprefix="Wikiprefix-icon-32x32";this.jc_sIconEI_Wikitravel="Wikitravel-icon-32x32";this.jc_sIconEI_WCUrl="Wc-icon-32x32";}
function A3xaDefines_QUR()
{this.jc_QUR_QueryLimSBS="QTT";this.jc_QUR_QueryLimSBT="QLE";this.jc_QUR_QuerySBS="QEN";this.jc_QUR_QuerySBT="QLN";this.jc_QUR_QueryNewEntity="QMN";this.jc_QUR_QueryEditEntity="QMM";this.jc_QUR_QueryViewEntity="QMV";this.jc_QUR_QueryDeleteEntity="QMD";this.jc_QUR_UpdateEntity="QMU";}
function A3xaDefines_EntityInfo()
{this.jc_TI_Website="W";this.jc_CI_Website_Button="W";this.jc_CI_Website_Text="T";this.jc_CI_Website_Bold="B";this.jc_CI_Website_Html="H";this.jc_TI_Video="V";this.jc_CI_Video_YoutubeId="Y";this.jc_CI_Video_VimeoId="V";this.jc_CI_Video_Url="W";this.jc_TI_Facebook="F";this.jc_CI_Facebook_Page="P";this.jc_CI_Facebook_Group="G";this.jc_CI_Facebook_User="U";this.jc_TI_Twitter="D";this.jc_CI_Twitter_Url="D";this.jc_TI_GooglePlus="E";this.jc_CI_GooglePlus_Url="E";this.jc_TI_Phone="T";this.jc_CI_Phone_Number="T";this.jc_TI_Skype="S";this.jc_CI_Skype_Id="S";this.jc_TI_Note="N";this.jc_CI_Note_Text="N";this.jc_TI_Email="M";this.jc_CI_Email_Addr="M";this.jc_TI_Image="I";this.jc_CI_Image_Url="I";this.jc_CI_Image_StaticMapUrl="M";this.jc_TI_Gallery="G";this.jc_CI_Gallery_FlickrUrl="F";this.jc_CI_Gallery_Flickrset="S";this.jc_CI_Gallery_FlickrGallery="G";this.jc_TI_A3xaGallery="H";this.jc_CI_A3xaGallery_Url="A";this.jc_CI_A3xaGallery_Flickrset="S";this.jc_CI_A3xaGallery_FlickrGallery="G";this.jc_TI_Person="U";this.jc_CI_Person_Name="U";this.jc_CI_Person_Attrib="T";this.jc_TI_Wiki="WIK";this.jc_CI_Wikipedia="W";this.jc_CI_Wikiphoneprefix="P";this.jc_CI_Wikitravel="T";this.jc_TI_WaterCloset="WCL";this.jc_CI_WCUrl="W";this.jc_TI_MetasystemControl="K";this.jc_CI_MetasystemControl_DDCity="C";this.jc_CI_MetasystemControl_DDCategory="B";this.jc_TI_QueryUnifiedRequest="QUR"
this.jc_CI_QueryUnifiedRequest_DD="T";}
function A3xaDefines_Html()
{this.jc_MaxViewRows=50;this.jc_Col_IdTag=1;this.jc_Col_LandIcons=2;this.jc_Col_Identity=3;this.jc_Col_InfoIcons=4;this.jc_Col_ControlIcons=5;this.jc_Col_AdminIcons=6;this.jc_Col_Info=7;this.jc_Col_Last=7;}
function A3xaDefines_Entity()
{this.jc_Typ_MetaSystemControl="K";this.jc_Typ_Category="B";this.jc_Typ_Info="H";this.jc_Typ_Enterprise="E";this.jc_Typ_GeoNA="A";this.jc_Typ_GeoNZ="Z";this.jc_Typ_GeoNR="N";this.jc_Typ_GeoArea="G";this.jc_Typ_GeoRegion="R";this.jc_Typ_GeoCountry="P";this.jc_Typ_GeoState="S";this.jc_Typ_GeoCity="C";this.jc_UCat_Metasystem="M";this.jc_UCat_Category="C";this.jc_UCat_Topic="A";this.jc_UCat_Geo="P";this.jc_VCat_Metasystem_Control="C";this.jc_VCat_Geo_Area="A";this.jc_VCat_Geo_Region="R";this.jc_VCat_Geo_RegionNR="N";this.jc_VCat_Geo_RegionTR="T";this.jc_VCat_Geo_RegionMetr="M";this.jc_VCat_Geo_RegionIsland="I";this.jc_VCat_Geo_City="C";this.jc_VCat_Geo_Country="P";this.jc_VCat_Geo_State="S";this.jc_VCat_Geo_Provincie="V";this.jc_VCat_Geo_Department="D";this.jc_VCat_Geo_RegionAdmin="G";}
function A3xaDefines()
{this.jc_oStorage=new A3xaDefines_Storage();this.jc_oAjax=new A3xaDefines_Ajax();this.jc_oA3xaDbZero=new A3xaDefines_A3xaDbZero();this.jc_oA3xaDbZero.Init(this.jc_oStorage);this.jc_oEntity=new A3xaDefines_Entity();this.jc_oEntityInfo=new A3xaDefines_EntityInfo();this.jc_oHtml=new A3xaDefines_Html();this.Typ2GLID=A3xaDefines_Typ2GLID;this.GLID2Typ=A3xaDefines_GLID2Typ;this.jc_oQUR=new A3xaDefines_QUR();this.QUR_Get_Descr=A3xaDefines_QUR_Get_Descr;this.jc_oIcons=new A3xaDefines_Icons();this.MakeUrlIcon_Base=A3xaDefines_MakeUrlIcon_Base;this.MakeUrlIcon_Main=A3xaDefines_MakeUrlIcon_Main;this.MakeUrlIcon_UserControls=A3xaDefines_MakeUrlIcon_UserControls;this.MakeUrlIcon_UserEntityInfo=A3xaDefines_MakeUrlIcon_UserEntityInfo;this.MakeUrlIcon_QUR=A3xaDefines_MakeUrlIcon_QUR;this.Get_UrlFlagEntity=A3xaDefines_Get_UrlFlagEntity;this.Get_UrlBkgndEntity=A3xaDefines_Get_UrlBkgndEntity;this.Get_UrlIconEntity=A3xaDefines_Get_UrlIconEntity;this.Get_UrlIconEntityAdmin=A3xaDefines_Get_UrlIconEntityAdmin;this.Get_UrlIconEntityInfoAdmin=A3xaDefines_Get_UrlIconEntityInfoAdmin;this.Get_UrlIconQUR=A3xaDefines_Get_UrlIconQUR;this.Get_UrlImageMap=A3xaDefines_Get_UrlImageMap;this.jc_sUrlBase_A3xaForm="a?";this.jc_XURFN_AjaxEntity="XE";this.jc_XURFN_ListEntity="LE";this.jc_XURFN_EditEntity="EE";this.jc_XURFN_ReloadEntity="RE";this.jc_XURFN_SubmitEntity="SE";this.jc_XURFN_EditEntityInfo="EI";this.jc_XURFN_ReloadEntityInfo="RI";this.jc_XURFN_SubmitEntityInfo="SI";this.jc_XURTG_Single="Y";this.jc_XURTG_Multiple="N";this.jc_XURTG_Secundary="S";this.jc_XURTG_Master="M";}
function A3xaDefines_GLID2Typ(ji_GLID)
{if(ji_GLID==this.jc_oA3xaDbZero.jc_GLID_Category)
return this.jc_oEntity.jc_Typ_Category;if(ji_GLID==this.jc_oA3xaDbZero.jc_GLID_GeoArea)
return this.jc_oEntity.jc_Typ_GeoArea;if(ji_GLID==this.jc_oA3xaDbZero.jc_GLID_GeoRegion)
return this.jc_oEntity.jc_Typ_GeoRegion;if(ji_GLID==this.jc_oA3xaDbZero.jc_GLID_GeoCity)
return this.jc_oEntity.jc_Typ_GeoCity;if(ji_GLID==this.jc_oA3xaDbZero.jc_GLID_GeoCountry)
return this.jc_oEntity.jc_Typ_GeoCountry;if(ji_GLID==this.jc_oA3xaDbZero.jc_GLID_GeoState)
return this.jc_oEntity.jc_Typ_GeoState;if(ji_GLID==this.jc_oA3xaDbZero.jc_GLID_Enterprise)
return this.jc_oEntity.jc_Typ_Enterprise;return null;}
function A3xaDefines_Typ2GLID(ji_TypEntity)
{if(ji_TypEntity==this.jc_oEntity.jc_Typ_Category)
return this.jc_oA3xaDbZero.jc_GLID_Category;if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoArea)
return this.jc_oA3xaDbZero.jc_GLID_GeoArea;if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoRegion)
return this.jc_oA3xaDbZero.jc_GLID_GeoRegion;if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoCity)
return this.jc_oA3xaDbZero.jc_GLID_GeoCity;if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoCountry)
return this.jc_oA3xaDbZero.jc_GLID_GeoCountry;if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoState)
return this.jc_oA3xaDbZero.jc_GLID_GeoState;if(ji_TypEntity==this.jc_oEntity.jc_Typ_Enterprise)
return this.jc_oA3xaDbZero.jc_GLID_Enterprise;return null;}
function A3xaDefines_QUR_Get_Descr(ji_sQUR,ji_TypEntity)
{if(!(ji_sQUR&&ji_sQUR.length==3))
return null;if(ji_sQUR==this.jc_oQUR.jc_QUR_QueryLimSBS)
return"Top 10";else if(ji_sQUR==this.jc_oQUR.jc_QUR_QueryLimSBT)
return"Recent Enterprises";else if(ji_sQUR==this.jc_oQUR.jc_QUR_QuerySBS||ji_sQUR==this.jc_oQUR.jc_QUR_QuerySBT)
{if(!ji_TypEntity)
return"Items";if(ji_TypEntity==this.jc_oEntity.jc_Typ_Enterprise)
return"Enterprises";if(ji_TypEntity==this.jc_oEntity.jc_Typ_Category)
return"Categories";if(ji_TypEntity==this.jc_oEntity.jc_Typ_Info)
return"Topics";if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoArea)
return"Areas";if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoRegion)
return"Regions";if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoCity)
return"Cities";if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoCountry)
return"Countries";if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoState)
return"States";return"Items";}
else if(ji_sQUR==this.jc_oQUR.jc_QUR_QueryNewEntity)
return"Nuevo";else if(ji_sQUR==this.jc_oQUR.jc_QUR_QueryEditEntity)
return"Modifica";else if(ji_sQUR==this.jc_oQUR.jc_QUR_QueryDeleteEntity)
return"Borra";else if(ji_sQUR==this.jc_oQUR.jc_QUR_QueryViewEntity)
return"Muestra";else if(ji_sQUR==this.jc_oQUR.jc_QUR_UpdateEntity)
return"Update";return ji_sQUR+"_unknown";}
function A3xaDefines_Get_UrlIconQUR(ji_QUR,ji_Status)
{var jr_sUrlImg="";if(ji_QUR==this.jc_oQUR.jc_QUR_QueryLimSBS)
jr_sUrlImg=this.MakeUrlIcon_QUR(this.jc_oIcons.jc_sIconPrefix_QTT+ji_Status);else if(ji_QUR==this.jc_oQUR.jc_QUR_QuerySBS)
jr_sUrlImg=this.MakeUrlIcon_QUR(this.jc_oIcons.jc_sIconPrefix_QEN+ji_Status);else if(ji_QUR==this.jc_oQUR.jc_QUR_QuerySBT)
jr_sUrlImg=this.MakeUrlIcon_QUR(this.jc_oIcons.jc_sIconPrefix_QEN+ji_Status);else if(ji_QUR==this.jc_oQUR.jc_QUR_QueryLimSBT)
jr_sUrlImg=this.MakeUrlIcon_QUR(this.jc_oIcons.jc_sIconPrefix_QLE+ji_Status);return jr_sUrlImg;}
function A3xaDefines_Get_UrlFlagEntity(ji_TypEntity,ji_sCode)
{if(!ji_TypEntity)
return null;if(!ji_sCode)
return null;if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoNA)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sFlagUrlBase_GeoAZ+
this.jc_oIcons.jc_sFlagPrefix+ji_sCode);if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoArea)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sFlagUrlBase_GeoArea+
this.jc_oIcons.jc_sFlagPrefix+ji_sCode);if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoCountry)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sFlagUrlBase_GeoCountry+
this.jc_oIcons.jc_sFlagPrefix+ji_sCode);if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoState)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sFlagUrlBase_GeoState+
this.jc_oIcons.jc_sFlagPrefix+ji_sCode);return null;}
function A3xaDefines_Get_UrlBkgndEntity(ji_TypEntity,ji_sCode)
{if(!ji_TypEntity)
return null;if(!ji_sCode)
return null;if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoNA||ji_sCode.length==2)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sBkgndUrlBase_GeoAZ+
this.jc_oIcons.jc_sBkgndPrefix_GeoAZ+ji_sCode);if(ji_TypEntity==this.jc_oEntity.jc_Typ_GeoArea)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sBkgndUrlBase_GeoArea+
this.jc_oIcons.jc_sBkgndPrefix_GeoArea+ji_sCode);return null;}
function A3xaDefines_MakeUrlIcon_Base(ji_sRelPath,ji_bExt)
{if(!ji_sRelPath)
return null;return jg_oe.jm_sDirBase+ji_sRelPath+(ji_bExt===false?"":this.jc_oIcons.jc_sIconExt);}
function A3xaDefines_MakeUrlIcon_Main(ji_sName,ji_bExt)
{if(!ji_sName)
return null;return this.MakeUrlIcon_Base("a3xas/a3xam/icons-main/"+ji_sName,ji_bExt);}
function A3xaDefines_MakeUrlIcon_UserControls(ji_sName,ji_bExt)
{if(!ji_sName)
return null;return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_UserControls+ji_sName,ji_bExt);}
function A3xaDefines_MakeUrlIcon_UserEntityInfo(ji_sName,ji_bExt)
{if(!ji_sName)
return null;return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_UserEntityInfo+ji_sName,ji_bExt);}
function A3xaDefines_MakeUrlIcon_QUR(ji_sName,ji_bExt)
{if(!ji_sName)
return null;return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_QUR+ji_sName,ji_bExt);}
function A3xaDefines_Get_UrlImageMap(ji_sAZN)
{if(!ji_sAZN)
return null;return this.MakeUrlIcon_Base("a3xas/a3xam/misc/Map-"+ji_sAZN+"-200x150.jpg",false);}
function A3xaDefines_Get_UrlIconEntity(ji_TypEntity)
{if(!ji_TypEntity)
return null;return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_UserControls+
this.jc_oIcons.jc_sIconPrefix_ViewEntity);}
function A3xaDefines_Get_UrlIconEntityAdmin(ji_QUR,ji_bSecundary)
{if(ji_QUR==this.jc_oQUR.jc_QUR_QueryNewEntity)
{if(ji_bSecundary==true)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_Admin+
this.jc_oIcons.jc_sIconPrefix_NewSEntity);return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_Admin+
this.jc_oIcons.jc_sIconPrefix_NewEntity);}
if(ji_QUR==this.jc_oQUR.jc_QUR_QueryEditEntity)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_Admin+
this.jc_oIcons.jc_sIconPrefix_EditEntity);if(ji_QUR==this.jc_oQUR.jc_QUR_QueryDeleteEntity)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_Admin+
this.jc_oIcons.jc_sIconPrefix_DeleteEntity);return null;}
function A3xaDefines_Get_UrlIconEntityInfoAdmin(ji_QUR)
{if(ji_QUR==this.jc_oQUR.jc_QUR_QueryNewEntity)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_Admin+
this.jc_oIcons.jc_sIconPrefix_NewEntityInfo);if(ji_QUR==this.jc_oQUR.jc_QUR_QueryEditEntity)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_Admin+
this.jc_oIcons.jc_sIconPrefix_EditEntityInfo);if(ji_QUR==this.jc_oQUR.jc_QUR_QueryDeleteEntity)
return this.MakeUrlIcon_Base(this.jc_oIcons.jc_sIconUrlBase_Admin+
this.jc_oIcons.jc_sIconPrefix_DeleteEntityInfo);return null;}
function A3xaEntityButton2(ji_Name,ji_Rows,ji_Row,ji_Col,ji_oListener)
{this.Get_Name=A3xaEntityButton2_Get_Name;this.Get_Part=A3xaEntityButton2_Get_Part;this.PartIsVisible=A3xaEntityButton2_PartIsVisible;this.ShowPart=A3xaEntityButton2_ShowPart;this.Show=A3xaEntityButton2_Show;this.Get_Status=A3xaEntityButton2_Get_Status;this.AsyncChangeStatus=A3xaEntityButton2_AsyncChangeStatus;this.IsValid=A3xaEntityButton2_IsValid;this.OnClick=A3xaEntityButton2_OnClick;this.Set_Status=A3xaEntityButton2_Set_Status;this.Set_SrcBase=A3xaEntityButton2_Set_SrcBase;this.Flash=A3xaEntityButton2_Flash;this.IsFlashing=A3xaEntityButton2_IsFlashing;this.Set_Properties=A3xaEntityButton2_Set_Properties;this.Set_SrcInfo=A3xaEntityButton2_Set_SrcInfo;this.AttachProperties=A3xaEntityButton2_AttachProperties;this.IsMaster=A3xaEntityButton2_IsMaster;this.IsHeader=A3xaEntityButton2_IsHeader;this.IsAsync=A3xaEntityButton2_IsAsync;this.Get_Html=A3xaEntityButton2_Get_Html;this.PrintHtml=A3xaEntityButton2_PrintHtml;this.jm_oBtnON=null;this.jm_oBtnOFF=null;this.jm_oBtnDIS=null;this.jm_Tag="a3xabutton";this.jm_Name=ji_Name;this.jm_Rows=ji_Rows;this.jm_Row=ji_Row;this.jm_Col=ji_Col;this.jm_oListener=ji_oListener;this.jm_sSrcBase="";this.jm_sTitle="";this.jm_sAlt="";this.jm_sfnOnClick="";this.jm_ColTarget="";this.jm_StatusInit="OFF";this.jm_width=24;this.jm_height=24;this.jm_bParagraph=true;this.jm_bMaster=false;this.jm_bHeader=false;this.jm_bAjax=false;this.jm_oTimerFlash=null;this.jm_FlashFR_pending=null;this.jm_FlashFG_pending=null;this.jm_bShowUP_pending=false;this.jm_bShowUP_running=false;if(!this.jm_Name)
return;if(!(this.jm_Row>0))
return;if(!(this.jm_Col>0))
return;var jt_Id="CellBtn_"+this.jm_Name+"_"+this.jm_Row+"_"+this.jm_Col;this.jm_oBtnOFF=new A3xaHtmlItem2(jt_Id+"_OFF");if(this.jm_oBtnOFF==null)
return;this.jm_oBtnON=new A3xaHtmlItem2(jt_Id+"_ON");this.jm_oBtnDIS=new A3xaHtmlItem2(jt_Id+"_DIS");}
function A3xaEntityButton2_IsValid(){return!(this.jm_oBtnOFF==null);}
function A3xaEntityButton2_Get_Name(){return this.jm_Name;}
function A3xaEntityButton2_Set_SrcBase(ji_s){this.jm_sSrcBase=ji_s;return true;}
function A3xaEntityButton2_Set_SrcInfo(ji_sSrcBase,ji_sTitle,ji_sAlt,ji_sfnOnClick,ji_ColTarget,ji_sAjaxUrlParams,ji_StatusInit)
{this.jm_sSrcBase=ji_sSrcBase;this.jm_sTitle=ji_sTitle;this.jm_sAlt=ji_sAlt;this.jm_sfnOnClick=ji_sfnOnClick;this.jm_ColTarget=ji_ColTarget;this.jm_sAjaxUrlParams=ji_sAjaxUrlParams;if(ji_StatusInit)
this.jm_StatusInit=ji_StatusInit;return true;}
function A3xaEntityButton2_Set_Properties(ji_bParagraph)
{if(!(ji_bParagraph===null))
this.jm_bParagraph=(ji_bParagraph==true);return true;}
function A3xaEntityButton2_AttachProperties(ji_bMaster,ji_bHeader,ji_bAjax)
{if(!(ji_bMaster===null))
this.jm_bMaster=(ji_bMaster==true);if(!(ji_bHeader===null))
this.jm_bHeader=(ji_bHeader==true);if(!(ji_bAjax===null))
this.jm_bAjax=(ji_bAjax==true);return true;}
function A3xaEntityButton2_IsMaster(){return this.jm_bMaster;}
function A3xaEntityButton2_IsHeader(){return this.jm_bHeader;}
function A3xaEntityButton2_IsAsync(){return this.jm_bAjax;}
function A3xaEntityButton2_Get_Html()
{var jt_Id="CellBtn_"+this.Get_Name()+"_"+this.jm_Row+"_"+this.jm_Col;var jt_sHtmlOFF_visibility="visibility:hidden; position:absolute;";var jt_sHtmlON_visibility="visibility:hidden; position:absolute;";var jt_sHtmlDIS_visibility="visibility:hidden; position:absolute;";if((!this.jm_StatusInit)||this.jm_StatusInit=="OFF")
jt_sHtmlOFF_visibility="";else if(this.jm_StatusInit=="ON")
jt_sHtmlON_visibility="";else if(this.jm_StatusInit=="DIS")
jt_sHtmlDIS_visibility="";else if(this.jm_StatusInit=="HID");else;var jt_sfnOnClick_Full="";if(this.jm_sfnOnClick)
jt_sfnOnClick_Full=this.jm_sfnOnClick+"(&quot;"+this.Get_Name()+"&quot;,&quot;"+
this.jm_Rows+"&quot;,&quot;"+
this.jm_Row+"&quot;,&quot;"+this.jm_Col+"&quot;,&quot;"+
this.jm_ColTarget+"&quot;,&quot;"+
this.jm_sSrcBase+"&quot;,&quot;"+
this.jm_sAjaxUrlParams+"&quot;);";var jt_shON="<img id='"+jt_Id+"_ON'"+" name='"+jt_Id+"_ON'"+" src='"+this.jm_sSrcBase+"ON"+jc_gl.jc_oIcons.jc_sIconExt+"'"+" border='0' alt='"+this.jm_sAlt+"' title='"+this.jm_sTitle+"'"+" width='"+this.jm_width+"' height='"+this.jm_height+"'"+" style='"+jt_sHtmlON_visibility+"'"+" onclick = '"+jt_sfnOnClick_Full+"' />";var jt_shOFF="<img id='"+jt_Id+"_OFF'"+" name='"+jt_Id+"_OFF'"+" src='"+this.jm_sSrcBase+"OFF"+jc_gl.jc_oIcons.jc_sIconExt+"'"+" border='0' alt='"+this.jm_sAlt+"' title='"+this.jm_sTitle+"'"+" width='"+this.jm_width+"' height='"+this.jm_height+"'"+" style='"+jt_sHtmlOFF_visibility+"'"+" onclick = '"+jt_sfnOnClick_Full+"' />";var jt_shDIS="<img id='"+jt_Id+"_DIS'"+" name='"+jt_Id+"_DIS'"+" src='"+this.jm_sSrcBase+"DIS"+jc_gl.jc_oIcons.jc_sIconExt+"'"+" border='0' alt='"+this.jm_sAlt+"' title='"+this.jm_sTitle+"'"+" width='"+this.jm_width+"' height='"+this.jm_height+"'"+" style='"+jt_sHtmlDIS_visibility+"' />";var jr_h=(this.jm_bParagraph?"<p>":"")+
jt_shOFF+jt_shON+jt_shDIS+
(this.jm_bParagraph?"</p>":"");return jr_h;}
function A3xaEntityButton2_PrintHtml(qi_oParent)
{if(!(qi_oParent&&qi_oParent.length))
return false;var jt_sh=this.Get_Html();if(!(jt_sh&&jt_sh.length))
return false;qi_oParent.append(jt_sh);var jt_srcOFF=this.jm_sSrcBase+"OFF"+jc_gl.jc_oIcons.jc_sIconExt;var jt_srcOFFCLICK=this.jm_sSrcBase+"OFF-CLICK"+jc_gl.jc_oIcons.jc_sIconExt;var jt_srcOFFOVER=this.jm_sSrcBase+"OFF-OVER"+jc_gl.jc_oIcons.jc_sIconExt;var jt_IdOFF="#CellBtn_"+this.Get_Name()+"_"+this.jm_Row+"_"+this.jm_Col+"_OFF";var qr_ohOFF=jQuery(jt_IdOFF);if(qr_ohOFF&&qr_ohOFF.length)
{qr_ohOFF.mouseout(function()
{jQuery(this).attr("src",jt_srcOFF);jQuery(this).css("cursor","default");});qr_ohOFF.mousedown(function(){jQuery(this).attr("src",jt_srcOFFCLICK);});qr_ohOFF.mouseover(function()
{jQuery(this).attr("src",jt_srcOFFOVER);jQuery(this).css("cursor","pointer");});}
var jt_srcON=this.jm_sSrcBase+"ON"+jc_gl.jc_oIcons.jc_sIconExt;var jt_srcONCLICK=this.jm_sSrcBase+"ON-CLICK"+jc_gl.jc_oIcons.jc_sIconExt;var jt_srcONOVER=this.jm_sSrcBase+"ON-OVER"+jc_gl.jc_oIcons.jc_sIconExt;var jt_IdON="#CellBtn_"+this.Get_Name()+"_"+this.jm_Row+"_"+this.jm_Col+"_ON";var qr_ohON=jQuery(jt_IdON);if(qr_ohON&&qr_ohON.length)
{qr_ohON.mouseout(function()
{jQuery(this).attr("src",jt_srcON);jQuery(this).css("cursor","default");});qr_ohON.mousedown(function(){jQuery(this).attr("src",jt_srcONCLICK);});qr_ohON.mouseover(function()
{jQuery(this).attr("src",jt_srcONOVER);jQuery(this).css("cursor","pointer");});}
return true;}
function A3xaEntityButton2_Get_Part(ji_part)
{if(!this.IsValid())
return null;if(ji_part=="OFF")
return this.jm_oBtnOFF;else if(ji_part=="ON")
return this.jm_oBtnON;else if(ji_part=="DIS")
return this.jm_oBtnDIS;return null;}
function A3xaEntityButton2_PartIsVisible(ji_part)
{var jt_oPart=this.Get_Part(ji_part);if(jt_oPart==null)
return false;return jt_oPart.IsVisible();}
function A3xaEntityButton2_ShowPart(ji_part,ji_bShow)
{var jt_oPart=this.Get_Part(ji_part);if(jt_oPart==null)
return false;return jt_oPart.Show(ji_bShow);}
function A3xaEntityButton2_IsFlashing(){return this.jm_oTimerFlash!=null;}
function A3xaEntityButton2_Flash(ji_FlashType)
{var jt_this=this;var jt_Tag=this.jm_Tag;if(this.IsFlashing()||this.jm_bShowUP_running)
{if(ji_FlashType=="FR"||ji_FlashType=="FY")
this.jm_FlashFR_pending=ji_FlashType;else if(ji_FlashType=="FG"||ji_FlashType=="FB")
this.jm_FlashFG_pending=ji_FlashType;else
return false;return true;}
if(ji_FlashType=="FR"||ji_FlashType=="FY");else if(ji_FlashType=="FG"||ji_FlashType=="FB");else if(ji_FlashType==""||ji_FlashType==null)
{if(this.jm_FlashFR_pending)
{ji_FlashType=this.jm_FlashFR_pending;this.jm_FlashFR_pending=null;}
else if(this.jm_FlashFG_pending)
{ji_FlashType=this.jm_FlashFG_pending;this.jm_FlashFG_pending=null;}
else if(this.jm_bShowUP_pending)
{this.jm_bShowUP_pending=false;return this.Show("UP");}
else
return false;}
else
return false;var jt_oPartON=this.Get_Part("ON");var jt_oPartOFF=this.Get_Part("OFF");if(!this.jm_sSrcBase)
return false;if(jt_oPartON)
{jt_oPartON.Set_Src(jt_this.jm_sSrcBase+"ON-"+ji_FlashType+".png");}
if(jt_oPartOFF)
{jt_oPartOFF.Set_Src(jt_this.jm_sSrcBase+"OFF-"+ji_FlashType+".png");}
this.jm_oTimerFlash=setTimeout(function()
{if(jt_this.jm_Tag!="a3xabutton")
{return;}
if(jt_oPartON)
jt_oPartON.Set_Src(jt_this.jm_sSrcBase+"ON.png");if(jt_oPartOFF)
jt_oPartOFF.Set_Src(jt_this.jm_sSrcBase+"OFF.png");jt_this.jm_oTimerFlash=null;jt_this.Flash("");return;},800);return true;}
function A3xaEntityButton2_Show(ji_Status)
{if(!this.IsValid())
return false;var jt_oPartON=this.Get_Part("ON");var jt_oPartOFF=this.Get_Part("OFF");var jt_oPartDIS=this.Get_Part("DIS");if(ji_Status=="UP")
{this.jm_bShowUP_pending=false;if(this.jm_sSrcBase)
{if(this.IsFlashing())
{this.jm_bShowUP_running=false;this.jm_bShowUP_pending=true;return true;}
this.jm_bShowUP_running=true;if(jt_oPartON)
jt_oPartON.Set_Src(this.jm_sSrcBase+"ON-"+ji_Status+".png");if(jt_oPartOFF)
jt_oPartOFF.Set_Src(this.jm_sSrcBase+"OFF-"+ji_Status+".png");}
return true;}
else
{this.jm_bShowUP_pending=false;this.jm_bShowUP_running=false;if(this.jm_sSrcBase)
{if(jt_oPartON)
jt_oPartON.Set_Src(this.jm_sSrcBase+"ON.png");if(jt_oPartOFF)
jt_oPartOFF.Set_Src(this.jm_sSrcBase+"OFF.png");if(jt_oPartDIS)
jt_oPartDIS.Set_Src(this.jm_sSrcBase+"DIS.png");}
this.Flash("");}
var jt_bON=false;var jt_bOFF=false;var jt_bDIS=false;if(ji_Status=="ON")
jt_bON=true;else if(ji_Status=="OFF")
jt_bOFF=true;else if(ji_Status=="DIS")
jt_bDIS=true;this.ShowPart("ON",jt_bON);this.ShowPart("OFF",jt_bOFF);this.ShowPart("DIS",jt_bDIS);return true;}
function A3xaEntityButton2_Get_Status()
{if(!this.IsValid())
return"";if(this.PartIsVisible("ON"))
return"ON";if(this.PartIsVisible("OFF"))
return"OFF";if(this.PartIsVisible("DIS"))
return"DIS";return"HID";}
function A3xaEntityButton2_AsyncChangeStatus(ji_NewStatus)
{if(this.jm_oListener==null)
return false;if(!this.jm_oListener.AsyncChangeStatus(this.jm_Name,ji_NewStatus))
{return false;}
return true;}
function A3xaEntityButton2_Set_Status(ji_NewStatus,ji_bAsync,ji_bIgnoreDisabled)
{if(ji_NewStatus=="")
return false;var jt_btnStatus=this.Get_Status();if(jt_btnStatus!=""&&(ji_bIgnoreDisabled||(jt_btnStatus!="HID"&&jt_btnStatus!="DIS")))
{if(ji_NewStatus=="INV")
{ji_NewStatus="ON";if(jt_btnStatus=="ON")
ji_NewStatus="OFF";}
else if(ji_NewStatus=="KS")
{ji_NewStatus=jt_btnStatus;}
if(ji_bAsync&&this.IsAsync()&&this.AsyncChangeStatus(ji_NewStatus))
{this.Show("UP");return false;}
this.Show(ji_NewStatus);jt_btnStatus=this.Get_Status();}
if(this.jm_oListener!=null)
return this.jm_oListener.OnBtnChangeStatus(this.jm_Name,jt_btnStatus);return true;}
function A3xaEntityButton2_OnClick(){return this.Set_Status("INV",true);}
function A3xaEntityButtonSet2(ji_aNames,ji_Rows,ji_Row,ji_Col,ji_bMasterSlave,ji_bAjax,ji_bOnlyOneON)
{this.Get_Button=A3xaEntityButtonSet2_Get_Button;this.Show=A3xaEntityButtonSet2_Show;this.IsValid=A3xaEntityButtonSet2_IsValid;this.IsMaster=A3xaEntityButtonSet2_IsMaster;this.Get_ButtonStatus=A3xaEntityButtonSet2_Get_ButtonStatus;this.Set_ButtonStatus=A3xaEntityButtonSet2_Set_ButtonStatus;this.FlashButton=A3xaEntityButtonSet2_FlashButton;this.OnButtonClick=A3xaEntityButtonSet2_OnButtonClick;this.Set_SlavesButtonStatus=A3xaEntityButtonSet2_Set_SlavesButtonStatus;this.IsAjaxEnabled=A3xaEntityButtonSet2_IsAjaxEnabled;this.OnBtnChangeStatus=A3xaEntityButtonSet2_OnBtnChangeStatus;this.AsyncChangeStatus=A3xaEntityButtonSet2_AsyncChangeStatus;this.NewSlavePanel=A3xaEntityButtonSet2_NewSlavePanel;this.Get_AjaxUrlParams=A3xaEntityButtonSet2_Get_AjaxUrlParams;this.Set_AjaxUrlParams=A3xaEntityButtonSet2_Set_AjaxUrlParams;this.OnAjaxReadyFn=A3xaEntityButtonSet2_OnAjaxReadyFn;this.PrintHtml_Buttons=A3xaEntityButtonSet2_PrintHtml_Buttons;this.PrintHtml_HeaderButtons=A3xaEntityButtonSet2_PrintHtml_HeaderButtons;this.InitButtonsStatus=A3xaEntityButtonSet2_InitButtonsStatus;this.jm_aoButtons=null;this.jm_Rows=ji_Rows;this.jm_Row=ji_Row;this.jm_Col=ji_Col;this.jm_bMaster=false;this.jm_bAjax=ji_bAjax;this.jm_bOnlyOneON=(ji_bOnlyOneON==true);if(ji_aNames==null||ji_aNames.length<=0)
return;if(!(ji_Row>0&&ji_Col>0))
return;if(ji_bMasterSlave==true)
{var jt_RowElem=document.getElementById("Row_"+ji_Row);if(jt_RowElem==null)
jt_RowElem=document.getElementById("RowS_"+ji_Row);if(jt_RowElem!=null)
{var jt_odce=new A3xaDCEntity();jt_odce.Get_3xXEID().Set_String(jt_RowElem.getAttribute('XEIDCode'));var jt_o3xcat_xapp=new A3xaCategoryCode_XApp(jt_odce.Get_3xXEID());if(jt_o3xcat_xapp.IsMetasystem_Control()&&jg_oApp.jm_oecp&&jg_oApp.jm_oecp.Set_MasterPanelRow(ji_Row))
{this.jm_bMaster=true;}}}
this.jm_aoButtons=new Array();for(var i=0;i<ji_aNames.length;i++)
{var jt_n=ji_aNames[i];if(jt_n)
{var jt_o=new A3xaEntityButton2(jt_n,ji_Rows,ji_Row,ji_Col,this);this.jm_aoButtons[i]=jt_o;}}}
function A3xaEntityButtonSet2_IsAjaxEnabled(){return this.jm_bAjax;}
function A3xaEntityButtonSet2_IsValid(){return!(this.jm_aoButtons==null);}
function A3xaEntityButtonSet2_Get_Button(ji_Name)
{if(!this.IsValid())
return null;if(!ji_Name)
return null;for(var i=0;i<this.jm_aoButtons.length;i++)
{var jt_o=this.jm_aoButtons[i];var jt_n=jt_o.Get_Name();if(jt_n==ji_Name)
return jt_o;}
return null;}
function A3xaEntityButtonSet2_IsMaster()
{if(!this.IsValid())
return false;return this.jm_bMaster;}
function A3xaEntityButtonSet2_PrintHtml_Buttons(qi_oParent)
{if(!this.IsValid())
return false;var jr_b=true;for(var i=0;i<this.jm_aoButtons.length;i++)
{var jt_o=this.jm_aoButtons[i];if(!jt_o)
continue;if(jt_o.IsHeader())
continue;if(!jt_o.PrintHtml(qi_oParent))
jr_b=false;}
return jr_b;}
function A3xaEntityButtonSet2_PrintHtml_HeaderButtons(qi_oParent)
{if(!this.IsValid())
return false;var jr_b=true;for(var i=0;i<this.jm_aoButtons.length;i++)
{var jt_o=this.jm_aoButtons[i];if(!jt_o)
continue;if(!jt_o.IsHeader())
continue;if(!jt_o.PrintHtml(qi_oParent))
jr_b=false;}
return jr_b;}
function A3xaEntityButtonSet2_Show(ji_Status)
{if(!this.IsValid())
return false;if(ji_Status=="ON")
ji_Status="OFF";var jr_b=true;for(var i=0;i<this.jm_aoButtons.length;i++)
{if(!this.jm_aoButtons[i].Show(ji_Status))
jr_b=false;}
return jr_b;}
function A3xaEntityButtonSet2_Set_AjaxUrlParams(ji_ButtonName,ji_sAjaxUrlParams)
{return false;}
function A3xaEntityButtonSet2_Get_AjaxUrlParams(ji_ButtonName,ji_ButtonStatus)
{return"";}
function A3xaEntityButtonSet2_OnAjaxReadyFn(ji_ogAjaxResponse)
{var jt_ButtonName=ji_ogAjaxResponse.Get_ItemValue("ButtonName");var jt_ButtonStatus=ji_ogAjaxResponse.Get_ItemValue("ButtonStatus");this.Set_ButtonStatus(jt_ButtonName,jt_ButtonStatus,false);return true;}
function A3xaEntityButtonSet2_AsyncChangeStatus(ji_Name,ji_NewStatus)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("name,status,ajax: "+
ji_Name+","+ji_NewStatus+","+(this.IsAjaxEnabled()?"Y":"N"),"","A3xaEntityButtonSet2_AsyncChangeStatus")
if(this.IsAjaxEnabled())
{var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_AjaxEntity,null,jc_gl.jc_oAjax.jc_sAjaxTypControlIcons,null,null,null,null,null);var jt_oUrl=jt_oxur.Get_A3xaUrl(true);var jt_sAjaxUrlParams=jt_oUrl.Get_UrlParams();jt_sAjaxUrlParams+="&p_ButtonName="+ji_Name+"&p_ButtonStatus="+ji_NewStatus;jt_sAjaxUrlParams+=this.Get_AjaxUrlParams(ji_Name,ji_NewStatus);jg_oe.jm_oAjax2.QueueRequest(new A3xaAjaxRequest2(jt_oUrl.Get_UrlBase(),jt_sAjaxUrlParams,this));return true;}
return false;}
function A3xaEntityButtonSet2_OnBtnChangeStatus(ji_name,ji_btnStatus)
{if(!this.IsValid())
return false;var jt_bMaster=false;for(var i=0;i<this.jm_aoButtons.length;i++)
{var jt_o=this.jm_aoButtons[i];if(!jt_o)
continue;var jt_n=jt_o.Get_Name();if(jt_n!=ji_name)
{var jt_s=jt_o.Get_Status();if(jt_s=="ON")
{if(this.jm_bOnlyOneON)
jt_o.Show("OFF");}}
else
jt_bMaster=jt_o.IsMaster();}
if(!(this.IsMaster()&&jt_bMaster))
return true;return this.Set_SlavesButtonStatus(ji_name,ji_btnStatus);}
function A3xaEntityButtonSet2_OnButtonClick(ji_Name)
{if(!this.IsValid())
return false;var jt_o=this.Get_Button(ji_Name);if(jt_o)
{return jt_o.OnClick();}
return false;}
function A3xaEntityButtonSet2_Set_ButtonStatus(ji_Name,ji_NewStatus,ji_bAsync)
{if(!this.IsValid())
return false;var jt_o=this.Get_Button(ji_Name);if(jt_o)
return jt_o.Set_Status(ji_NewStatus,ji_bAsync);return false;}
function A3xaEntityButtonSet2_Get_ButtonStatus(ji_Name)
{var jt_o=this.Get_Button(ji_Name);if(jt_o)
return jt_o.Get_Status();return"";}
function A3xaEntityButtonSet2_FlashButton(ji_Name,ji_FlashType)
{if(!this.IsValid())
return false;var jt_o=this.Get_Button(ji_Name);if(jt_o)
{return jt_o.Flash(ji_FlashType);}
return false;}
function A3xaEntityButtonSet2_Set_SlavesButtonStatus(ji_Name,ji_NewStatus)
{if(!this.IsValid())
return false;if(!this.IsMaster())
return false;var jr_b=true;for(var jt_Row=1;jt_Row<=500;jt_Row++)
{if(jt_Row==this.jm_Row)
continue;var jt_RowElem=document.getElementById("Row_"+jt_Row);if(jt_RowElem==null)
jt_RowElem=document.getElementById("RowS_"+jt_Row);if(jt_RowElem==null)
break;var jt_oSlavePanel=this.NewSlavePanel(null,this.jm_Rows,jt_Row,this.jm_Col);if(jt_oSlavePanel!=null&&(!jt_oSlavePanel.Set_ButtonStatus(ji_Name,ji_NewStatus,false)))
jr_b=false;}
return jr_b;}
function A3xaEntityButtonSet2_NewSlavePanel(ji_aNames,ji_Rows,ji_Row,ji_Col)
{return new A3xaEntityButtonSet2(ji_aNames,ji_Rows,ji_Row,ji_Col,false,false);}
function A3xaEntityButtonSet2_InitButtonsStatus(ji_Status)
{if(!this.IsValid())
return false;for(var i=0;i<this.jm_aoButtons.length;i++)
{var jt_o=this.jm_aoButtons[i];jt_o.Set_Status(ji_Status,false);}
return true;}
function GLData(ji_glidmark,ji_fieldseparator)
{this.Get_Glid=GLData_Get_Glid;this.Set_Glid=GLData_Set_Glid;this.Get_Id=GLData_Get_Id;this.Set_Id=GLData_Set_Id;this.Get_Record_Array=GLData_Get_Record_Array;this.Get_Record_RSFieldArray=GLData_Get_Record_RSFieldArray;this.Set_Record_Array=GLData_Set_Record_Array;this.Get_Record_String=GLData_Get_Record_String;this.Get_Record_String2=GLData_Get_Record_String2;this.Set_Record_String=GLData_Set_Record_String;this.ConvertSpecialChars=GLData_ConvertSpecialChars;this.Get_String=GLData_Get_String;this.Get_String2=GLData_Get_String2;this.ConvertField=GLData_ConvertField;this.Set_String=GLData_Set_String;this.Set_XString=GLData_Set_XString;this.LoadFromGLS=GLData_LoadFromGLS;this.StoreToGLS=GLData_StoreToGLS;this.LoadFromGLS_ByString=GLData_LoadFromGLS_ByString;this.IsValid=GLData_IsValid;this.Get_GlidMark=GLData_Get_GlidMark;this.Get_FieldSeparator=GLData_Get_FieldSeparator;this.Get_XGlid=GLData_Get_XGlid;this.Set_XGlid=GLData_Set_XGlid;this.Get_XKey=GLData_Get_XKey;this.jm_oDTStatus=new GLDataStatus();this.jm_glidmark="";this.jm_fieldseparator="";if(ji_glidmark)
this.jm_glidmark=ji_glidmark;if(ji_fieldseparator)
this.jm_fieldseparator=ji_fieldseparator;this.jm_glid=null;this.jm_id=null;this.jm_aRecord=null;this.jm_aarsFieldArray=null;}
function GLData_Get_GlidMark(){return this.jm_glidmark;}
function GLData_Get_FieldSeparator(){return this.jm_fieldseparator;}
function GLData_IsValid(){return this.Get_XGlid()||false;}
function GLData_Get_Glid(){return this.jm_glid;}
function GLData_Set_Glid(ji_glid)
{this.jm_glid=null;if(!ji_glid)
return true;if(!jc_gl.jc_oA3xaDbZero.CheckGlid(ji_glid))
return false;this.jm_glid=ji_glid;return true;}
function GLData_Get_Id(){return this.jm_id;}
function GLData_Set_Id(ji_id){this.jm_id=ji_id;return true;}
function GLData_Get_XKey()
{var jt_xglid=this.Get_XGlid();if(!jt_xglid)
return"";var jt_id=this.Get_Id();if(!jt_id)
return jt_xglid;return jt_xglid.toString()+","+jt_id;}
function GLData_Get_XGlid()
{var jt_xglid=this.Get_Glid();if(!jc_gl.jc_oA3xaDbZero.CheckGlid(jt_xglid))
return"";return jt_xglid+this.Get_GlidMark();}
function GLData_Set_XGlid(ji_xglid)
{this.jm_glid=null;if(!ji_xglid)
return false;var jt_glid=jc_gl.jc_oA3xaDbZero.XGlid2Glid(ji_xglid);var jt_glmark=jc_gl.jc_oA3xaDbZero.XGlid2Mark(ji_xglid);if(jt_glmark&&jt_glmark!=this.Get_GlidMark())
return false;return this.Set_Glid(jt_glid);}
function GLData_Get_Record_RSFieldArray(ji_pos)
{if(!this.IsValid())
return null;if(!(ji_pos>=0))
return null;if(!(this.jm_aarsFieldArray&&this.jm_aarsFieldArray[ji_pos]))
{var jt_aRecord=this.Get_Record_Array();if(!jt_aRecord)
return null;var jt_sfa=jt_aRecord[ji_pos];if(!jt_sfa)
return null;var jt_asrfa=jt_sfa.split(jc_gl.jc_oA3xaDbZero.jc_GLSep_FieldArray);var jt_arsFieldArray=new Array();var jt_nof_fafields=0;if(!this.jm_aarsFieldArray)
this.jm_aarsFieldArray=new Array();for(var i=0;i<jt_asrfa.length;i++)
{if(!jt_asrfa[i])
continue;var jt_arecFieldArray=jt_asrfa[i].split(jc_gl.jc_oA3xaDbZero.jc_GLSep_Compact);if(!jt_arecFieldArray)
continue;if(!jt_nof_fafields)
jt_nof_fafields=jt_arecFieldArray.length;else if(jt_nof_fafields!=jt_arecFieldArray.length)
{jt_arsFieldArray=new Array();break;}
jt_arsFieldArray.push(jt_arecFieldArray);}
this.jm_aarsFieldArray[ji_pos]=jt_arsFieldArray;}
return this.jm_aarsFieldArray[ji_pos];}
function GLData_Get_Record_Array()
{if(!this.IsValid())
return null;return this.jm_aRecord;}
function GLData_Set_Record_Array(ji_xglid,ji_id,ji_aRecord)
{this.jm_aRecord=null;if(!this.Set_XGlid(ji_xglid))
return false;if(!this.Set_Id(ji_id))
return false;this.jm_aRecord=ji_aRecord;return true;}
function GLData_Get_Record_String(){return this.Get_Record_String2(0);}
function GLData_ConvertField(ji_sField,ji_index,ji_OptionConvert){return ji_sField;}
function GLData_Get_Record_String2(ji_OptionConvert)
{var jt_aRecord=this.Get_Record_Array();if(!jt_aRecord||(!jt_aRecord.length))
return"";if(!ji_OptionConvert)
return jt_aRecord.join(this.Get_FieldSeparator());var jr_sRecordConverted="";for(var i=0;i<jt_aRecord.length;i++)
{var jt_sField=this.ConvertField(jt_aRecord[i],i,ji_OptionConvert);if(jt_sField&&jt_sField.length)
jr_sRecordConverted+=jt_sField;}
return jr_sRecordConverted;}
function GLData_Set_Record_String(ji_xglid,ji_id,ji_posid,ji_sRecord,ji_bSpecialChars)
{var jt_aRecord=null;if(ji_sRecord)
jt_aRecord=ji_sRecord.split(this.Get_FieldSeparator());if(!(ji_id||ji_posid===null))
ji_id=jt_aRecord[ji_posid];return this.Set_Record_Array(ji_xglid,ji_id,ji_bSpecialChars?this.ConvertSpecialChars(jt_aRecord):jt_aRecord);}
function GLData_ConvertSpecialChars(ji_aRecord){return ji_aRecord;}
function GLData_Get_String(ji_xglidSpoof){return this.Get_String2(0,ji_xglidSpoof);}
function GLData_Get_String2(ji_OptionConvert,ji_xglidSpoof)
{var jt_xglid=null;if(ji_xglidSpoof)
{var jt_glmark=jc_gl.jc_oA3xaDbZero.XGlid2Mark(ji_xglidSpoof);if(jt_glmark&&jt_glmark!=this.Get_GlidMark())
return"";var jt_glidSpoof=jc_gl.jc_oA3xaDbZero.XGlid2Glid(ji_xglidSpoof);if(jt_glidSpoof)
jt_xglid=jt_glidSpoof+this.Get_GlidMark();}
if(!jt_xglid)
jt_xglid=this.Get_XGlid();if(!jt_xglid)
return"";return jt_xglid+jc_gl.jc_oA3xaDbZero.jc_GLSep_Header+this.Get_Record_String2(ji_OptionConvert);}
function GLData_Set_String(ji_sData)
{return this.Set_XString(null,null,null,ji_sData);}
function GLData_Set_XString(ji_xglid,ji_id,ji_posid,ji_sData)
{if(!ji_sData)
return this.Set_Record_Array(null,null,null);var jt_aData=ji_sData.split(jc_gl.jc_oA3xaDbZero.jc_GLSep_Header);if(!jt_aData||!jt_aData[0])
return this.Set_Record_Array(null,null,null);if(ji_xglid==null)
ji_xglid=jt_aData[0];else if(ji_id==null&&ji_posid===null)
ji_id=jt_aData[0];return this.Set_Record_String(ji_xglid,ji_id,ji_posid,jt_aData[1],true);}
function GLData_LoadFromGLS(ji_oDbTransaction,ji_xglid,ji_id)
{if(ji_xglid)
this.Set_XGlid(ji_xglid);if(ji_id)
this.Set_Id(ji_id);if(!this.IsValid())
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLData_LoadFromGLS: "+ji_xglid+","+ji_id);if(!ji_oDbTransaction)
return false;try
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadInProgress);}
catch(e)
{jg_oe.ExceptionMessage(e,"");}
var jr_b=ji_oDbTransaction.Get_Storage().Read3(ji_oDbTransaction,new GLData_Value(this.Get_XKey(),null,this));return jr_b;}
function GLData_StoreToGLS(ji_oDbTransaction)
{if(!this.IsValid())
return false;if(!ji_oDbTransaction)
return false;this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreInProgress);if(!ji_oDbTransaction.Get_Storage().Write3(ji_oDbTransaction,new GLData_Value(this.Get_XKey(),this.Get_Record_String(),this)))
return false;return true;}
function GLData_LoadFromGLS_ByString(ji_oDbTransaction,ji_sData)
{if(!this.Set_String(ji_sData))
return false;return this.LoadFromGLS(ji_oDbTransaction,null,null);}
function GLDataStatus(ji_DTStatus,ji_sMessage,ji_fnOnChange)
{this.jm_DTStatus=(ji_DTStatus||jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty);this.jm_sMessage=(ji_sMessage||"");this.jm_fnOnChange=(ji_fnOnChange||null);this.jm_Operation=null;this.jm_Target=null;this.jm_Status=null;this.IsReady=function()
{return this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StReady;};this.IsInProgress=function()
{return this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress||this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StOpen;};this.IsOpen=function()
{return this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StOpen;};this.IsDone=function()
{return this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess||this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail||this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StEmpty;};this.IsFail=function()
{return this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail;};this.IsEmpty=function()
{return this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StEmpty;};this.IsSuccess=function()
{return this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess;};this.IsLoadingTable=function()
{return this.jm_Operation==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad&&this.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX&&this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;};this.IsLoadingRecord=function()
{return this.jm_Operation==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad&&this.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgRecord&&this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;};this.IsStoring=function()
{return this.jm_Operation==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpStore&&this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;};this.Set2=GLDataStatus_Set2;this.Get=function(){return this.jm_DTStatus||jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty;};this.Set=function(ji_DTStatus,ji_sMessage)
{this.jm_DTStatus=ji_DTStatus;this.MakeOTS();return this.Set2(null,null,null,ji_sMessage);};this.SetFrom=function(ji_oDTStatus)
{if(!ji_oDTStatus)
return false;this.jm_DTStatus=ji_oDTStatus.Get();this.jm_Operation=ji_oDTStatus.jm_Operation;this.jm_Target=ji_oDTStatus.jm_Target;return this.Set2(ji_oDTStatus.jm_Status,ji_oDTStatus.jm_sMessage);};this.Get_OperationDescr=function()
{if(this.jm_Operation==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpCache)
return" [ op:Cache ] ";if(this.jm_Operation==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpClear)
return" [ op:ClearDB ] ";if(this.jm_Operation==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpStore)
return" [ op:Store ] ";if(this.jm_Operation==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad)
return" [ op:Load ] ";return" [ op:Unknown ] ";};this.Get_TargetDescr=function()
{if(this.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable)
return" [ tg:Table ] ";if(this.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHeader)
return" [ tg:TbHeader ] ";if(this.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX)
return" [ tg:TbH+X ] ";if(this.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgRecord)
return" [ tg:Record ] ";return" [ tg:Any ] ";};this.Get_StatusDescr=function()
{if(this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StReady)
return" [ st:Ready ] ";if(this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StOpen)
return" [ st:Open ] ";if(this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress)
return" [ st:InProgress ] ";if(this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess)
return" [ st:Success ] ";if(this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail)
return" [ st:Fail ] ";if(this.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StEmpty)
return" [ st:Empty ] ";return" [ st:Unknown ] ";};this.Get_Descr2=function()
{return this.Get_OperationDescr()+this.Get_TargetDescr()+this.Get_StatusDescr();};this.Get_Descr=GLDataStatus_Get_Descr;this.MakeOTS=GLDataStatus_MakeOTS;this.MakeOTS();}
function GLDataStatus2(ji_Status,ji_Target,ji_Operation,ji_sMessage,ji_fnOnChange)
{GLDataStatus.call(this,null,ji_sMessage,ji_fnOnChange);this.jm_Target=(ji_Target||null);this.jm_Operation=(ji_Operation||null);this.jm_Status=(ji_Status||null);}
function GLDataStatus_Set2(ji_Status,ji_Target,ji_Operation,ji_sMessage)
{if(ji_Status>0||ji_Status===0)
this.jm_Status=ji_Status;if(ji_Target>0)
this.jm_Target=ji_Target;if(ji_Operation>0)
this.jm_Operation=ji_Operation;this.jm_sMessage=(ji_sMessage||"");if(this.IsFail())
{jg_oe.LogErr(this.jm_sMessage+
this.Get_OperationDescr()+this.Get_TargetDescr()+this.Get_StatusDescr(),null,"GLDataStatus_Set2");}
else if(this.jm_sMessage)
jg_oe.CanLogInfo()&&jg_oe.LogInfo(this.jm_sMessage,null,"GLDataStatus_Set2");if(this.jm_fnOnChange)
this.jm_fnOnChange(this);return true;}
function GLDataStatus_MakeOTS()
{if(!this.jm_DTStatus&&this.jm_DTStatus!=jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty)
return false;if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty)
{this.jm_Operation=null;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StEmpty;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cached)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpCache;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpCache;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheInProgress)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpCache;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgRecord;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedTable)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StEmpty;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadRecordInProgress)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgRecord;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadTableInProgress)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadOpen)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StOpen;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Stored)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpStore;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpStore;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreEmpty)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpStore;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StEmpty;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreInProgress)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpStore;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreOpen)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpStore;this.jm_Target=null;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StOpen;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cleared)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpClear;this.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearFail)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpClear;this.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearInProgress)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpClear;this.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;}
else if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearOpen)
{this.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpClear;this.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable;this.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StOpen;}
return true;}
function GLDataStatus_Get_Descr()
{if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty)
return"-dts-Empty-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cached)
return"-dts-Cached-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail)
return"-dts-CacheFail-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheInProgress)
return"-dts-CacheInProgress-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
return"-dts-Loaded-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord)
return"-dts-LoadedRecord-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedTable)
return"-dts-LoadedTable-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail)
return"-dts-LoadFail-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty)
return"-dts-LoadEmpty-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadRecordInProgress)
return"-dts-LoadRecordInProgress-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadTableInProgress)
return"-dts-LoadTableInProgress-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadOpen)
return"-dts-LoadOpen-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Stored)
return"-dts-Stored-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail)
return"-dts-StoreFail-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreEmpty)
return"-dts-StoreEmpty-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreInProgress)
return"-dts-StoreInProgress-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreOpen)
return"-dts-StoreOpen-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cleared)
return"-dts-Cleared-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearFail)
return"-dts-ClearFail-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearInProgress)
return"-dts-ClearInProgress-";if(this.jm_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearOpen)
return"-dts-ClearOpen-";return"-dts-Unknown-";}
function GLData_Value(ji_xkey,ji_value,ji_ogldTarget)
{A3xaStorage_Value.call(this,ji_xkey,ji_value);this.Set_Result=GLData_Value_Set_Result;this.Set_Value=GLData_Value_Set_Value;this.jm_ogldTarget=ji_ogldTarget;}
function GLData_Value_Set_Result(ji_oStorageOpType,ji_sMessage)
{if(!this.jm_ogldTarget)
return false;if(ji_oStorageOpType.bStore)
{if(ji_oStorageOpType.bSuccess)
{this.jm_ogldTarget.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Stored,ji_sMessage);}
else
{this.jm_ogldTarget.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,ji_sMessage);}}
else
{if(ji_oStorageOpType.bSuccess)
{this.jm_ogldTarget.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded,ji_sMessage);}
else if(ji_oStorageOpType.bEmpty)
{this.jm_ogldTarget.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty,ji_sMessage);}
else
{this.jm_ogldTarget.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,ji_sMessage);}}
return ji_oStorageOpType.bSuccess||false;}
function GLData_Value_Set_Value(ji_value)
{if(!this.jm_ogldTarget)
return false;if(!ji_value)
return this.Set_Result({bLoad:true,bError:true},"Load Record: "+this.Get_Key()+"=Empty Value");if(!this.jm_ogldTarget.Set_Record_String(this.jm_ogldTarget.Get_XGlid(),this.jm_ogldTarget.Get_Id(),null,ji_value,false))
return this.Set_Result({bLoad:true,bError:true},"Load Record: "+this.Get_Key()+ji_value);return this.Set_Result({bLoad:true,bSuccess:true});}
function GLHeader(ji_glidmark,ji_fieldseparator)
{if(ji_glidmark==null)
ji_glidmark=jc_gl.jc_oA3xaDbZero.jc_GLMID_DT;if(ji_fieldseparator==null)
ji_fieldseparator=jc_gl.jc_oA3xaDbZero.jc_GLSep_Field;GLData.call(this,ji_glidmark,ji_fieldseparator);this.Get_Release=GLHeader_Get_Release;this.Get_FieldNames=GLHeader_Get_FieldNames;this.Set_FieldNames=GLHeader_Set_FieldNames;this.Get_Recordset=GLHeader_Get_Recordset;this.Set_Recordset=GLHeader_Set_Recordset;this.Get_FullString=GLHeader_Get_FullString;this.jm_oglNames=null;this.jm_oglRS=null;}
function GLHeader_Get_Release()
{var jt_aRecord=this.Get_Record_Array();if(!jt_aRecord)
return"";return jt_aRecord[0];}
function GLHeader_Get_FieldNames()
{if((!this.jm_oglNames)||(!this.jm_oglNames.IsValid()))
return null;return this.jm_oglNames;}
function GLHeader_Set_FieldNames(jt_oglNames)
{this.jm_oglNames=jt_oglNames;return true;}
function GLHeader_Get_Recordset()
{if((!this.jm_oglRS)||(!this.jm_oglRS.IsValid()))
return null;return this.jm_oglRS;}
function GLHeader_Set_Recordset(jt_oglRS)
{this.jm_oglRS=jt_oglRS;return true;}
function GLHeader_Get_FullString()
{var jr_sHeader=this.Get_String();if(!jr_sHeader)
return"";jt_oglAx=this.Get_Recordset();if(!jt_oglAx)
return"";var jr_sAx=jt_oglAx.Get_String2(2);if(!jr_sAx)
return"";return jr_sHeader+jc_gl.jc_oA3xaDbZero.jc_GLSep_Block+jr_sAx;}
function GLFieldNames()
{GLData.call(this,jc_gl.jc_oA3xaDbZero.jc_GLMID_FieldNames,jc_gl.jc_oA3xaDbZero.jc_GLSep_Field);this.Get_FieldPos=GLFieldNames_Get_FieldPos;this.Get_PosArray=GLFieldNames_Get_PosArray;this.Get_KeyName=GLFieldNames_Get_KeyName;this.jm_aPos=null;}
function GLFieldNames_Get_KeyName()
{var jt_aGLNames=this.Get_Record_Array();if(!jt_aGLNames)
return null;return jt_aGLNames[0];}
function GLFieldNames_Get_FieldPos(ji_name)
{if(!ji_name)
return-1;if(this.jm_aPos==null)
{if(!this.Get_PosArray())
return-1;if(this.jm_aPos==null)
return-1;}
var jr_pos=this.jm_aPos[ji_name];if(jr_pos>=0)
return jr_pos;return-1;}
function GLFieldNames_Get_PosArray()
{var jt_aGLNames=this.Get_Record_Array();if(jt_aGLNames==null)
return false;if(this.jm_aPos==null)
this.jm_aPos=new Array();for(var jt_pos=0;jt_pos<jt_aGLNames.length;jt_pos++)
{var jt_name=jt_aGLNames[jt_pos];if(jt_name)
this.jm_aPos[jt_name]=jt_pos;}
return true;}
function GLRecord(ji_glidmark)
{if(ji_glidmark==null)
ji_glidmark=jc_gl.jc_oA3xaDbZero.jc_GLMID_DT;GLData.call(this,ji_glidmark,jc_gl.jc_oA3xaDbZero.jc_GLSep_Field);this.Set_PosId=GLRecord_Set_PosId;this.Set_String=GLRecord_Set_String;this.Set_Names=GLRecord_Set_Names;this.Get_Field=GLRecord_Get_Field;this.Get_FieldArray_Recordset=GLRecord_Get_FieldArray_Recordset;this.jm_oglFieldNames=null;this.jm_posid=null;this.jm_aoglrSub=new Array();this.GLRecord_Set_SubRecord=function(ji_SubType,ji_oglrSub)
{if(!(ji_SubType&&ji_oglrSub))
return false;this.jm_aoglrSub[ji_SubType]=ji_oglrSub;return true;};this.Set_SubRecord=function(ji_SubType,ji_oglrSub)
{return this.GLRecord_Set_SubRecord(ji_SubType,ji_oglrSub);};this.Get_SubRecord=function(ji_SubType)
{if(!ji_SubType)
return null;return this.jm_aoglrSub[ji_SubType]||null;};}
function GLRecord_Set_PosId(ji_posid){this.jm_posid=ji_posid;return true;}
function GLRecord_Set_String(ji_sData)
{var jt_xglid=this.Get_XGlid();if(!jt_xglid)
return false;return this.Set_XString(jt_xglid,null,this.jm_posid,ji_sData);}
function GLRecord_Set_Names(ji_oglFieldNames)
{this.jm_oglFieldNames=ji_oglFieldNames;return true;}
function GLRecord_Get_Field(ji_name)
{if(!this.IsValid())
return null;if(!this.jm_oglFieldNames)
return null;var jt_aRecord=this.Get_Record_Array();if(!jt_aRecord)
return null;var jt_pos=this.jm_oglFieldNames.Get_FieldPos(ji_name);if(jt_pos<0)
return null;return jt_aRecord[jt_pos];}
function GLRecord_Get_FieldArray_Recordset(ji_name)
{if(!this.IsValid())
return null;if(!this.jm_oglFieldNames)
return null;var jt_pos=this.jm_oglFieldNames.Get_FieldPos(ji_name);if(!(jt_pos>=0))
return null;return this.Get_Record_RSFieldArray(jt_pos);}
function GLGT(ji_glidmark,ji_fieldseparator,ji_bAssoc)
{if(!ji_glidmark)
ji_glidmark=jc_gl.jc_oA3xaDbZero.jc_GLMID_GT;if(!ji_fieldseparator)
ji_fieldseparator=jc_gl.jc_oA3xaDbZero.jc_GLSep_Field
GLData.call(this,ji_glidmark,ji_fieldseparator);this.Get_Id=GLGT_Get_Id;this.SplitAndCacheRows=GLGT_SplitAndCacheRows;this.Get_Field=GLGT_Get_Field;this.Get_IndirectIndex=GLGT_Get_IndirectIndex;this.Get_Field_Indirect=GLGT_Get_Field_Indirect;this.ConvertField=GLGT_ConvertField;this.jm_bAssoc=(ji_bAssoc==true);this.jm_aGTKeys=null;this.jm_aGTIndirectIndex=null;}
function GLGT_Get_Id(ji_index)
{if(this.jm_bAssoc)
return null;if(!(ji_index>=0))
return null;ji_index+=1;var jt_aIndex=this.Get_Record_Array();if((!jt_aIndex)||ji_index>=jt_aIndex.length)
return false;return jt_aIndex[ji_index];}
function GLGT_SplitAndCacheRows()
{if(!this.jm_bAssoc)
return null;this.jm_aGTKeys=null;this.jm_aGTIndirectIndex=null;var jt_aRecord=this.Get_Record_Array();if(!jt_aRecord)
return false;try
{this.jm_aGTKeys=new Array();this.jm_aGTIndirectIndex=new Array();var jt_Length=0;for(var i=1;i<jt_aRecord.length;i++)
{var jt_aAssoc=jt_aRecord[i].split("=");if((!jt_aAssoc)||(!jt_aAssoc[0])||(!jt_aAssoc[1]))
continue;var jt_GTKey=jt_aAssoc[0];var jt_GTFields=jt_aAssoc[1];this.jm_aGTKeys[jt_GTKey]=jt_GTFields;this.jm_aGTIndirectIndex[jt_Length]=jt_GTKey;jt_Length++;}
if(jt_Length<=0)
{this.jm_aGTKeys=null;this.jm_aGTIndirectIndex=null;}}
catch(e)
{this.jm_aGTKeys=null;this.jm_aGTIndirectIndex=null;}
return!(this.jm_aGTKeys==null);}
function GLGT_Get_IndirectIndex()
{if(!this.jm_bAssoc)
return null;if(!this.jm_aGTIndirectIndex)
{if(!this.SplitAndCacheRows())
this.jm_aGTIndirectIndex=null;}
return this.jm_aGTIndirectIndex;}
function GLGT_Get_Field_Indirect(ji_index,ji_pos)
{if(!this.jm_bAssoc)
return null;var jt_aGTIndirectIndex=this.Get_IndirectIndex();if(!jt_aGTIndirectIndex)
return null;if(!(ji_index>=0)||ji_index>=jt_aGTIndirectIndex.length)
return null;return this.Get_Field(jt_aGTIndirectIndex[ji_index],ji_pos);}
function GLGT_Get_Field(ji_GTKey,ji_pos)
{if(!this.jm_bAssoc)
return null;if(!ji_GTKey)
return null;if(this.jm_aGTKeys==null)
{if(!this.SplitAndCacheRows())
return null;}
var jt_sFields=this.jm_aGTKeys[ji_GTKey];if(!jt_sFields)
return null;if(ji_pos===null)
return jt_sFields;var jt_aFields=jt_sFields.split(",");if((!jt_aFields)||(!jt_aFields[0]))
return null;if(jt_aFields.length<=ji_pos)
return null;return jt_aFields[ji_pos];}
function GLGT_ConvertField(ji_sField,ji_index,ji_OptionConvert)
{if(!ji_OptionConvert||(!ji_sField))
return ji_sField;if(ji_index<1);var jt_sleft="";var jt_sright="";if(ji_index<1)
jt_sleft=jt_sright=ji_sField;else if((ji_OptionConvert==1)||(ji_OptionConvert==2))
{var jt_aAssoc=ji_sField.split("=");if((!jt_aAssoc)||(!jt_aAssoc[0])||(!jt_aAssoc[1]))
return"";jt_sleft=jt_aAssoc[0];jt_sright=jt_aAssoc[1];}
if(ji_OptionConvert==1)
return(ji_index>0?jc_gl.jc_oA3xaDbZero.jc_GLSep_Compact:"")+jt_sleft;else if(ji_OptionConvert==2)
return(ji_index>0?jc_gl.jc_oA3xaDbZero.jc_GLSep_Compact:"")+jt_sright;else if(ji_OptionConvert==3)
return(ji_index>0?jc_gl.jc_oA3xaDbZero.jc_GLSep_Compact:"")+ji_sField;return"";}
function GLDataTable(ji_oDatabase,ji_glid)
{this.jm_oDTStatus=new GLDataStatus();this.jm_oglHeader=null;this.jm_aoglr=new A3xaArray;this.jm_oglIxHeader=null;this.jm_bAX=true;this.jm_oglAxHeader=null;this.jm_AxPosPrimaryKey=null;this.jm_odb=(ji_oDatabase||null);this.NewHeader=GLDataTable_NewHeader;this.NewNames=GLDataTable_NewNames;this.NewRecord=GLDataTable_NewRecord;this.NewIndexHeader=GLDataTable_NewIndexHeader;this.NewIndex=GLDataTable_NewIndex;this.NewAltIndexHeader=GLDataTable_NewAltIndexHeader;this.NewAltIndex=GLDataTable_NewAltIndex;this.NewGTHeader=GLDataTable_NewGTHeader;this.NewGT=GLDataTable_NewGT;this.Get_Header=GLDataTable_Get_Header;this.Get_AxHeader=GLDataTable_Get_AxHeader;this.Get_AltIndex=GLDataTable_Get_AltIndex;this.Get_IxHeader=GLDataTable_Get_IxHeader;this.Get_Index=GLDataTable_Get_Index;this.Get_AltIndex_PosPrimaryKey=GLDataTable_Get_AltIndex_PosPrimaryKey;this.Get_Glid=GLDataTable_Get_Glid;this.Set_Glid=GLDataTable_Set_Glid;this.NewGTFromString=GLDataTable_NewGTFromString;this.Set_String=GLDataTable_Set_String;this.IntegrityCheck=GLDataTable_IntegrityCheck;this.StoreToGLS=GLDataTable_StoreToGLS;this.LoadFromGLS=GLDataTable_LoadFromGLS;this.LoadRecordsFromGLS=GLDataTable_LoadRecordsFromGLS;this.Get_FieldNames=GLDataTable_Get_FieldNames;this.Get_CountRecords=function()
{var jt_oglIx=this.Get_Index();if(!jt_oglIx)
return 0;var jt_aIndex=jt_oglIx.Get_Record_Array();if(!jt_aIndex||jt_aIndex.length<=1)
return 0;return jt_aIndex.length-1;};this.BuildAltKey=GLDataTable_BuildAltKey;this.IndirectIndex_2_PrimaryKey=function(ji_IndirectIndex)
{var jt_oglIx=this.Get_Index();if(!jt_oglIx)
return null;var jr_id=jt_oglIx.Get_Id(ji_IndirectIndex);return jr_id;};this.AltKey_2_PrimaryKey=GLDataTable_AltKey_2_PrimaryKey;this.LoadRecordFromGLS=GLDataTable_LoadRecordFromGLS;this.CheckRecordsStatus=GLDataTable_CheckRecordsStatus;this.OnTransactionError=GLDataTable_OnTransactionError;this.OnTransactionComplete=GLDataTable_OnTransactionComplete;this.CheckLoadTableStatus=GLDataTable_CheckLoadTableStatus;this.SetupLoadedRecords=GLDataTable_SetupLoadedRecords;this.Get_GLRecord=GLDataTable_Get_GLRecord;this.Set_GLRecord=GLDataTable_Set_GLRecord;this.ClearGLSAndFail=GLDataTable_ClearGLSAndFail;this.Get_Database=GLDataTable_Get_Database;this.Get_Storage=GLDataTable_Get_Storage;this.Get_CountByFilter=function(ji_filter){return 0;};this.Find=function(ji_fnCheck){return this.jm_aoglr.Find(ji_fnCheck);};if(this.jm_odb&&ji_glid)
{var jt_oSchemaTable=this.jm_odb.jm_oDbSchema.Get_Table_ByName(ji_glid);if(jt_oSchemaTable&&!jt_oSchemaTable.jp_bAX)
this.jm_bAX=false;this.Set_Glid(ji_glid);}}
function GLDataTable_Get_Database(){return this.jm_odb;}
function GLDataTable_Get_Storage()
{return jg_oe.Get_Database().Get_Storage(this.Get_Glid());}
function GLDataTable_Get_GLRecord(ji_id)
{return this.jm_aoglr.Get_Item(ji_id);}
function GLDataTable_Set_GLRecord(ji_id,ji_oglr)
{return this.jm_aoglr.Set_Item(ji_id,ji_oglr);}
function GLDataTable_ClearGLSAndFail(ji_DTStatus,ji_sMessage)
{this.jm_oDTStatus.Set(ji_DTStatus,ji_sMessage);this.Get_Database().jm_aoglDataTableStore=null;this.Get_Database().jm_aoDTStatus_TableToClear=null;jg_oe.ClearStorage();return false;}
function GLDataTable_NewHeader(){return new GLHeader(null,null);}
function GLDataTable_NewNames(){return new GLFieldNames();}
function GLDataTable_NewRecord(){return null;}
function GLDataTable_NewIndexHeader()
{return new GLHeader(jc_gl.jc_oA3xaDbZero.jc_GLMID_IX,jc_gl.jc_oA3xaDbZero.jc_GLSep_Field);}
function GLDataTable_NewIndex()
{return new GLGT(jc_gl.jc_oA3xaDbZero.jc_GLMID_IX,jc_gl.jc_oA3xaDbZero.jc_GLSep_Field,false);}
function GLDataTable_NewAltIndexHeader()
{return new GLHeader(jc_gl.jc_oA3xaDbZero.jc_GLMID_AX,jc_gl.jc_oA3xaDbZero.jc_GLSep_Field);}
function GLDataTable_NewAltIndex()
{return new GLGT(jc_gl.jc_oA3xaDbZero.jc_GLMID_AX,jc_gl.jc_oA3xaDbZero.jc_GLSep_Field,true);}
function GLDataTable_NewGTHeader()
{return new GLHeader(jc_gl.jc_oA3xaDbZero.jc_GLMID_GT,jc_gl.jc_oA3xaDbZero.jc_GLSep_Field);}
function GLDataTable_NewGT()
{return new GLGT(jc_gl.jc_oA3xaDbZero.jc_GLMID_GT,jc_gl.jc_oA3xaDbZero.jc_GLSep_Field,true);}
function GLDataTable_Get_IxHeader(){return this.jm_oglIxHeader;}
function GLDataTable_Get_Index()
{if((!this.jm_oglIxHeader)||(!this.jm_oglIxHeader.IsValid()))
return null;return this.jm_oglIxHeader.Get_Recordset();}
function GLDataTable_Get_AxHeader(){return this.jm_oglAxHeader;}
function GLDataTable_Get_AltIndex()
{if((!this.jm_oglAxHeader)||(!this.jm_oglAxHeader.IsValid()))
return null;return this.jm_oglAxHeader.Get_Recordset();}
function GLDataTable_Get_AltIndex_PosPrimaryKey(){return this.jm_AxPosPrimaryKey;}
function GLDataTable_Get_Header()
{if((!this.jm_oglHeader)||(!this.jm_oglHeader.IsValid()))
return null;return this.jm_oglHeader;}
function GLDataTable_Get_Glid()
{if((!this.jm_oglHeader)||(!this.jm_oglHeader.IsValid()))
return null;return this.jm_oglHeader.Get_Glid();}
function GLDataTable_Set_Glid(ji_glid)
{if(!this.jm_oglHeader)
this.jm_oglHeader=this.NewHeader();return this.jm_oglHeader.Set_Glid(ji_glid);}
function GLDataTable_Get_FieldNames(){return this.jm_oglHeader.Get_FieldNames();}
function GLDataTable_BuildAltKey(ji_oglr)
{var jr_AltKey=null;if(!ji_oglr)
return null;var jt_glid=this.Get_Glid();if(!jt_glid)
return null;return null;}
function GLDataTable_AltKey_2_PrimaryKey(ji_altkey)
{if(!this.jm_bAX)
return null;if(!ji_altkey)
return null;if((!this.jm_oglAxHeader)||(!this.jm_oglAxHeader.IsValid()))
return null;var jt_oglAx=this.jm_oglAxHeader.Get_Recordset();if(!jt_oglAx)
return null;var jr_id=jt_oglAx.Get_Field(ji_altkey,this.jm_AxPosPrimaryKey);return jr_id||null;}
function GLDataTable_LoadRecordFromGLS(ji_oDbTransaction,ji_id)
{var jt_this=this;if(!ji_id)
return false;var jt_glid=this.Get_Glid();if(!jt_glid)
return false;var jt_oglNames=this.jm_oglHeader.Get_FieldNames();if(!jt_oglNames)
return false;var jt_oglRecord=this.NewRecord();if(!jt_oglRecord)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_LoadRecordFromGLS: Done NewRecord ");if(!jt_oglRecord.Set_Names(jt_oglNames))
return false;this.Set_GLRecord(ji_id,jt_oglRecord);if(!jt_oglRecord.LoadFromGLS(ji_oDbTransaction,jt_glid,ji_id))
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_LoadRecordFromGLS: Done LoadFromGLS");jg_oe.Get_Reporter().OnDataRead();return true;}
function GLDataTable_Set_String(ji_sGLRS,ji_sGLRS_AltIndex)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty);this.jm_sGLRS=null;this.jm_sGLRS_AltIndex=null;if((!ji_sGLRS))
return false;this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheInProgress);var jt_aglRS=ji_sGLRS.split(jc_gl.jc_oA3xaDbZero.jc_GLSep_Block);var jt_oglHeader=this.NewHeader();jt_oglHeader.Set_String(jt_aglRS[0]);var jt_sGlid=jt_oglHeader.Get_Glid();if(!jt_sGlid&&jt_sGlid!=this.Get_Glid())
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("glid: "+jt_sGlid,"","GLDataTable_Set_String");if(!jt_oglHeader.IsValid())
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Header");return false;}
var jt_oglNames=this.NewNames();jt_oglNames.Set_String(jt_aglRS[1]);if(!jt_oglNames.IsValid())
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Field Names");return false;}
if(jt_oglNames.Get_Glid()!=jt_sGlid)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Field Names TBID");return false;}
var jt_sKeyName=jt_oglNames.Get_KeyName();if(!jt_sKeyName)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Missing Key Name");return false;}
var jt_oglAxHeader=null;if(ji_sGLRS_AltIndex)
{jt_oglAxHeader=this.NewGTFromString(ji_sGLRS_AltIndex,jt_sGlid,jc_gl.jc_oA3xaDbZero.jc_GLMID_AX);if(!jt_oglAxHeader)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"AltIndex");return false;}}
else if(this.jm_bAX)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"AltIndex");return false;}
this.jm_oglHeader=jt_oglHeader;this.jm_oglHeader.Set_FieldNames(jt_oglNames);this.jm_oglAxHeader=jt_oglAxHeader;var jt_aIndex=new Array();jt_aIndex.push(jt_sKeyName);for(var i=2;i<jt_aglRS.length;i++)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("record N:"+
i,"","GLDataTable_Set_String");var jt_oglRecord=this.NewRecord();if(!jt_oglRecord)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Records: Record null");return false;}
if(!jt_oglRecord.Set_Names(jt_oglNames))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Records: Set_Names");return false;}
var jt_posid=0;if(!jt_oglRecord.Set_XString(jt_sGlid,null,jt_posid,jt_aglRS[i]))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Records: Set_XString");return false;}
var jt_id=jt_oglRecord.Get_Id();if(!(jt_id&&jt_id.length&&jt_id!=0))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Records Id");return false;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("before:"+
i,"Set_GLRecord(jt_id,jt_oglRecord)","GLDataTable_Set_String");this.Set_GLRecord(jt_id,jt_oglRecord);jg_oe.CanLogInfo()&&jg_oe.LogInfo("after:"+
i,"Set_GLRecord(jt_id,jt_oglRecord)","GLDataTable_Set_String");jt_aIndex.push(jt_id);}
var jt_oglIxHeader=this.NewIndexHeader();var jt_oglIx=this.NewIndex();jt_oglIxHeader.Set_Record_Array(jt_sGlid,null,new Array(this.jm_oglHeader.Get_Release()));if(!jt_oglIxHeader.IsValid())
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Index Header not valid");return false;}
jt_oglIx.Set_Record_Array(jt_sGlid,1,jt_aIndex);if(!jt_oglIx.IsValid())
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Index not valid");return false;}
jt_oglIxHeader.Set_Recordset(jt_oglIx);this.jm_oglIxHeader=jt_oglIxHeader;this.jm_oDTStatus.SetFrom(this.IntegrityCheck());return true;}
function GLDataTable_NewGTFromString(ji_sGLRS_GT,ji_glidCheck,ji_glidmark)
{if((!ji_sGLRS_GT))
return null;if(!ji_glidCheck)
ji_glidCheck=this.Get_Glid();var jt_aGLRS_GT=ji_sGLRS_GT.split(jc_gl.jc_oA3xaDbZero.jc_GLSep_Block);var jt_oglGTHeader=null;if(ji_glidmark==jc_gl.jc_oA3xaDbZero.jc_GLMID_AX)
jt_oglGTHeader=this.NewAltIndexHeader();else if(ji_glidmark==jc_gl.jc_oA3xaDbZero.jc_GLMID_IX)
jt_oglGTHeader=this.NewIndexHeader();else if(!ji_glidmark||ji_glidmark==jc_gl.jc_oA3xaDbZero.jc_GLMID_GT)
jt_oglGTHeader=this.NewGTHeader();else
return null;jt_oglGTHeader.Set_String(jt_aGLRS_GT[0]);if(!jt_oglGTHeader.IsValid())
return null;var jt_sGTHGLId=jt_oglGTHeader.Get_Glid();if(jt_sGTHGLId!=ji_glidCheck)
return null;var jt_oglGT=null;if(ji_glidmark==jc_gl.jc_oA3xaDbZero.jc_GLMID_AX)
jt_oglGT=this.NewAltIndex();else if(ji_glidmark==jc_gl.jc_oA3xaDbZero.jc_GLMID_IX)
jt_oglGT=this.NewIndex();else if(!ji_glidmark||ji_glidmark==jc_gl.jc_oA3xaDbZero.jc_GLMID_GT)
jt_oglGT=this.NewGT();jt_oglGT.Set_XString(null,1,null,jt_aGLRS_GT[1]);if(!jt_oglGT.IsValid())
return null;var jt_sGTGLId=jt_oglGT.Get_Glid();if(jt_sGTGLId!=ji_glidCheck)
return null;jt_oglGTHeader.Set_Recordset(jt_oglGT);return jt_oglGTHeader;}
function GLDataTable_IntegrityCheck()
{var jt_sGlid=this.Get_Glid();if(!jt_sGlid)
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Missing Table Name");if((!this.jm_oglHeader)||(!this.jm_oglHeader.IsValid()))
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Header not valid");var jt_oglNames=this.jm_oglHeader.Get_FieldNames();if(!jt_oglNames)
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Missing Field Names");if(!(this.jm_oglIxHeader&&this.jm_oglIxHeader.IsValid()))
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Index Header not valid");var jt_oglIx=this.jm_oglIxHeader.Get_Recordset();if(!jt_oglIx)
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Missing Index values");if(this.jm_oglAxHeader)
{if(!this.jm_oglAxHeader.IsValid())
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"AltIndex Header not valid");var jt_oglAx=this.jm_oglAxHeader.Get_Recordset();if(!jt_oglAx)
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Missing AltIndex values");}
else if(this.jm_bAX)
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Missing AltIndex Header");jg_oe.CanLogInfo()&&jg_oe.LogInfo("end:glid"+
jt_sGlid,"","GLDataTable_IntegrityCheck");return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cached);}
function GLDataTable_StoreToGLS(ji_oDbTransaction)
{var jt_this=this;var jt_oDTStatus=this.IntegrityCheck();if(!(jt_oDTStatus&&jt_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cached))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Cache not valid for: "+(jt_oDTStatus.jm_sMessage||""));return false;}
var jt_sGlid=this.Get_Glid();var jt_oglNames=this.jm_oglHeader.Get_FieldNames();var jt_oglIx=this.jm_oglIxHeader.Get_Recordset();this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreInProgress);if(!this.jm_oglHeader.StoreToGLS(ji_oDbTransaction))
return this.ClearGLSAndFail(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store Header");if(!jt_oglNames.StoreToGLS(ji_oDbTransaction))
{return this.ClearGLSAndFail(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store Field Names");}
if(!this.jm_oglIxHeader.StoreToGLS(ji_oDbTransaction))
{return this.ClearGLSAndFail(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store Index");}
if(!jt_oglIx.StoreToGLS(ji_oDbTransaction))
{return this.ClearGLSAndFail(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store Index values");}
if(this.jm_oglAxHeader)
{if(!this.jm_oglAxHeader.StoreToGLS(ji_oDbTransaction))
{return this.ClearGLSAndFail(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store AltIndex");}
var jt_oglAx=this.jm_oglAxHeader.Get_Recordset();if(!jt_oglAx.StoreToGLS(ji_oDbTransaction))
{return this.ClearGLSAndFail(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store AltIndex values");}}
var jt_CountRecords=this.jm_aoglr.Get_Count();for(var i=0;i<jt_CountRecords;i++)
{var jt_oglRecord=this.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oglRecord.StoreToGLS(ji_oDbTransaction))
{return this.ClearGLSAndFail(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store Records");}}
jg_oe.Get_Reporter().OnDataStored();return true;}
function GLDataTable_LoadFromGLS(ji_glid,ji_oDbTransaction,ji_bHeaderOnly)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadTableInProgress);if(!ji_glid)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Table ID");return false;}
var jt_oglHeader=this.NewHeader();if(!jt_oglHeader.LoadFromGLS(ji_oDbTransaction,ji_glid,null))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Header");return false;}
if(ji_bHeaderOnly)
{if(!jt_oglHeader.IsValid())
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Header Cache");return false;}
this.jm_oglHeader=jt_oglHeader;return true;}
var jt_oglNames=this.NewNames();var jt_oglIxHeader=this.NewIndexHeader();var jt_oglIx=this.NewIndex();var jt_oglAxHeader=this.NewAltIndexHeader();var jt_oglAx=this.NewAltIndex();if(!jt_oglNames.LoadFromGLS(ji_oDbTransaction,ji_glid,null))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Field Names");return false;}
if(!jt_oglIxHeader.LoadFromGLS(ji_oDbTransaction,ji_glid,null))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Index");return false;}
if(!jt_oglIx.LoadFromGLS(ji_oDbTransaction,ji_glid,1))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Index values");return false;}
if(this.jm_bAX)
{if(!jt_oglAxHeader.LoadFromGLS(ji_oDbTransaction,ji_glid,null))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load AltIndex");return false;}
if(!jt_oglAx.LoadFromGLS(ji_oDbTransaction,ji_glid,1))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load AltIndex values");return false;}}
if(!jt_oglHeader.IsValid())
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Header Cache");return false;}
if(!jt_oglNames.IsValid())
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Field Names Cache");return false;}
if((!jt_oglIxHeader.IsValid())||(!jt_oglIx.IsValid()))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Index Cache");return false;}
if(this.jm_bAX)
{if((!jt_oglAxHeader.IsValid())||(!jt_oglAx.IsValid()))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load AltIndex Cache");return false;}}
this.jm_oglHeader=jt_oglHeader;this.jm_oglHeader.Set_FieldNames(jt_oglNames);this.jm_oglHeader.Set_Recordset(null);this.jm_oglIxHeader=jt_oglIxHeader;this.jm_oglIxHeader.Set_Recordset(jt_oglIx);this.jm_oglAxHeader=null;if(this.jm_bAX)
{this.jm_oglAxHeader=jt_oglAxHeader;this.jm_oglAxHeader.Set_Recordset(jt_oglAx);}
return true;}
function GLDataTable_CheckLoadTableStatus(ji_bHeaderOnly)
{if(!this.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadTableInProgress)
{jg_oe.LogErr("Exit because not in progress, ho: "+(ji_bHeaderOnly?"Y":"N"),"","GLDataTable_CheckLoadTableStatus");return true;}
if(!(this.jm_oglHeader&&this.jm_oglHeader.IsValid()))
{jg_oe.LogErr("Header not valid, ho: "+(ji_bHeaderOnly?"Y":"N"),"","GLDataTable_CheckLoadTableStatus");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}
if(this.jm_oglHeader.jm_oDTStatus.IsFail())
{jg_oe.LogErr("Header Fail, ho: "+(ji_bHeaderOnly?"Y":"N"),"","GLDataTable_CheckLoadTableStatus");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}
if(ji_bHeaderOnly)
{var jt_sRelease=this.jm_oglHeader.Get_Release();if(this.jm_oglHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty||this.jm_oglHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty||!(jt_sRelease&&jt_sRelease.length))
{jg_oe.LogErr("HeaderOnly Empty","","GLDataTable_CheckLoadTableStatus");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty);}
else
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("HeaderOnly Loaded, rel: "+jt_sRelease,"","GLDataTable_CheckLoadTableStatus");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedTable);}
return true;}
if(!(this.jm_oglHeader.Get_FieldNames()&&this.jm_oglHeader.Get_FieldNames().IsValid()))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}
if(!(this.jm_oglIxHeader&&this.jm_oglIxHeader.IsValid()))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}
if(this.jm_bAX)
{if(!(this.jm_oglAxHeader&&this.jm_oglAxHeader.IsValid()))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}}
if(this.jm_oglHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded&&this.jm_oglHeader.Get_FieldNames().jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded&&this.jm_oglIxHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
{if(!this.jm_bAX||this.jm_oglAxHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedTable);return true;}}
if(this.jm_oglHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}
if(this.jm_oglHeader.Get_FieldNames().jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}
if(this.jm_oglIxHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}
if(this.jm_bAX)
{if(this.jm_oglAxHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}}
if(this.jm_oglHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty||this.jm_oglHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty||!this.jm_oglHeader.Get_Release())
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty);return true;}
if(this.jm_oglHeader.Get_FieldNames().jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty||this.jm_oglHeader.Get_FieldNames().jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty);return true;}
if(this.jm_oglIxHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty||this.jm_oglIxHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty);return true;}
if(this.jm_bAX)
{if(this.jm_oglAxHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty||this.jm_oglAxHeader.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadEmpty);return true;}}
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);return true;}
function GLDataTable_LoadRecordsFromGLS(ji_oDbTransaction)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadRecordInProgress);jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","GLDataTable_LoadRecordsFromGLS");if(!(this.jm_oglHeader&&this.jm_oglHeader.IsValid()&&this.jm_oglHeader.Get_FieldNames()&&this.jm_oglHeader.Get_FieldNames().IsValid()))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Records Cache");return false;}
if(!(this.jm_oglIxHeader&&this.jm_oglIxHeader.IsValid()&&this.jm_oglIxHeader.Get_Recordset()&&this.jm_oglIxHeader.Get_Recordset().IsValid()))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Records Cache");return false;}
if(this.jm_bAX)
{if(!(this.jm_oglAxHeader&&this.jm_oglAxHeader.IsValid()&&this.jm_oglAxHeader.Get_Recordset()&&this.jm_oglAxHeader.Get_Recordset().IsValid()))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Records Cache");return false;}}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_LoadRecordsFromGLS: p3");var jt_glid=this.Get_Glid();var jt_nRecords=this.Get_CountRecords();jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_LoadRecordsFromGLS: p2="+jt_nRecords);if(!(jt_nRecords>0))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord,"Loaded Records Cache");return false;}
var jt_bResult=true;var jt_RecordsInProgress=0;for(var jt_Record=0;jt_Record<jt_nRecords;jt_Record++)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_LoadRecordsFromGLS: "+jt_Record);var jt_id=this.IndirectIndex_2_PrimaryKey(jt_Record);if(!(jt_id&&this.LoadRecordFromGLS(ji_oDbTransaction,jt_id)))
{}
else
jt_RecordsInProgress++;}
if(!jt_RecordsInProgress)
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty);return true;}
function GLDataTable_CheckRecordsStatus(ji_bStore)
{if(ji_bStore)
{}
else
{if(this.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail)
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Database Recordset: Table "+this.Get_Glid());jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_CheckRecordsStatus: "+this.Get_Glid());var jt_nRecords=this.Get_CountRecords();if(!(jt_nRecords>0))
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty);}
var jr_odtStatus=new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord);jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_CheckRecordsStatus: "+this.Get_Glid()+" n="+jt_nRecords);for(var i=0;i<jt_nRecords;i++)
{var jt_id=this.IndirectIndex_2_PrimaryKey(i);var jt_oglr=this.Get_GLRecord(jt_id);if(!jt_oglr)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_CheckRecordsStatus: "+
this.Get_Glid()+" null Record="+this.IndirectIndex_2_PrimaryKey(i));if(jr_odtStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord)
jr_odtStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty);continue;}
var jt_DTStatus=jt_oglr.jm_oDTStatus.Get();if(jt_DTStatus!=jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord&&jt_DTStatus!=jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
{if(jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail)
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);}
else if(jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadInProgress)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_CheckRecordsStatus: "+this.Get_Glid()+" LoadInPro");jr_odtStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadInProgress);}
else if(jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDataTable_CheckRecordsStatus: "+this.Get_Glid()+" Quit="+jt_DTStatus);if(jr_odtStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord)
jr_odtStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty);}
else
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);}}}}
return jr_odtStatus;}
function GLDataTable_SetupLoadedRecords(ji_ogldtParent)
{if(ji_ogldtParent)
{var jt_odb=this.Get_Database();var jt_nRecords=this.Get_CountRecords();var jt_oSchemaTable=jt_odb.jm_oDbSchema.Get_Table_ByName(this.Get_Glid());if(!(jt_oSchemaTable&&jt_oSchemaTable.jp_sParent))
return false;for(var irecord=0;irecord<jt_nRecords;irecord++)
{var jt_id=this.IndirectIndex_2_PrimaryKey(irecord);if(!jt_id)
continue;var jt_oglr=ji_ogldtParent.Get_GLRecord(jt_id);if(!jt_oglr)
continue;jt_oglr.Set_SubRecord(jt_oSchemaTable.jp_SubTable,this.Get_GLRecord(jt_id))}}
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded);return true;}
function GLDataTable_OnTransactionComplete(ji_oidbEvent,ji_oStorageOpType)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p1","GLDataTable_OnTransactionComplete");if(ji_oStorageOpType.bStore)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p3s","GLDataTable_OnTransactionComplete");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Stored);}
else if(ji_oStorageOpType.bLoad&&ji_oStorageOpType.bHeaderOnly)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p4h","GLDataTable_OnTransactionComplete");jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("CountRecords="+
this.Get_CountRecords()+" glid="+this.Get_Glid(),"GLDataTable_OnTransactionComplete");this.CheckLoadTableStatus(true);}
else if(ji_oStorageOpType.bLoad&&!ji_oStorageOpType.bRecord)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p4t","GLDataTable_OnTransactionComplete");jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("CountRecords="+
this.Get_CountRecords()+" glid="+this.Get_Glid(),"GLDataTable_OnTransactionComplete");this.CheckLoadTableStatus();}
else if(ji_oStorageOpType.bLoad&&ji_oStorageOpType.bRecord)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p5r","GLDataTable_OnTransactionComplete");var jt_odtStatus=this.CheckRecordsStatus(false);jg_oe.CanLogInfo()&&jg_oe.LogInfo("p6r","GLDataTable_OnTransactionComplete");if(jt_odtStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p7r","GLDataTable_OnTransactionComplete");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord);}
else if(jt_odtStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p8r","GLDataTable_OnTransactionComplete");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);}
else if(jt_odtStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p9r","GLDataTable_OnTransactionComplete");if(this.Get_Database().jm_oDbSchema.IsMandatory(this.Get_Glid()))
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);else
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord);}
else if(jt_odtStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadInProgress)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p10r","GLDataTable_OnTransactionComplete");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);}
else
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p11r","GLDataTable_OnTransactionComplete");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);}}
return true;}
function GLDataTable_OnTransactionError(ji_oidbEvent,ji_sMessage,ji_oStorageOpType)
{if(ji_oStorageOpType.bStore)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail);this.ClearGLSAndFail(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store Fail");}
else if(ji_oStorageOpType.bLoad)
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail);}
return true;}
function A3xaDatabase(ji_oDbSchema)
{this.Get_Storage=function(ji_glid)
{return jg_oe.Get_Storage(this.jm_oDbSchema.Get_StorageType(ji_glid));};this.Open=A3xaDatabase_Open;this.IsOpen=A3xaDatabase_IsOpen;this.IsOpening=A3xaDatabase_IsOpening;this.WriteGLRS2=A3xaDatabase_WriteGLRS2;this.LoadSchemaDefault=function(){return true;};this.LoadSchemaStore=function(){return true;};this.LoadSchemaLoad=function(){return true;};this.OpenTransaction=A3xaDatabase_OpenTransaction;this.StoreAllData=A3xaDatabase_StoreAllData;this.CheckCache=A3xaDatabase_CheckCache;this.ClearStored=A3xaDatabase_ClearStored;this.StoreCache=A3xaDatabase_StoreCache;this.jm_oDbSchema=(ji_oDbSchema||null);this.jm_oDTStatus=new GLDataStatus();this.jm_moreOnStoreAllData=0;this.jm_aoDTStatus_TableToClear=null;this.jm_aoglDataTableStore=new A3xaArray();this.jm_aoglDataTableLoad_Common=new A3xaArray();this.jm_aoglDataTableLoad_ExtHeader=new A3xaArray();this.jm_aoglDataTableLoad_Main=new A3xaArray();this.jm_aoglDataTableLoad_Dependent=new A3xaArray();this.jm_aoglDataTableLoad_TurboHeader=new A3xaArray();this.jm_odbTransaction=null;this.MirrorToTurboHeaders=function()
{this.jm_aoglDataTableLoad_TurboHeader=new A3xaArray();var jt_CountC=(this.jm_aoglDataTableLoad_Common?this.jm_aoglDataTableLoad_Common.Get_Count():0);for(var ic=0;ic<jt_CountC;ic++)
{var jt_odt=this.jm_aoglDataTableLoad_Common.Get_Item_ByIndex(ic);this.jm_aoglDataTableLoad_TurboHeader.Add_Item(jt_odt.Get_Glid(),jt_odt);}
var jt_CountM=(this.jm_aoglDataTableLoad_Main?this.jm_aoglDataTableLoad_Main.Get_Count():0);for(var im=0;im<jt_CountM;im++)
{var jt_odt=this.jm_aoglDataTableLoad_Main.Get_Item_ByIndex(im);this.jm_aoglDataTableLoad_TurboHeader.Add_Item(jt_odt.Get_Glid(),jt_odt);}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("cC,cM,cTH:"+
jt_CountC+","+jt_CountM+","+this.jm_aoglDataTableLoad_TurboHeader.Get_Count(),"","A3xaDatabase.MirrorToTurboHeaders");return true;};this.ClearArrayDTLoad=function(ji_pTypTables)
{if(!ji_pTypTables)
return false;if(ji_pTypTables.jp_bTyp_Common)
this.jm_aoglDataTableLoad_Common=new A3xaArray();else if(ji_pTypTables.jp_bTyp_ExtHeader)
this.jm_aoglDataTableLoad_ExtHeader=new A3xaArray();else if(ji_pTypTables.jp_bTyp_Main)
this.jm_aoglDataTableLoad_Main=new A3xaArray();else if(ji_pTypTables.jp_bTyp_Dependent)
this.jm_aoglDataTableLoad_Dependent=new A3xaArray();else if(ji_pTypTables.jp_bTyp_TurboHeader)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("jp_bTyp_TurboHeader","","A3xaDatabase.ClearArrayDTLoad");this.jm_aoglDataTableLoad_TurboHeader=new A3xaArray();}
else
return false;return true;}
this.Get_ArrayDTLoad=function(ji_pTypTables)
{if(!ji_pTypTables)
return null;if(ji_pTypTables.jp_bTyp_Common)
return this.jm_aoglDataTableLoad_Common;else if(ji_pTypTables.jp_bTyp_ExtHeader)
return this.jm_aoglDataTableLoad_ExtHeader;else if(ji_pTypTables.jp_bTyp_Main)
return this.jm_aoglDataTableLoad_Main;else if(ji_pTypTables.jp_bTyp_Dependent)
return this.jm_aoglDataTableLoad_Dependent;else if(ji_pTypTables.jp_bTyp_TurboHeader)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("jp_bTyp_TurboHeader","","A3xaDatabase.Get_ArrayDTLoad");return this.jm_aoglDataTableLoad_TurboHeader;}
return null;};this.NewDataTable=function(ji_glid){return null;};this.Get_MainDataTable=function(ji_A,ji_Z,ji_N){return null;};this.Get_DataTable=function(ji_glid,ji_bDontCheck,ji_bTurboHeader)
{ji_glid=jc_gl.jc_oA3xaDbZero.XGlid2Glid(ji_glid);ji_glid=jg_oApp.Get_AppXUR().Get_3xXUR().Default2GlidQUR(ji_glid);if(!ji_glid)
return null;var jr_odt=null;var jt_aodt=null;if(ji_bTurboHeader)
{jt_aodt=this.Get_ArrayDTLoad({jp_bTyp_TurboHeader:true});jr_odt=jt_aodt.Get_Item(ji_glid);jg_oe.CanLogInfo()&&jg_oe.LogInfo("turboh glid,odt:"+
ji_glid+","+(jr_odt?"Y":"null"),"","A3xaDatabase_Get_DataTable");}
else
{if(!jr_odt)
{jt_aodt=this.Get_ArrayDTLoad({jp_bTyp_Common:true});jr_odt=jt_aodt.Get_Item(ji_glid);}
if(!jr_odt)
{jt_aodt=this.Get_ArrayDTLoad({jp_bTyp_Main:true});jr_odt=jt_aodt.Get_Item(ji_glid);}
if(!jr_odt)
{jt_aodt=this.Get_ArrayDTLoad({jp_bTyp_ExtHeader:true});jr_odt=jt_aodt.Get_Item(ji_glid);}
if(!jr_odt)
{jt_aodt=this.Get_ArrayDTLoad({jp_bTyp_Dependent:true});jr_odt=jt_aodt.Get_Item(ji_glid);}}
if(ji_bDontCheck)
return jr_odt;if(!(jr_odt&&jr_odt.Get_Glid()==ji_glid))
return null;jg_oe.CanLogInfo()&&jg_oe.LogInfo("A3xaDatabase_Get_DataTable: "+
ji_glid+"="+jr_odt.jm_oDTStatus.Get());if(jr_odt.jm_oDTStatus.Get()!=jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
return null;return jr_odt;};this.Get_DataTableCacheStore=function(ji_glid)
{if(!ji_glid)
return null;if(!this.jm_aoglDataTableStore)
return null;var jt_ogldt=this.jm_aoglDataTableStore.Get_Item(ji_glid);if(!(jt_ogldt&&jt_ogldt.Get_Glid()==ji_glid))
return null;return jt_ogldt;};}
function A3xaDatabase_IsOpen()
{var jt_os1=jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_FLY);if(!(jt_os1&&jt_os1.IsOpen()))
return false;if(jg_oe.jm_StorageTypeDefault==jc_gl.jc_oStorage.jc_FLY)
return true;var jt_os2=jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_Default);if(!(jt_os2&&jt_os2.IsOpen()))
return false;return true;}
function A3xaDatabase_IsOpening()
{var jt_os1=jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_FLY);if(jt_os1&&jt_os1.IsOpening())
return true;if(jg_oe.jm_StorageTypeDefault==jc_gl.jc_oStorage.jc_FLY)
return false;var jt_os2=jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_Default);if(jt_os2&&jt_os2.IsOpening())
return true;return false;}
function A3xaDatabase_Open(ji_oStorageOpType,ji_otkm)
{var jt_this=this;if(ji_oStorageOpType.bOpenStore)
this.LoadSchemaStore();else if(ji_oStorageOpType.bOpenLoad)
this.LoadSchemaLoad();jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OSx","A3xaDatabase_Open");var jt_os1=jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_FLY);if(!jt_os1)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OSxx","A3xaDatabase_Open");if(!(jt_os1.IsOpen()||jt_os1.IsOpening()))
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS1","A3xaDatabase_Open");if(!jt_os1.Open(jt_os1.NewTransaction(null,ji_oStorageOpType,new A3xaDatabase_TransactionListener(this,ji_otkm)),this.jm_oDbSchema))
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS1b","A3xaDatabase_Open");return false;}}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS1c","A3xaDatabase_Open");if(jt_os1.IsOpening())
return-1;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS1d","A3xaDatabase_Open");if(!jt_os1.IsOpen())
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS1e","A3xaDatabase_Open");if(jg_oe.jm_StorageTypeDefault==jc_gl.jc_oStorage.jc_FLY)
return true;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS1f","A3xaDatabase_Open");var jt_os2=jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_Default);if(!jt_os2)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS1g","A3xaDatabase_Open");if(jt_os2.IsOpen())
return true;if(jt_os2.IsOpening())
return-1;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS2","A3xaDatabase_Open");if(!jt_os2.Open(jt_os2.NewTransaction(null,ji_oStorageOpType,new A3xaDatabase_TransactionListener(this,ji_otkm)),this.jm_oDbSchema))
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS2b","A3xaDatabase_Open");if(jt_os2.IsOpen())
return true;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS2c","A3xaDatabase_Open");if(jt_os2.IsOpening())
return-1;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open OS2d","A3xaDatabase_Open");return false;}
function A3xaDatabase_WriteGLRS2(ji_glid,ji_sGLRS,ji_sGLRS_AltIndex)
{if(!ji_glid)
return false;ji_glid=jc_gl.jc_oA3xaDbZero.XGlid2Glid(ji_glid);if(!ji_sGLRS)
return false;var jt_ogldt=this.NewDataTable(ji_glid);if(!jt_ogldt)
return false;if(jt_ogldt.jm_bAX&&!ji_sGLRS_AltIndex)
return false;this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheInProgress,"Cache Tableset "+ji_glid);this.jm_aoglDataTableStore.Set_Item(ji_glid,jt_ogldt);jg_oe.CanLogInfo()&&jg_oe.LogInfo("A3xaDatabase_WriteGLRS2: "+ji_glid+"----"+ji_sGLRS+"-----"+ji_sGLRS_AltIndex);if(!jt_ogldt.Set_String(ji_sGLRS,ji_sGLRS_AltIndex))
{this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheFail,"Cache Tableset Cache "+ji_glid);return false;}
return true;}
function A3xaDatabase_StoreAllData(ji_bStart)
{if(this.jm_oDTStatus.IsFail())
return true;if(this.jm_moreOnStoreAllData++>0&&!ji_bStart)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Event Queued","","A3xaDatabase_StoreAllData");this.jm_moreOnStoreAllData=2;return true;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Event Executive","","A3xaDatabase_StoreAllData");if(ji_bStart)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","Cache Tables In Progress","A3xaDatabase_StoreAllData");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheInProgress);}
do
{if(this.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheInProgress)
this.jm_oDTStatus.SetFrom(this.CheckCache(this.jm_oDTStatus));if(this.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cached)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Open Storage","Store Tables","A3xaDatabase_StoreAllData");this.Open({bOpenStore:true});this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreOpen);}
if(this.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreOpen)
{if(this.IsOpen())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Check pending ","Clear Tables","A3xaDatabase_StoreAllData");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearOpen);}
else if(!this.IsOpening())
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Opening for Store");}
if(this.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail)
{if(this.IsOpen())
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearOpen);}
if(this.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearOpen)
{var jt_os2=jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_Default);if(jt_os2&&jt_os2.IsClearRequest())
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearInProgress);else
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cleared);}
if(this.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearInProgress)
this.jm_oDTStatus.SetFrom(this.ClearStored(this.jm_oDTStatus));if(this.jm_oDTStatus.Get()==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cleared)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin to","Store Tables","A3xaDatabase_StoreAllData");this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreInProgress);}
if(this.jm_oDTStatus.IsStoring())
this.jm_oDTStatus.SetFrom(this.StoreCache(this.jm_oDTStatus));ji_bStart=false;}
while(--this.jm_moreOnStoreAllData>0);return true;}
function A3xaDatabase_CheckCache(ji_oDTStatus)
{if(ji_oDTStatus.Get()!=jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheInProgress)
return null;var jt_CountDT=0;if(this.jm_aoglDataTableStore)
jt_CountDT=this.jm_aoglDataTableStore.Get_Count();if(!jt_CountDT)
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty);for(var j=0;j<jt_CountDT;j++)
{var jt_ogldt=this.jm_aoglDataTableStore.Get_Item_ByIndex(j);var jt_DTStatusCur=jt_ogldt.jm_oDTStatus.Get();var jt_this=this;jt_ogldt.jm_oDTStatus.jm_fnOnChange=function(ji_oDTStatus)
{jt_this.StoreAllData(false);}}
var jr_oDTStatus=new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cached,"");for(var i=0;i<jt_CountDT;i++)
{var jt_ogldt=this.jm_aoglDataTableStore.Get_Item_ByIndex(i);var jt_DTStatusCur=jt_ogldt.jm_oDTStatus.Get();if(jt_DTStatusCur!=jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cached)
{if(jt_ogldt.jm_oDTStatus.IsFail())
{jg_oe.LogErr("Fail ("+jt_ogldt.Get_Glid()+")","","A3xaDatabase_CheckCache");return new GLDataStatus(jt_DTStatusCur,"Cache Database Tableset");}
else if(jt_DTStatusCur==jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheInProgress)
{jr_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_CacheInProgress);}
else
{}}
else
jg_oe.CanLogInfo()&&jg_oe.LogInfo("p2000="+"Cached "+jt_ogldt.Get_Glid());}
return jr_oDTStatus;}
function A3xaDatabase_OpenTransaction(ji_oStorageOpType,ji_otkm,ji_aGlid)
{if(!(ji_aGlid&&ji_aGlid[0]))
{var jt_s="Tables not defined";if(ji_oStorageOpType.bStore)
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,jt_s);else if(ji_oStorageOpType.bLoad)
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,jt_s);else if(ji_oStorageOpType.bClear)
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearFail,jt_s);return null;}
var jt_os=null;if(ji_oStorageOpType.bClear)
jt_os=jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_Default);else
jt_os=this.Get_Storage(ji_aGlid[0]);if(!jt_os)
{var jt_s="Missing Storage Device";if(ji_oStorageOpType.bStore)
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,jt_s);else if(ji_oStorageOpType.bLoad)
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,jt_s);else if(ji_oStorageOpType.bClear)
this.jm_oDTStatus.Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearFail,jt_s);return null;}
var jt_oDbTransaction=jt_os.NewTransaction(ji_aGlid,ji_oStorageOpType,new A3xaDatabase_TransactionListener(this,ji_otkm));return jt_oDbTransaction;}
function A3xaDatabase_ClearStored(ji_oDTStatus)
{if(ji_oDTStatus.Get()!=jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearInProgress)
return null;var jt_asTableNamesToClear=null;var jt_os2=jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_Default);if(jt_os2)
jt_asTableNamesToClear=jt_os2.Get_TableNames();if(!jt_asTableNamesToClear)
{this.jm_aoDTStatus_TableToClear=null;return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cleared);}
for(var i=0;i<jt_asTableNamesToClear.length;i++)
{var jt_glid=jt_asTableNamesToClear[i];if(!jt_glid)
continue;var jt_oDTStatusCur=null;if(!this.jm_aoDTStatus_TableToClear)
this.jm_aoDTStatus_TableToClear=new Array();if(!this.jm_aoDTStatus_TableToClear[jt_glid])
{this.jm_aoDTStatus_TableToClear[jt_glid]=new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearOpen);}}
for(var i=0;i<jt_asTableNamesToClear.length;i++)
{var jt_glid=jt_asTableNamesToClear[i];if(!jt_glid)
continue;var jt_DTStatusCur=this.jm_aoDTStatus_TableToClear[jt_glid].Get();if(jt_DTStatusCur==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearInProgress)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p2000="+"Clear table In Progress "+jt_glid);return new GLDataStatus(jt_DTStatusCur);}}
for(var i=0;i<jt_asTableNamesToClear.length;i++)
{var jt_glid=jt_asTableNamesToClear[i];if(!jt_glid)
continue;var jt_DTStatusCur=this.jm_aoDTStatus_TableToClear[jt_glid].Get();if(jt_DTStatusCur==jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearOpen)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Clear table "+jt_glid);var jt_oDbTransaction=this.OpenTransaction({bClear:true},null,[jt_glid]);if(!jt_oDbTransaction)
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearFail,"Clear Database Table "+jt_glid);}
jt_oDbTransaction.UsingTable(jt_glid);var jt_bResult=jt_os2.Clear(jt_oDbTransaction);jt_oDbTransaction.Release();if(!jt_bResult)
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearFail,"Store Database Table "+jt_glid);}
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearInProgress);}}
for(var i=0;i<jt_asTableNamesToClear.length;i++)
{var jt_glid=jt_asTableNamesToClear[i];if(!jt_glid)
continue;var jt_DTStatusCur=this.jm_aoDTStatus_TableToClear[jt_glid].Get();if(jt_DTStatusCur!=jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cleared)
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearFail,"Clear Database Table. Unknown Status"+jt_ogldt.Get_Glid());}}
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cleared,"");}
function A3xaDatabase_StoreCache(ji_oDTStatus)
{if(!ji_oDTStatus.IsStoring())
return null;var jt_CountDT=0;if(this.jm_aoglDataTableStore)
jt_CountDT=this.jm_aoglDataTableStore.Get_Count();if(!jt_CountDT)
return null;for(var i=0;i<jt_CountDT;i++)
{var jt_ogldt=this.jm_aoglDataTableStore.Get_Item_ByIndex(i);var jt_DTStatusCur=jt_ogldt.jm_oDTStatus.Get();if(jt_ogldt.jm_oDTStatus.IsFail())
{jg_oe.LogErr("Fail ("+jt_ogldt.Get_Glid()+")","","A3xaDatabase_StoreCache");return new GLDataStatus(jt_DTStatusCur,"Store Database Tableset");}}
for(i=0;i<jt_CountDT;i++)
{var jt_ogldt=this.jm_aoglDataTableStore.Get_Item_ByIndex(i);var jt_DTStatusCur=jt_ogldt.jm_oDTStatus.Get();if(jt_DTStatusCur==jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreInProgress)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p2000="+"Store Cache In Progress "+jt_ogldt.Get_Glid());return new GLDataStatus(jt_DTStatusCur);}}
for(i=0;i<jt_CountDT;i++)
{var jt_ogldt=this.jm_aoglDataTableStore.Get_Item_ByIndex(i);var jt_DTStatusCur=jt_ogldt.jm_oDTStatus.Get();if(jt_DTStatusCur==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cached)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p2000="+"StoreToGLS Cache "+jt_ogldt.Get_Glid());var jt_oDbTransaction=this.OpenTransaction({bStore:true},null,[jt_ogldt.Get_Glid()]);if(!jt_oDbTransaction)
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store Database Table "+jt_ogldt.Get_Glid());}
jg_oe.LogStatusBar("Storing... "+this.jm_oDbSchema.Get_Descr(jt_ogldt.Get_Glid()));jt_oDbTransaction.UsingTable(jt_ogldt.Get_Glid());var jt_bResult=jt_ogldt.StoreToGLS(jt_oDbTransaction);jt_oDbTransaction.Release();if(!jt_bResult)
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store Database Table "+jt_ogldt.Get_Glid());}
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreInProgress);}}
for(i=0;i<jt_CountDT;i++)
{var jt_ogldt=this.jm_aoglDataTableStore.Get_Item_ByIndex(i);var jt_DTStatusCur=jt_ogldt.jm_oDTStatus.Get();if(jt_DTStatusCur!=jc_gl.jc_oA3xaDbZero.jc_DTStatus_Stored)
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_StoreFail,"Store Database Table. Unknown Status"+jt_ogldt.Get_Glid());}}
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Stored,"");}
function A3xaDatabase_TransactionListener(ji_odb,ji_otkm)
{A3xaStorage_TransactionListener.call(this);this.OnOpenStorage=A3xaDatabase_TransactionListener_OnOpenStorage;this.OnOpenStorageError=A3xaDatabase_TransactionListener_OnOpenStorageError;this.OnTransactionComplete=A3xaDatabase_TransactionListener_OnTransactionComplete;this.OnTransactionError=A3xaDatabase_TransactionListener_OnTransactionError;this.OnClearStorage=A3xaDatabase_TransactionListener_OnClearStorage;this.OnClearStorageError=A3xaDatabase_TransactionListener_OnClearStorageError;this.jm_odb=(ji_odb||null);this.jm_otkm=(ji_otkm||null);}
function A3xaDatabase_TransactionListener_OnOpenStorage(ji_odbtr,ji_oidbEvent)
{if(!ji_odbtr)
return false;if(!this.jm_odb)
return false;if(ji_odbtr.jm_oStorageOpType.bOpenStore)
this.jm_odb.StoreAllData(false);else if(ji_odbtr.jm_oStorageOpType.bOpenLoad)
this.jm_otkm.Task();return true;}
function A3xaDatabase_TransactionListener_OnOpenStorageError(ji_odbtr,ji_oidbEvent,ji_sMessage)
{if(!ji_odbtr)
return false;if(!this.jm_odb)
return false;if(ji_odbtr.jm_oStorageOpType.bOpenStore)
this.jm_odb.StoreAllData(false);else if(ji_odbtr.jm_oStorageOpType.bOpenLoad)
this.jm_otkm.Task();return true;}
function A3xaDatabase_TransactionListener_OnClearStorage(ji_odbtr,ji_oidbEvent)
{if(!ji_odbtr)
return false;if(!this.jm_odb)
return false;if(!ji_odbtr.jm_aDbTableName)
return false;for(var i=0;i<ji_odbtr.jm_aDbTableName.length;i++)
{var jt_glid=ji_odbtr.jm_aDbTableName[i];if(!jt_glid)
continue;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Cleared table: "+jt_glid,"","A3xaDatabase_TransactionListener_OnClearStorage");this.jm_odb.jm_aoDTStatus_TableToClear[jt_glid].Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Cleared);}
return true;}
function A3xaDatabase_TransactionListener_OnClearStorageError(ji_odbtr,ji_oidbEvent,ji_sMessage)
{if(!ji_odbtr)
return false;if(!this.jm_odb)
return false;if(!ji_odbtr.jm_aDbTableName)
return false;for(var i=0;i<ji_odbtr.jm_aDbTableName.length;i++)
{var jt_glid=ji_odbtr.jm_aDbTableName[i];if(!jt_glid)
continue;this.jm_odb.jm_aoDTStatus_TableToClear[jt_glid].Set(jc_gl.jc_oA3xaDbZero.jc_DTStatus_ClearFail);}
return true;}
function A3xaDatabase_TransactionListener_OnTransactionComplete(ji_odbtr,ji_oidbEvent)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p1","A3xaDatabase_TransactionListener_OnTransactionComplete");if(!ji_odbtr)
return false;if(!this.jm_odb)
return false;if(!ji_odbtr.jm_aDbTableName)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("p2","A3xaDatabase_TransactionListener_OnTransactionComplete");if(ji_odbtr.jm_oStorageOpType.bStore)
{for(var i=0;i<ji_odbtr.jm_aDbTableName.length;i++)
{var jt_glid=ji_odbtr.jm_aDbTableName[i];var jt_odt=this.jm_odb.Get_DataTableCacheStore(jt_glid);if(jt_odt)
jt_odt.OnTransactionComplete(ji_oidbEvent,ji_odbtr.jm_oStorageOpType);}}
else if(ji_odbtr.jm_oStorageOpType.bLoad)
{for(var i=0;i<ji_odbtr.jm_aDbTableName.length;i++)
{var jt_odt=null;var jt_glid=ji_odbtr.jm_aDbTableName[i];jt_odt=this.jm_odb.Get_DataTable(jt_glid,true,ji_odbtr.jm_oStorageOpType.bTurboHeader);if(jt_odt)
jt_odt.OnTransactionComplete(ji_oidbEvent,ji_odbtr.jm_oStorageOpType);}}
else if(ji_odbtr.jm_oStorageOpType.bClear)
{this.jm_odb.StoreAllData(false);}
return true;}
function A3xaDatabase_TransactionListener_OnTransactionError(ji_odbtr,ji_oidbEvent,ji_sMessage)
{if(!ji_odbtr)
return false;if(!this.jm_odb)
return false;if(!ji_odbtr.jm_aDbTableName)
return false;if(ji_odbtr.jm_oStorageOpType.bStore)
{for(var i=0;i<ji_odbtr.jm_aDbTableName.length;i++)
{var jt_glid=ji_odbtr.jm_aDbTableName[i];var jt_odt=this.jm_odb.Get_DataTableCacheStore(jt_glid);if(jt_odt)
jt_odt.OnTransactionError(ji_oidbEvent,ji_sMessage,ji_odbtr.jm_oStorageOpType);}}
else if(ji_odbtr.jm_oStorageOpType.bLoad)
{for(var i=0;i<ji_odbtr.jm_aDbTableName.length;i++)
{var jt_odt=null;var jt_glid=ji_odbtr.jm_aDbTableName[i];jt_odt=this.jm_odb.Get_DataTable(jt_glid,true,ji_odbtr.jm_oStorageOpType.bTurboHeader);if(jt_odt)
jt_odt.OnTransactionError(ji_oidbEvent,ji_sMessage,ji_odbtr.jm_oStorageOpType);}}
else if(ji_odbtr.jm_oStorageOpType.bClear)
{this.jm_odb.StoreAllData(false);}
return true;}
function A3xaDbLoaderManager(ji_fnOnLoadDone,ji_oDatabase)
{this.jm_fnOnLoadDone=(ji_fnOnLoadDone||null);this.jm_oDatabase=(ji_oDatabase||null);this.jm_odbLoader=null;var jt_this=this;this.Load=function()
{if(!(this.jm_oDatabase.jm_aoglDataTableLoad_Common&&this.jm_oDatabase.jm_aoglDataTableLoad_Common.Get_Count()>0))
this.DatabaseLoadCommon();else if(!(this.jm_oDatabase.jm_aoglDataTableLoad_ExtHeader&&this.jm_oDatabase.jm_aoglDataTableLoad_ExtHeader.Get_Count()>0))
this.DatabaseLoadExtHeader();else
this.DatabaseLoadMain();return true;};this.DatabaseLoadCommon=function()
{var jt_this=this;jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Start Common","","A3xaDbLoaderManager.DatabaseLoadCommon");this.jm_odbLoader=new A3xaDbLoader(function(ji_oDTStatus)
{return jt_this.OnDatabaseLoadCommonDone(ji_oDTStatus);},this.jm_oDatabase);this.jm_odbLoader.LoadCommonTables();return true;};this.OnDatabaseLoadCommonDone=function(ji_oDTStatus)
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Event ("+ji_oDTStatus.Get_Descr()+")","","A3xaDbLoaderManager.OnDatabaseLoadCommonDone");jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("descr2 ("+ji_oDTStatus.Get_Descr2()+")","","A3xaDbLoaderManager.OnDatabaseLoadCommonDone");var jt_this=this;if(ji_oDTStatus.IsFail())
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Fail ("+ji_oDTStatus.Get_Descr()+")","","A3xaDbLoaderManager.OnDatabaseLoadCommonDone");if(this.jm_fnOnLoadDone)
this.jm_fnOnLoadDone(ji_oDTStatus);return true;}
var jt_DTStatus=ji_oDTStatus.Get();if(jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Loaded Common OK","","A3xaDbLoaderManager.OnDatabaseLoadCommonDone");if(this.jm_odbLoader.IsCommonTables())
return this.DatabaseLoadExtHeader();jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Unexpected","","A3xaDbLoaderManager.OnDatabaseLoadCommonDone");}
jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Void event","","A3xaDbLoaderManager.OnDatabaseLoadCommonDone");return true;};this.DatabaseLoadExtHeader=function()
{var jt_this=this;jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Start Ext Header","","A3xaDbLoaderManager.DatabaseLoadExtHeader");this.jm_odbLoader=new A3xaDbLoader(function(ji_oDTStatus)
{return jt_this.OnDatabaseLoadExtHeaderDone(ji_oDTStatus);},this.jm_oDatabase);this.jm_odbLoader.LoadExtHeaderTables();return true;};this.OnDatabaseLoadExtHeaderDone=function(ji_oDTStatus)
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Event ("+ji_oDTStatus.Get_Descr()+")","","A3xaDbLoaderManager.OnDatabaseLoadExtHeaderDone");jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("descr2 ("+ji_oDTStatus.Get_Descr2()+")","","A3xaDbLoaderManager.OnDatabaseLoadExtHeaderDone");var jt_this=this;if(ji_oDTStatus.IsFail())
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Fail ("+ji_oDTStatus.Get_Descr()+")","","A3xaDbLoaderManager.OnDatabaseLoadExtHeaderDone");if(this.jm_fnOnLoadDone)
this.jm_fnOnLoadDone(ji_oDTStatus);return true;}
var jt_DTStatus=ji_oDTStatus.Get();if(jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Loaded OK","","A3xaDbLoaderManager.OnDatabaseLoadExtHeaderDone");if(this.jm_odbLoader.IsExtHeaderTables())
return this.DatabaseLoadMain();jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Unexpected","","A3xaDbLoaderManager.OnDatabaseLoadExtHeaderDone");}
jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Void event","","A3xaDbLoaderManager.OnDatabaseLoadExtHeaderDone");return true;};this.DatabaseLoadMain=function()
{var jt_this=this;jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Start Load Main","","A3xaDbLoaderManager.DatabaseLoadMain");this.jm_odbLoader=new A3xaDbLoader(function(ji_oDTStatus)
{return jt_this.OnDatabaseLoadMainDone(ji_oDTStatus);},this.jm_oDatabase);this.jm_odbLoader.LoadMainTable();return true;};this.OnDatabaseLoadMainDone=function(ji_oDTStatus)
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Event ("+ji_oDTStatus.Get_Descr()+")","","A3xaDbLoaderManager.OnDatabaseLoadMainDone");jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("descr2 ("+ji_oDTStatus.Get_Descr2()+")","","A3xaDbLoaderManager.OnDatabaseLoadMainDone");var jt_this=this;if(ji_oDTStatus.IsFail())
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Fail ("+ji_oDTStatus.Get_Descr()+")","","A3xaDbLoaderManager.OnDatabaseLoadMainDone");this.jm_oDatabase.MirrorToTurboHeaders();if(this.jm_fnOnLoadDone)
this.jm_fnOnLoadDone(ji_oDTStatus);return true;}
var jt_DTStatus=ji_oDTStatus.Get();if(jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Loaded OK","","A3xaDbLoaderManager.OnDatabaseLoadMainDone");if(this.jm_odbLoader.IsMainTable())
{this.jm_oDatabase.MirrorToTurboHeaders();if(this.jm_fnOnLoadDone)
this.jm_fnOnLoadDone(ji_oDTStatus);}
jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Unexpected","","A3xaDbLoaderManager.OnDatabaseLoadMainDone");}
jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Void event","","A3xaDbLoaderManager.OnDatabaseLoadMainDone");return true;};this.DatabaseLoadTurboHeader=function()
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Start Turbo Header","","A3xaDbLoaderManager.DatabaseLoadTurboHeader");this.jm_odbLoader=new A3xaDbLoader(function(ji_oDTStatus)
{return jt_this.OnDatabaseLoadTurboHeaderDone(ji_oDTStatus);},this.jm_oDatabase);this.jm_odbLoader.LoadTurboHeaderTables();return true;};this.OnDatabaseLoadTurboHeaderDone=function(ji_oDTStatus)
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Event ("+ji_oDTStatus.Get_Descr()+")","","A3xaDbLoaderManager.OnDatabaseLoadTurboHeaderDone");jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("descr2 ("+ji_oDTStatus.Get_Descr2()+")","","A3xaDbLoaderManager.OnDatabaseLoadTurboHeaderDone");if(ji_oDTStatus.IsFail())
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Fail ("+ji_oDTStatus.Get_Descr()+")","","A3xaDbLoaderManager.OnDatabaseLoadTurboHeaderDone");if(this.jm_fnOnLoadDone)
return this.jm_fnOnLoadDone(ji_oDTStatus);return true;}
var jt_DTStatus=ji_oDTStatus.Get();if(jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
{jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Loaded OK","","A3xaDbLoaderManager.OnDatabaseLoadTurboHeaderDone");if(this.jm_fnOnLoadDone)
return this.jm_fnOnLoadDone(ji_oDTStatus);jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Unexpected","","A3xaDbLoaderManager.OnDatabaseLoadTurboHeaderDone");}
jg_oe.CanLogInfo({DB:4})&&jg_oe.LogInfo("Void event","","A3xaDbLoaderManager.OnDatabaseLoadTurboHeaderDone");return true;};}
function A3xaDbLoader(ji_fnOnChange,ji_oDatabase)
{A3xaTaskManager.call(this,ji_fnOnChange);var jt_this=this;this.jm_oDatabase=(ji_oDatabase||null);this.jm_omthxLoader=null;this.jm_omtrLoader=null;this.jm_pTypTables={};this.IsCommonTables=function(){return this.jm_pTypTables.jp_bTyp_Common||false;};this.IsMainTable=function(){return this.jm_pTypTables.jp_bTyp_Main||false;};this.IsDependentTables=function(){return this.jm_pTypTables.jp_bTyp_Dependent||false;};this.IsExtHeaderTables=function(){return this.jm_pTypTables.jp_bTyp_ExtHeader||false;};this.IsTurboHeaderTables=function(){return this.jm_pTypTables.jp_bTyp_TurboHeader||false;};this.LoadCommonTables=function()
{this.jm_pTypTables={jp_bTyp_Common:true};this.jm_oDatabase.ClearArrayDTLoad(this.jm_pTypTables);this.Reset();this.Start(null,jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable);};this.LoadExtHeaderTables=function()
{this.jm_pTypTables={jp_bTyp_ExtHeader:true};this.jm_oDatabase.ClearArrayDTLoad(this.jm_pTypTables);this.Reset();this.Start(null,jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable);};this.LoadMainTable=function()
{this.jm_pTypTables={jp_bTyp_Main:true};this.jm_oDatabase.ClearArrayDTLoad(this.jm_pTypTables);this.Reset();this.Start(null,jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable);};this.LoadTurboHeaderTables=function()
{this.jm_pTypTables={jp_bTyp_TurboHeader:true};this.jm_oDatabase.ClearArrayDTLoad(this.jm_pTypTables);this.Reset();this.Start(null,jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable);};this._OnReset=function()
{if(this.jm_omthxLoader)
this.jm_omthxLoader.Release();this.jm_omthxLoader=null;if(this.jm_omtrLoader)
this.jm_omtrLoader.Release();this.jm_omtrLoader=null;return true;};this._OnRelease=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaDbLoader._OnRelease");return true;};this._OnStart=function()
{if(!this.jm_oDatabase)
return false;this.jm_oDatabase.Open({bOpenLoad:true},this);return true;return false;};this._OnStart_TableHX=function()
{this.jm_omthxLoader=null;if(!this.jm_oDatabase.jm_oDbSchema.IsValid())
return false;var jt_aGlidToLoad=new Array();var jt_posTable=0;while(true)
{var jt_oSchemaTable=this.jm_oDatabase.jm_oDbSchema.Get_Table_ByIndex(jt_posTable,this.IsExtHeaderTables());if(!jt_oSchemaTable)
break;var jt_bTargetTable=false;if(this.IsCommonTables())
jt_bTargetTable=jt_oSchemaTable.jp_bTyp_Common;else if(this.IsExtHeaderTables())
jt_bTargetTable=jt_oSchemaTable.jp_bTyp_ExtHeader;else if(this.IsMainTable())
jt_bTargetTable=jt_oSchemaTable.jp_bTyp_Main;else if(this.IsDependentTables())
jt_bTargetTable=jt_oSchemaTable.jp_bTyp_Dependent;else if(this.IsTurboHeaderTables())
jt_bTargetTable=(jt_oSchemaTable.jp_bTyp_Common||jt_oSchemaTable.jp_bTyp_Main);if(jt_bTargetTable)
{var jt_sTableNameQUR="";jt_sTableNameQUR=(jg_oApp.Get_AppXUR().Get_3xXUR().Default2GlidQUR(jt_oSchemaTable.jp_sName)||"");if(!jt_sTableNameQUR)
break;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Table to load: "+jt_sTableNameQUR,"","A3xaDbLoader._OnStart_TableHX");jt_aGlidToLoad.push(jt_sTableNameQUR);}
jt_posTable++;}
if(!(jt_aGlidToLoad&&jt_aGlidToLoad.length))
return false;if(this.IsExtHeaderTables())
jg_oe.LogStatusBar("Loading.... Extended Headers");this.jm_omthxLoader=new A3xaMTHXLoader(function(){return jt_this.Task();},this.jm_oDatabase,jt_aGlidToLoad,this.jm_oDatabase.Get_ArrayDTLoad(this.jm_pTypTables),this.jm_pTypTables);jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaDbLoader._OnStart_TableHX");return true;};this._OnStart_Record=function()
{this.jm_omtrLoader=null;this.jm_omtrLoader=new A3xaMTRecordLoader(function(){return jt_this.Task();},this.jm_oDatabase,this.jm_oDatabase.Get_ArrayDTLoad(this.jm_pTypTables));return true;};this._CheckStatus=function()
{if(this.IsOpening())
{if(this.jm_oDatabase.IsOpen())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Db is Open","","A3xaDbLoader._CheckStatus");this.jm_oDTStatus.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;this.jm_oDTStatus.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX;if(this._OnStart_TableHX())
return this._CheckStatus();this.jm_oDTStatus.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail;return this.jm_oDTStatus;}
if(!this.jm_oDatabase.IsOpening())
this.jm_oDTStatus.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail;return this.jm_oDTStatus;}
if(this.jm_oDTStatus.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX)
return this._CheckStatus_TableHX();if(this.jm_oDTStatus.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgRecord)
return this._CheckStatus_Record();return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Database Unexpected");};this._CheckStatus_TableHX=function()
{if(!this.jm_omthxLoader)
return null;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Loading");if(this.jm_omthxLoader.IsReady())
{this.jm_omthxLoader.Start();if(!this.jm_omthxLoader)
return null;}
if(this.jm_omthxLoader.IsInProgress())
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadTableInProgress);}
if(this.jm_omthxLoader.IsDone())
{if(this.jm_omthxLoader.IsSuccess())
{if(this.IsExtHeaderTables()||this.IsTurboHeaderTables())
return this.jm_omthxLoader.jm_oDTStatus;this.jm_oDTStatus.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress;this.jm_oDTStatus.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgRecord;this.Reset();if(this._OnStart_Record())
return this._CheckStatus();this.jm_oDTStatus.jm_Status=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail;return this.jm_oDTStatus;}
return this.jm_omthxLoader.jm_oDTStatus;}
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Database Tableset Unexpected");};this._CheckStatus_Record=function()
{if(!this.jm_omtrLoader)
return null;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Loading Records");if(this.jm_omtrLoader.IsReady())
{this.jm_omtrLoader.Start();if(!this.jm_omtrLoader)
return null;}
if(this.jm_omtrLoader.IsInProgress())
{return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadRecordInProgress);}
if(this.jm_omtrLoader.IsDone())
{var jr_oDTStatus=new GLDataStatus();jr_oDTStatus.SetFrom(this.jm_omtrLoader.jm_oDTStatus);jg_oe.CanLogInfo()&&jg_oe.LogInfo("IsDone","","A3xaDbLOader._CheckStatus_Record");return jr_oDTStatus;}
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Database Records Unexpected");};this._OnEnd=function(ji_oDTStatusEnd)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaDbLOader._OnEnd");if(ji_oDTStatusEnd.IsFail())
return ji_oDTStatusEnd;if(this.jm_oDTStatus.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX)
{if(this.IsExtHeaderTables()||this.IsTurboHeaderTables())
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded);return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Loaded only Header");}
if(this.jm_oDTStatus.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgRecord)
{return this._OnEnd_Record(ji_oDTStatusEnd);}
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Database Unexpected");};this._OnEnd_Record=function(ji_oDTStatusEnd)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","A3xaDbLoader._OnEnd_Record");for(var i=0;i<this.jm_oDatabase.jm_oDbSchema.jm_aTables.length;i++)
{var jt_oSchemaTable=this.jm_oDatabase.jm_oDbSchema.Get_Table_ByIndex(i);var jt_sTableNameQUR=(jg_oApp.Get_AppXUR().Get_3xXUR().Default2GlidQUR(jt_oSchemaTable.jp_sName)||"");if(!jt_sTableNameQUR)
continue;if(!jt_oSchemaTable)
continue;var jt_odt=this.jm_oDatabase.Get_ArrayDTLoad(this.jm_pTypTables).Get_Item(jt_sTableNameQUR);if(!jt_odt)
continue;var jt_odtParent=null;if(jt_oSchemaTable.jp_sParent)
{jt_odtParent=null;var jt_sTableParentQUR=(jg_oApp.Get_AppXUR().Get_3xXUR().Default2GlidQUR(jt_oSchemaTable.jp_sParent)||"");if(jt_sTableParentQUR)
{jt_odtParent=this.jm_oDatabase.Get_DataTable(jt_sTableParentQUR,true);if(jt_odtParent&&jt_odtParent.Get_Glid()!=jt_sTableParentQUR)
jt_odtParent=null;}}
if(!jt_odt.SetupLoadedRecords(jt_odtParent))
{}}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Callback: "+
(this.jm_oDTStatus.jm_fnOnChange?"Y":"null"),"","A3xaDbLOader._OnEnd_Record");return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded);};}
function A3xaMTHXLoader(ji_fnOnChange,ji_oDatabase,ji_aGlid,ji_aodtToLoad,ji_pTypTables)
{A3xaTaskManager.call(this,ji_fnOnChange);var jt_this=this;this.jm_oDTStatus.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX;this.jm_oDTStatus.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_oDatabase=(ji_oDatabase||null);this.jm_aGlidToLoad=(ji_aGlid||null);this.jm_aGlidQueue=null;this.jm_otktbLoader=null;this._OnRelease=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaMTHXLoader._OnRelease");return this.ReleaseCurrentTbTaskLoader();};this.ReleaseCurrentTbTaskLoader=function()
{if(!this.jm_otktbLoader)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaMTHXLoader.ReleaseCurrentTbTaskLoader");this.jm_otktbLoader.Release();this.jm_otktbLoader=null;return true;};this.StartNextTbTaskLoader=function()
{if(!(this.jm_aGlidQueue&&this.jm_aGlidQueue.length))
return false;var jt_Glid=this.jm_aGlidQueue.shift();if(!jt_Glid)
return false;if(ji_pTypTables.jp_bTyp_ExtHeader||ji_pTypTables.jp_bTyp_TurboHeader);else
jg_oe.LogStatusBar("Loading... "+this.jm_oDatabase.jm_oDbSchema.Get_Descr(jt_Glid));var jt_otktbLoader=new A3xaTaskHXLoader(function(){return jt_this.Task();},this.jm_oDatabase,jt_Glid,ji_pTypTables.jp_bTyp_ExtHeader||ji_pTypTables.jp_bTyp_TurboHeader,ji_pTypTables.jp_bTyp_TurboHeader);if(!jt_otktbLoader.jm_odtToLoad)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Table id: "+jt_Glid,"","A3xaMTHXLoader.StartNextTbTaskLoader");ji_aodtToLoad.Set_Item(jt_Glid,jt_otktbLoader.jm_odtToLoad);this.jm_otktbLoader=jt_otktbLoader;this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress);jt_otktbLoader.Start();return true;};this._OnEnd=function(ji_oDTStatusEnd)
{if(ji_oDTStatusEnd&&ji_oDTStatusEnd.IsFail())
return ji_oDTStatusEnd;if(ji_pTypTables.jp_bTyp_ExtHeader||ji_pTypTables.jp_bTyp_TurboHeader)
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedTable);for(var i=0;i<this.jm_aGlidToLoad.length;i++)
{var jt_ogldt=ji_aodtToLoad.Get_Item(this.jm_aGlidToLoad[i]);var jt_glid=null;if(jt_ogldt)
jt_glid=jt_ogldt.Get_Glid();if(!jt_glid||jt_glid!=this.jm_aGlidToLoad[i])
{jg_oe.LogErr("Fail tablename missing or wrong name: "+
jt_glid+"=="+this.jm_aGlidToLoad[i],"","A3xaMTHXLoader._OnEnd");if(!this.jm_aGlidToLoad[i]||this.jm_oDatabase.jm_oDbSchema.IsMandatory(this.jm_aGlidToLoad[i]))
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Database Tableset 1");continue;}
if(jt_ogldt.jm_oDTStatus.IsFail())
{jg_oe.LogErr("Fail ("+jt_glid+")","","A3xaMTHXLoader._OnEnd");if(this.jm_oDatabase.jm_oDbSchema.IsMandatory(jt_glid))
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Database Tableset 1");}
else if(jt_ogldt.jm_oDTStatus.IsEmpty())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Empty ("+jt_ogldt.Get_Glid()+")","","A3xaMTHXLoader._OnEnd");if(this.jm_oDatabase.jm_oDbSchema.IsMandatory(jt_glid))
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Database Tableset 1");}
else if(!jt_ogldt.jm_oDTStatus.IsSuccess())
{if(this.jm_oDatabase.jm_oDbSchema.IsMandatory(jt_glid))
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadFail,"Load Database Table. Unknown Status"+jt_glid);}}
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedTable);};this._CheckStatus=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("this.jm_otktbLoader="+
(this.jm_otktbLoader?this.jm_otktbLoader.jm_oDTStatus.Get_Descr2():"null"),"","A3xaMTHXLoader._CheckStatus");var jr_oDTStatus=new GLDataStatus();jr_oDTStatus.jm_Target=this.Get_Target();jr_oDTStatus.jm_Operation=this.Get_Operation();jr_oDTStatus.jm_Status=this.Get_Status();if(!this.IsInProgress())
{jg_oe.LogErr("Unexpected Status","","A3xaMTHXLoader._CheckStatus");return null;}
if(this.IsOpening()||(this.jm_otktbLoader&&(this.jm_otktbLoader.IsSuccess()||this.jm_otktbLoader.IsEmpty()||(this.jm_otktbLoader.IsFail()&&ji_pTypTables.jp_bTyp_ExtHeader))))
{this.ReleaseCurrentTbTaskLoader();if(!(this.jm_aGlidQueue&&this.jm_aGlidQueue.length))
{jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess);return jr_oDTStatus;}
if(!this.StartNextTbTaskLoader())
{jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail);return jr_oDTStatus;}}
if(!this.jm_otktbLoader)
{jg_oe.LogErr("TaskLoader is null","","A3xaMTHXLoader._CheckStatus");return null;}
if(this.jm_otktbLoader.IsInProgress())
{jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress);return jr_oDTStatus;}
if(this.jm_otktbLoader.IsFail())
{jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,this.jm_otktbLoader.jm_oDTStatus.jm_sMessage);this.ReleaseCurrentTbTaskLoader();return jr_oDTStatus;}
if(this.jm_otktbLoader.IsSuccess()||this.jm_otktbLoader.IsEmpty())
{return this._CheckStatus();}
jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Unexpected");return jr_oDTStatus;};this._OnStart=function()
{if(!(this.jm_aGlidToLoad&&this.jm_aGlidToLoad.length))
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Tablenames not defined");return false;}
this.jm_aGlidQueue=new Array();for(var i=0;i<this.jm_aGlidToLoad.length;i++)
this.jm_aGlidQueue.push(this.jm_aGlidToLoad[i]);return true;};}
function A3xaMTRecordLoader(ji_fnOnChange,ji_oDatabase,ji_aodtToLoad)
{A3xaTaskManager.call(this,ji_fnOnChange);var jt_this=this;this.jm_oDTStatus.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgRecord;this.jm_oDTStatus.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_oDatabase=(ji_oDatabase||null);this.jm_aodtToLoad=(ji_aodtToLoad||null);this.jm_aodtQueue=null;this.jm_otkrLoader=null;this._OnRelease=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaMTRecordLoader._OnRelease");this.ReleaseCurrentRecordTaskLoader();return true;};this.ReleaseCurrentRecordTaskLoader=function()
{if(!this.jm_otkrLoader)
return false;this.jm_otkrLoader.Release();this.jm_otkrLoader=null;return true;};this.StartNextRecordTaskLoader=function()
{if(!(this.jm_aodtQueue&&this.jm_aodtQueue.length))
return false;var jt_odt=this.jm_aodtQueue.shift();if(!(jt_odt&&jt_odt.Get_Glid()))
return false;jg_oe.LogStatusBar("Loading Records... "+
this.jm_oDatabase.jm_oDbSchema.Get_Descr(jt_odt.Get_Glid()));var jt_otkrLoader=new A3xaTaskRecordLoader(function(){return jt_this.Task();},this.jm_oDatabase,jt_odt);jg_oe.CanLogInfo()&&jg_oe.LogInfo("Table id: "+jt_odt.Get_Glid(),"","A3xaMTRecordLoader.StartNextRecordTaskLoader");this.jm_otkrLoader=jt_otkrLoader;this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress);jt_otkrLoader.Start();return true;};this._OnEnd=function(ji_oDTStatusEnd)
{if(ji_oDTStatusEnd&&ji_oDTStatusEnd.IsFail())
return ji_oDTStatusEnd;for(var i=0;i<this.jm_aodtToLoad.Get_Count();i++)
{var jt_odt=this.jm_aodtToLoad.Get_Item_ByIndex(i);if(!jt_odt)
continue;var jt_glid=jt_odt.Get_Glid();if(jt_odt.jm_oDTStatus.IsFail())
{jg_oe.LogErr("Fail ("+jt_glid+")","","A3xaMTRecordLoader._OnEnd");if(this.jm_oDatabase.jm_oDbSchema.IsMandatory(jt_glid))
return jt_odt.jm_oDTStatus;}
else if(jt_odt.jm_oDTStatus.IsEmpty())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Empty ("+jt_glid+")","","A3xaMTRecordLoader._OnEnd");if(this.jm_oDatabase.jm_oDbSchema.IsMandatory(jt_glid))
return jt_odt.jm_oDTStatus;}
else if(!jt_odt.jm_oDTStatus.IsSuccess())
{if(this.jm_oDatabase.jm_oDbSchema.IsMandatory(jt_glid))
{ji_oDTStatusEnd.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Load Records. Unknown Status"+jt_glid);return ji_oDTStatusEnd;}}}
return new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_LoadedRecord);};this._CheckStatus=function()
{var jr_oDTStatus=new GLDataStatus();jr_oDTStatus.jm_Target=this.Get_Target();jr_oDTStatus.jm_Operation=this.Get_Operation();jr_oDTStatus.jm_Status=this.Get_Status();if(!this.IsInProgress())
{jg_oe.LogErr("Unexpected Status","","A3xaMTRecordLoader._CheckStatus");return null;}
if(this.IsOpening()||(this.jm_otkrLoader&&(this.jm_otkrLoader.IsSuccess()||this.jm_otkrLoader.IsEmpty())))
{this.ReleaseCurrentRecordTaskLoader();if(!(this.jm_aodtQueue&&this.jm_aodtQueue.length))
{jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess);return jr_oDTStatus;}
if(!this.StartNextRecordTaskLoader())
{jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail);return jr_oDTStatus;}}
if(!this.jm_otkrLoader)
{jg_oe.LogErr("TaskLoader is null","","A3xaMTRecordLoader._CheckStatus");return null;}
if(this.jm_otkrLoader.IsInProgress())
{jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress);return jr_oDTStatus;}
if(this.jm_otkrLoader.IsFail())
{jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,this.jm_otkrLoader.jm_oDTStatus.jm_sMessage);this.ReleaseCurrentRecordTaskLoader();return jr_oDTStatus;}
if(this.jm_otkrLoader.IsSuccess()||this.jm_otkrLoader.IsEmpty())
{return this._CheckStatus();}
jr_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Unexpected");return jr_oDTStatus;};this._OnStart=function()
{if(!(this.jm_aodtToLoad&&this.jm_aodtToLoad.Get_Count()))
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Tables cache not defined");return false;}
this.jm_aodtQueue=new Array();for(var i=0;i<this.jm_aodtToLoad.Get_Count();i++)
{var jt_odt=this.jm_aodtToLoad.Get_Item_ByIndex(i);if(jt_odt)
this.jm_aodtQueue.push(jt_odt);}
return true;};}
function A3xaTaskHXLoader(ji_fnOnChange,ji_oDatabase,ji_Glid,ji_bHeaderOnly,ji_bTurboHeader)
{A3xaTaskManager.call(this,ji_fnOnChange);var jt_this=this;this.jm_oDTStatus.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX;this.jm_oDTStatus.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_oDatabase=(ji_oDatabase||null);this.jm_Glid=(ji_Glid||null);this.jm_odtToLoad=null;if(this.jm_oDatabase&&this.jm_Glid)
this.jm_odtToLoad=this.jm_oDatabase.NewDataTable(this.jm_Glid);this._OnRelease=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaTaskHXLoader._OnRelease");if(!this.jm_odtToLoad)
return false;this.jm_odtToLoad.jm_oDTStatus.jm_fnOnChange=null;this.jm_odtToLoad=null;return true;};this._CheckStatus=function(){return this.jm_odtToLoad?this.jm_odtToLoad.jm_oDTStatus:null;};this._OnStart=function()
{if(!this.jm_oDatabase)
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Database not defined");return false;}
if(!this.jm_Glid)
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Tablename not defined");return false;}
if(!this.jm_odtToLoad)
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Cannot Create Table Cache "+this.jm_Glid);return false;}
this.jm_odtToLoad.jm_oDTStatus.jm_fnOnChange=function(){return jt_this.Task();};var jt_oDbTransaction=this.jm_oDatabase.OpenTransaction({bLoad:true,bHeaderOnly:ji_bHeaderOnly,bTurboHeader:ji_bTurboHeader},this,[this.jm_Glid]);jt_oDbTransaction.UsingTable(this.jm_Glid);var jt_bResult=this.jm_odtToLoad.LoadFromGLS(this.jm_Glid,jt_oDbTransaction,ji_bHeaderOnly);jt_oDbTransaction.Release();if(jt_bResult)
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress);return true;}
this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Load Table "+this.jm_Glid);return false;};}
function A3xaTaskRecordLoader(ji_fnOnChange,ji_oDatabase,ji_odtToLoad)
{A3xaTaskManager.call(this,ji_fnOnChange);var jt_this=this;this.jm_oDTStatus.jm_Target=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgRecord;this.jm_oDTStatus.jm_Operation=jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpLoad;this.jm_oDatabase=(ji_oDatabase||null);this.jm_odtToLoad=(ji_odtToLoad||null);this._OnRelease=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaTaskRecordLoader._OnRelease");if(!this.jm_odtToLoad)
return false;this.jm_odtToLoad.jm_oDTStatus.jm_fnOnChange=null;this.jm_odtToLoad=null;return true;};this._CheckStatus=function(){return this.jm_odtToLoad?this.jm_odtToLoad.jm_oDTStatus:null;};this._OnStart=function()
{if(!(this.jm_oDatabase&&this.jm_odtToLoad&&this.jm_odtToLoad.Get_Glid()))
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Db or Table not defined");return false;}
if(!(this.jm_odtToLoad.jm_oDTStatus.IsSuccess()&&this.jm_odtToLoad.jm_oDTStatus.jm_Target==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTableHX))
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Table Cache Header and Indexes not valid: "+
this.jm_odtToLoad.Get_Glid());return false;}
if(this.jm_odtToLoad.Get_CountRecords()<=0)
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StEmpty,null,null,"No Records to Load: "+this.jm_odtToLoad.Get_Glid());return false;}
this.jm_odtToLoad.jm_oDTStatus.jm_fnOnChange=function(){return jt_this.Task();};var jt_oDbTransaction=this.jm_oDatabase.OpenTransaction({bLoad:true,bRecord:true},this,[this.jm_odtToLoad.Get_Glid()]);jt_oDbTransaction.UsingTable(this.jm_odtToLoad.Get_Glid());var jt_bResult=this.jm_odtToLoad.LoadRecordsFromGLS(jt_oDbTransaction);jt_oDbTransaction.Release();if(jt_bResult)
{this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress);return true;}
this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StFail,null,null,"Load Records "+this.jm_odtToLoad.Get_Glid());return false;};}
function A3xaStorage()
{this.Get_Type=A3xaStorage_Get_Type;this.Available=A3xaStorage_Available;this.Enable=A3xaStorage_Enable;this.IsOpen=A3xaStorage_IsOpen;this.IsOpening=A3xaStorage_IsOpening;this.ExecOpen=A3xaStorage_ExecOpen;this.Open=A3xaStorage_Open;this.ExecClear=A3xaStorage_ExecClear;this.Clear=A3xaStorage_Clear;this.IsClearRequest=A3xaStorage_IsClearRequest;this.Get_TableNames=function(){return null;}
this.NewTransaction=A3xaStorage_NewTransaction;this.ExecWrite=A3xaStorage_ExecWrite;this.ExecRead=function(ji_oDbTransaction,jio_oStorageValue){return true;}
this.Write3=A3xaStorage_Write3;this.Read3=A3xaStorage_Read3;this.CheckLatestOp=A3xaStorage_CheckLatestOp;this.jm_bAvailable=false;this.jm_bEnable=false;this.jm_LatestWrite=null;this.jm_LatestRead=null;this.jm_bOpen=false;this.jm_bClearRequest=false;}
function A3xaStorage_CheckLatestOp(ji_Op)
{var jr_latest=null;if(ji_Op=="WR")
{jr_latest=this.jm_LatestWrite;this.jm_LatestWrite=null;}
else if(ji_Op=="RD")
{jr_latest=this.jm_LatestRead;this.jm_LatestRead=null;}
return jr_latest;}
function A3xaStorage_Get_Type(){return 0;}
function A3xaStorage_Available(){return this.jm_bAvailable===true;}
function A3xaStorage_Enable(ji_b){this.jm_bEnable=(ji_b===true);return true;}
function A3xaStorage_IsClearRequest(){return this.jm_bClearRequest;}
function A3xaStorage_ExecClear(){return true;}
function A3xaStorage_Clear(ji_oDbTransaction)
{this.jm_LatestWrite=null;this.jm_LatestRead=null;if(ji_oDbTransaction)
{if(!(this.jm_bAvailable))
{if(ji_oDbTransaction)
ji_oDbTransaction.FireClearStorageError(null,"Fail on Clear Storage: Storage not available");return false;}
if(!(this.IsOpen()))
{if(ji_oDbTransaction)
ji_oDbTransaction.FireClearStorageError(null,"Fail on Clear Storage: Storage not open");return false;}
if(!ji_oDbTransaction.IsReady())
{if(ji_oDbTransaction)
ji_oDbTransaction.FireClearStorageError(null,"Fail on Clear Storage: Transaction not ready");return false;}}
var jt_b=this.ExecClear(ji_oDbTransaction);if(jt_b===true)
{if(ji_oDbTransaction)
ji_oDbTransaction.FireClearStorage(null);}
return true;}
function A3xaStorage_NewTransaction(ji_aDbTableName,ji_oStorageOpType,ji_odbtrListener)
{var jr_oDbTransaction=new A3xaStorage_Transaction(ji_aDbTableName,ji_oStorageOpType,ji_odbtrListener);jr_oDbTransaction.jm_oStorage=this;return jr_oDbTransaction;}
function A3xaStorage_IsOpen(){return this.jm_bOpen===true;}
function A3xaStorage_IsOpening(){return this.jm_bOpen===-1;}
function A3xaStorage_ExecOpen(ji_oDbTransaction,ji_oSchema)
{return true;}
function A3xaStorage_Open(ji_oDbTransaction,ji_oSchema)
{if(this.jm_bOpen)
return this.jm_bOpen;this.jm_bOpen=-1;if(!(this.jm_bAvailable&&this.jm_bEnable))
{this.jm_bOpen=false;if(ji_oDbTransaction)
ji_oDbTransaction.FireOpenStorageError(null,"Fail on Open Storage: Storage not available or disabled");return false;}
if(!(ji_oSchema&&ji_oSchema.IsValid()))
{this.jm_bOpen=false;if(ji_oDbTransaction)
ji_oDbTransaction.FireOpenStorageError(null,"Fail on Open Storage: Schema not valid");return false;}
var jt_bOpen=this.ExecOpen(ji_oDbTransaction,ji_oSchema);if(jt_bOpen===true)
{this.jm_bOpen=true;if(ji_oDbTransaction)
ji_oDbTransaction.FireOpenStorage(null);}
else if(jt_bOpen===false)
{this.jm_bOpen=false;}
return this.jm_bOpen;}
function A3xaStorage_ExecWrite(ji_oDbTransaction,ji_oStorageValue)
{return true;}
function A3xaStorage_ExecRead(ji_oDbTransaction,jio_oStorageValue)
{return true;}
function A3xaStorage_Write3(ji_oDbTransaction,ji_oStorageValue)
{if(!ji_oStorageValue)
return false;if(!(this.jm_bAvailable&&this.jm_bEnable))
return false;if(!(this.IsOpen()))
return ji_oStorageValue.Set_Result({bStore:true,bError:true},"Store Record: "+"Storage Not Open");var jt_key=ji_oStorageValue.Get_Key();if(!jt_key)
return ji_oStorageValue.Set_Result({bStore:true,bError:true},"Store Record: "+"Key Empty");if(!(ji_oDbTransaction))
return ji_oStorageValue.Set_Result({bStore:true,bError:true},"Store Record: "+"Transaction undefined");if(!ji_oDbTransaction.IsReady())
return ji_oStorageValue.Set_Result({bStore:true,bError:true},"Store Record: "+"Transaction device not ready");if(this.ExecWrite(ji_oDbTransaction,ji_oStorageValue)===true)
{ji_oStorageValue.Set_Result({bStore:true,bSuccess:true});this.jm_LatestWrite=true;}
return true;}
function A3xaStorage_Read3(ji_oDbTransaction,jio_oStorageValue)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p1","A3xaStorage_Read3");if(!jio_oStorageValue)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("p2","A3xaStorage_Read3");if(!(this.jm_bAvailable&&this.jm_bEnable))
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("p3","A3xaStorage_Read3");if(!(this.IsOpen()))
return jio_oStorageValue.Set_Result({bLoad:true,bError:true},"Load Record: "+"Storage Not Open");jg_oe.CanLogInfo()&&jg_oe.LogInfo("p4","A3xaStorage_Read3");if(!jio_oStorageValue.Get_Key())
return jio_oStorageValue.Set_Result({bLoad:true,bError:true},"Load Record: "+"Key Empty");jg_oe.CanLogInfo()&&jg_oe.LogInfo("p5="+jio_oStorageValue.Get_Key(),"A3xaStorage_Read3");if(!(ji_oDbTransaction))
return jio_oStorageValue.Set_Result({bLoad:true,bError:true},"Load Record: "+"Transaction undefined");if(!ji_oDbTransaction.IsReady())
return jio_oStorageValue.Set_Result({bLoad:true,bError:true},"Load Record: "+"Transaction device not ready");if(this.ExecRead(ji_oDbTransaction,jio_oStorageValue)===true)
{this.jm_LatestRead=true;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("pend="+jio_oStorageValue.Get_Key(),"A3xaStorage_Read3");return true;}
function A3xaStorage_Transaction(ji_aDbTableName,ji_oStorageOpType,ji_odbtrListener)
{this.FireOpenStorage=A3xaStorage_Transaction_FireOpenStorage;this.FireOpenStorageError=A3xaStorage_Transaction_FireOpenStorageError;this.FireTransactionComplete=A3xaStorage_Transaction_FireTransactionComplete;this.FireTransactionError=A3xaStorage_Transaction_FireTransactionError;this.FireClearStorage=A3xaStorage_Transaction_FireClearStorage;this.FireClearStorageError=A3xaStorage_Transaction_FireClearStorageError;this.UsingTable=A3xaStorage_Transaction_UsingTable;this.Release=A3xaStorage_Transaction_Release;this.IsAsync=A3xaStorage_Transaction_IsAsync;this.Get_Storage=A3xaStorage_Transaction_Get_Storage;this.IsReady=A3xaStorage_Transaction_IsReady;this.jm_oStorage=null;this.jm_aDbTableName=ji_aDbTableName;this.jm_oStorageOpType=(ji_oStorageOpType||{});this.jm_sCurrentTableName=null;this.jm_bAsync=false;this.jm_bReleased=false;this.jm_bCompleted=false;this.jm_bFail=false;this.jm_odbtrListener=(ji_odbtrListener||null);}
function A3xaStorage_Transaction_FireOpenStorage(ji_oEvent)
{if(this.jm_odbtrListener)
return this.jm_odbtrListener.OnOpenStorage(this,ji_oEvent);return true;}
function A3xaStorage_Transaction_FireOpenStorageError(ji_oEvent,ji_sMessage)
{if(this.jm_odbtrListener)
return this.jm_odbtrListener.OnOpenStorageError(this,ji_oEvent,ji_sMessage);return true;}
function A3xaStorage_Transaction_FireClearStorage(ji_oEvent)
{if(this.jm_odbtrListener)
return this.jm_odbtrListener.OnClearStorage(this,ji_oEvent);return true;}
function A3xaStorage_Transaction_FireClearStorageError(ji_oEvent,ji_sMessage)
{if(this.jm_odbtrListener)
return this.jm_odbtrListener.OnClearStorageError(this,ji_oEvent,ji_sMessage);return true;}
function A3xaStorage_Transaction_FireTransactionComplete(ji_oEvent)
{if(this.jm_bCompleted||this.jm_bFail)
return false;this.jm_bCompleted=true;if(this.jm_oStorageOpType.bStore)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Completed for Store "+
(this.jm_oStorageOpType.bRecord?", Records":""));else if(this.jm_oStorageOpType.bLoad)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Completed for Load "+
(this.jm_oStorageOpType.bRecord?", Records":""));else if(this.jm_oStorageOpType.bClear)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Completed for Clear "+
(this.jm_oStorageOpType.bRecord?", Records":""));else
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Completed for ? "+
(this.jm_oStorageOpType.bRecord?", Records":""));for(var j=0;j<this.jm_aDbTableName.length;j++)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("tablename="+this.jm_aDbTableName[j]);if(this.jm_odbtrListener)
return this.jm_odbtrListener.OnTransactionComplete(this,ji_oEvent);return true;}
function A3xaStorage_Transaction_FireTransactionError(ji_oEvent,ji_sMessage)
{if(this.jm_bCompleted||this.jm_bFail)
return false;this.jm_bFail=true;if(this.jm_oStorageOpType.bStore)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Error for Store "+
(this.jm_oStorageOpType.bRecord?", Records":""));else if(this.jm_oStorageOpType.bLoad)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Error for Load "+
(this.jm_oStorageOpType.bRecord?", Records":""));else if(this.jm_oStorageOpType.bClear)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Error for Clear "+
(this.jm_oStorageOpType.bRecord?", Records":""));else
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Error for ? "+
(this.jm_oStorageOpType.bRecord?", Records":""));for(var j=0;j<this.jm_aDbTableName.length;j++)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("tablename="+this.jm_aDbTableName[j]);if(this.jm_odbtrListener)
return this.jm_odbtrListener.OnTransactionError(this,ji_oEvent,ji_sMessage);return true;}
function A3xaStorage_Transaction_Get_Storage(){return this.jm_oStorage;}
function A3xaStorage_Transaction_IsAsync(){return this.jm_bAsync||false;}
function A3xaStorage_Transaction_UsingTable(ji_sCurrentTableName)
{if(this.jm_bCompleted||this.jm_bFail)
return false;if(this.jm_sCurrentTableName!=ji_sCurrentTableName||!ji_sCurrentTableName)
{this.jm_sCurrentTableName=(ji_sCurrentTableName||null);jg_oe.CanLogInfo()&&jg_oe.LogInfo("Set name:"+(this.jm_sCurrentTableName||"null"),"","A3xaStorage_Transaction_UsingTable");}
return true;}
function A3xaStorage_Transaction_IsReady()
{if(this.jm_bCompleted||this.jm_bFail||this.jm_bReleased)
{jg_oe.LogErr("tbn,com,fail,rel:"+
(this.jm_aDbTableName||"null")+","+(this.jm_bCompleted?"Y":"N")+","+
(this.jm_bFail?"Y":"N")+","+(this.jm_bReleased?"Y":"N"),"","A3xaStorage_Transaction_IsReady");return false;}
if(!this.jm_aDbTableName)
{jg_oe.LogErr("tbn=null","","A3xaStorage_Transaction_IsReady");return false;}
return true;}
function A3xaStorage_Transaction_Release()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Release Transaction for: "+(this.jm_aDbTableName?this.jm_aDbTableName[0]:"")+" "+
(this.jm_bReleased?"already released":""));if(this.jm_bReleased)
return false;if(!this.jm_bAsync)
{this.FireTransactionComplete(null);}
this.jm_bReleased=true;return true;}
function A3xaStorage_TransactionListener()
{this.OnOpenStorage=A3xaStorage_TransactionListener_OnOpenStorage;this.OnOpenStorageError=A3xaStorage_TransactionListener_OnOpenStorageError;this.OnClearStorage=A3xaStorage_TransactionListener_OnClearStorage;this.OnClearStorageError=A3xaStorage_TransactionListener_OnClearStorageError;this.OnTransactionComplete=A3xaStorage_TransactionListener_OnTransactionComplete;this.OnTransactionError=A3xaStorage_TransactionListener_OnTransactionError;}
function A3xaStorage_TransactionListener_OnTransactionComplete(ji_odbtr,ji_oEvent)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("A3xaStorage_TransactionListener_OnTransactionComplete");return true;}
function A3xaStorage_TransactionListener_OnTransactionError(ji_odbtr,ji_oEvent,ji_sMessage)
{return true;}
function A3xaStorage_TransactionListener_OnOpenStorage(ji_odbtr,ji_oEvent)
{return true;}
function A3xaStorage_TransactionListener_OnOpenStorageError(ji_odbtr,ji_oEvent,ji_sMessage)
{return true;}
function A3xaStorage_TransactionListener_OnClearStorage(ji_odbtr,ji_oEvent)
{return true;}
function A3xaStorage_TransactionListener_OnClearStorageError(ji_odbtr,ji_oEvent,ji_sMessage)
{return true;}
function A3xaStorage_OpType()
{}
function A3xaStorage_Value(ji_xkey,ji_value)
{this.Get_Key=A3xaStorage_Value_Get_Key;this.Set_Key=A3xaStorage_Value_Set_Key;this.Get_Value=A3xaStorage_Value_Get_Value;this.Set_Value=A3xaStorage_Value_Set_Value;this.Get_Pair=A3xaStorage_Value_Get_Pair;this.Set_Pair=A3xaStorage_Value_Set_Pair;this.Set_Result=A3xaStorage_Value_Set_Result;this.jm_aValue=new Array();this.jm_aValue[jc_gl.jc_oA3xaDbZero.jc_sDbDefaultPrimaryKeyName]=(ji_xkey||null);this.jm_aValue["xvalue"]=(ji_value||null);}
function A3xaStorage_Value_Set_Result(ji_oStorageOpType,ji_sMessage){return true;}
function A3xaStorage_Value_Get_Key()
{return this.jm_aValue[jc_gl.jc_oA3xaDbZero.jc_sDbDefaultPrimaryKeyName]||null;}
function A3xaStorage_Value_Set_Key(ji_xkey)
{if(!ji_xkey)
return false;this.jm_aValue[jc_gl.jc_oA3xaDbZero.jc_sDbDefaultPrimaryKeyName]=ji_xkey;return true;}
function A3xaStorage_Value_Get_Value()
{return this.jm_aValue["xvalue"]||null;}
function A3xaStorage_Value_Set_Value(ji_value)
{this.jm_aValue["xvalue"]=ji_value;return true;}
function A3xaStorage_Value_Get_Pair()
{return this.jm_aValue||null;}
function A3xaStorage_Value_Set_Pair(ji_a,ji_bSkipCheck)
{if(!ji_a)
return false;var jt_key=ji_a[jc_gl.jc_oA3xaDbZero.jc_sDbDefaultPrimaryKeyName];var jt_value=ji_a["xvalue"];if(ji_bSkipCheck===true||!this.Get_Key())
this.Set_Key(jt_key);else if(this.Get_Key()!=jt_key)
return false;return this.Set_Value(jt_value);}
function A3xaDbSchema(ji_sDbName,ji_DbVersion,ji_sDbDefaultKeyName,ji_aTables)
{this.jm_sDbName=ji_sDbName;this.jm_DbVersion=ji_DbVersion;this.jm_sDbDefaultKeyName=ji_sDbDefaultKeyName;this.jm_aTables=ji_aTables;this.jm_aTablesExtension=null;this.IsValid=function()
{if(!(this.jm_sDbName||this.jm_DbVersion||this.jm_sDbDefaultKeyName||this.jm_aTables))
return false;if(!(this.jm_aTables.length>0))
return false;return true;};this.Get_DbName=function(){return this.jm_sDbName||null;}
this.Get_DbVersion=function(){return this.jm_DbVersion||null;}
this.Get_PrimaryKeyName=function(){return this.jm_sDbDefaultKeyName;};this.Get_Table_ByIndex=function(ji_index,ji_bExtension)
{var jt_aTables=this.jm_aTables;if(ji_bExtension===true)
jt_aTables=this.jm_aTablesExtension;if(!(ji_index>=0&&jt_aTables&&ji_index<jt_aTables.length))
return null;return jt_aTables[ji_index]||null;};this.Get_Table_ByName=function(ji_sName,ji_bSkipGlidConversion)
{if(!ji_sName)
return null;if(!ji_bSkipGlidConversion)
ji_sName=jc_gl.jc_oA3xaDbZero.Glid2Default(ji_sName);var jt_aTables=this.jm_aTables;for(var i=0;i<jt_aTables.length;i++)
{if(ji_sName==jt_aTables[i].jp_sName)
return jt_aTables[i];}
return null;};this.Index2Name=function(ji_index,ji_bExtension)
{var jt_pTable=this.Get_Table_ByIndex(ji_index,ji_bExtension);if(!jt_pTable)
return"";return jt_pTable.jp_sName||"";};this.IsMandatory=function(ji_sName)
{var jt_pTable=this.Get_Table_ByName(ji_sName);if(!jt_pTable)
return false;return jt_pTable.jp_bMandatory||false;};this.Get_StorageType=function(ji_sName)
{var jt_sNameDefault=jc_gl.jc_oA3xaDbZero.Glid2Default(ji_sName);var jt_pTable=this.Get_Table_ByName(jt_sNameDefault,true);var jt_bExtendedStorage=false;if(jt_sNameDefault!=ji_sName)
jt_bExtendedStorage=true;var jt_StorageType=jc_gl.jc_oStorage.jc_FLY;if(jt_pTable&&jt_sNameDefault)
{jt_StorageType=jt_pTable.jp_DefaultStorageType;if(jt_bExtendedStorage&&jg_oe.jm_StorageTypeDefault==jc_gl.jc_oStorage.jc_IDB)
jt_StorageType=jt_pTable.jp_ExtendedStorageType;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("info:"+
jc_gl.jc_oStorage.Get_Descr(jt_StorageType||jc_gl.jc_oStorage.jc_FLY),"","A3xaDbSchema.Get_StorageType");return jt_StorageType||jc_gl.jc_oStorage.jc_FLY;};this.Get_Descr=function(ji_sName)
{var jt_pTable=this.Get_Table_ByName(ji_sName);if(!jt_pTable)
return"";return jt_pTable.jp_sDescr||"";};}
function A3xaStorageFLY()
{A3xaStorage.call(this);this.Get_Type=A3xaStorageFLY_Get_Type;this.ExecClear=A3xaStorageFLY_ExecClear;this.ExecWrite=A3xaStorageFLY_ExecWrite;this.ExecRead=A3xaStorageFLY_ExecRead;this.jm_bAvailable=true;this.jm_aFlyStorage=new Array();}
function A3xaStorageFLY_Get_Type(){return jc_gl.jc_oStorage.jc_FLY;}
function A3xaStorageFLY_ExecClear(ji_oDbTransaction)
{this.jm_aFlyStorage=new Array();return true;}
function A3xaStorageFLY_ExecWrite(ji_oDbTransaction,ji_oStorageValue)
{var jt_key=ji_oStorageValue.Get_Key();var jt_value=ji_oStorageValue.Get_Value();this.jm_aFlyStorage[jt_key]=jt_value;return true;}
function A3xaStorageFLY_ExecRead(ji_oDbTransaction,jio_oStorageValue)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p1="+(jio_oStorageValue?jio_oStorageValue.Get_Key():"?"),"A3xaStorageFLY_ExecRead");return jio_oStorageValue.Set_Value(this.jm_aFlyStorage[jio_oStorageValue.Get_Key()]);}
function A3xaStorageSS()
{A3xaStorage.call(this);this.Get_Type=A3xaStorageSS_Get_Type;this.Available=A3xaStorageSS_Available;this.ExecClear=A3xaStorageSS_ExecClear;this.ExecWrite=A3xaStorageSS_ExecWrite;this.ExecRead=A3xaStorageSS_ExecRead;}
function A3xaStorageSS_Get_Type(){return jc_gl.jc_oStorage.jc_SS;}
function A3xaStorageSS_Available()
{if(this.jm_bAvailable==true)
return true;try
{if('sessionStorage'in window&&window['sessionStorage']!==null)
{sessionStorage.setItem("GSSSYS","Available1");var jt_text=sessionStorage.getItem("GSSSYS");if(jt_text&&jt_text=="Available1")
{sessionStorage.setItem("GSSSYS","Available2");jt_text=sessionStorage.getItem("GSSSYS");if(jt_text&&jt_text=="Available2")
this.jm_bAvailable=true;}}}
catch(e)
{}
return this.jm_bAvailable;}
function A3xaStorageSS_ExecClear(ji_oDbTransaction)
{sessionStorage.clear();jg_oe.LogStatusBar("Clear Session Storage");return true;}
function A3xaStorageSS_ExecWrite(ji_oDbTransaction,ji_oStorageValue)
{var jt_key=ji_oStorageValue.Get_Key();var jt_value=ji_oStorageValue.Get_Value();sessionStorage.setItem(jt_key,jt_value);return true;}
function A3xaStorageSS_ExecRead(ji_oDbTransaction,jio_oStorageValue)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p1="+(jio_oStorageValue?jio_oStorageValue.Get_Key():"?"),"A3xaStorageSS_ExecRead");return jio_oStorageValue.Set_Value(sessionStorage.getItem(jio_oStorageValue.Get_Key()));}
function A3xaStorageLS()
{A3xaStorage.call(this);this.Get_Type=A3xaStorageLS_Get_Type;this.Available=A3xaStorageLS_Available;this.ExecClear=A3xaStorageLS_ExecClear;this.ExecWrite=A3xaStorageLS_ExecWrite;this.ExecRead=A3xaStorageLS_ExecRead;}
function A3xaStorageLS_Get_Type(){return jc_gl.jc_oStorage.jc_LS;}
function A3xaStorageLS_Available()
{if(this.jm_bAvailable==true)
return true;try
{if('localStorage'in window&&window['localStorage']!==null)
{localStorage.setItem("GLSSYS","Available1");var jt_text=localStorage.getItem("GLSSYS");if(jt_text&&jt_text=="Available1")
{localStorage.setItem("GLSSYS","Available2");jt_text=localStorage.getItem("GLSSYS");if(jt_text&&jt_text=="Available2")
this.jm_bAvailable=true;}}}
catch(e)
{}
return this.jm_bAvailable;}
function A3xaStorageLS_ExecClear(ji_oDbTransaction)
{localStorage.clear();jg_oe.LogStatusBar("Clear Local Storage");return true;}
function A3xaStorageLS_ExecWrite(ji_oDbTransaction,ji_oStorageValue)
{var jt_key=ji_oStorageValue.Get_Key();var jt_value=ji_oStorageValue.Get_Value();localStorage.setItem(jt_key,jt_value);return true;}
function A3xaStorageLS_ExecRead(ji_oDbTransaction,jio_oStorageValue)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("p1="+(jio_oStorageValue?jio_oStorageValue.Get_Key():"?"),"A3xaStorageLS_ExecRead");return jio_oStorageValue.Set_Value(localStorage.getItem(jio_oStorageValue.Get_Key()));}
function A3xaStorageIDB()
{A3xaStorage.call(this);this.Get_Type=A3xaStorageIDB_Get_Type;this.Available=A3xaStorageIDB_Available;this.ExecOpen=A3xaStorageIDB_ExecOpen;this.ExecOpenGranted=A3xaStorageIDB_ExecOpenGranted;this.Get_IDB=A3xaStorageIDB_Get_IDB;this.ExecClear=A3xaStorageIDB_ExecClear;this.Get_TableNames=function()
{if(!this.IsOpen())
return null;return this.jm_oidb.objectStoreNames||null;}
this.IsOpen=A3xaStorageIDB_IsOpen;this.NewTransaction=A3xaStorageIDB_NewTransaction;this.ExecWrite=A3xaStorageIDB_ExecWrite;var jt_this=this;this.ExecRead=function(ji_oDbTransaction,jio_oStorageValue)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin - key: "+jio_oStorageValue.Get_Key(),"IDB Exec Read");var jt_oidbOS=ji_oDbTransaction.Get_ObjectStore();if(!jt_oidbOS)
return false;var jt_oidbRequest=jt_oidbOS.get(jio_oStorageValue.Get_Key());jt_oidbRequest.onsuccess=function(event)
{if(!jio_oStorageValue)
return;var jt_aidb=event.target.result;var jt_osValue=new A3xaStorage_Value(null,null);jt_osValue.Set_Pair(jt_aidb);if(!jt_osValue.Get_Key())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Empty - ki,ko,vo: "+jio_oStorageValue.Get_Key()+",null,null","IDB Exec Read");jio_oStorageValue.Set_Result({bLoad:true,bEmpty:true},"Load Record Empty ");}
else if(!jio_oStorageValue.Set_Pair(jt_aidb))
{jg_oe.LogErr("Fail - ki,ko,vo: "+jio_oStorageValue.Get_Key()+", "+jt_osValue.Get_Key()+", "+jt_osValue.Get_Value(),"IDB Exec Read");jio_oStorageValue.Set_Result({bLoad:true,bError:true},"Load Record: "+event.target.result+" - "+jt_oidbRequest.error);}
else
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Success - k,v: "+jio_oStorageValue.Get_Key()+", "+
jio_oStorageValue.Get_Value(),"IDB Exec Read");jt_this.jm_LatestRead=true;}};jt_oidbRequest.onerror=function(event)
{var jt_aidb=event.target.result;jg_oe.LogErr("Fail - ki,ko,vo: "+jio_oStorageValue.Get_Key()+", "+(jt_aidb?jt_aidb["xkey"]+", "+jt_aidb["xvalue"]:",null,null"),"IDB Exec Read");if(jio_oStorageValue)
jio_oStorageValue.Set_Result({bLoad:true,bError:true},"Load Record: "+event.target.result+" - "+jt_oidbRequest.error);};return-1;}
this.jm_oidb=null;this.jm_CurrentVersion=null;this.jm_bOpenGranted=false;}
function A3xaStorageIDB_Get_Type(){return jc_gl.jc_oStorage.jc_IDB;}
function A3xaStorageIDB_Available()
{if(this.jm_bAvailable==true)
return true;window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;window.IDBTransaction=window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction;window.IDBKeyRange=window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange;if(window.indexedDB)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Available","Indexeddb","A3xaStorageIDB_Available");this.jm_bAvailable=true;}
else
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Not Available","Indexeddb","A3xaStorageIDB_Available");}
if(window.IDBTransaction&&window.IDBKeyRange);return this.jm_bAvailable;}
function A3xaStorageIDB_ExecClear(ji_oDbTransaction)
{if(!ji_oDbTransaction)
{this.jm_bClearRequest=true;jg_oe.LogStatusBar("Clear Indexeddb");return-1;}
this.jm_bClearRequest=false;var jt_sTableName=ji_oDbTransaction.jm_sCurrentTableName;var jt_oidbOS=ji_oDbTransaction.Get_ObjectStore();if(!jt_oidbOS)
return false;var jt_oidbRequest=null;try
{jt_oidbRequest=jt_oidbOS.clear();}
catch(e)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("ExecClear: "+e);jt_oidbRequest=null;}
if(!jt_oidbRequest)
{if(ji_oDbTransaction)
ji_oDbTransaction.FireClearStorageError(event,"Fail on Clear IndexedDB: "+"Cannot clear");return false;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("idbreq ok","Clear Indexeddb");jt_oidbRequest.onerror=function(event)
{jg_oe.LogErr("Fail","Clear Indexeddb");if(ji_oDbTransaction)
ji_oDbTransaction.FireClearStorageError(event,"Fail on Clear IndexedDB: "+
event.target.error);};jt_oidbRequest.onsuccess=function(event)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Success","Clear Indexeddb: "+(jt_sTableName||"table"));if(ji_oDbTransaction)
ji_oDbTransaction.FireClearStorage(event);};return-1;}
function A3xaStorageIDB_NewTransaction(ji_aDbTableName,ji_oStorageOpType,ji_odbtrListener)
{var jr_oDbTransaction=new A3xaStorageIDB_Transaction(ji_aDbTableName,ji_oStorageOpType,ji_odbtrListener);jr_oDbTransaction.jm_bAsync=true;jr_oDbTransaction.jm_oStorage=this;return jr_oDbTransaction;}
function A3xaStorageIDB_IsOpen(){return this.jm_bOpen===true&&this.jm_oidb;}
function A3xaStorageIDB_Get_IDB(){return this.jm_oidb;}
function A3xaStorageIDB_ExecOpen(ji_oDbTransaction,ji_oSchema)
{var jt_this=this;if(this.jm_oidb!=null)
return true;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","Open Indexeddb","A3xaStorageIDB_ExecOpen");var jt_oidbRequestCV=window.indexedDB.open(ji_oSchema.Get_DbName());if(!jt_oidbRequestCV)
{jt_this.jm_CurrentVersion=0;if(!ji_oSchema)
return false;if(jt_this.jm_CurrentVersion<ji_oSchema.jm_DbVersion&&!(ji_oSchema.jm_aTablesExtension&&ji_oSchema.jm_aTablesExtension.length>0))
{jg_oe.LogErr("jt_oidbRequestCV==null - missing schema extension","Open Indexeddb","A3xaStorageIDB_ExecOpen");jg_oe.LogStatusBar("--- Reload the page to make the upgrade ---");jg_oe.LogStatusBar("--- Recargar la página para hacer la actualización ---");return false;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("jt_oidbRequestCV==null - Granted","Open Indexeddb","A3xaStorageIDB_ExecOpen");jt_this.jm_bOpenGranted=true;return jt_this.ExecOpenGranted(ji_oDbTransaction,ji_oSchema);}
jt_oidbRequestCV.onerror=function(event)
{jt_this.jm_CurrentVersion=0;if(!ji_oSchema)
return;if(jt_this.jm_CurrentVersion<ji_oSchema.jm_DbVersion&&!(ji_oSchema.jm_aTablesExtension&&ji_oSchema.jm_aTablesExtension.length>0))
{jg_oe.LogErr("jt_oidbRequestCV.onerror - missing schema extension - cv: "+
jt_this.jm_CurrentVersion,"Open Indexeddb","A3xaStorageIDB_ExecOpen");jg_oe.LogStatusBar("--- Reload the page to make the upgrade ---");jg_oe.LogStatusBar("--- Recargar la página para hacer la actualización ---");return;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("jt_oidbRequestCV.onerror - Granted ","Open Indexeddb","A3xaStorageIDB_ExecOpen");jt_this.jm_bOpenGranted=true;jt_this.ExecOpenGranted(ji_oDbTransaction,ji_oSchema);};jt_oidbRequestCV.onsuccess=function(event)
{jt_this.jm_CurrentVersion=0;var jt_oidbCV=jt_oidbRequestCV.result;if(jt_oidbCV&&jt_oidbCV.version>0)
jt_this.jm_CurrentVersion=jt_oidbCV.version;if(!ji_oSchema)
return;if(jt_this.jm_CurrentVersion<ji_oSchema.jm_DbVersion&&!(ji_oSchema.jm_aTablesExtension&&ji_oSchema.jm_aTablesExtension.length>0))
{jg_oe.LogErr("jt_oidbRequestCV.onsuccess - missing schema extension - cv,nv: "+
jt_this.jm_CurrentVersion+","+ji_oSchema.jm_DbVersion+","+(event.target.errorCode||""),"Open Indexeddb","A3xaStorageIDB_ExecOpen");jg_oe.LogStatusBar("--- Reload the page to make the upgrade ---");jg_oe.LogStatusBar("--- Recargar la página para hacer la actualización ---");return;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("jt_oidbRequestCV.onsuccess - Granted - cv,nv:"+
jt_this.jm_CurrentVersion+","+ji_oSchema.jm_DbVersion,"Open Indexeddb","A3xaStorageIDB_ExecOpen");jt_this.jm_bOpenGranted=true;jt_this.ExecOpenGranted(ji_oDbTransaction,ji_oSchema);};return-1;}
function A3xaStorageIDB_ExecOpenGranted(ji_oDbTransaction,ji_oSchema)
{var jt_this=this;if(this.jm_oidb!=null)
return true;if(!this.jm_bOpenGranted)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","Open Indexeddb","A3xaStorageIDB_ExecOpenGranted");var jt_oidbRequest=window.indexedDB.open(ji_oSchema.Get_DbName(),ji_oSchema.Get_DbVersion());if(!jt_oidbRequest)
{this.jm_bOpen=false;if(ji_oDbTransaction)
ji_oDbTransaction.FireOpenStorageError(event,"Fail on Open IndexedDB: "+"Cannot open");return false;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("idbreq ok","Open Indexeddb","A3xaStorageIDB_ExecOpenGranted");jt_oidbRequest.onerror=function(event)
{jg_oe.LogErr("Fail","Open Indexeddb","A3xaStorageIDB_ExecOpenGranted");if(ji_oDbTransaction)
ji_oDbTransaction.FireOpenStorageError(event,"Fail on Open IndexedDB: "+event.target.error);};jt_oidbRequest.onsuccess=function(event)
{jt_this.jm_oidb=jt_oidbRequest.result;if(!jt_this.jm_oidb)
{jg_oe.LogErr("Fail (null-db) "+event.target.errorCode,"Open Indexeddb","A3xaStorageIDB_ExecOpenGranted");return;}
jt_this.jm_bOpen=true;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Success","Open Indexeddb","A3xaStorageIDB_ExecOpenGranted");jt_this.jm_oidb.onerror=function(event)
{jg_oe.LogErr("Error "+event.target.errorCode,"Indexeddb","jm_oidb.onerror");};if(ji_oDbTransaction)
ji_oDbTransaction.FireOpenStorage(event);};jt_oidbRequest.onupgradeneeded=function(event)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","Upgrade Indexeddb","A3xaStorageIDB_ExecOpenGranted");var jt_oidb=event.target.result;if(!jt_oidb)
{jg_oe.LogErr("Fail","Upgrade Indexeddb"+jt_oidbRequest.error,"A3xaStorageIDB_ExecOpenGranted");return;}
var jt_aosNames=jt_oidb.objectStoreNames;var jt_osNamesCount=(jt_aosNames&&jt_aosNames.length>0)?jt_aosNames.length:0;for(var i=0;i<jt_osNamesCount;i++)
{if(!jt_aosNames[i])
continue;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Delete old table: "+jt_aosNames[i],"Upgrade Indexeddb","A3xaStorageIDB_ExecOpenGranted");try
{jt_oidb.deleteObjectStore(jt_aosNames[i]);}
catch(e)
{jg_oe.LogErr("Cannot Delete old table: "+jt_aosNames[i],"Upgrade Indexeddb");}}
var jt_posTable=0;var jt_bExtension=false;while(true)
{var jt_sTable=ji_oSchema.Index2Name(jt_posTable,jt_bExtension);var jt_sKey=ji_oSchema.Get_PrimaryKeyName();if(!(jt_sTable&&jt_sKey))
{if(!jt_bExtension)
{jt_bExtension=true;jt_posTable=0;continue;}
else
break;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Create new Table "+jt_sTable,"Upgrade Indexeddb","A3xaStorageIDB_ExecOpenGranted");var jt_oidbObjectStore=jt_oidb.createObjectStore(jt_sTable,{keyPath:jt_sKey});jt_posTable++;}};return-1;}
function A3xaStorageIDB_ExecWrite(ji_oDbTransaction,ji_oStorageValue)
{var jt_key=ji_oStorageValue.Get_Key();var jt_value=ji_oStorageValue.Get_Value();var jt_this=this;var jt_oidbOS=ji_oDbTransaction.Get_ObjectStore();if(!jt_oidbOS)
return false;var jt_oidbRequest=null;try
{jt_oidbRequest=jt_oidbOS.put(ji_oStorageValue.Get_Pair());}
catch(e)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Write3-addOS: "+e);return ji_oStorageValue.Set_Result({bStore:true,bError:true},"Store Record: "+"Write Error");}
jt_oidbRequest.onsuccess=function(event)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("pc0000=OK "+event.target.result);if(ji_oStorageValue)
{ji_oStorageValue.Set_Result({bStore:true,bSuccess:true});jt_this.jm_LatestWrite=true;}};jt_oidbRequest.onerror=function(event)
{if(ji_oStorageValue)
ji_oStorageValue.Set_Result({bStore:true,bError:true},"Store Record: "+"Write Error - "+event.target.result+" - "+jt_oidbRequest.error);};return-1;}
function A3xaStorageIDB_ExecRead(ji_oDbTransaction,jio_oStorageValue)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin - key: "+jio_oStorageValue.Get_Key(),"IDB Exec Read");var jt_oidbOS=ji_oDbTransaction.Get_ObjectStore();if(!jt_oidbOS)
return false;var jt_oidbRequest=jt_oidbOS.get(jio_oStorageValue.Get_Key());jt_oidbRequest.onsuccess=function(event)
{if(!jio_oStorageValue)
return;var jt_aidb=event.target.result;var jt_osValue=new A3xaStorage_Value(null,null);jt_osValue.Set_Pair(jt_aidb);if(!jt_osValue.Get_Key())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Empty - ki,ko,vo: "+jio_oStorageValue.Get_Key()+","+jt_aidb["xkey"],"IDB Exec Read");jg_oe.CanLogInfo()&&jg_oe.LogInfo("Empty - ki,ko,vo: "+jio_oStorageValue.Get_Key()+",null,null","IDB Exec Read");jio_oStorageValue.Set_Result({bLoad:true,bEmpty:true},"Load Record Empty ");}
else if(!jio_oStorageValue.Set_Pair(jt_aidb))
{jg_oe.LogErr("Fail - ki,ko,vo: "+jio_oStorageValue.Get_Key()+", "+jt_osValue.Get_Key()+", "+jt_osValue.Get_Value(),"IDB Exec Read");jio_oStorageValue.Set_Result({bLoad:true,bError:true},"Load Record: "+event.target.result+" - "+jt_oidbRequest.error);}
else
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Success - k,v: "+jio_oStorageValue.Get_Key()+", "+
jio_oStorageValue.Get_Value(),"IDB Exec Read");}};jt_oidbRequest.onerror=function(event)
{var jt_aidb=event.target.result;jg_oe.LogErr("Fail - ki,ko,vo: "+jio_oStorageValue.Get_Key()+", "+(jt_aidb?jt_aidb["xkey"]+", "+jt_aidb["xvalue"]:",null,null"),"IDB Exec Read");if(jio_oStorageValue)
jio_oStorageValue.Set_Result({bLoad:true,bError:true},"Load Record: "+event.target.result+" - "+jt_oidbRequest.error);};return-1;}
function A3xaStorageIDB_Transaction(ji_aDbTableName,ji_oStorageOpType,ji_odbtrListener)
{A3xaStorage_Transaction.call(this,ji_aDbTableName,ji_oStorageOpType,ji_odbtrListener);this.IsReady=A3xaStorageIDB_Transaction_IsReady;this.Get_IDBTransaction=A3xaStorageIDB_Transaction_Get_IDBTransaction;this.Get_ObjectStore=A3xaStorageIDB_Transaction_Get_ObjectStore;this.UsingTable=A3xaStorageIDB_Transaction_UsingTable;this.jm_oidbTransaction=null;this.jm_oidbOS=null;}
function A3xaStorageIDB_Transaction_IsReady()
{if(!A3xaStorage_Transaction_IsReady.call(this))
return false;if(!this.jm_oidbOS)
{this.jm_oidbOS=this.Get_ObjectStore();if(!this.jm_oidbOS)
{jg_oe.LogErr("ObjectStore=null - tbn: "+(this.jm_aDbTableName||"null"),"","A3xaStorageIDB_Transaction_IsReady");return false;}}
return true;}
function A3xaStorageIDB_Transaction_Get_IDBTransaction(ji_oidb)
{if(this.jm_oidbTransaction)
return this.jm_oidbTransaction;if(!ji_oidb)
return null;try
{if(this.jm_oStorageOpType.bStore)
this.jm_oidbTransaction=ji_oidb.transaction(this.jm_aDbTableName,"readwrite");else if(this.jm_oStorageOpType.bLoad)
this.jm_oidbTransaction=ji_oidb.transaction(this.jm_aDbTableName,"readonly");else if(this.jm_oStorageOpType.bClear)
this.jm_oidbTransaction=ji_oidb.transaction(this.jm_aDbTableName,"readwrite");}
catch(e)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo('alert("pb4025=")'+e);}
if(!this.jm_oidbTransaction)
return null;jg_oe.CanLogInfo()&&jg_oe.LogInfo('alert("pb4030=")');if(this.jm_oStorageOpType.bStore)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Open for Store "+(this.jm_oStorageOpType.bRecord?" Records":""));else if(this.jm_oStorageOpType.bLoad)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Open for Load "+(this.jm_oStorageOpType.bRecord?" Records":""));else if(this.jm_oStorageOpType.bClear)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Open for Clear "+(this.jm_oStorageOpType.bRecord?" Records":""));else
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Transaction Open for ? "+(this.jm_oStorageOpType.bRecord?" Records":""));for(var j=0;j<this.jm_aDbTableName.length;j++)
jg_oe.CanLogInfo()&&jg_oe.LogInfo("tablename="+this.jm_aDbTableName[j]);var jt_this=this;var jt_oidbTransaction=this.jm_oidbTransaction;this.jm_oidbTransaction.oncomplete=function(ji_oidbEvent)
{jt_this.FireTransactionComplete(ji_oidbEvent);};this.jm_oidbTransaction.onerror=function(ji_oidbEvent)
{jt_this.FireTransactionError(ji_oidbEvent,jt_oidbTransaction.error);};return this.jm_oidbTransaction;}
function A3xaStorageIDB_Transaction_UsingTable(ji_sCurrentTableName)
{if(!A3xaStorage_Transaction_UsingTable.call(this,ji_sCurrentTableName))
return false;this.jm_oidbOS=null;if(!this.jm_sCurrentTableName)
this.jm_oidbTransaction=null;return true;}
function A3xaStorageIDB_Transaction_Get_ObjectStore()
{if(this.jm_oidbOS)
return this.jm_oidbOS;var jt_oidb=this.jm_oStorage.Get_IDB();if(!jt_oidb)
return null;jg_oe.CanLogInfo()&&jg_oe.LogInfo('alert("pb3000=")');var jt_oidbTransaction=this.Get_IDBTransaction(jt_oidb);if(!jt_oidbTransaction)
return null;jg_oe.CanLogInfo()&&jg_oe.LogInfo('alert("pb3010=")');if(!this.jm_sCurrentTableName)
return null;jg_oe.CanLogInfo()&&jg_oe.LogInfo('alert("pb3020=")'+this.jm_sCurrentTableName);try
{this.jm_oidbOS=jt_oidbTransaction.objectStore(this.jm_sCurrentTableName);}
catch(e)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Get_ObjectStore="+e);}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Get_ObjectStore-Table: "+this.jm_sCurrentTableName+" "+(this.jm_oidbOS?"OK":"Null"));return this.jm_oidbOS;}
function A3xaAZNC()
{this.IsValid=function()
{return true;};this.IsEmpty=function()
{return!this.Get_A();};this.Get_3xAZNC=function(){return this;};this._CopyFrom=function(ji_o3xaznc,ji_bZ,ji_bN,ji_bC)
{if(!ji_o3xaznc)
return false;ji_o3xaznc=ji_o3xaznc.Get_3xAZNC();var jt_A=ji_o3xaznc.Get_A();var jt_Z=null;var jt_N=null;var jt_C=null;if(!(ji_bZ===false))
jt_Z=ji_o3xaznc.Get_Z();if(!(ji_bZ===false||ji_bN===false))
jt_N=ji_o3xaznc.Get_N();if(!(ji_bZ===false||ji_bN===false||ji_bC===false))
jt_C=ji_o3xaznc.Get_C();return this.Set_AZNC(jt_A,jt_Z,jt_N,jt_C);};this.CopyFrom=function(ji_o3xaznc){return this._CopyFrom(ji_o3xaznc);};this.CopyFromAZN=function(ji_o3xaznc){return this._CopyFrom(ji_o3xaznc,true,true,false);};this.CopyFromAZ=function(ji_o3xaznc){return this._CopyFrom(ji_o3xaznc,true,false,false);};this.Clear=function()
{this.jm_A=this.jm_Z=this.jm_N=this.jm_C=null;return true;};this.Clear_C=function(){this.jm_C=null;return true;};this.Clear_NC=function(){this.jm_N=this.jm_C=null;return true;};this.Clear_ZNC=function(){this.jm_Z=this.jm_N=this.jm_C=null;return true;};this.Get_A=function(){return this.jm_A;};this.Get_Z=function(){return this.jm_Z;};this.Get_N=function(){return this.jm_N;};this.Get_C=function()
{return((this.jm_A&&this.jm_Z&&this.jm_N))?this.jm_C:null;};this.Get_Code=function(ji_bN,ji_bC)
{if(!this.Get_A())
return"";if(!this.Get_Z())
return this.Get_A();var jr_s=this.Get_A()+this.Get_Z();if(ji_bN!==false)
{if(!this.Get_N())
return jr_s;jr_s+=this.Get_N();}
if(ji_bC!==false)
{if(!this.Get_C())
return jr_s;jr_s+=this.Get_C();}
return jr_s;};this.Set_AZNC=function(ji_A,ji_Z,ji_N,ji_C)
{if(!ji_A)ji_Z=null;if(!ji_Z)ji_N=null;if(!ji_N)ji_C=null;this.jm_A=(ji_A||null);this.jm_Z=(ji_Z||null);this.jm_N=(ji_N||null);this.jm_C=(ji_C||null);return true;};this.Get_String=function(ji_bN,ji_bC,ji_sep)
{if(!ji_sep)
ji_sep=",";var jr_s="";jr_s+=A3xaToString(this.Get_A())+ji_sep+A3xaToString(this.Get_Z());if(!(ji_bN===false))
{jr_s+=ji_sep+A3xaToString(this.Get_N());if(!(ji_bC===false))
jr_s+=ji_sep+A3xaToString(this.Get_C());}
return jr_s;};this.Set_String=function(ji_s,ji_sep)
{if(!ji_sep)
ji_sep=",";if(!ji_s)
return false;return this.Set_Array(ji_s.split(ji_sep),0)>=0?true:false;};this.Set_Array=function(ji_a,ji_offset)
{if(!ji_a||ji_offset<0||ji_offset>=ji_a.length)
return-1;var jt_bAZNC=false;var jt_A=null;var jt_Z=null;var jt_N=null;var jt_C=null;var jt_i=ji_offset;if(jt_i<ji_a.length)
{jt_bAZNC=true;jt_A=ji_a[jt_i++];if(jt_A&&jt_A.length!=1)
jt_A=null;}
if(jt_i<ji_a.length)
{jt_Z=ji_a[jt_i++];if(jt_Z&&jt_Z.length!=1)
jt_Z=null;}
if(jt_i<ji_a.length)
{jt_N=ji_a[jt_i++];if(jt_N&&jt_N.length!=1)
jt_N=null;}
if(jt_i<ji_a.length)
{jt_C=ji_a[jt_i++];if(jt_C&&jt_C.length!=3)
jt_C=null;}
if(jt_bAZNC)
this.Set_AZNC(jt_A,jt_Z,jt_N,jt_C);return jt_i;};this.MatchesAZ=function(ji_o3xaznc,ji_bSkipSourceNull)
{return this.Matches(ji_o3xaznc,ji_bSkipSourceNull,false,false);};this.MatchesAZN=function(ji_o3xaznc,ji_bSkipSourceNull)
{return this.Matches(ji_o3xaznc,ji_bSkipSourceNull,true,false);};this.Matches=function(ji_o3xaznc,ji_bSkipSourceNull,ji_bN,ji_bC)
{if(ji_o3xaznc)
ji_o3xaznc=ji_o3xaznc.Get_3xAZNC();if(!ji_o3xaznc)
return false;if((this.Get_A()||ji_o3xaznc.Get_A())&&this.Get_A()!=ji_o3xaznc.Get_A()&&((!ji_bSkipSourceNull)||(ji_o3xaznc.Get_A())))
return false;if((this.Get_Z()||ji_o3xaznc.Get_Z())&&this.Get_Z()!=ji_o3xaznc.Get_Z()&&((!ji_bSkipSourceNull)||(ji_o3xaznc.Get_Z())))
return false;if(!(ji_bN===false))
{if((this.Get_N()||ji_o3xaznc.Get_N())&&this.Get_N()!=ji_o3xaznc.Get_N()&&((!ji_bSkipSourceNull)||(ji_o3xaznc.Get_N())))
return false;}
if(!(ji_bC===false))
{if((this.Get_C()||ji_o3xaznc.Get_C())&&this.Get_C()!=ji_o3xaznc.Get_C()&&((!ji_bSkipSourceNull)||(ji_o3xaznc.Get_C())))
return false;}
return true;};this.jm_A=null;this.jm_Z=null;this.jm_N=null;this.jm_C=null;}
function A3xaAZNC_XApp(ji_o3xaznc)
{this.Get_3xAZNC=function(){return this.jm_o3xaznc;};this.TopAreaTo3xEBIS=function()
{if(!this.jm_o3xaznc)
return null;var jt_A=this.jm_o3xaznc.Get_A();if(!jt_A)
return null;var jr_o3xebis=new A3xaEBIS();if(jt_A=="L"){jr_o3xebis.Set_Name("América Latina");jr_o3xebis.Set_Order(100);}
else if(jt_A=="X"){jr_o3xebis.Set_Name("México");jr_o3xebis.Set_Order(200);}
else if(jt_A=="N"){jr_o3xebis.Set_Name("Centroamérica");jr_o3xebis.Set_Order(300);}
else if(jt_A=="C"){jr_o3xebis.Set_Name("Caribe");jr_o3xebis.Set_Order(400);}
else if(jt_A=="P"){jr_o3xebis.Set_Name("Tropical");jr_o3xebis.Set_Order(500);}
else if(jt_A=="A"){jr_o3xebis.Set_Name("Amazonia");jr_o3xebis.Set_Order(600);}
else if(jt_A=="B"){jr_o3xebis.Set_Name("Brasil");jr_o3xebis.Set_Order(700);}
else if(jt_A=="S"){jr_o3xebis.Set_Name("Sureste");jr_o3xebis.Set_Order(800);}
else if(jt_A=="D"){jr_o3xebis.Set_Name("Andes");jr_o3xebis.Set_Order(900);}
else if(jt_A=="Y"){jr_o3xebis.Set_Name("Best from Babylon");jr_o3xebis.Set_Order(5000);}
else return null;return jr_o3xebis;};this.TopAreaToName=function()
{var jt_o3xebis=this.TopAreaTo3xEBIS();if(!jt_o3xebis)
return"";return jt_o3xebis.Get_Name();};this.IsBestFromBabylon=function(){return this.jm_o3xaznc.Get_A()=="Y";};this.IsLA=function(){return this.jm_o3xaznc.Get_A()=="L";};this.IsLatinAmerica=function()
{var jt_A=this.jm_o3xaznc.Get_A();if(!jt_A)
return false;return jt_A=="L"||jt_A=="X"||jt_A=="N"||jt_A=="C"||jt_A=="P"||jt_A=="A"||jt_A=="B"||jt_A=="S"||jt_A=="D";};this.jm_o3xaznc=(ji_o3xaznc?ji_o3xaznc.Get_3xAZNC():new A3xaAZNC());}
function New_A3xaAZNC_XApp(ji_o3xaznc){return new A3xaAZNC_XApp(ji_o3xaznc);}
function A3xaPS()
{this.IsValid=function()
{return true;};this.IsEmpty=function()
{return!this.Get_P();};this.Get_3xPS=function(){return this;};this.CopyFrom=function(ji_o3xps)
{if(ji_o3xps)
ji_o3xps=ji_o3xps.Get_3xPS();if(!ji_o3xps)
return false;return this.Set_PS(ji_o3xps.Get_P(),ji_o3xps.Get_S());};this.Clear=function()
{this.jm_P=this.jm_S=null;return true;};this.Clear_S=function()
{this.jm_S=null;return true;};this.Get_P=function(){return this.jm_P;};this.Get_S=function(){return this.jm_S;};this.Get_Code=function()
{if(!this.Get_P())
return"";return A3xaToString(this.Get_P())+A3xaToString(this.Get_S());};this.Set_PS=function(ji_P,ji_S)
{if(!ji_P)ji_S=null;this.jm_P=(ji_P||null);this.jm_S=(ji_S||null);return true;};this.Get_String=function(ji_sep)
{if(!ji_sep)
ji_sep=",";return A3xaToString(this.Get_P())+ji_sep+A3xaToString(this.Get_S());};this.Set_String=function(ji_s,ji_sep)
{if(!ji_sep)
ji_sep=",";if(!ji_s)
return false;return this.Set_Array(ji_s.split(ji_sep),0)>=0?true:false;};this.Set_Array=function(ji_a,ji_offset)
{if(!ji_a||ji_offset<0||ji_offset>=ji_a.length)
return-1;var jt_bPS=false;var jt_P=null;var jt_S=null;var jt_i=ji_offset;if(jt_i<ji_a.length)
{jt_bPS=true;jt_P=ji_a[jt_i++];if(jt_P&&jt_P.length>3)
jt_P=null;}
if(jt_i<ji_a.length)
{jt_S=ji_a[jt_i++];if(jt_S&&jt_S.length>3)
jt_S=null;}
if(jt_bPS)
this.Set_PS(jt_P,jt_S);return jt_i;};this.Matches=function(ji_o3xps,ji_bSkipSourceNull)
{if(ji_o3xps)
ji_o3xps=ji_o3xps.Get_3xPS();if(!ji_o3xps)
return false;if((this.Get_P()||ji_o3xps.Get_P())&&this.Get_P()!=ji_o3xps.Get_P()&&((!ji_bSkipSourceNull)||(ji_o3xps.Get_P())))
return false;if((this.Get_S()||ji_o3xps.Get_S())&&this.Get_S()!=ji_o3xps.Get_S()&&((!ji_bSkipSourceNull)||(ji_o3xps.Get_S())))
return false;return true;};this.jm_P=null;this.jm_S=null;}
function A3xaPS_XApp(ji_o3xps)
{this.Get_3xPS=function(){return this.jm_o3xps;};this.jm_o3xps=(ji_o3xps?ji_o3xps.Get_3xPS():new A3xaPS());}
function New_A3xaPS_XApp(ji_o3xps){return new A3xaPS_XApp(ji_o3xps);}
function A3xaCategoryCode()
{this.IsValid=function()
{return true;};this.IsEmpty=function()
{return!this.Get_Ucat();};this.Get_3xCat=function(){return this;};this.CopyFrom=function(ji_o3xcat)
{if(!ji_o3xcat)
return false;ji_o3xcat=ji_o3xcat.Get_3xCat();return this.Set_Category(ji_o3xcat.Get_Ucat(),ji_o3xcat.Get_Vcat());};this.Clear=function()
{this.jm_Ucat=this.jm_Vcat=null;return true;};this.Get_Ucat=function(){return this.jm_Ucat;};this.Get_Vcat=function(){return this.jm_Vcat;};this.Get_UVcat=function()
{if(!this.jm_Ucat)
return"";return this.jm_Ucat+(this.jm_Vcat?this.jm_Vcat:"");};this.Get_Group=function(){return this.Get_Ucat();};this.Get_Code=function()
{return this.Get_UVcat();};this.Set_Category=function(ji_Ucat,ji_Vcat)
{if(!ji_Ucat)ji_Vcat=null;this.jm_Ucat=(ji_Ucat||null);this.jm_Vcat=(ji_Vcat||null);return true;};this.Get_String=function(ji_sep)
{if(!ji_sep)
ji_sep=",";var jr_s="";if(!this.jm_Ucat)
return jr_s+ji_sep;return jr_s+this.jm_Ucat+ji_sep+A3xaToString(this.jm_Vcat);};this.Set_String=function(ji_s,ji_sep)
{if(!ji_sep)
ji_sep=",";if(!ji_s)
return false;return this.Set_Array(ji_s.split(ji_sep),0)>=0?true:false;};this.Set_Array=function(ji_a,ji_offset)
{if(!ji_a||ji_offset<0||ji_offset>=ji_a.length)
return-1;var jt_Ucat=null;var jt_Vcat=null;var jt_i=ji_offset;if(jt_i<ji_a.length)
{jt_Ucat=ji_a[jt_i++];if(jt_Ucat&&jt_Ucat.length!=1)
jt_Ucat=null;}
if(jt_i<ji_a.length)
{jt_Vcat=ji_a[jt_i++];if(jt_Vcat&&jt_Vcat.length!=1)
jt_Vcat=null;}
this.Set_Category(jt_Ucat,jt_Vcat);return jt_i;};this.Matches=function(ji_o3xcat,ji_bSkipSourceNull)
{if(ji_o3xcat)
ji_o3xcat=ji_o3xcat.Get_3xCat();if(!ji_o3xcat)
return false;if(this.IsEmpty())
return ji_o3xcat.IsEmpty()?true:false
var jr_b=false;if(this.Get_Ucat())
{if(this.Get_Ucat()==ji_o3xcat.Get_Ucat())
{if(this.Get_Vcat()==ji_o3xcat.Get_Vcat())
return true;return false;}
else if(ji_o3xcat.Get_Ucat())
return false;else
{jr_b|=(ji_bSkipSourceNull?true:false);}}
return jr_b;};this.jm_Ucat=null;this.jm_Vcat=null;}
function A3xaCategoryCode_XApp(ji_o3xcat)
{this.Get_3xCat=function(){return this.jm_o3xcat;};this.ToTypGeo=function()
{var jr_TypEntity_Geo=null;if(!this.jm_o3xcat)
return null;if(this.jm_o3xcat.IsEmpty())
return null;if(this.IsTypGeo())
{var jt_Vcat=this.jm_o3xcat.Get_Vcat();if(!jt_Vcat)
return null;if(jt_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_Area)
return jc_gl.jc_oEntity.jc_Typ_GeoArea;jr_TypEntity_Geo=this._ToTypGeoRegion(jt_Vcat);if(jr_TypEntity_Geo)
return jr_TypEntity_Geo;if(jt_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_City)
return jc_gl.jc_oEntity.jc_Typ_GeoCity;if(jt_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_Country)
return jc_gl.jc_oEntity.jc_Typ_GeoCountry;jr_TypEntity_Geo=this._ToTypGeoState(jt_Vcat);if(jr_TypEntity_Geo)
return jr_TypEntity_Geo;}
return null;};this.IsTypGeo=function()
{if(!this.jm_o3xcat)
return false;if(this.jm_o3xcat.Get_Ucat())
{if(this.jm_o3xcat.Get_Ucat()==jc_gl.jc_oEntity.jc_UCat_Geo)
return true;}
return false;};this._ToTypGeoRegion=function(ji_Vcat)
{if(ji_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_Region)
return jc_gl.jc_oEntity.jc_Typ_GeoRegion;if(ji_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_RegionNR)
return jc_gl.jc_oEntity.jc_Typ_GeoRegion;if(ji_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_RegionTR)
return jc_gl.jc_oEntity.jc_Typ_GeoRegion;if(ji_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_RegionMetr)
return jc_gl.jc_oEntity.jc_Typ_GeoRegion;if(ji_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_RegionIsland)
return jc_gl.jc_oEntity.jc_Typ_GeoRegion;return null;};this._ToTypGeoState=function(ji_Vcat)
{if(ji_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_State)
return jc_gl.jc_oEntity.jc_Typ_GeoState;if(ji_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_Provincie)
return jc_gl.jc_oEntity.jc_Typ_GeoState;if(ji_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_Department)
return jc_gl.jc_oEntity.jc_Typ_GeoState;if(ji_Vcat==jc_gl.jc_oEntity.jc_VCat_Geo_RegionAdmin)
return jc_gl.jc_oEntity.jc_Typ_GeoState;return null;};this.IsMetasystem_Control=function()
{if(!this.jm_o3xcat)
return false;return this.jm_o3xcat.Get_Ucat()==jc_gl.jc_oEntity.jc_UCat_Metasystem&&this.jm_o3xcat.Get_Vcat()==jc_gl.jc_oEntity.jc_VCat_Metasystem_Control;};this.IsGroup_Metasystem=function()
{if(!this.jm_o3xcat)
return false;return this.jm_o3xcat.Get_Ucat()==jc_gl.jc_oEntity.jc_UCat_Metasystem;};this.IsGroup_Category=function()
{if(!this.jm_o3xcat)
return false;return this.jm_o3xcat.Get_Ucat()==jc_gl.jc_oEntity.jc_UCat_Category;};this.IsGroup_Topic=function()
{if(!this.jm_o3xcat)
return false;return this.jm_o3xcat.Get_Ucat()==jc_gl.jc_oEntity.jc_UCat_Topic;};this.IsGroup_Geo=function()
{if(!this.jm_o3xcat)
return false;return this.jm_o3xcat.Get_Ucat()==jc_gl.jc_oEntity.jc_UCat_Geo;};this.Get_UrlIcon=function()
{if(!this.jm_o3xcat)
return null;if(this.jm_o3xcat.Get_Ucat())
return jc_gl.MakeUrlIcon_Base(jc_gl.jc_oIcons.jc_sIconUrlBase_UVcat+
jc_gl.jc_oIcons.jc_sIconPrefix_Category+this.jm_o3xcat.Get_UVcat());return null;};this.jm_o3xcat=(ji_o3xcat?ji_o3xcat.Get_3xCat():new A3xaCategoryCode());}
function New_A3xaCategoryCode_XApp(ji_o3xcat){return new A3xaCategoryCode_XApp(ji_o3xcat);}
function A3xaCategoryList(ji_sCategoryList)
{this.Match=function(ji_o3xcat)
{if(ji_o3xcat)
ji_o3xcat=ji_o3xcat.Get_3xCat();if(!ji_o3xcat||ji_o3xcat.IsEmpty())
return false;if(!(this.jm_ao3xcat&&this.jm_ao3xcat.length))
return false;for(var i=0;i<this.jm_ao3xcat.length;i++)
{if(this.jm_ao3xcat[i].Matches(ji_o3xcat))
return true;}
return false;};this.jm_ao3xcat=new Array();var jt_asCategoryList=((ji_sCategoryList&&ji_sCategoryList.length)?ji_sCategoryList.split(","):null);for(var i=0;i<jt_asCategoryList.length;i++)
{var jt_o3xcat=new A3xaCategoryCode();jt_o3xcat.Set_String(jt_asCategoryList[i],"-");this.jm_ao3xcat.push(jt_o3xcat);}}
function A3xaXEID()
{this.IsValid=function()
{return true;};this.IsEmpty=function()
{return!this.Get_TypEntity();};this.Get_3xXEID=function(){return this;};this.CopyFrom=function(ji_o3xxeid)
{if(ji_o3xxeid)
ji_o3xxeid=ji_o3xxeid.Get_3xXEID();if(!ji_o3xxeid)
return false;this.Set_GEID(ji_o3xxeid.Get_TypEntity(),ji_o3xxeid.Get_IdEntity(),ji_o3xxeid.Get_TypGroup(),ji_o3xxeid.Get_IdGroup());this.Set_3xAZNC(ji_o3xxeid);this.Set_3xPS(ji_o3xxeid);this.Set_3xCat(ji_o3xxeid);return true;};this.Clear=function()
{this.Set_GEID(null,null,null,null);this.jm_o3xaznc.Clear();this.jm_o3xps.Clear();this.jm_o3xcat.Clear();return true;};this.Get_PrimaryKey=function()
{var jt_te=this.Get_TypEntity();var jt_ide=this.Get_IdEntity();if(!(jt_te&&jt_ide>0))
return null;return A3xaToString(jt_te)+","+A3xaToString(jt_ide);};this.Get_TypEntity=function(){return this.jm_TypEntity;};this.Set_TypEntity=function(ji_val){this.jm_TypEntity=ji_val;return true;};this.Get_IdEntity=function(){return this.jm_IdEntity;};this.Set_IdEntity=function(ji_val){this.jm_IdEntity=ji_val;return true;};this.Get_TypGroup=function(){return this.jm_TypGroup;};this.Set_TypGroup=function(ji_val){this.jm_TypGroup=ji_val;return true;};this.Get_IdGroup=function(){return this.jm_IdGroup;};this.Set_IdGroup=function(ji_val){this.jm_IdGroup=ji_val;return true;};this.IsGroupMajor=function()
{return(!this.jm_TypGroup||this.jm_TypGroup=='M'||this.jm_TypGroup=='U')&&!(this.jm_IdGroup>0);};this.IsGroupMinor=function(){return this.jm_TypGroup&&this.jm_IdGroup>0;};this.Set_GEID=function(ji_te,ji_ide,ji_tg,ji_idg)
{this.Set_TypEntity(ji_te||null);this.Set_IdEntity(ji_ide||null);this.Set_TypGroup(ji_tg||null);this.Set_IdGroup(ji_idg||null);return true;};this.Clear_GEID=function()
{this.Set_TypEntity(null);this.Set_IdEntity(null);this.Set_TypGroup(null);this.Set_IdGroup(null);return true;};this.Get_3xAZNC=function(){return this.jm_o3xaznc;};this.Set_3xAZNC=function(ji_o3xaznc){return this.jm_o3xaznc.CopyFrom(ji_o3xaznc);};this.Set_3xAZN=function(ji_o3xaznc){return this.jm_o3xaznc.CopyFromAZN(ji_o3xaznc);};this.Set_3xAZ=function(ji_o3xaznc){return this.jm_o3xaznc.CopyFromAZ(ji_o3xaznc);};this.Get_3xPS=function(){return this.jm_o3xps;};this.Set_3xPS=function(ji_o3xps){return this.jm_o3xps.CopyFrom(ji_o3xps);};this.Get_3xCat=function(){return this.jm_o3xcat;};this.Set_3xCat=function(ji_o3xcat){return this.jm_o3xcat.CopyFrom(ji_o3xcat);};this.Get_Code=function()
{return"";};this.Get_String=function(ji_bGEID,ji_bEC,ji_sep)
{if(ji_bGEID===false&&ji_bEC===false)
return"";if(!ji_sep)
ji_sep=",";var jr_s=A3xaToString(this.Get_TypEntity());if(ji_bGEID!==false)
{jr_s+=ji_sep+A3xaToString(this.Get_IdEntity())+
ji_sep+A3xaToString(this.Get_TypGroup())+
ji_sep+A3xaToString(this.Get_IdGroup());}
if(ji_bEC!==false)
{jr_s+=ji_sep+ji_sep+this.Get_3xAZNC().Get_String();jr_s+=ji_sep+this.Get_3xPS().Get_String();jr_s+=ji_sep+this.Get_3xCat().Get_String();}
return jr_s;};this.Set_String=function(ji_s,ji_sep)
{if(!ji_sep)
ji_sep=",";if(!ji_s)
return false;return this.Set_Array(ji_s.split(ji_sep),0)>=0?true:false;};this.Set_Array=function(ji_a,ji_offset)
{if(!ji_a||ji_offset<0||ji_offset>=ji_a.length)
return-1;var jt_i=ji_offset;if(jt_i<ji_a.length)
this.Set_TypEntity(ji_a[jt_i++]);if(jt_i<ji_a.length)
this.Set_IdEntity(ji_a[jt_i++]);if(jt_i<ji_a.length)
this.Set_TypGroup(ji_a[jt_i++]);if(jt_i<ji_a.length)
this.Set_IdGroup(ji_a[jt_i++]);if(jt_i<ji_a.length)
jt_i++;if(jt_i<ji_a.length)
{this.Get_3xAZNC().Set_Array(ji_a,jt_i);jt_i+=4;this.Get_3xPS().Set_Array(ji_a,jt_i);jt_i+=2;this.Get_3xCat().Set_Array(ji_a,jt_i);jt_i+=2;}
return jt_i;};this.Matches=function(ji_oxeid,ji_bSkipSourceNull)
{if(ji_oxeid)
ji_oxeid=ji_oxeid.Get_3xXEID();if(!ji_oxeid)
return false;if((this.Get_TypEntity()||ji_oxeid.Get_TypEntity())&&this.Get_TypEntity()!=ji_oxeid.Get_TypEntity()&&((!ji_bSkipSourceNull)||(ji_oxeid.Get_TypEntity())))
return false;if((this.Get_IdEntity()||ji_oxeid.Get_IdEntity())&&this.Get_IdEntity()!=ji_oxeid.Get_IdEntity()&&((!ji_bSkipSourceNull)||(ji_oxeid.Get_IdEntity())))
return false;if((this.Get_TypGroup()||ji_oxeid.Get_TypGroup())&&this.Get_TypGroup()!=ji_oxeid.Get_TypGroup()&&((!ji_bSkipSourceNull)||(ji_oxeid.Get_TypGroup())))
return false;if((this.Get_IdGroup()||ji_oxeid.Get_IdGroup())&&this.Get_IdGroup()!=ji_oxeid.Get_IdGroup()&&((!ji_bSkipSourceNull)||(ji_oxeid.Get_IdGroup())))
return false;if(!this.Get_3xCat().Matches(ji_oxeid,ji_bSkipSourceNull))
return false;if(!this.Get_3xAZNC().Matches(ji_oxeid,ji_bSkipSourceNull))
return false;if(!this.Get_3xPS().Matches(ji_oxeid,ji_bSkipSourceNull))
return false;return true;};this.MatchesArray=function(ji_aoxeid,ji_bSkipNull)
{if(!ji_aoxeid)
return false;for(var i=0;i<ji_aoxeid.length;i++)
{if(this.Matches(ji_aoxeid[i],ji_bSkipNull))
return true;}
return false;};this.jm_TypEntity=null;this.jm_IdEntity=null;this.jm_TypGroup=null;this.jm_IdGroup=null;this.jm_o3xaznc=new A3xaAZNC();this.jm_o3xps=new A3xaPS();this.jm_o3xcat=new A3xaCategoryCode();}
function A3xaXEID_XApp(ji_o3xxeid)
{this.Get_3xXEID=function(){return this.jm_o3xxeid;};this.BuildAltKey=function(ji_TypEntityTarget)
{if(!this.jm_o3xxeid)
return null;if(!ji_TypEntityTarget)
{ji_TypEntityTarget=A3xaToString(this.jm_o3xxeid.Get_TypEntity());if(!ji_TypEntityTarget)
return null;}
if(ji_TypEntityTarget==jc_gl.jc_oEntity.jc_Typ_Category)
{if(!this.jm_o3xxeid.Get_3xCat().IsEmpty())
return ji_TypEntityTarget+","+this.jm_o3xxeid.Get_3xCat().Get_String();}
else if(ji_TypEntityTarget==jc_gl.jc_oEntity.jc_Typ_GeoArea)
{var jt_o3xaznc=this.jm_o3xxeid.Get_3xAZNC();if(jt_o3xaznc.Get_Z())
return ji_TypEntityTarget+","+jt_o3xaznc.Get_String(false,false);}
else if(ji_TypEntityTarget==jc_gl.jc_oEntity.jc_Typ_GeoRegion)
{var jt_o3xaznc=this.jm_o3xxeid.Get_3xAZNC();if(jt_o3xaznc.Get_N())
return ji_TypEntityTarget+","+jt_o3xaznc.Get_String(true,false);}
else if(ji_TypEntityTarget==jc_gl.jc_oEntity.jc_Typ_GeoCity)
{var jt_o3xaznc=this.jm_o3xxeid.Get_3xAZNC();if(jt_o3xaznc.Get_C())
return ji_TypEntityTarget+","+jt_o3xaznc.Get_String();}
else if(ji_TypEntityTarget==jc_gl.jc_oEntity.jc_Typ_GeoCountry)
{var jt_o3xPS=this.jm_o3xxeid.Get_3xPS();var jt_P=A3xaToString(jt_o3xPS.Get_P());if(jt_P)
return ji_TypEntityTarget+","+jt_P;}
else if(ji_TypEntityTarget==jc_gl.jc_oEntity.jc_Typ_GeoState)
{var jt_o3xPS=this.jm_o3xxeid.Get_3xPS();var jt_P=A3xaToString(jt_o3xPS.Get_P());var jt_S=A3xaToString(jt_o3xPS.Get_S());if(jt_P&&jt_S)
return ji_TypEntityTarget+","+jt_P+","+jt_S;}
else if(ji_TypEntityTarget==jc_gl.jc_oEntity.jc_Typ_Enterprise)
{return null;}
return null;};this.jm_o3xxeid=(ji_o3xxeid?ji_o3xxeid.Get_3xXEID():new A3xaXEID());}
function New_A3xaXEID_XApp(ji_o3xxeid){return new A3xaXEID_XApp(ji_o3xxeid);}
function A3xaEBIS()
{this.IsValid=function()
{return true;};this.IsEmpty=function()
{return false;};this.Get_3xEBIS=function(){return this;};this.CopyFrom=function(ji_o3xebis)
{if(ji_o3xebis)
ji_o3xebis=ji_o3xebis.Get_3xEBIS();if(!ji_o3xebis)
return false;this.Set_Created(ji_o3xebis.Get_Created());this.Set_Modified(ji_o3xebis.Get_Modified());this.Set_Order(ji_o3xebis.Get_Order());this.Set_Name(ji_o3xebis.Get_Name());this.Set_Descr(ji_o3xebis.Get_Descr());this.Set_Website(ji_o3xebis.Get_Website());this.Set_Lat(ji_o3xebis.Get_Lat());this.Set_Lon(ji_o3xebis.Get_Lon());this.Set_Color(ji_o3xebis.Get_Color());return true;};this.Clear=function()
{this.Set_Created("");this.Set_Modified("");this.Set_Order("");this.Set_Name("");this.Set_Descr("");this.Set_Website("");this.Set_Lat("");this.Set_Lon("");this.Set_Color("");return true;};this.Get_Created=function(){return this.jm_Created;};this.Get_Modified=function(){return this.jm_Modified;};this.Get_Order=function(){return this.jm_Order;};this.Get_Name=function(){return this.jm_sName;};this.Get_Descr=function(){return this.jm_sDescr;};this.Get_Website=function(){return this.jm_sWebsite;};this.Get_Lat=function(){return this.jm_Lat;};this.Get_Lon=function(){return this.jm_Lon;};this.Get_Color=function(){return this.jm_Color||this.jm_DefaultColor;};this.Set_Created=function(ji_Created){this.jm_Created=ji_Created;return true;};this.Set_Modified=function(ji_Modified){this.jm_Modified=ji_Modified;return true;};this.Set_Order=function(ji_Order){this.jm_Order=ji_Order;return true;};this.Set_Name=function(ji_sName){this.jm_sName=ji_sName;return true;};this.Set_Descr=function(ji_sDescr){this.jm_sDescr=ji_sDescr;return true;};this.Set_Website=function(ji_sWebsite){this.jm_sWebsite=ji_sWebsite;return true;};this.Set_Lat=function(ji_Lat){this.jm_Lat=ji_Lat;return true;};this.Set_Lon=function(ji_Lon){this.jm_Lon=ji_Lon;return true;};this.Set_Color=function(ji_Color){this.jm_Color=ji_Color;return true;};this.Set_DefaultColor=function(ji_Color){this.jm_DefaultColor=ji_Color;return true;};this.Get_DefaultColor=function(){return this.jm_DefaultColor;};this.jm_Created=null;this.jm_Modified=null;this.jm_Order=null;this.jm_sName=null;this.jm_Color=null;this.jm_sDescr=null;this.jm_sWebsite=null;this.jm_Lat=null;this.jm_Lon=null;this.jm_DefaultColor="FFFFFF";}
function A3xaEBID()
{this.IsValid=function()
{return true;};this.IsEmpty=function()
{return false;};this.Get_3xEBID=function(){return this;};this.CopyFrom=function(ji_o3xebid)
{if(ji_o3xebid)
ji_o3xebid=ji_o3xebid.Get_3xEBID();if(!ji_o3xebid)
return false;this.Set_TypEntity(ji_o3xebid.Set_TypEntity());this.Set_IdEntity(ji_o3xebid.Get_IdEntity());this.Set_Likes(ji_o3xebid.Get_Likes());this.Set_LikesBonus(ji_o3xebid.Get_LikesBonus());this.Set_Clicks(ji_o3xebid.Get_Clicks());this.Set_Score(ji_o3xebid.Get_Score());return true;};this.Clear=function()
{this.Set_TypEntity(null);this.Set_IdEntity(null);this.Set_Likes(Number(0));this.Set_LikesBonus(Number(0));this.Set_Clicks(Number(0));this.Set_Score(Number(0));return true;};this.Get_TypEntity=function(){return this.jm_TypEntity;};this.Get_IdEntity=function(){return this.jm_IdEntity;};this.Get_Likes=function(){return Number(this.jm_Likes||0);};this.Get_LikesBonus=function(){return Number(this.jm_LikesBonus||0);};this.Get_LikesTotal=function(){return Number(this.Get_Likes())+Number(this.Get_LikesBonus());};this.Get_Clicks=function(){return Number(this.jm_Clicks||0);};this.Get_Score=function(){return Number(this.jm_Score||0);};this.Set_TypEntity=function(ji_te){this.jm_TypEntity=ji_te;return true;};this.Set_IdEntity=function(ji_ide){this.jm_IdEntity=ji_ide;return true;};this.Set_Likes=function(ji_Likes){this.jm_Likes=Number(ji_Likes||0);return true;};this.Set_LikesBonus=function(ji_LikesBonus){this.jm_LikesBonus=Number(ji_LikesBonus||0);return true;};this.Set_Clicks=function(ji_Clicks){this.jm_Clicks=Number(ji_Clicks||0);return true;};this.Set_Score=function(ji_Score){this.jm_Score=Number(ji_Score||0);return true;};this.jm_TypEntity=null;this.jm_IdEntity=null;this.jm_Likes=null;this.jm_LikesBonus=null;this.jm_Clicks=null;this.jm_Score=null;}
function A3xaDCEntity()
{this.IsValid=function()
{if(!this.Get_3xXEID().Get_TypEntity())
return false;if(!this.Get_3xXEID().Get_IdEntity())
return false;if(this.Get_3xXEID().Get_3xCat().IsEmpty())
return false;if(!this.Get_3xEBIS().Get_Name())
return false;return true;};this.Get_3xXEID=function(){return this.jm_o3xxeid;};this.Get_3xEBIS=function(){return this.jm_o3xebis;};this.Get_3xEBID=function(){return this.jm_o3xebid;};this.Replace_3xEBIS=function(ji_o3xebis)
{if(ji_o3xebis)
ji_o3xebis=ji_o3xebis.Get_3xEBIS();if(!ji_o3xebis)
return false;this.jm_o3xebis=ji_o3xebis;return true;};this.Replace_3xEBID=function(ji_o3xebid)
{if(ji_o3xebid)
ji_o3xebid=ji_o3xebid.Get_3xEBID();if(!ji_o3xebid)
return false;this.jm_o3xebid=ji_o3xebid;return true;};this.Get_EI=function(){return this;};this.A3xaDCEntity_CopyFrom=function(ji_odce,ji_bXEID,ji_bEBIS,ji_bEBID,ji_bEI)
{if(!ji_odce)
return false;if(!(ji_bXEID===false))
{if(!this.Get_3xXEID().CopyFrom(ji_odce.Get_3xXEID()))
return false;}
if(!(ji_bEBIS===false))
this.Get_3xEBIS().CopyFrom(ji_odce.Get_3xEBIS());if(!(ji_bEBID===false))
this.Get_3xEBID().CopyFrom(ji_odce.Get_3xEBID());return true;};this.CopyFrom=function(ji_odc,ji_bXEID,ji_bEBIS,ji_bEBID,ji_bEI)
{return this.A3xaDCEntity_CopyFrom(ji_odc,ji_bXEID,ji_bEBIS,ji_bEBID,ji_bEI);};this.jm_o3xxeid=new A3xaXEID();this.jm_o3xebis=new A3xaEBIS();this.jm_o3xebid=new A3xaEBID();this.LinkCommonData=function(ji_odb){return false;};this.Get_CommonLinkedRecord=function(ji_TypEntity){return null;};}
function A3xaDbZero()
{A3xaDatabase.call(this,new A3xaDbSchema(jc_gl.jc_oA3xaDbZero.jc_sDbName,jc_gl.jc_oA3xaDbZero.jc_DbVersion,jc_gl.jc_oA3xaDbZero.jc_sDbDefaultPrimaryKeyName,jc_gl.jc_oA3xaDbZero.jc_aSchemaTables));this.NewDataTable=function(ji_glid)
{return new GLDTEntity(this,ji_glid);};this.Get_MainDataTable=function(ji_A,ji_Z,ji_N)
{var jt_glid=jc_gl.jc_oA3xaDbZero.jc_GLID_Enterprise;if(!ji_A)
return this.Get_DataTable(jt_glid);if(ji_A&&ji_Z&&ji_N)
jt_glid=jc_gl.jc_oA3xaDbZero.MakeGlid(jc_gl.jc_oA3xaDbZero.jc_GLID_EnterprisePrefix,ji_A+ji_Z+ji_N);if(!jt_glid)
return null;var jr_odt=this.Get_DataTable(jt_glid,true);if(!(jr_odt&&jr_odt.jm_oDTStatus.IsSuccess()))
return null;return jr_odt;};this.LoadSchemaDefault=function()
{this.jm_oDbSchema.jm_aTablesExtension=null;return true;}
this.LoadSchemaStore=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","A3xaDbZero.LoadSchemaStore");return this.LoadSchemaExtended(this.Get_DataTableCacheStore(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoRegion));}
this.LoadSchemaLoad=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","A3xaDbZero.LoadSchemaLoad");return this.LoadSchemaExtended(this.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoRegion,true));}
this.LoadSchemaExtended=function(ji_odtRegion)
{if(!ji_odtRegion)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("p1","","A3xaDbZero.LoadSchema");if(!ji_odtRegion.jm_aoglr)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("p2","","A3xaDbZero.LoadSchema");var jt_CountRecords=ji_odtRegion.jm_aoglr.Get_Count();var jt_pTableSource=this.jm_oDbSchema.Get_Table_ByName(jc_gl.jc_oA3xaDbZero.jc_GLID_Enterprise);if(!jt_pTableSource)
return false;var jt_pNTableSource=this.jm_oDbSchema.Get_Table_ByName(jc_gl.jc_oA3xaDbZero.jc_GLID_NEnterprise);if(!jt_pNTableSource)
return false;var jt_aTablesAppend=new Array();var jt_aNTablesAppend=new Array();for(var i=0;i<jt_CountRecords;i++)
{var jt_oglr=ji_odtRegion.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oglr)
continue;var jt_N=jt_oglr.Get_3xXEID().Get_3xAZNC().Get_N();if(!jt_N)
continue;var jt_A=jt_oglr.Get_3xXEID().Get_3xAZNC().Get_A();var jt_Z=jt_oglr.Get_3xXEID().Get_3xAZNC().Get_Z();var jt_pTableSchema={};jQuery.extend(jt_pTableSchema,jt_pTableSource);jt_pTableSchema.jp_sName=jc_gl.jc_oA3xaDbZero.MakeGlid(jc_gl.jc_oA3xaDbZero.jc_GLID_EnterprisePrefix,jt_A+jt_Z+jt_N);jt_pTableSchema.jp_bTyp_Common=false;jt_pTableSchema.jp_bTyp_Main=false;jt_pTableSchema.jp_bTyp_Dependent=false;jt_pTableSchema.jp_bTyp_ExtHeader=true;jt_pTableSchema.jp_bMandatory=false;jt_aTablesAppend.push(jt_pTableSchema);var jt_pNTableSchema={};jQuery.extend(jt_pNTableSchema,jt_pNTableSource);jt_pNTableSchema.jp_sName=jc_gl.jc_oA3xaDbZero.MakeGlid(jc_gl.jc_oA3xaDbZero.jc_GLID_NEnterprisePrefix,jt_A+jt_Z+jt_N);jt_pNTableSchema.jp_sParent=jc_gl.jc_oA3xaDbZero.MakeGlid(jc_gl.jc_oA3xaDbZero.jc_GLID_EnterprisePrefix,jt_A+jt_Z+jt_N);jt_pNTableSchema.jp_bTyp_Common=false;jt_pNTableSchema.jp_bTyp_Main=false;jt_pNTableSchema.jp_bTyp_Dependent=false;jt_pNTableSchema.jp_bTyp_ExtHeader=false;jt_pNTableSchema.jp_bMandatory=false;jt_aNTablesAppend.push(jt_pNTableSchema);}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("p3","","A3xaDbZero.LoadSchema");this.jm_oDbSchema.jm_aTablesExtension=new Array();for(var ii=0;ii<jt_aTablesAppend.length;ii++)
this.jm_oDbSchema.jm_aTablesExtension.push(jt_aTablesAppend[ii]);for(var ij=0;ij<jt_aTablesAppend.length;ij++)
this.jm_oDbSchema.jm_aTablesExtension.push(jt_aNTablesAppend[ij]);return true;};}
function GLDTEntity(ji_oDatabase,ji_glid)
{GLDataTable.call(this,ji_oDatabase,ji_glid);this.Get_CountByFilter=function(ji_TypEntity)
{var jt_count=this.jm_aoglr.Get_Count();if(!ji_TypEntity)
return jt_count;var jr_count=0;for(var i=0;i<jt_count;i++)
{var jt_id=this.jm_aoglr.Get_Key(i);if(!jt_id)
continue;var jt_ate=jt_id.split(",");if(jt_ate&&jt_ate.length>0&&jt_ate[0]==ji_TypEntity)
jr_count++;}
return jr_count;};this.NewRecord=function()
{var jt_glid=this.Get_Glid();var jt_oDbSchemaTable=this.Get_Database().jm_oDbSchema.Get_Table_ByName(jt_glid);jg_oe.CanLogInfo()&&jg_oe.LogInfo("info:"+
jt_glid+","+(jt_oDbSchemaTable?jt_oDbSchemaTable.jp_sParent:"null"),"","GLDTEntity_NewRecord");if(!jt_oDbSchemaTable)
return null;if(!jt_oDbSchemaTable.jp_sParent)
{if(jt_oDbSchemaTable.jp_bTyp_Main)
return new GLREBIS(new A3xaXtdEntity());return new GLREBIS(null);}
else if(jt_oDbSchemaTable.jp_SubTable==jc_gl.jc_oA3xaDbZero.jc_SubTable_EBID)
{return new GLREBID();}
return null;};this.BuildAltKey=function(ji_oglr)
{if(ji_oglr==null)
return null;var jt_glid=this.Get_Glid();if(!jt_glid)
return null;var jt_TypTarget=jc_gl.GLID2Typ(jt_glid);if(!jt_TypTarget)
return null;var jt_o3xxeidr_xapp=new A3xaXEID_XApp(ji_oglr);return jt_o3xxeidr_xapp.BuildAltKey(jt_TypTarget);};this.SortByTime=function(ji_bDesc)
{if(!(this.jm_aoglr&&this.jm_aoglr.Get_Count()>0))
return true;var jt_1=(ji_bDesc?1:-1);this.jm_aoglr.Sort(function(ji_oglr_a,ji_oglr_b)
{if(ji_oglr_a.Get_3xXEID().Get_TypEntity()==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl)
return-jt_1;if(ji_oglr_b.Get_3xXEID().Get_TypEntity()==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl)
return jt_1;var jt_o3xDate_a=new A3xaDateTime();var jt_o3xDate_b=new A3xaDateTime();jt_o3xDate_a.Set_DateTime(ji_oglr_a.Get_3xEBIS().Get_Created());jt_o3xDate_b.Set_DateTime(ji_oglr_b.Get_3xEBIS().Get_Created());if(!(jt_o3xDate_a.IsValid()&&jt_o3xDate_b.IsValid()))
return 0;var jt_result=jt_o3xDate_a.Compare(jt_o3xDate_b);if(jt_result<0)
return jt_1;if(jt_result>0)
return-jt_1;return 0;});return true;};this.SortByScore=function(ji_bDesc)
{if(!(this.jm_aoglr&&this.jm_aoglr.Get_Count()>0))
return true;var jt_1=(ji_bDesc?1:-1);this.jm_aoglr.Sort(function(ji_oglr_a,ji_oglr_b)
{if(ji_oglr_a.Get_3xXEID().Get_TypEntity()==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl)
return-jt_1;if(ji_oglr_b.Get_3xXEID().Get_TypEntity()==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl)
return jt_1;var jt_oebid_a=ji_oglr_a.Get_3xEBID();var jt_oebid_b=ji_oglr_b.Get_3xEBID();if(!(jt_oebid_a&&jt_oebid_b))
return 0;var jt_delta=jt_oebid_a.Get_Score()-jt_oebid_b.Get_Score();if(jt_delta<0)
return jt_1;if(jt_delta>0)
return-jt_1;return 0;});return true;};}
function A3xaREntityInfo(ji_aMaster,ji_arsSlaves)
{this.Get_Master=A3xaREntityInfo_Get_Master;this.Get_Slaves=A3xaREntityInfo_Get_Slaves;this.Get_SlavesCount=A3xaREntityInfo_Get_SlavesCount;this.Get_Slave=A3xaREntityInfo_Get_Slave;this.CopyFrom=A3xaREntityInfo_CopyFrom;this.Attach_Attributes=A3xaREntityInfo_Attach_Attributes;this.Get_Attributes=A3xaREntityInfo_Get_Attributes;this.jm_aMaster=ji_aMaster;this.jm_arsSlaves=ji_arsSlaves;this.jm_oAttributes=null;}
function A3xaREntityInfo_Get_Master(){return this.jm_aMaster;}
function A3xaREntityInfo_Get_Slaves(){return this.jm_arsSlaves;}
function A3xaREntityInfo_Get_SlavesCount()
{if(!this.jm_arsSlaves)
return 0;return this.jm_arsSlaves.length;}
function A3xaREntityInfo_Get_Slave(ji_index)
{if(!(this.jm_arsSlaves&&this.jm_arsSlaves.length))
return null;if(!(ji_index>=0&&ji_index<this.jm_arsSlaves.length))
return null;return this.jm_arsSlaves[ji_index];}
function A3xaREntityInfo_Attach_Attributes(ji_oAttributes)
{this.jm_oAttributes=ji_oAttributes;return true;}
function A3xaREntityInfo_Get_Attributes(){return this.jm_oAttributes;}
function A3xaREntityInfo_Check(ji_aoeifa,ji_CodInfo)
{if(!(ji_aoeifa&&ji_aoeifa.length))
return false;if(ji_CodInfo===null)
ji_CodInfo="";for(var i=0;i<ji_aoeifa.length;i++)
{var jt_oeifa=jt_aoeifa[i];if(ji_CodInfo==jt_oeifa.Get_Master()[jc_gl.jc_oA3xaDbZero.jc_Eifa_Cod])
return true;}
return false;}
function A3xaREntityInfo_CopyFrom(ji_oeifa)
{if(!ji_oeifa)
return false;this.jm_aMaster=null;this.jm_arsSlaves=null;this.Attach_Attributes(ji_oeifa.Get_Attributes());jt_aMaster=ji_oeifa.Get_Master();if(!jt_aMaster)
return true;this.jm_aMaster=jt_aMaster.slice();jt_arsSlaves=ji_oeifa.Get_Slaves();if(!jt_arsSlaves)
return true;this.jm_arsSlaves=new Array();for(var i=0;jt_arsSlaves.length;i++)
this.jm_arsSlaves.push(jt_arsSlaves[i].slice());return true;}
function A3xaREntity(ji_odcCache)
{GLRecord.call(this,null);this.Get_3xXEID=function()
{var jr_o3xxeid=this.jm_ogle.Get_3xXEID();if(!jr_o3xxeid)
return null;if(this.jm_bCacheXEID)
return jr_o3xxeid;if(!this._CacheXEID());this.jm_bCacheXEID=true;return jr_o3xxeid;};this._CacheXEID=function()
{var jr_o3xxeid=this.jm_ogle.Get_3xXEID();if(!jr_o3xxeid)
return false;jr_o3xxeid.Set_GEID(this.Get_Field("TypEntity"),this.Get_Field("cf_id"),this.Get_Field("TypGroup"),this.Get_Field("IdGroup"));jr_o3xxeid.Get_3xCat().Set_Category(this.Get_Field("U_cat"),this.Get_Field("V_cat"));jr_o3xxeid.Get_3xAZNC().Set_AZNC(this.Get_Field("A_code"),this.Get_Field("Z_code"),this.Get_Field("N_code"),this.Get_Field("City_code"));jr_o3xxeid.Get_3xPS().Set_PS(this.Get_Field("Country_iso3"),this.Get_Field("State_code"));this.jm_ogle.Replace_3xEBID(this.Get_3xEBID());this.jm_ogle.Replace_3xEBIS(this.Get_3xEBIS());return true;};this.Get_3xEBIS=function(){return null;};this.Get_EI=function(){return this;};this.IsReady=function(){return this.IsValid()&&this.Get_3xXEID().IsValid();};this.Set_SubRecord=function(ji_SubType,ji_oglrSub)
{if(!(ji_SubType&&ji_oglrSub))
return false;if(this.Get_3xXEID().Get_TypEntity()!=ji_oglrSub.Get_TypEntity())
return false;if(this.Get_3xXEID().Get_IdEntity()!=ji_oglrSub.Get_IdEntity())
return false;return this.GLRecord_Set_SubRecord(ji_SubType,ji_oglrSub);};this.Get_3xEBID=function(){return this.Get_SubRecord(jc_gl.jc_oA3xaDbZero.jc_SubTable_EBID);};this.Get_Info=function A3xaREntity_Get_Info(ji_TypInfo,ji_IdInfo)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("glid-r,jm_aoeifa: "+
this.Get_Glid()+","+(this.jm_aoeifa?"not-null":"null"),"","A3xaREntity_Get_Info");if(!this.jm_aoeifa)
{this.CacheInfo();if(!this.jm_aoeifa)
return null;}
if(!this.jm_aoeifa.length)
return null;var jt_aoeifa_Selected=new Array();for(var i=0;i<this.jm_aoeifa.length;i++)
{var jt_oeifa=this.jm_aoeifa[i];if(!jt_oeifa)
continue;if((!ji_TypInfo||jt_oeifa.jm_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Typ]==ji_TypInfo)&&(!ji_IdInfo||jt_oeifa.jm_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Id]==ji_IdInfo))
{jt_aoeifa_Selected.push(jt_oeifa);}}
if(!jt_aoeifa_Selected.length)
return null;return jt_aoeifa_Selected;};this.CacheInfo=function()
{this.jm_aoeifa=null;var jt_arsInfo=this.Get_FieldArray_Recordset(jc_gl.jc_oA3xaDbZero.jc_sEifaName);if(!jt_arsInfo)
return true;var jt_aoeifa=new Array();for(var i=0;i<jt_arsInfo.length;i++)
{var jt_aInfo=jt_arsInfo[i];if(!jt_aInfo)
continue;if(!(jt_aInfo[jc_gl.jc_oA3xaDbZero.jc_Eifa_IdParent]>0))
{var jt_oeifa=new A3xaREntityInfo(jt_aInfo,null);jt_aoeifa.push(jt_oeifa);}}
if(!jt_aoeifa)
return true;for(var m=0;m<jt_aoeifa.length;m++)
{var jt_oeifa=jt_aoeifa[m];for(var i=0;i<jt_arsInfo.length;i++)
{var jt_aInfo=jt_arsInfo[i];if(!jt_aInfo)
continue;if(jt_aInfo[jc_gl.jc_oA3xaDbZero.jc_Eifa_Typ]&&jt_aInfo[jc_gl.jc_oA3xaDbZero.jc_Eifa_Typ]==jt_oeifa.jm_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Typ]&&jt_aInfo[jc_gl.jc_oA3xaDbZero.jc_Eifa_IdParent]==jt_oeifa.jm_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Id])
{if(!jt_oeifa.jm_arsSlaves)
jt_oeifa.jm_arsSlaves=new Array();jt_oeifa.jm_arsSlaves.push(jt_aInfo);}}}
this.jm_aoeifa=jt_aoeifa;return true;};this.LinkCommonData=function(ji_odb,ji_bNoInherit)
{this.Get_3xXEID();return this.jm_ogle.LinkCommonData(ji_odb,ji_bNoInherit);};this.Get_CommonLinkedRecord=function(ji_TypEntity)
{return this.jm_ogle.Get_CommonLinkedRecord(ji_TypEntity);};this.jm_ogle=(ji_odcCache?ji_odcCache:new A3xaDCEntity());this.jm_bCacheXEID=false;this.jm_aoeifa=null;}
function GLREBIS(ji_odcCache)
{A3xaREntity.call(this,ji_odcCache);this.Get_3xEBIS=function(){return this;};this.Get_Created=function(){return this.Get_Field("cf_created");};this.Get_Modified=function(){return this.Get_Field("cf_modified");};this.Get_Order=function(){return this.Get_Field("Orden");};this.Get_Name=function(){return this.Get_Field("Entity_name");};this.Get_Descr=function(){return this.Get_Field("Descripcion");};this.Get_Website=function(){return this.Get_Field("WebsiteUrl");};this.Get_Lat=function(){return this.Get_Field("Lat");};this.Get_Lon=function(){return this.Get_Field("Lon");};this.Get_Color=function()
{if(!this.jm_Color)
this.jm_Color=this.Get_Field("Color");if(this.jm_Color)
return this.jm_Color;return this.jm_DefaultColor;};this.Set_Color=function(ji_Color){this.jm_Color=ji_Color;return true;};this.jm_Color=null;this.jm_DefaultColor="FFFFFF";this.Set_DefaultColor=function(ji_Color){this.jm_DefaultColor=ji_Color;return true;};this.Get_DefaultColor=function(){return this.jm_DefaultColor;};this.ConvertSpecialChars_Field=function(jio_aRecord,ji_sFieldName)
{if(!(jio_aRecord&&jio_aRecord.length))
return false;if(!(ji_sFieldName&&ji_sFieldName.length))
return false;if(!this.jm_oglFieldNames)
return false;var jt_pos=this.jm_oglFieldNames.Get_FieldPos(ji_sFieldName);if(jt_pos<0)
return false;jio_aRecord[jt_pos]=jio_aRecord[jt_pos].replace(/__at2__/g,"@").replace(/&#40;/g,"(").replace(/&#41;/g,")");return true;};this.ConvertSpecialChars=function(ji_aRecord)
{if(!ji_aRecord)
return ji_aRecord;if(!this.jm_oglFieldNames)
return ji_aRecord;this.ConvertSpecialChars_Field(ji_aRecord,"Entity_name");this.ConvertSpecialChars_Field(ji_aRecord,"Descripcion");this.ConvertSpecialChars_Field(ji_aRecord,"WebsiteUrl");return ji_aRecord;};}
function GLREBID()
{GLRecord.call(this,null);this.Get_3xEBID=function(){return this;};this.IsReady=function()
{if(!this.IsValid())
return false;if(!this.Get_TypEntity())
return false;if(!this.Get_IdEntity())
return false;return true;};this.Get_TypEntity=function()
{return this.Get_Field("TypEntity");};this.Get_IdEntity=function()
{return this.Get_Field("cf_id");};this.Get_LikesTotal=function()
{return Number(this.Get_Field("Likes"))+Number(this.Get_Field("Likes_bonus"));};this.Get_Clicks=function()
{return Number(this.Get_Field("Clicks"));};this.Get_Score=function()
{return Number(this.Get_Field("Score"));};}
function A3xaXtdEntity()
{this.jm_aoglrCommon=new Array();A3xaDCEntity.call(this);this.IsReady=function()
{return true;};this.Get_CommonLinkedRecord=function(ji_TypEntity)
{if(!ji_TypEntity)
return null;return this.jm_aoglrCommon[ji_TypEntity]||null;};this.LinkCommonData=function(ji_odb,ji_bNoInherit)
{return this.A3xaXtdEntity_LinkCommonData(ji_odb,ji_bNoInherit);};this.A3xaXtdEntity_LinkCommonData=function(ji_odb,ji_bNoInherit)
{if(!ji_odb)
return false;var jt_oThis3xxeid_xapp=new A3xaXEID_XApp(this);var jt_oglrCategory=null;var jt_ogldtCategory=ji_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Category);if(jt_ogldtCategory)
{jt_oglrCategory=jt_ogldtCategory.Get_GLRecord(jt_ogldtCategory.AltKey_2_PrimaryKey(jt_oThis3xxeid_xapp.BuildAltKey(jc_gl.jc_oEntity.jc_Typ_Category)));}
var jt_oglrGeoArea=null;var jt_oglrGeoRegion=null;var jt_oglrGeoCity=null;var jt_oglrGeoCountry=null;var jt_oglrGeoState=null;var jt_ogldtGeoArea=ji_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoArea);var jt_ogldtGeoRegion=ji_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoRegion);var jt_ogldtGeoCity=ji_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoCity);var jt_ogldtGeoCountry=ji_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoCountry);var jt_ogldtGeoState=ji_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoState);if(jt_ogldtGeoArea)
{jt_oglrGeoArea=jt_ogldtGeoArea.Get_GLRecord(jt_ogldtGeoArea.AltKey_2_PrimaryKey(jt_oThis3xxeid_xapp.BuildAltKey(jc_gl.jc_oEntity.jc_Typ_GeoArea)));if(jt_oglrGeoArea&&jt_ogldtGeoRegion)
{jt_oglrGeoRegion=jt_ogldtGeoRegion.Get_GLRecord(jt_ogldtGeoRegion.AltKey_2_PrimaryKey(jt_oThis3xxeid_xapp.BuildAltKey(jc_gl.jc_oEntity.jc_Typ_GeoRegion)));if(jt_oglrGeoRegion&&jt_ogldtGeoCity)
jt_oglrGeoCity=jt_ogldtGeoCity.Get_GLRecord(jt_ogldtGeoCity.AltKey_2_PrimaryKey(jt_oThis3xxeid_xapp.BuildAltKey(jc_gl.jc_oEntity.jc_Typ_GeoCity)));}}
var jt_oglrAltKeySource=null;if(jt_ogldtGeoCountry)
{jt_oglrAltKeySource=jt_oglrGeoCity;if(!jt_oglrAltKeySource)
jt_oglrAltKeySource=this;var jt_oAltKeySource3xxeid_xapp=new A3xaXEID_XApp(jt_oglrAltKeySource);if(jt_oglrAltKeySource&&jt_oglrAltKeySource.Get_3xXEID().Get_3xPS().Get_P())
{jt_oglrGeoCountry=jt_ogldtGeoCountry.Get_GLRecord(jt_ogldtGeoCountry.AltKey_2_PrimaryKey(jt_oAltKeySource3xxeid_xapp.BuildAltKey(jc_gl.jc_oEntity.jc_Typ_GeoCountry)));if(jt_oglrGeoCountry&&jt_oglrAltKeySource.Get_3xXEID().Get_3xPS().Get_S())
{if(jt_ogldtGeoState&&jt_oglrGeoCountry)
jt_oglrGeoState=jt_ogldtGeoState.Get_GLRecord(jt_ogldtGeoState.AltKey_2_PrimaryKey(jt_oAltKeySource3xxeid_xapp.BuildAltKey(jc_gl.jc_oEntity.jc_Typ_GeoState)));}}}
this.jm_aoglrCommon[jc_gl.jc_oEntity.jc_Typ_Category]=jt_oglrCategory;this.jm_aoglrCommon[jc_gl.jc_oEntity.jc_Typ_GeoArea]=jt_oglrGeoArea;this.jm_aoglrCommon[jc_gl.jc_oEntity.jc_Typ_GeoRegion]=jt_oglrGeoRegion;this.jm_aoglrCommon[jc_gl.jc_oEntity.jc_Typ_GeoCity]=jt_oglrGeoCity;this.jm_aoglrCommon[jc_gl.jc_oEntity.jc_Typ_GeoCountry]=jt_oglrGeoCountry;this.jm_aoglrCommon[jc_gl.jc_oEntity.jc_Typ_GeoState]=jt_oglrGeoState;if(!ji_bNoInherit)
{if(jt_oglrAltKeySource)
this.Get_3xXEID().Set_3xPS(jt_oglrAltKeySource.Get_3xXEID());if(jt_oglrCategory)
this.Get_3xEBIS().Set_Color(jt_oglrCategory.Get_3xEBIS().Get_Color());}
return true;};}
function A3xaXur()
{A3xaXtdEntity.call(this);this.jm_FormName=null;this.jm_FormEvent=null;this.jm_TypAjaxResponse=null;this.jm_QUR=null;this.jm_Single=null;this.jm_SubEntity=null;this.jm_oxeidHighlights=null;this.jm_sEnterprise="";this.jm_sCategory="";this.jm_sCity="";this.jm_sState="";this.jm_sCountry="";this.jm_sRegion="";this.jm_sArea="";this.jm_oDTStatus=new GLDataStatus(jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty);this.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StOpen,jc_gl.jc_oA3xaDbZero.jc_DTStatus2_TgTable,jc_gl.jc_oA3xaDbZero.jc_DTStatus2_OpCache);this.Get_XEIDHighlights=function()
{return this.jm_oxeidHighlights;}
this.Clear=function()
{this.jm_FormName=null;this.jm_FormEvent=null;this.jm_TypAjaxResponse=null;this.jm_QUR=null;this.jm_Single=null;this.jm_SubEntity=null;this.jm_oxeidHighlights=null;this.jm_sEnterprise="";this.jm_sCategory="";this.jm_sCity="";this.jm_sState="";this.jm_sCountry="";this.jm_sRegion="";this.jm_sArea="";return true;};this.Get_3xXUR=function(){return this;};this.CopyFromXUR=function(ji_oxur)
{if(ji_oxur)
ji_oxur=ji_oxur.Get_3xXUR();if(!ji_oxur)
return false;if(!this.A3xaDCEntity_CopyFrom(ji_oxur,true,false,false,false))
return false;this.jm_FormName=ji_oxur.jm_FormName;this.jm_FormEvent=ji_oxur.jm_FormEvent;this.jm_TypAjaxResponse=ji_oxur.jm_TypAjaxResponse;this.jm_QUR=ji_oxur.jm_QUR;this.jm_Single=ji_oxur.jm_Single;this.jm_SubEntity=ji_oxur.jm_SubEntity;this.jm_oxeidHighlights=ji_oxur.jm_oxeidHighlights;this.jm_sEnterprise=ji_oxur.jm_sEnterprise;this.jm_sCategory=ji_oxur.jm_sCategory;this.jm_sCity=ji_oxur.jm_sCity;this.jm_sState=ji_oxur.jm_sState;this.jm_sCountry=ji_oxur.jm_sCountry;this.jm_sRegion=ji_oxur.jm_sRegion;this.jm_sArea=ji_oxur.jm_sArea;return true;};this.Set_UrlParams=function(ji_FormName,ji_FormEvent,ji_TAR,ji_QUR,ji_sxeid,ji_Single,ji_SubEntity,ji_sUrlParams)
{this.Clear();var jt_oUrlParams=new A3xaUrl(null,ji_sUrlParams);var jt_sXUR=jt_oUrlParams.Get_UrlParam("p3x");if(jt_sXUR)
this.Set_XURString(jt_sXUR);if(ji_FormName)
this.jm_FormName=ji_FormName;if(ji_FormEvent)
this.jm_FormEvent=ji_FormEvent;if(ji_TAR)
this.jm_TypAjaxResponse=ji_TAR;if(ji_QUR)
this.jm_QUR=ji_QUR;if(ji_Single)
this.jm_Single=ji_Single;if(ji_SubEntity)
this.jm_SubEntity=ji_SubEntity;if(ji_sxeid)
this.Get_3xXEID().Set_String(ji_sxeid);this.jm_oxeidHighlights=new A3xaDCEntity();this.jm_oxeidHighlights.Get_3xXEID().CopyFrom(this);return true;};this.Set_XURString=function(ji_s)
{var jt_aXUR=null;if(!ji_s)
return false;jt_aXUR=ji_s.split(",");if(!jt_aXUR)
return false;if(jt_aXUR.length>0)
this.jm_FormName=jt_aXUR[0];if(jt_aXUR.length>1)
this.jm_FormEvent=jt_aXUR[1];if(jt_aXUR.length>2)
this.jm_TypAjaxResponse=jt_aXUR[2];if(jt_aXUR.length>3)
this.jm_Single=jt_aXUR[3];if(jt_aXUR.length>4)
this.jm_SubEntity=jt_aXUR[4];if(jt_aXUR.length>5)
this.jm_QUR=jt_aXUR[5];if(jt_aXUR.length>6)
{var jt_sxeid="";for(var ix=6;ix<jt_aXUR.length;ix++)
jt_sxeid+=((ix>6?",":"")+jt_aXUR[ix]);this.Get_3xXEID().Set_String(jt_sxeid);this.jm_oxeidHighlights=new A3xaDCEntity();this.jm_oxeidHighlights.Get_3xXEID().CopyFrom(this);}
return true;};this.IsValid=function()
{return true;}
this.IsSingle=function(){return this.jm_Single==jc_gl.jc_XURTG_Single};this.ConvertQURSort=function(ji_bSortByScore)
{if(ji_bSortByScore===false)
{if(this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QuerySBS)
this.jm_QUR=jc_gl.jc_oQUR.jc_QUR_QuerySBT;else if(this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QueryLimSBS)
this.jm_QUR=jc_gl.jc_oQUR.jc_QUR_QueryLimSBT;else return false;}
else
{if(this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QuerySBT)
this.jm_QUR=jc_gl.jc_oQUR.jc_QUR_QuerySBS;else if(this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QueryLimSBT)
this.jm_QUR=jc_gl.jc_oQUR.jc_QUR_QueryLimSBS;else return false;}
return true;};this.MakeQUR=function(ji_bUnlimited,ji_bSortByTime)
{if(ji_bUnlimited)
{if(ji_bSortByTime)
this.jm_QUR=jc_gl.jc_oQUR.jc_QUR_QuerySBT;else
this.jm_QUR=jc_gl.jc_oQUR.jc_QUR_QuerySBS;return true;}
if(ji_bSortByTime)
this.jm_QUR=jc_gl.jc_oQUR.jc_QUR_QueryLimSBT;else
this.jm_QUR=jc_gl.jc_oQUR.jc_QUR_QueryLimSBS;return true;};this.IsSortByScore=function()
{return this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QuerySBS||(this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QueryLimSBS);};this.IsSortByTime=function()
{return this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QuerySBT||(this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QueryLimSBT);};this.IsQURUnlimited=function()
{return this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QuerySBS||this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QuerySBT;};this.IsQURLimited=function()
{return this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QueryLimSBS||this.jm_QUR==jc_gl.jc_oQUR.jc_QUR_QueryLimSBT;};this.Get_XURString=function()
{if(!this.IsValid())
return"";var jr_s=(this.jm_FormName||"")+","+(this.jm_FormEvent||"")+","+
(this.jm_TypAjaxResponse||"")+","+
(this.jm_Single||"")+","+(this.jm_SubEntity||"")+","+
(this.jm_QUR||"")+","+this.Get_3xXEID().Get_String();return jr_s;};this.Set_XUDParams=function(ji_sEnterprise,ji_sCategory,ji_sCity,ji_sState,ji_sCountry,ji_sRegion,ji_sArea)
{if(ji_sEnterprise)
this.jm_sEnterprise=(ji_sEnterprise||"");this.jm_sCategory=(ji_sCategory||"");this.jm_sCity=(ji_sCity||"");this.jm_sState=(ji_sState||"");this.jm_sCountry=(ji_sCountry||"");this.jm_sRegion=(ji_sRegion||"");this.jm_sArea=(ji_sArea||"");return true;}
this.Set_XUDString=function(ji_s)
{var jt_aXUD=null;if(!ji_s)
return false;jt_aXUD=ji_s.split(",");if(!(jt_aXUD&&jt_aXUD.length>0))
return false;return this.Set_XUDParams(jt_aXUD[0]||"",jt_aXUD[1]||"",jt_aXUD[2]||"",jt_aXUD[3]||"",jt_aXUD[4]||"",jt_aXUD[5]||"",jt_aXUD[6]||"");}
this.Get_XUDString=function(ji_bUnescape)
{if(!this.IsValid())
return"";var jr_sDelim=",";var jr_s="";if(ji_bUnescape===true)
jr_sDelim=", ";jr_s=this.EscapeSpecialChars(this.jm_sEnterprise,ji_bUnescape)+jr_sDelim+
this.EscapeSpecialChars(this.jm_sCategory,ji_bUnescape)+jr_sDelim+
this.EscapeSpecialChars(this.jm_sCity,ji_bUnescape)+jr_sDelim+
this.EscapeSpecialChars(this.jm_sState,ji_bUnescape)+jr_sDelim+
this.EscapeSpecialChars(this.jm_sCountry,ji_bUnescape)+jr_sDelim+
this.EscapeSpecialChars(this.jm_sRegion,ji_bUnescape)+jr_sDelim+
this.EscapeSpecialChars(this.jm_sArea,ji_bUnescape);return jr_s;}
this.EscapeSpecialChars=function(ji_s,ji_bUnescape)
{if(!ji_s)
return"";var jr_s="";if(ji_bUnescape===true)
return ji_s;jr_s=ji_s.replace(/ |\||\\|\!|\"|\'|\/|\(|\)|\=|\?|\^|\{|\}|\[|\]|\+|\*|\@|\#|\<|\>|\,|\;|\.|\:|\_|&apos;|&quot;|\$|\%|\&/g,"-");jr_s=jr_s.replace("----","-").replace("---","-").replace("--","-").replace("--","-").replace("--","-");if(jr_s.slice(-1)=="-")
jr_s=jr_s.slice(0,-1);return jr_s;}
this.LinkMainData=function(ji_odb)
{if(!ji_odb)
return false;var jt_ogldtMain=ji_odb.Get_MainDataTable();if(!jt_ogldtMain)
return false;var jt_keyMain=this.Get_3xXEID().Get_PrimaryKey();var jt_oglrMain=null;if(this.jm_Single==jc_gl.jc_XURTG_Single&&jt_keyMain)
jt_oglrMain=jt_ogldtMain.Get_GLRecord(jt_keyMain);if(jt_oglrMain)
this.CopyFrom(jt_oglrMain,false,true,false,false);return true;}
this.CopyFrom=function(ji_odc,ji_bXEID,ji_bEBIS,ji_bEBID,ji_bEI)
{if(!this.A3xaDCEntity_CopyFrom(ji_odc,ji_bXEID,ji_bEBIS,ji_bEBID,ji_bEI))
return false;this.jm_oxeidHighlights=new A3xaDCEntity();this.jm_oxeidHighlights.Get_3xXEID().CopyFrom(this);var jt_sName=this.Get_3xEBIS().Get_Name();var jt_TypEntity=this.Get_3xXEID().Get_TypEntity();if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_Category)
this.jm_sCategory=jt_sName;else if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoCity)
this.jm_sCity=jt_sName;else if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoState)
this.jm_sState=jt_sName;else if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoCountry)
this.jm_sCountry=jt_sName;else if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoRegion)
this.jm_sRegion=jt_sName;else if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoArea)
this.jm_sArea=jt_sName;else
this.jm_sEnterprise=jt_sName;return true;};this.LinkCommonData=function(ji_odb,ji_bNoInherit)
{if(!this.A3xaXtdEntity_LinkCommonData(ji_odb,ji_bNoInherit))
return false;return this.BuildXUDParams();};this.BuildXUDParams=function()
{var jt_oglrCategory=this.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_Category);var jt_sCategory=(jt_oglrCategory?jt_oglrCategory.Get_3xEBIS().Get_Name():"");var jt_oglrGeoCity=this.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCity);var jt_sGeoCity=(jt_oglrGeoCity?jt_oglrGeoCity.Get_3xEBIS().Get_Name():"");var jt_oglrGeoState=this.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoState);var jt_sGeoState=(jt_oglrGeoState?jt_oglrGeoState.Get_3xEBIS().Get_Name():"");var jt_oglrGeoCountry=this.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCountry);var jt_sGeoCountry=(jt_oglrGeoCountry?jt_oglrGeoCountry.Get_3xEBIS().Get_Name():"");var jt_oglrGeoRegion=this.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoRegion);var jt_sGeoRegion=(jt_oglrGeoRegion?jt_oglrGeoRegion.Get_3xEBIS().Get_Name():"");var jt_oglrGeoArea=this.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoArea);var jt_sGeoArea=(jt_oglrGeoArea?jt_oglrGeoArea.Get_3xEBIS().Get_Name():"");if(!jt_sGeoArea)
{var jt_A=this.Get_3xXEID().Get_3xAZNC().Get_A();var jt_Z=this.Get_3xXEID().Get_3xAZNC().Get_Z();if(jt_A=='L'&&jt_Z=='A')
jt_sGeoArea="Latin America";else if(jt_A&&!jt_Z)
{if(jt_A=='X')
jt_sGeoArea="Mexico";else if(jt_A=='N')
jt_sGeoArea="Centroamerica";else if(jt_A=='C')
jt_sGeoArea="Caribbean";else if(jt_A=='P')
jt_sGeoArea="Tropical";else if(jt_A=='A')
jt_sGeoArea="Amazonia";else if(jt_A=='B')
jt_sGeoArea="Brazil";else if(jt_A=='S')
jt_sGeoArea="SouthEast";else if(jt_A=='D')
jt_sGeoArea="Andes";}}
var jt_TypEntity=this.Get_3xXEID().Get_TypEntity();if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_Category||jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoCity||jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoState||jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoCountry||jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoRegion||jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoArea)
{jt_sCategory="";if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoCountry)
{jt_sGeoCity="";jt_sGeoState="";jt_sGeoRegion="";jt_sGeoArea="";}
else if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoState)
{jt_sGeoCity="";jt_sGeoArea="";}}
if(this.jm_Single!=jc_gl.jc_XURTG_Single)
{var jt_squrDescr=jc_gl.QUR_Get_Descr(this.jm_QUR,this.Get_3xXEID().Get_TypEntity());jt_sCategory=jt_squrDescr+"-"+jt_sCategory;}
this.Set_XUDParams(null,jt_sCategory,jt_sGeoCity,jt_sGeoState,jt_sGeoCountry,jt_sGeoRegion,jt_sGeoArea);return true;};this.Default2GlidQUR=function(ji_glidDefault)
{var jt_bIsDefault=jc_gl.jc_oA3xaDbZero.IsDefaultGlid(ji_glidDefault);if(!jt_bIsDefault)
return ji_glidDefault;ji_glidPrefix=ji_glidDefault.substr(0,jc_gl.jc_oA3xaDbZero.jc_GLIDPREFIXLEN);if(!(ji_glidPrefix==jc_gl.jc_oA3xaDbZero.jc_GLID_EnterprisePrefix||ji_glidPrefix==jc_gl.jc_oA3xaDbZero.jc_GLID_NEnterprisePrefix))
return ji_glidDefault;var jt_oxeidXUR=this.Get_3xXEID();if(!(this.IsQURUnlimited()&&jt_oxeidXUR&&jt_oxeidXUR.Get_TypEntity()==jc_gl.jc_oEntity.jc_Typ_Enterprise))
{return ji_glidDefault;}
var jt_A=jt_oxeidXUR.Get_3xAZNC().Get_A();var jt_Z=jt_oxeidXUR.Get_3xAZNC().Get_Z();var jt_N=jt_oxeidXUR.Get_3xAZNC().Get_N();if(!(jt_A&&jt_Z&&jt_N))
return ji_glidDefault;var jr_glidQUR=jc_gl.jc_oA3xaDbZero.MakeGlid(ji_glidPrefix,jt_A+jt_Z+jt_N);jg_oe.CanLogInfo()&&jg_oe.LogInfo("gliddef,glidqur: "+ji_glidDefault+","+jr_glidQUR,"","A3xaXUR.Default2GlidQUR");return jr_glidQUR;};this.Get_A3xaUrl=function(ji_bAjax,ji_bAppendDescrParam)
{var jr_oUrl=null;if(ji_bAjax)
{this.jm_FormName=jc_gl.jc_XURFN_AjaxEntity;var jt_sxur=this.Get_XURString();jr_oUrl=new A3xaUrl(jc_gl.jc_sUrlBase_A3xaForm,"p3x="+jt_sxur);}
else
{var jt_sxur=this.Get_XURString();jr_oUrl=new A3xaUrl(jc_gl.jc_sUrlBase_A3xaForm,(ji_bAppendDescrParam===true?"p3d="+this.Get_XUDString()+"&":"")+"p3x="+jt_sxur);}
if(!jt_sxur)
return jr_oUrl;return jr_oUrl;};this.Redirect=function()
{var jt_oUrl=this.Get_A3xaUrl(false,true);if(!jt_oUrl)
return false;return jt_oUrl.Redirect();}}
function GLReporter()
{this.OnDataStored=GLReporter_OnDataStored;this.OnDataRead=GLReporter_OnDataRead;this.OnPageFooterEnd=GLReporter_OnPageFooterEnd;this.Set_AjaxUrlParams=GLReporter_Set_AjaxUrlParams;this.Get_AjaxUrlParams=GLReporter_Get_AjaxUrlParams;this.Set_ExecDevice=GLReporter_Set_ExecDevice;this.Get_ExecDevice=GLReporter_Get_ExecDevice;this.Notify=GLReporter_Notify;this.NotifyWrite=GLReporter_NotifyWrite;this.NotifyRead=GLReporter_NotifyRead;this.jm_oExecDevice=null;this.jm_oAjaxUrlParams=null;this.jm_bOnPageFooter=false;this.jm_bOnDataStored=false;this.jm_bOnDataRead=false;this.jm_oTimeoutReportToServer=null;this.jm_oTimerDelay=null;}
function GLReporter_OnDataStored(ji_sGLHeader)
{this.jm_bOnDataStored=true;this.NotifyWrite();return true;}
function GLReporter_OnDataRead()
{this.jm_bOnDataRead=true;this.NotifyRead();return true;}
function GLReporter_OnPageFooterEnd()
{}
function GLReporter_Set_AjaxUrlParams(ji_s)
{this.jm_oAjaxUrlParams=new A3xaUrl("",ji_s);return true;}
function GLReporter_Get_AjaxUrlParams()
{if(!this.jm_oAjaxUrlParams)
return"";var jr_oAjaxUrlParams=new A3xaUrl(null,null);jr_oAjaxUrlParams.CopyFrom(this.jm_oAjaxUrlParams);jr_oAjaxUrlParams.Modify_UrlParam("p_GLTurbo",jg_oe.Get_TurboString());var jt_oglHeader=new GLHeader(null,null);var jt_sUrlParam_GLHeader=jr_oAjaxUrlParams.Get_UrlParam("p_GLHeader");if(!jt_sUrlParam_GLHeader)
return jr_oAjaxUrlParams.Get_UrlParams();if(!jt_oglHeader.Set_String(jt_sUrlParam_GLHeader))
return jr_oAjaxUrlParams.Get_UrlParams();var jt_xglid=jt_oglHeader.Get_XGlid();if(!jt_xglid)
return jr_oAjaxUrlParams.Get_UrlParams();if(jt_xglid!=(jc_gl.jc_oA3xaDbZero.jc_GLID_All+jc_gl.jc_oA3xaDbZero.jc_GLMID_DT))
{var jt_odt=jg_oe.Get_Database().Get_DataTable(jt_xglid,true,true);if(!jt_odt)
return jr_oAjaxUrlParams.Get_UrlParams();jt_oglHeader=jt_odt.Get_Header();if(!jt_oglHeader)
return jr_oAjaxUrlParams.Get_UrlParams();var jt_aHeaderRecord=jt_oglHeader.Get_Record_Array();if(!jt_aHeaderRecord||(!jt_aHeaderRecord[0]))
return jr_oAjaxUrlParams.Get_UrlParams();var jt_sGLHeader=jt_oglHeader.Get_String();if(jt_sGLHeader)
jr_oAjaxUrlParams.Modify_UrlParam("p_GLHeader",jt_sGLHeader);}
else
{var jt_release=0;var jt_odt=jg_oe.Get_Database().Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Category,true,true);if(!jt_odt)
{jg_oe.LogErr("table Category not found","","GLReporter_Get_AjaxUrlParams");return jr_oAjaxUrlParams.Get_UrlParams();}
var jt_oglHeaderCommon=jt_odt.Get_Header();if(!jt_oglHeaderCommon)
{jg_oe.LogErr("header Category null","","GLReporter_Get_AjaxUrlParams");return jr_oAjaxUrlParams.Get_UrlParams();}
var jt_sGLHeaderReference=jt_oglHeaderCommon.Get_String(jc_gl.jc_oA3xaDbZero.jc_GLID_All);var jt_aHeaderCommonRecord=jt_oglHeaderCommon.Get_Record_Array();if(jt_aHeaderCommonRecord)
jt_release=jt_aHeaderCommonRecord[0];if(!(jt_release>0))
{jg_oe.LogErr("release Category null","","GLReporter_Get_AjaxUrlParams");return jr_oAjaxUrlParams.Get_UrlParams();}
for(var i=0;i<jc_gl.jc_oA3xaDbZero.jc_aSchemaTables.length;i++)
{if(jc_gl.jc_oA3xaDbZero.jc_aSchemaTables[i].jp_sName==jc_gl.jc_oA3xaDbZero.jc_GLID_Category)
continue;var jt_odtCur=jg_oe.Get_Database().Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_aSchemaTables[i].jp_sName,true,true);if(!jt_odtCur)
{jg_oe.LogErr("table not found: "+jc_gl.jc_oA3xaDbZero.jc_aSchemaTables[i].jp_sName,"","GLReporter_Get_AjaxUrlParams");return jr_oAjaxUrlParams.Get_UrlParams();}
var jt_oglHeaderCur=jt_odtCur.Get_Header();if(!jt_oglHeaderCur)
return jr_oAjaxUrlParams.Get_UrlParams();var jt_aHeaderCurRecord=jt_oglHeaderCur.Get_Record_Array();if(!jt_aHeaderCurRecord||jt_release!=jt_aHeaderCurRecord[0])
return jr_oAjaxUrlParams.Get_UrlParams();}
if(jt_sGLHeaderReference)
jr_oAjaxUrlParams.Modify_UrlParam("p_GLHeader",jt_sGLHeaderReference);}
var jt_odb=jg_oe.Get_Database();if(!jt_odb)
return jr_oAjaxUrlParams.Get_UrlParams();var jt_ogldt=jt_odb.Get_DataTable(jr_oAjaxUrlParams.Get_UrlParam("p_GLAltIndex"));if(!jt_ogldt)
return jr_oAjaxUrlParams.Get_UrlParams();var jt_oglAxHeader=jt_ogldt.Get_AxHeader();if(!jt_oglAxHeader)
return jr_oAjaxUrlParams.Get_UrlParams();var jt_sGLAx=jt_oglAxHeader.Get_FullString();if(!jt_sGLAx)
return jr_oAjaxUrlParams.Get_UrlParams();jr_oAjaxUrlParams.Modify_UrlParam("p_GLAltIndex",jt_sGLAx);return jr_oAjaxUrlParams.Get_UrlParams();}
function GLReporter_NotifyWrite()
{var jt_this=this;jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin: ods,xdev,isry: "+
this.jm_bOnDataStored+","+(this.jm_oExecDevice?"y":"n")+","+jg_oe.IsReady(),"Flash","GLReporter_NotifyWrite");if(this.jm_bOnDataStored&&this.jm_oExecDevice&&jg_oe.IsReady()&&this.jm_oTimerDelay==null)
{this.jm_bOnDataStored=false;this.jm_oTimeoutReportToServer=null;var jt_FlashColor=null;if(jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_IDB).CheckLatestOp("WR"))
jt_FlashColor="FR";else if(jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_LS).CheckLatestOp("WR"))
jt_FlashColor="FR";else if(jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_SS).CheckLatestOp("WR"))
jt_FlashColor="FY";else if(jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_FLY).CheckLatestOp("WR"))
jt_FlashColor="FY";if(jt_FlashColor)
{this.jm_oExecDevice.FlashButton("Turbo",jt_FlashColor);this.jm_oTimeoutReportToServer=setTimeout(function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Ajax-to-Server:","","GLReporter_NotifyWrite");jt_this.jm_oExecDevice.Set_ButtonStatus("Turbo","KS",true);jt_this.jm_oTimeoutReportToServer=null;},2000);}
return true;}
return false;}
function GLReporter_NotifyRead()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin: odr,xdev,isry: "+
this.jm_bOnDataRead+","+(this.jm_oExecDevice?"y":"n")+","+jg_oe.IsReady(),"Flash","GLReporter_NotifyRead");if(this.jm_bOnDataRead&&this.jm_oExecDevice&&jg_oe.IsReady()&&this.jm_oTimerDelay==null)
{this.jm_bOnDataRead=false;var jt_FlashColor=null;if(jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_IDB).CheckLatestOp("RD"))
jt_FlashColor="FG";else if(jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_LS).CheckLatestOp("RD"))
jt_FlashColor="FG";else if(jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_SS).CheckLatestOp("RD"))
jt_FlashColor="FB";else if(jg_oe.Get_Storage(jc_gl.jc_oStorage.jc_FLY).CheckLatestOp("RD"))
jt_FlashColor="FB";if(jt_FlashColor)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Color: "+jt_FlashColor,"Flash","GLReporter_NotifyRead");this.jm_oExecDevice.FlashButton("Turbo",jt_FlashColor);}
return true;}
return false;}
function GLReporter_Set_ExecDevice(jt_oExecDevice)
{this.jm_oExecDevice=jt_oExecDevice;jt_this=this;this.jm_oTimerDelay=setTimeout(function()
{jt_this.jm_oTimerDelay=null;jt_this.Notify();},100);return true;}
function GLReporter_Notify()
{this.NotifyWrite();this.NotifyRead();return true;}
function GLReporter_Get_ExecDevice(){return this.jm_oExecDevice;}
function A3xaAppXUR()
{var jt_this=this;this.jm_oxur=new A3xaXur();this.Get_3xXUR=function(){return this.jm_oxur;};this.Set_3xXUR=function(ji_oxur){this.jm_oxur=(ji_oxur||null);return true;};this.jm_ao3xurQueue=new Array();this.Set_XURString=function(ji_sxur)
{this.Set_3xXUR(new A3xaXur());this.Get_3xXUR().Set_XURString(ji_sxur);return true;};this.UpdatePageTitle=function()
{if(!this.Get_3xXUR())
return false;this.Get_3xXUR().jm_TypAjaxResponse=null;if(this.Get_3xXUR().jm_FormName==jc_gl.jc_XURFN_AjaxEntity)
this.Get_3xXUR().jm_FormName=jc_gl.jc_XURFN_ListEntity;jQuery(document).prop('title',this.Get_3xXUR().Get_XUDString(true));var jt_o3xurl=this.Get_3xXUR().Get_A3xaUrl(false,true);if(jt_o3xurl)
jt_o3xurl.History_ReplaceState("",this.Get_3xXUR().Get_XUDString(true));return true;};this.OnChange_QUR=function(ji_sUrlParams)
{if(!ji_sUrlParams)
return false;var jt_o3xXUR=new A3xaXur();jt_o3xXUR.Set_UrlParams(jc_gl.jc_XURFN_ListEntity,null,jc_gl.jc_oAjax.jc_sAjaxTypEntitySet,null,null,null,null,ji_sUrlParams);var jt_oxeidXUR=jt_o3xXUR.Get_3xXEID();var jt_o3xazncXUR=new A3xaAZNC();jt_o3xazncXUR.CopyFrom(jt_oxeidXUR);var jt_te=jt_oxeidXUR.Get_TypEntity();var jt_A=jt_o3xazncXUR.Get_A();var jt_Z=jt_o3xazncXUR.Get_Z();var jt_N=jt_o3xazncXUR.Get_N();var jt_C=jt_o3xazncXUR.Get_C();var jt_odt=null;if((!jt_te||jt_te==jc_gl.jc_oEntity.jc_Typ_Enterprise)&&jt_A&&jt_Z&&jt_N)
jt_odt=jg_oApp.Get_Database().Get_MainDataTable(jt_A,jt_Z,jt_N);jt_oxeidXUR.Get_3xAZNC().Clear_C();var jt_ohse=jg_oApp.Get_HtmlSetEntity();if(jt_ohse)
jt_ohse.AbortPrintHtmlLowPriority(false,false)
if(!jt_odt)
{if(jt_ohse)
jt_ohse.Release(false);this.jm_ao3xurQueue=new Array();this.jm_ao3xurQueue.push(jt_o3xXUR);this.AjaxQueueQueryRequest();return true;}
if(!(jt_o3xXUR.Get_3xXUR().IsQURUnlimited()))
jt_o3xXUR.Get_3xXUR().MakeQUR(true,false);this.Get_3xXUR().jm_QUR=jt_o3xXUR.Get_3xXUR().jm_QUR;this.Get_3xXUR().Get_3xXEID().Set_TypEntity(jt_o3xXUR.Get_3xXEID().Get_TypEntity());this.Get_3xXUR().Get_3xXEID().Set_3xAZN(jt_o3xazncXUR);this.Get_3xXUR().Get_XEIDHighlights().Get_3xXEID().Set_3xAZNC(jt_o3xazncXUR);jg_oApp.ResetApp();jg_oApp.LoadData();return true;};this.AjaxQueueQueryRequest=function()
{if(!(this.jm_ao3xurQueue&&this.jm_ao3xurQueue.length))
return false;var jt_countDone=0;for(var i=0;i<this.jm_ao3xurQueue.length;i++)
{var jt_o3xXUR=this.jm_ao3xurQueue[i];if(jt_o3xXUR.jm_oDTStatus.IsOpen())
{jt_o3xXUR.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress);var jt_oUrl=jt_o3xXUR.Get_A3xaUrl(true);jg_oe.jm_oAjax2.QueueRequest(new A3xaAjaxRequest2(jt_oUrl.Get_UrlBase(),jt_oUrl.Get_UrlParams(),this));return true;}
else if(jt_o3xXUR.jm_oDTStatus.IsDone())
jt_countDone++;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("count==len:"+
jt_countDone+"=="+this.jm_ao3xurQueue.length,"","A3xaAppXUR.AjaxQueueQueryRequest");if(jt_countDone==this.jm_ao3xurQueue.length)
this.AjaxStoreNewTables();return true;}
this.OnAjaxReadyFn=function(ji_ogAjaxResponse)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("begin"+"","","A3xaAppXUR.OnAjaxReadyFn");var jt_xmlAjaxTypEntitySet=ji_ogAjaxResponse.Get_ItemElement(jc_gl.jc_oAjax.jc_sAjaxTypEntitySet);if(jt_xmlAjaxTypEntitySet)
{var jt_oxur=new A3xaXur();jt_oxur.Set_XURString(ji_ogAjaxResponse.Get_ItemValue("p3x"));jt_oxur.Set_XUDString(ji_ogAjaxResponse.Get_ItemValue("p3d"));var jt_glid=ji_ogAjaxResponse.Get_ItemValue("p_GLID");var jt_sGLRS=ji_ogAjaxResponse.Get_ItemValue("p_GL");var jt_sGLRS_AltIndex=ji_ogAjaxResponse.Get_ItemValue("p_GLX");var jt_glidEBID=ji_ogAjaxResponse.Get_ItemValue("p_GLIDEBID");var jt_sGLRSEBID=ji_ogAjaxResponse.Get_ItemValue("p_GLEBID");var jt_sGLRSEBID_AltIndex=ji_ogAjaxResponse.Get_ItemValue("p_GLXEBID");jg_oe.CanLogInfo()&&jg_oe.LogInfo("p3x.QUR,p3x.XEID,jt_sGLRS(p_GL)="+
jt_oxur.jm_QUR+","+jt_oxur.Get_3xXEID().Get_String()+","+jt_sGLRS,"","A3xaAppXUR.OnAjaxReadyFn");jg_oApp.WriteGLRS2(jt_glid,jt_sGLRS,jt_sGLRS_AltIndex);jg_oApp.WriteGLRS2(jt_glidEBID,jt_sGLRSEBID,jt_sGLRSEBID_AltIndex);var jt_qulen=(this.jm_ao3xurQueue?this.jm_ao3xurQueue.length:0);for(var i=0;i<jt_qulen;i++)
{var jt_o3xXUR=this.jm_ao3xurQueue[i];var jt_bQUR=(jt_o3xXUR.jm_QUR==jt_oxur.jm_QUR);var jt_bXEID=(jt_o3xXUR.Get_3xXEID().Matches(jt_oxur.Get_3xXEID(),false));var jt_bStInProgress=(jt_o3xXUR.jm_oDTStatus.jm_Status==jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StInProgress);jg_oe.CanLogInfo()&&jg_oe.LogInfo("jt_qulen;qur==qur;xeid==xeid;dtstatus:"+jt_qulen+";"+
jt_o3xXUR.jm_QUR+"=="+jt_oxur.jm_QUR+"?"+(jt_bQUR?"Y":"N")+";"+
jt_o3xXUR.Get_3xXEID().Get_String()+"=="+jt_oxur.Get_3xXEID().Get_String()+"?"+(jt_bXEID?"Y":"N")+";"+
jt_o3xXUR.jm_oDTStatus.Get_Descr2()+"?"+(jt_bStInProgress?"Y":"N")+";","","A3xaAppXUR.OnAjaxReadyFn");if(jt_bQUR&&jt_bXEID&&jt_bStInProgress)
{jt_o3xXUR.jm_oDTStatus.Set2(jc_gl.jc_oA3xaDbZero.jc_DTStatus2_StSuccess);jg_oe.CanLogInfo()&&jg_oe.LogInfo("jc_DTStatus2_StSuccess","","A3xaAppXUR.OnAjaxReadyFn");this.AjaxQueueQueryRequest();return true;}}}
return true;};this.AjaxStoreNewTables=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("begin=","","A3xaAppXUR.AjaxStoreNewTables");var jt_qulen=(this.jm_ao3xurQueue?this.jm_ao3xurQueue.length:0);var i=0;var jt_o3xXUR=this.jm_ao3xurQueue[i];this.jm_ao3xurQueue=new Array();this.Set_3xXUR(jt_o3xXUR);jg_oApp.ResetApp();jg_oApp.jm_oecp=null;jg_oApp.jm_odbLoaderManager=null;jg_oApp.Get_Database().ClearArrayDTLoad({jp_bTyp_ExtHeader:true});jg_oApp.Get_Database().ClearArrayDTLoad({jp_bTyp_Main:true});jg_oApp.Get_Database().ClearArrayDTLoad({jp_bTyp_TurboHeader:true});jg_oe.CanLogInfo()&&jg_oe.LogInfo("p2=","","A3xaAppXUR.AjaxStoreNewTables");jg_oApp.StoreData();jg_oe.CanLogInfo()&&jg_oe.LogInfo("end=","","A3xaAppXUR.AjaxStoreNewTables");return true;};this.OnChangeDD_QUR=function(ji_eDropDown)
{var jt_selIndex=ji_eDropDown.selectedIndex;var jt_selValue=ji_eDropDown.options[jt_selIndex].value.trim();if(jt_selValue)
{var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_ListEntity,null,null,null,null,null,null,jt_selValue);jt_oxur.LinkCommonData(jg_oe.Get_Database(),true);jt_oxur.Redirect();}
return true;};}
function A3xaEnvironment()
{A3xaAbsEnvironment.call(this);this.jm_oecp=null;this.jm_oAppXUR=null;this.Get_AppXUR=function(){return this.jm_oAppXUR;};}
function A3xaEntity_Html(ji_oxe,ji_o3xehf)
{var jt_this=this;this.jm_oxe=ji_oxe;this.jm_o3xehf=ji_o3xehf;this.IsValid=function()
{if(!(this.jm_oxe&&this.jm_oxe.IsValid()))
return false;if(!this.jm_o3xehf)
return false;return true;};this._Get_CellInfo=function(ji_Col)
{if(!jt_this.jm_o3xehf)
return null;var jr_oci={jm_Row:jt_this.jm_o3xehf.jm_Row,jm_Col:ji_Col,jm_o3xehc:null,qm_oCellH:null,qm_oCell:null};if(!(jr_oci.jm_Row>=1))
return null;if(!(jr_oci.jm_Col>=1&&jr_oci.jm_Col<=jc_gl.jc_oHtml.jc_Col_Last))
return null;jr_oci.jm_o3xehc=jt_this.jm_o3xehf.Get_Column(ji_Col);if(!jr_oci.jm_o3xehc)
return null;jr_oci.qm_oCellH=jr_oci.jm_o3xehc.Get_Elem(true);jr_oci.qm_oCell=jr_oci.jm_o3xehc.Get_Elem(false);if(!(jr_oci.qm_oCellH||jr_oci.qm_oCell))
return null;return jr_oci;};this.PrintHtml=function(ji_bHeader,ji_bLowPriority)
{var jt_oci=null;if(ji_bHeader)
{jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_IdTag);if(jt_oci)
{jt_oci.qm_oCellH.text("");this.PrintHtml_IdTagBox(jt_oci.qm_oCellH,jt_oci.jm_Row,jt_oci.jm_Col);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_LandIcons);if(jt_oci)
{jt_oci.qm_oCellH.text("");this.PrintHtml_LandBox(jt_oci.qm_oCellH,jt_oci.jm_Row,jt_oci.jm_Col,true,jc_gl.jc_oHtml.jc_Col_Identity);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_Identity);if(jt_oci)
{jt_oci.qm_oCellH.text("");this.PrintHtml_CategoryBox(jt_oci.qm_oCellH);jt_oci.qm_oCellH.append("&nbsp;");this.PrintHtml_NameBox(jt_oci.qm_oCellH);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_InfoIcons);if(jt_oci)
{}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_ControlIcons);if(jt_oci)
{jt_oci.qm_oCellH.text("");this.PrintHtml_IconsViewBox(jt_oci.qm_oCellH,jt_oci.jm_Row,jt_oci.jm_Col);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_AdminIcons);if(jt_oci)
{}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_Info);if(jt_oci)
{jt_oci.qm_oCellH.text("");this.PrintHtml_DescrBox(jt_oci.qm_oCellH);}
return true;}
if(!ji_bHeader&&!ji_bLowPriority)
{jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_IdTag);if(jt_oci&&jt_oci.qm_oCell)
{jt_oci.qm_oCell.text("");this.PrintHtml_IdTagBoxStatus(jt_oci.qm_oCell,jt_oci.jm_Row,jt_oci.jm_Col);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_LandIcons);if(jt_oci&&jt_oci.qm_oCell)
{jt_oci.qm_oCell.text("");this.PrintHtml_LandBox(jt_oci.qm_oCell,jt_oci.jm_Row,jt_oci.jm_Col,false,jc_gl.jc_oHtml.jc_Col_Identity);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_Identity);if(jt_oci&&jt_oci.qm_oCell)
{jt_oci.qm_oCell.text("");this.PrintHtml_IdentityBoxCP(jt_oci.qm_oCell,jt_oci.jm_Row,jt_oci.jm_Col);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_InfoIcons);if(jt_oci&&jt_oci.qm_oCell)
{jt_oci.qm_oCell.text("");this.PrintHtml_InfoIconsBox(jt_oci.qm_oCell,jt_oci.jm_Row,jt_oci.jm_Col);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_ControlIcons);if(jt_oci&&jt_oci.qm_oCell)
{jt_oci.qm_oCell.text("");this.PrintHtml_ControlIconsBox(jt_oci.qm_oCell,jt_oci.jm_Row,jt_oci.jm_Col);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_AdminIcons);if(jt_oci&&jt_oci.qm_oCell)
{jt_oci.qm_oCell.text("");this.PrintHtml_IconsAdminBox(jt_oci.qm_oCell,jt_oci.jm_Row,jt_oci.jm_Col);}
jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_Info);if(jt_oci&&jt_oci.qm_oCell)
{jt_oci.qm_oCell.text("");this.PrintHtml_SummaryBox(jt_oci.qm_oCell,jt_oci.jm_Row,jt_oci.jm_Col);}
return true;}
if(!ji_bHeader&&ji_bLowPriority)
{jt_oci=this._Get_CellInfo(jc_gl.jc_oHtml.jc_Col_Identity);if(jt_oci&&jt_oci.qm_oCell)
{this.PrintHtml_ImageBox(jt_oci.qm_oCell,jt_oci.jm_Row,jt_oci.jm_Col);}}
return true;};this.PrintHtml_IdentityBox=function(qi_oCell,ji_Row,ji_Col)
{return true;};this.PrintHtml_IdentityBoxCP=function(qi_oCell,ji_Row,ji_Col)
{return true;};this.PrintHtml_IdTagBox=function(qi_oCell,ji_Row,ji_Col)
{qi_oCell.append("<span style='' title='Position'>"+ji_Row+
(this.jm_oxe.Get_3xXEID().IsGroupMajor()?"":"*")+"</span>");return true;};this.PrintHtml_IdTagBoxStatus=function(qi_oCell,ji_Row,ji_Col)
{this.PrintHtml_Score(qi_oCell,ji_Row,ji_Col);this.PrintHtml_Clicks(qi_oCell,ji_Row,ji_Col);this.PrintHtml_Likes(qi_oCell,ji_Row,ji_Col);this.PrintHtml_Date(qi_oCell,ji_Row,ji_Col);return true;};this.PrintHtml_Score=function(qi_oCell,ji_Row,ji_Col)
{var jt_oebid=this.jm_oxe.Get_3xEBID();var qi_oDivScore=jQuery("<div>");qi_oDivScore.attr("id","score_"+this.jm_oxe.Get_3xXEID().Get_TypEntity()+"_"+
this.jm_oxe.Get_3xXEID().Get_IdEntity());qi_oDivScore.attr("title","Score");qi_oDivScore.text(""+parseInt(jt_oebid?jt_oebid.Get_Score():"?",10));qi_oCell.append(qi_oDivScore);return true;};this.PrintHtml_Clicks=function(qi_oCell,ji_Row,ji_Col)
{var jt_oebid=this.jm_oxe.Get_3xEBID();var qi_oDivClicks=jQuery("<div>");qi_oDivClicks.attr("id","clicks_"+this.jm_oxe.Get_3xXEID().Get_TypEntity()+"_"+
this.jm_oxe.Get_3xXEID().Get_IdEntity());qi_oDivClicks.attr("title","Clicks");qi_oDivClicks.text(jt_oebid?jt_oebid.Get_Clicks():"?");qi_oCell.append(qi_oDivClicks);return true;};this.PrintHtml_Likes=function(qi_oCell,ji_Row,ji_Col)
{var jt_oebid=this.jm_oxe.Get_3xEBID();var qi_oDivLikes=jQuery("<div>");qi_oDivLikes.attr("id","likes_"+this.jm_oxe.Get_3xXEID().Get_TypEntity()+"_"+
this.jm_oxe.Get_3xXEID().Get_IdEntity());qi_oDivLikes.attr("title","Likes");qi_oCell.append(qi_oDivLikes);var qi_oSpanLikes=jQuery("<span>");qi_oSpanLikes.attr("name","fans");qi_oSpanLikes.text(jt_oebid?jt_oebid.Get_LikesTotal():"?");qi_oDivLikes.append(qi_oSpanLikes);return true;};this.PrintHtml_Date=function(qi_oCell,ji_Row,ji_Col)
{var jt_o3xDate=new A3xaDateTime();jt_o3xDate.Set_DateTime(this.jm_oxe.Get_3xEBIS().Get_Created());if(jt_o3xDate.IsValid())
{var qi_oDivDate=jQuery("<div>");qi_oDivDate.attr("id","edate_"+this.jm_oxe.Get_3xXEID().Get_TypEntity()+"_"+
this.jm_oxe.Get_3xXEID().Get_IdEntity());qi_oDivDate.attr("title","Entry Date");qi_oDivDate.text(jt_o3xDate.Get_Date());qi_oCell.append(qi_oDivDate);}
return true;};this.PrintHtml_NameBox=function(qi_oCell)
{var qt_oParent=qi_oCell;var jt_obtnWebsite=new A3xaSimpleButton(null,null,this.jm_oxe.Get_3xEBIS().Get_Name(),null);jt_obtnWebsite.Set_Options(null,null,true,true,false);var jt_xTypEntity=this.jm_oxe.Get_3xXEID().Get_TypEntity();var jt_xIdEntity=this.jm_oxe.Get_3xXEID().Get_IdEntity();var jt_oUrlWebsite=new A3xaUrl(this.jm_oxe.Get_3xEBIS().Get_Website(),null);var jt_sUrlWebsite=jt_oUrlWebsite.Get_Url();if(jt_sUrlWebsite)
{var qt_oWebsite=jQuery("<a>",{href:jt_sUrlWebsite,title:this.jm_oxe.Get_3xEBIS().Get_Name(),target:'_blank'});if(qt_oWebsite&&qt_oWebsite.length)
{qt_oParent.append(qt_oWebsite);qt_oWebsite.click(function()
{return jg_oApp.OnClickEntity(jt_xTypEntity,jt_xIdEntity,'',0,'');});qt_oParent=null;qt_oParent=qt_oWebsite;}}
jt_obtnWebsite.PrintHtml(qt_oParent);return true;};this.PrintHtml_DescrBox=function(qi_oCell)
{var jt_sDescr=this.jm_oxe.Get_3xEBIS().Get_Descr();if(jt_sDescr)
qi_oCell.append("<span style='color: #C0C080; text-shadow: 1px 1px 0px #000000;'><strong>"+jt_sDescr+"</strong></span>");return true;};this.PrintHtml_SummaryBox=function(qi_oCell,ji_Row,ji_Col)
{var jt_aTypInfo=new Array(jc_gl.jc_oEntityInfo.jc_TI_QueryUnifiedRequest);for(var i=0;i<jt_aTypInfo.length;i++)
{var jt_aoeifa=this.jm_oxe.Get_Info(jt_aTypInfo[i],null);var jt_ogeiattr=new A3xaEntityInfo_Attributes(null,this.jm_oxe.Get_3xEBIS().Get_Name(),true,ji_Row,ji_Col,"",jg_oApp.Get_AppXUR().Get_3xXUR().jm_QUR);var jt_ogeiset=new A3xaEntityInfoSet(this.jm_oxe,jt_aoeifa,jt_ogeiattr);jt_ogeiset.PrintHtml(qi_oCell);}
this.PrintHtml_SummaryBoxCP(qi_oCell,ji_Row,ji_Col);var jt_aTypInfo=new Array(jc_gl.jc_oEntityInfo.jc_TI_Note);for(var i=0;i<jt_aTypInfo.length;i++)
{var jt_aoeifa=this.jm_oxe.Get_Info(jt_aTypInfo[i],null);var jt_ogeiattr=new A3xaEntityInfo_Attributes(null,this.jm_oxe.Get_3xEBIS().Get_Name(),true,ji_Row,ji_Col,"",jg_oApp.Get_AppXUR().Get_3xXUR().jm_QUR);var jt_ogeiset=new A3xaEntityInfoSet(this.jm_oxe,jt_aoeifa,jt_ogeiattr);jt_ogeiset.PrintHtml(qi_oCell);}
return true;};this.PrintHtml_SummaryBoxCP=function(qi_oCell,ji_Row,ji_Col)
{return true;};this.PrintHtml_GLMore=function(qi_oCell,ji_Row,ji_Col)
{var jt_ociPanel=new A3xaPanelControlIcons(null,-1,ji_Row,ji_Col,true,true);var jt_oBtnGLMore=jt_ociPanel.Get_Button("GLMore");jt_oBtnGLMore.PrintHtml(qi_oCell);return true;};this.PrintHtml_IconsViewBox=function(qi_oCell,ji_Row,ji_Col)
{this.PrintHtml_GLMore(qi_oCell,ji_Row,ji_Col);var jt_oxeidGroup=new A3xaXEID();jt_oxeidGroup.CopyFrom(this.jm_oxe);if(jt_oxeidGroup.IsGroupMinor())
jt_oxeidGroup.Set_IdEntity(jt_oxeidGroup.Get_IdGroup());var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_ListEntity,null,null,jc_gl.jc_oQUR.jc_QUR_QueryViewEntity,jt_oxeidGroup.Get_String(),jc_gl.jc_XURTG_Single,null,null);jt_oxur.LinkMainData(jg_oe.Get_Database());jt_oxur.LinkCommonData(jg_oe.Get_Database(),false);var jt_oButton=new A3xaSimpleButton(jc_gl.Get_UrlIconEntity(this.jm_oxe.Get_3xXEID().Get_TypEntity()),jt_oxur.Get_A3xaUrl(false,true),this.jm_oxe.Get_3xEBIS().Get_Name(),jc_gl.QUR_Get_Descr(jc_gl.jc_oQUR.jc_QUR_QueryViewEntity,jt_oxur.Get_3xXEID().Get_TypEntity()));jt_oButton.Set_Options(null,null,null,null,false,null,null);jt_oButton.PrintHtml(qi_oCell);return true;};this.PrintHtml_IconsAdmin_NewMajor=function(qi_oCell,ji_Row,ji_Col)
{return true;};this.PrintHtml_IconsAdminBox=function(qi_oCell,ji_Row,ji_Col)
{var jr_b=true;if(!jg_oe.jm_bCanEdit)
return jr_b;if(!this.PrintHtml_IconsAdmin_NewMajor(qi_oCell,ji_Row,ji_Col))
jr_b=false;if(!this.PrintHtml_IconAdmin(qi_oCell,jc_gl.jc_oQUR.jc_QUR_QueryNewEntity,true))
jr_b=false;if(!this.PrintHtml_IconAdmin(qi_oCell,jc_gl.jc_oQUR.jc_QUR_QueryEditEntity,false))
jr_b=false;if(!this.PrintHtml_IconAdmin(qi_oCell,jc_gl.jc_oQUR.jc_QUR_QueryDeleteEntity,false))
jr_b=false;if(!this.PrintHtml_IconInfoAdmin(qi_oCell,jc_gl.jc_oQUR.jc_QUR_QueryNewEntity,null))
jr_b=false;if(!this.PrintHtml_IconInfoAdmin(qi_oCell,jc_gl.jc_oQUR.jc_QUR_QueryEditEntity,null))
jr_b=false;return jr_b;};this.PrintHtml_IconAdmin=function(qi_oCell,ji_QUR,ji_bSecundary)
{if(ji_QUR==jc_gl.jc_oQUR.jc_QUR_QueryNewEntity&&ji_bSecundary&&(!this.jm_oxe.Get_3xXEID().IsGroupMajor()))
return false;var jt_oUrlLink=A3xaEntity_MakeUrl_Edit_Params2(jc_gl.jc_XURFN_EditEntity,ji_QUR,this.jm_oxe.Get_3xXEID(),ji_QUR==jc_gl.jc_oQUR.jc_QUR_QueryNewEntity?ji_bSecundary:null,jg_oe.jm_Itemid);if(!jt_oUrlLink)
return false;var jt_ohButton=new A3xaSimpleButton(jc_gl.Get_UrlIconEntityAdmin(ji_QUR,ji_bSecundary),jt_oUrlLink,this.jm_oxe.Get_3xEBIS().Get_Name(),jc_gl.QUR_Get_Descr(ji_QUR,this.jm_oxe.Get_3xXEID().Get_TypEntity()));jt_ohButton.PrintHtml(qi_oCell);return true;};this.PrintHtml_IconInfoAdmin=function(qi_oCell,ji_QUR,ji_IdFieldInfo)
{var jt_oUrlLink=A3xaEntity_MakeUrl_EditInfo_Params(jc_gl.jc_XURFN_EditEntityInfo,ji_QUR,ji_IdFieldInfo,this.jm_oxe.Get_3xXEID().Get_TypEntity(),this.jm_oxe.Get_3xXEID().Get_IdEntity(),jg_oe.jm_Itemid);if(!jt_oUrlLink)
return false;var jt_ohButton=new A3xaSimpleButton(jc_gl.Get_UrlIconEntityInfoAdmin(ji_QUR,null),jt_oUrlLink,this.jm_oxe.Get_3xEBIS().Get_Name(),jc_gl.QUR_Get_Descr(ji_QUR,this.jm_oxe.Get_3xXEID().Get_TypEntity()));jt_ohButton.PrintHtml(qi_oCell);return true;};this.PrintHtml_LandBox=function(qi_oCell,ji_Row,ji_Col,ji_bCountryFlag,ji_ColImages)
{var jt_oglmLand=new GLMgrLand();if(ji_bCountryFlag)
{jt_oglmLand.PrintHtml_FlagGeoCountry(qi_oCell,this.jm_oxe);return true;}
jt_oglmLand.PrintHtml_FlagGeoState(qi_oCell,this.jm_oxe);jt_oglmLand.PrintHtml_FlagGeoRegion(qi_oCell,this.jm_oxe);jt_oglmLand.PrintHtml_IconGeoCity(qi_oCell,this.jm_oxe);var jt_ocpLand=new A3xaPanelLandIcons3(null,-1,ji_Row,ji_Col,true,ji_ColImages);jt_ocpLand.PrintHtml_Buttons(qi_oCell);jt_oglmLand.PrintHtml_IconMap(qi_oCell,this.jm_oxe,ji_Row,ji_Col);return true;};this.PrintHtml_CategoryBox=function(qi_oCell)
{var jt_oglmCat=new GLMgrCategory(jg_oe.Get_Database().Get_MainDataTable(),jg_oe.jm_Itemid);jt_oglmCat.PrintHtml_Icon(qi_oCell,this.jm_oxe);return true;};this.PrintHtml_ImageBox=function(qi_oCell,ji_Row,ji_Col)
{var jt_oglrCategory=this.jm_oxe.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_Category);var jt_oglrGeoArea=this.jm_oxe.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoArea);var jt_oglrGeoRegion=this.jm_oxe.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoRegion);var jt_sUrlWebsite="";if(!jt_sUrlWebsite&&this.jm_oxe)
jt_sUrlWebsite=this.jm_oxe.Get_3xEBIS().Get_Website();if(!jt_sUrlWebsite&&jt_oglrGeoRegion)
jt_sUrlWebsite=jt_oglrGeoRegion.Get_3xEBIS().Get_Website();if(!jt_sUrlWebsite&&jt_oglrGeoArea)
jt_sUrlWebsite=jt_oglrGeoArea.Get_3xEBIS().Get_Website();var qt_oParent=qi_oCell;var jt_xTypEntity=this.jm_oxe.Get_3xXEID().Get_TypEntity();var jt_xIdEntity=this.jm_oxe.Get_3xXEID().Get_IdEntity();if(jt_sUrlWebsite)
{var qt_oWebsite=jQuery("<a>",{href:jt_sUrlWebsite,title:'Website',target:'_blank'});if(qt_oWebsite&&qt_oWebsite.length)
{qt_oParent.append(qt_oWebsite);qt_oWebsite.click(function()
{return jg_oApp.OnClickEntity(jt_xTypEntity,jt_xIdEntity,jc_gl.jc_oEntityInfo.jc_TI_Image,0,'');});qt_oParent=null;qt_oParent=qt_oWebsite;}}
var jt_ogeiattrCommon=new A3xaEntityInfo_Attributes(null,this.jm_oxe.Get_3xEBIS().Get_Name(),true,ji_Row,ji_Col,null);var jt_aoeifaMain=this.jm_oxe.Get_Info(jc_gl.jc_oEntityInfo.jc_TI_Image,null);var jt_ogeiset=new A3xaEntityInfoSet(this.jm_oxe,jt_aoeifaMain,jt_ogeiattrCommon);jt_ogeiset.PrintHtml(qt_oParent);if(jt_oglrGeoRegion)
{var jt_aoeifaGeoRegion=jt_oglrGeoRegion.Get_Info(jc_gl.jc_oEntityInfo.jc_TI_Image,null);var jt_ogeisetGeoRegion=new A3xaEntityInfoSet(jt_oglrGeoRegion,jt_aoeifaGeoRegion,jt_ogeiattrCommon);jt_ogeisetGeoRegion.PrintHtml(qt_oParent);}
if(jt_oglrGeoArea)
{var jt_aoeifaGeoArea=jt_oglrGeoArea.Get_Info(jc_gl.jc_oEntityInfo.jc_TI_Image,null);var jt_ogeisetGeoArea=new A3xaEntityInfoSet(jt_oglrGeoArea,jt_aoeifaGeoArea,jt_ogeiattrCommon);jt_ogeisetGeoArea.PrintHtml(qt_oParent);}
var jt_oCPLandButtonStatus={jm_Value:null};var jt_ocpLand=new A3xaPanelLandIcons3(null,-1,ji_Row,jc_gl.jc_oHtml.jc_Col_LandIcons,true,ji_Col);jt_ocpLand.InitButtonsStatus(jt_oCPLandButtonStatus.jm_Value);return true;};this.PrintHtml_InfoIconsBox=function(qi_oCell,ji_Row,ji_Col)
{var jt_aTypInfo=new Array(jc_gl.jc_oEntityInfo.jc_TI_Website,jc_gl.jc_oEntityInfo.jc_TI_Facebook,jc_gl.jc_oEntityInfo.jc_TI_Person,jc_gl.jc_oEntityInfo.jc_TI_Gallery,jc_gl.jc_oEntityInfo.jc_TI_A3xaGallery,jc_gl.jc_oEntityInfo.jc_TI_Video,jc_gl.jc_oEntityInfo.jc_TI_Twitter,jc_gl.jc_oEntityInfo.jc_TI_GooglePlus,jc_gl.jc_oEntityInfo.jc_TI_Phone,jc_gl.jc_oEntityInfo.jc_TI_Skype,jc_gl.jc_oEntityInfo.jc_TI_Email,jc_gl.jc_oEntityInfo.jc_TI_Wiki,jc_gl.jc_oEntityInfo.jc_TI_WaterCloset);for(var i=0;i<jt_aTypInfo.length;i++)
{var jt_aoeifa=this.jm_oxe.Get_Info(jt_aTypInfo[i],null);var jt_ogeiattr=new A3xaEntityInfo_Attributes(null,this.jm_oxe.Get_3xEBIS().Get_Name(),true,ji_Row,ji_Col);jg_oe.CanLogInfo()&&jg_oe.LogInfo("jt_aoeifa: "+
(jt_aoeifa?"OK":"null"),"","A3xaEntity_PrintHtml_InfoIconsBox");var jt_ogeiset=new A3xaEntityInfoSet(this.jm_oxe,jt_aoeifa,jt_ogeiattr);jt_ogeiset.PrintHtml(qi_oCell);}
return true;};this.PrintHtml_ControlIconsBox=function(qi_oCell,ji_Row,ji_Col)
{var jt_bBtnLikes=true;if(jt_bBtnLikes)
{var jt_ohBtnLikes=new A3xaEntityButton2("Like",-1,ji_Row,ji_Col,null);var jt_oAjaxUrlParams=null;var jt_sfn="";if(jg_oe.jm_bCanLike)
{jt_sfn="jg_oPanelControlIcons_Builder.OnClick";var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_AjaxEntity,null,jc_gl.jc_oAjax.jc_sAjaxTypFans,null,this.jm_oxe.Get_3xXEID().Get_String(),null,null,null);jt_oAjaxUrlParams=jt_oxur.Get_A3xaUrl(true);jt_oAjaxUrlParams.Add_UrlParam2("p_TypRelation","F");jt_oAjaxUrlParams.Add_UrlParam2("p_Op","I");jt_oAjaxUrlParams.Add_UrlParam2("p_Rating","0");}
jt_ohBtnLikes.Set_SrcInfo(jc_gl.MakeUrlIcon_UserControls(jc_gl.jc_oIcons.jc_sIconPrefixCtrl_Like,false),"Me gusta","Like",jt_sfn,-1,jt_oAjaxUrlParams?jt_oAjaxUrlParams.Get_UrlParams():"");var qi_oDivLikes=jQuery("<div>");qi_oDivLikes.attr("id","btnlikes_"+this.jm_oxe.Get_3xXEID().Get_TypEntity()+"_"+
this.jm_oxe.Get_3xXEID().Get_IdEntity());qi_oCell.append(qi_oDivLikes);jt_ohBtnLikes.PrintHtml(qi_oDivLikes);}
this.PrintHtml_ControlIconsBoxCP(qi_oCell,ji_Row,ji_Col);return true;};this.PrintHtml_ControlIconsBoxCP=function(qi_oCell,ji_Row,ji_Col)
{return true;};this.OnClick=function(ji_TypEntity,ji_IdEntity,ji_TypInfo,ji_IdInfo,ji_CodInfo)
{var jt_oxeid=new A3xaDCEntity();jt_oxeid.Get_3xXEID().Set_GEID(ji_TypEntity,ji_IdEntity,null,null);var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_AjaxEntity,null,jc_gl.jc_oAjax.jc_sAjaxTypEntity,jc_gl.jc_oQUR.jc_QUR_UpdateEntity,jt_oxeid.Get_3xXEID().Get_String(),null,null,null);var jt_oUrl=jt_oxur.Get_A3xaUrl(true);var jt_sAjaxUrlParams=jt_oUrl.Get_UrlParams();jt_sAjaxUrlParams+="&p_TypInfo="+ji_TypInfo+"&p_IdInfo="+ji_IdInfo+"&p_CodInfo="+ji_CodInfo+"&p_Op="+jc_gl.jc_oAjax.jc_AjaxOp_WriteDelta+"&p_Field=Clicks"+"&p_Value=1";jg_oe.jm_oAjax2.QueueRequest(new A3xaAjaxRequest2(jt_oUrl.Get_UrlBase(),jt_sAjaxUrlParams,this));return true;};this.OnAjaxReadyFn=function(ji_ogAjaxResponse)
{var jt_xmlAjaxTypEntity=ji_ogAjaxResponse.Get_ItemElement(jc_gl.jc_oAjax.jc_sAjaxTypEntity);if(jt_xmlAjaxTypEntity)
{var jt_oxur=new A3xaXur();jt_oxur.Set_XURString(ji_ogAjaxResponse.Get_ItemValue("p3x"));jt_oxur.Set_XUDString(ji_ogAjaxResponse.Get_ItemValue("p3d"));var jt_TypEntity=jt_oxur.Get_3xXEID().Get_TypEntity();var jt_IdEntity=jt_oxur.Get_3xXEID().Get_IdEntity();var jt_TypInfo=ji_ogAjaxResponse.Get_ItemValue("TypInfo");var jt_IdInfo=ji_ogAjaxResponse.Get_ItemValue("IdInfo");var jt_CodInfo=ji_ogAjaxResponse.Get_ItemValue("CodInfo");var jt_Field=ji_ogAjaxResponse.Get_ItemValue("Field");var jt_Value=ji_ogAjaxResponse.Get_ItemValue("Value");if(jt_TypEntity&&jt_IdEntity&&jt_Field=="Clicks")
{var jt_Score=ji_ogAjaxResponse.Get_ItemValue("Score");var qt_oCounter=jQuery("#clicks_"+jt_TypEntity+"_"+jt_IdEntity);if(qt_oCounter&&qt_oCounter.length)
{qt_oCounter.html(jt_Value);}
var qt_oScore=jQuery("#score_"+jt_TypEntity+"_"+jt_IdEntity);if(qt_oScore&&qt_oScore.length)
{qt_oScore.html(jt_Score);}}}
return true;};}
function A3xaEntity_MakeUrl_Edit_Params2(ji_FormEvent,ji_QUR,ji_ogle,ji_bSecundary,ji_Itemid)
{if(!ji_FormEvent||!ji_QUR)
return null;if(ji_QUR!=jc_gl.jc_oQUR.jc_QUR_QueryNewEntity&&ji_QUR!=jc_gl.jc_oQUR.jc_QUR_QueryEditEntity&&ji_QUR!=jc_gl.jc_oQUR.jc_QUR_QueryDeleteEntity)
return null;var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(ji_FormEvent,null,null,ji_QUR,ji_ogle.Get_3xXEID().Get_String(),null,ji_bSecundary?jc_gl.jc_XURTG_Secundary:jc_gl.jc_XURTG_Master,null);return jt_oxur.Get_A3xaUrl();}
function A3xaEntity_MakeUrl_EditInfo_Params(ji_FormEvent,ji_QUR,ji_IdFieldInfo,ji_TypEntity,ji_IdEntity,ji_Itemid)
{if(!ji_FormEvent||!ji_QUR)
return null;if(ji_QUR!=jc_gl.jc_oQUR.jc_QUR_QueryNewEntity&&ji_QUR!=jc_gl.jc_oQUR.jc_QUR_QueryEditEntity&&ji_QUR!=jc_gl.jc_oQUR.jc_QUR_QueryDeleteEntity)
return null;var jt_oxeid=new A3xaDCEntity();jt_oxeid.Get_3xXEID().Set_GEID(ji_TypEntity,ji_IdEntity,null,null);var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(ji_FormEvent,null,null,ji_QUR,jt_oxeid.Get_3xXEID().Get_String(),null,null,null);var jr_oUrlLink=jt_oxur.Get_A3xaUrl(false);if(ji_IdFieldInfo>0)
jr_oUrlLink.Add_UrlParam2("p_IdFieldInfo",ji_IdFieldInfo);return jr_oUrlLink;}
function GLMgrCategory(ji_bShowLabel)
{this.jm_o3xmcr=new A3xaMgrCategory_Request(ji_bShowLabel);this.Get_MgrRequestCategory=function(){return this.jm_o3xmcr;};this.jm_o3xmcs=new A3xaMgrCategory_Select(ji_bShowLabel);this.Get_MgrSelectCategory=function(){return this.jm_o3xmcs;};this.PrintHtml_Icon=function(qi_oParent,ji_oglrMain)
{if(!(qi_oParent&&qi_oParent.length&&ji_oglrMain))
return false;var jt_oglrCategory=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_Category);if(!jt_oglrCategory)
return false;var jt_o3xcat=ji_oglrMain.Get_3xXEID().Get_3xCat();if(jt_o3xcat.IsEmpty()||!jt_oglrCategory.Get_3xEBIS().Get_Descr())
return false;var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_ListEntity,null,null,jc_gl.jc_oQUR.jc_QUR_QueryViewEntity,jt_oglrCategory.Get_3xXEID().Get_String(),jc_gl.jc_XURTG_Single,"",null);var jt_o3xcat_xapp=new A3xaCategoryCode_XApp(jt_o3xcat);var jt_ohButton=new A3xaSimpleButton(jt_o3xcat_xapp.Get_UrlIcon(),jt_oxur.Get_A3xaUrl(),jt_oglrCategory.Get_3xEBIS().Get_Name(),jt_o3xcat.Get_Code());jt_ohButton.Set_Options(null,null,true,true,false);if(!jt_ohButton.PrintHtml(qi_oParent))
return false;return true;};}
function A3xaDDItemCategory(ji_sValue,ji_sDescr)
{A3xaDDItem.call(this,ji_sValue,ji_sDescr);this.jm_Order=null;this.Get_Order=function(){return this.jm_Order;};this.Set_Order=function(ji_Order){this.jm_Order=ji_Order;return true;};this.ValueMatch=function(ji_s)
{if(!ji_s)
return!this.jm_sValue;if(this.jm_sValue==ji_s)
return true;var jt_o3xcatl=new A3xaCategoryList(this.jm_sValue);var jt_o3xcat=new A3xaCategoryCode();jt_o3xcat.Set_String(ji_s,"-");return jt_o3xcatl.Match(jt_o3xcat);};this.Add_Category=function(ji_oglr,ji_oxeidLandFilter,ji_ogldtCategory)
{if(!ji_oglr)
return false;if(!(this.jm_TreeLevel==1))
return false;var jt_te=ji_oglr.Get_3xXEID().Get_TypEntity();if(ji_oglr.Get_3xXEID().Get_3xCat().IsEmpty())
{jg_oe.LogErr("Fail","3xCat().IsEmpty","A3xaDDItemCategory.Add_Category");return false;}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Typ,Cat: "+jt_te+","+ji_oglr.Get_3xXEID().Get_3xCat().Get_String("-"),"","A3xaDDItemCategory.Add_Category");if(jt_te==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Skip MSC: ","","A3xaDDItemCategory.Add_Category");return true;}
var jt_oglrCategory=ji_ogldtCategory.Get_GLRecord(ji_ogldtCategory.AltKey_2_PrimaryKey(ji_ogldtCategory.BuildAltKey(ji_oglr)));if(!jt_oglrCategory)
{var jt_AltKey=ji_ogldtCategory.BuildAltKey(ji_oglr);var jt_Key=ji_ogldtCategory.AltKey_2_PrimaryKey(jt_AltKey);jg_oe.LogErr("Fail","jt_oglrCategory:K,AltK="+jt_Key+","+jt_AltKey,"A3xaDDItemCategory.Add_Category");return false;}
var jt_oglrCategoryGroup=ji_ogldtCategory.Find(function(ji_oglrCatCur)
{if(ji_oglrCatCur.Get_3xXEID().Get_3xCat().Get_Vcat())
return false;if(ji_oglrCatCur.Get_3xXEID().Get_3xCat().Get_Ucat()==jt_oglrCategory.Get_3xXEID().Get_3xCat().Get_Ucat())
return true;return false;});if(!jt_oglrCategoryGroup)
{jg_oe.LogErr("Fail","jt_oglrCategoryGroup","A3xaDDItemCategory.Add_Category");return false;}
var jt_sCat=jt_oglrCategory.Get_3xXEID().Get_3xCat().Get_String("-");var jt_sCatGroup=jt_oglrCategoryGroup.Get_3xXEID().Get_3xCat().Get_String("-");var jt_bRestricted=false;if(ji_oxeidLandFilter)
{var jt_odce=new A3xaDCEntity();jt_odce.Get_3xXEID().CopyFrom(ji_oglr);jt_odce.Get_3xXEID().Clear_GEID();jt_odce.Get_3xXEID().Get_3xCat().Clear();var jt_bMatchesLand=jt_odce.Get_3xXEID().Matches(ji_oxeidLandFilter,true);jt_bRestricted=!jt_bMatchesLand;jg_oe.CanLogInfo()&&jg_oe.LogInfo("MatchLand:"+
(jt_bMatchesLand?"Y,":"N,")+"CurEntity="+ji_oglr.Get_3xXEID().Get_String()+",Filter="+(ji_oxeidLandFilter?ji_oxeidLandFilter.Get_String():"null"),"","A3xaDDItemCategory.Add_Category");}
var jt_oddig=this.Get_Child(jt_sCatGroup);if(!jt_oddig)
{jt_oddig=new A3xaDDItemCategory();jt_oddig.Set_Key(jt_sCatGroup);jt_oddig.Set_Value(jt_sCatGroup);jt_oddig.Set_Descr(jt_oglrCategoryGroup.Get_3xEBIS().Get_Descr());jt_oddig.Set_Order(jt_oglrCategoryGroup.Get_3xEBIS().Get_Order());this.Add_Child(jt_oddig);}
var jt_oddie=jt_oddig.Get_Child(jt_sCat);if(!jt_oddie)
{jt_oddie=new A3xaDDItemCategory();jt_oddie.Set_Key(jt_sCat);jt_oddie.Set_Value(jt_sCat);jt_oddie.Set_Descr(jt_oglrCategory.Get_3xEBIS().Get_Descr());jt_oddie.Set_Order(jt_oglrCategory.Get_3xEBIS().Get_Order());jt_oddig.Set_Value(jt_oddig.Get_Value()+","+jt_sCat);jt_oddig.Add_Child(jt_oddie);}
jt_oddie.IncrementCounters(!jt_bRestricted);jt_oddig.IncrementCounters(!jt_bRestricted);this.IncrementCounters(!jt_bRestricted);return true;};}
function A3xaMgrCategory_Select(ji_bShowLabel)
{this.jm_oDDCategoryCodeFilter=null;this.jm_oDDPairLandFilter=null;this.jm_oddiCategory=new A3xaDDItem();this.jm_oddboxCategory=new A3xaDDSelectBox(null,"Filter_Category",ji_bShowLabel?"Destacar":"");this.jm_oddboxCategory.NewDDItem=function(){return new A3xaDDItemCategory();};this.jm_oddboxCategory.OnChange=function(ji_eddbox,ji_oddi)
{return jg_oApp.jm_oecp.OnChangeDD_Category(ji_eddbox,ji_oddi);};this.jm_oddboxCategory.Set_ColorsBGHL(["FF6080","FF80A0","FFC0E0"]);this._CompareEntityOrder=function(ji_oddi_a,ji_oddi_b)
{var jt_1=1;if(!(ji_oddi_a&&ji_oddi_b))
return 0;var jt_delta=Number(ji_oddi_a.Get_Order())-Number(ji_oddi_b.Get_Order());if(jt_delta>0)
return jt_1;if(jt_delta<0)
return-jt_1;return 0;};this.PrintHtmlDD=function(qi_oParent)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","GLMgrCategory.PrintHtmlDD");return this.jm_oddboxCategory.PrintHtml(qi_oParent);};this.RefreshHtmlDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("CategoryFilter:"+
(ji_oDDCategoryCodeFilter?ji_oDDCategoryCodeFilter.Get_DDValue():"null"),"","GLMgrCategory.RefreshHtmlDD");this.jm_oddboxCategory.jm_sKeySelected=(ji_oDDCategoryCodeFilter?ji_oDDCategoryCodeFilter.Get_Key():null);return this.jm_oddboxCategory.Refresh();};this.LoadDataDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","GLMgrCategory.LoadDataDD");this.jm_oDDCategoryCodeFilter=ji_oDDCategoryCodeFilter;this.jm_oDDPairLandFilter=ji_oDDPairLandFilter;var jt_odb=jg_oe.Get_Database();if(!jt_odb)
return false;var jt_ogldtMain=jt_odb.Get_MainDataTable();if(!jt_ogldtMain)
return false;var jt_ogldtCategory=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Category);if(!jt_ogldtCategory)
{jg_oe.LogErr("Fail","jt_ogldtCategory","A3xaMgrCategory_Select.LoadDataDD");return false;}
var jt_oxeidLandFilter=null;if(ji_oDDPairLandFilter)
{var jt_oxeid=new A3xaDCEntity();jt_oxeid.Get_3xXEID().Set_String(ji_oDDPairLandFilter.Get_Key());jt_oxeidLandFilter=jt_oxeid.Get_3xXEID();}
var jt_oddiCategory=new A3xaDDItemCategory();jt_oddiCategory.Set_Descr("*** TODOS ***");var jt_nOfRows=jt_ogldtMain.jm_aoglr.Get_Count();for(var i=0;i<jt_nOfRows;i++)
{var jt_oglr=jt_ogldtMain.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oddiCategory.Add_Category(jt_oglr,jt_oxeidLandFilter,jt_ogldtCategory))
{jg_oe.LogErr("Fail","jt_oddiCategory.Add_Category","A3xaMgrCategory_Select.LoadDataDD");return false;}}
jt_oddiCategory.Sort_Children(this._CompareEntityOrder,true);if(jt_nOfRows>jc_gl.jc_oHtml.jc_MaxViewRows)
{jt_oddiCategory.jm_bVisible=false;var jt_oddi1stGroup=jt_oddiCategory.Get_Child_ByIndex(0);if(jt_oddi1stGroup)
this.jm_oddboxCategory.jm_sKeySelected=jt_oddi1stGroup.Get_Key();if(!jg_oApp.jm_oecp.jm_oDDCategoryCode)
jg_oApp.jm_oecp.jm_oDDCategoryCode=jt_oddi1stGroup;}
else
{this.jm_oddboxCategory.jm_sKeySelected=jt_oddiCategory.Get_Key();}
this.jm_oddiCategory=jt_oddiCategory;this.jm_oddboxCategory.jm_oddiRoot=this.jm_oddiCategory;return true;};}
function A3xaDDItemRequestCategory(ji_sKey,ji_sDescr)
{A3xaDDItem.call(this,ji_sKey,ji_sDescr);this.jm_Order=null;this.Get_Order=function(){return this.jm_Order;};this.Set_Order=function(ji_Order){this.jm_Order=ji_Order;return true;};this.ValueMatch=function(ji_s)
{if(!ji_s)
return!this.jm_sValue;if(this.jm_sValue==ji_s)
return true;var jt_o3xcatl=new A3xaCategoryList(this.jm_sValue);var jt_o3xcat=new A3xaCategoryCode();jt_o3xcat.Set_String(ji_s,"-");return jt_o3xcatl.Match(jt_o3xcat);};this.Set_ValueXUR=function(ji_odc)
{var jt_oxur=this._MakeXUR(ji_odc);this.Set_Value(jt_oxur?"p3x="+jt_oxur.Get_XURString():"");return true;};this.Add_CategoryGroup=function(ji_oglr)
{if(!ji_oglr)
return false;if(!(this.jm_TreeLevel==1))
return false;var jt_o3xcat_xapp=new A3xaCategoryCode_XApp(ji_oglr.Get_3xXEID());var jt_te=ji_oglr.Get_3xXEID().Get_TypEntity();var jt_oxur=jg_oApp.Get_AppXUR().Get_3xXUR();var jt_TypGeo=jt_o3xcat_xapp.ToTypGeo();if(jt_o3xcat_xapp.IsGroup_Metasystem()||jt_o3xcat_xapp.IsGroup_Category()||jt_o3xcat_xapp.IsGroup_Topic()||(jt_o3xcat_xapp.IsGroup_Geo()&&jt_oxur&&New_A3xaAZNC_XApp(jt_oxur.Get_3xXEID()).IsBestFromBabylon()))
return false;if(!jt_o3xcat_xapp.IsGroup_Geo()&&jt_oxur&&jt_oxur.Get_3xXEID().Get_3xAZNC().Get_N())
return false;jt_sCatGroup=ji_oglr.Get_3xXEID().Get_3xCat().Get_String("-");var jt_oddig=this.Get_Child(jt_sCatGroup);if(!jt_oddig)
{jt_oddig=new A3xaDDItemRequestCategory();jt_oddig.Set_Key(jt_sCatGroup);jt_oddig.Set_Value(jt_sCatGroup);jt_oddig.Set_Descr(ji_oglr.Get_3xEBIS().Get_Descr());jt_oddig.jm_bOnChange=false;jt_oddig.Set_Order(ji_oglr.Get_3xEBIS().Get_Order());this.Add_Child(jt_oddig);}
jt_oddig.IncrementCounters(false);return true;};this.Add_Category=function(ji_oglr,ji_ogldtCategory)
{if(!ji_oglr)
return false;if(!(this.jm_TreeLevel==1))
return false;var jt_te=ji_oglr.Get_3xXEID().Get_TypEntity();jt_sCat=ji_oglr.Get_3xXEID().Get_3xCat().Get_String("-");var jt_oxur=jg_oApp.Get_AppXUR().Get_3xXUR();var jt_o3xcat_xapp=new A3xaCategoryCode_XApp(ji_oglr.Get_3xXEID());var jt_TypGeo=jt_o3xcat_xapp.ToTypGeo();if(jt_TypGeo)
{var jt_xA=jt_oxur.Get_3xXEID().Get_3xAZNC().Get_A();var jt_xZ=jt_oxur.Get_3xXEID().Get_3xAZNC().Get_Z();var jt_xN=jt_oxur.Get_3xXEID().Get_3xAZNC().Get_N();var jt_xC=jt_oxur.Get_3xXEID().Get_3xAZNC().Get_C();var jt_xP=jt_oxur.Get_3xXEID().Get_3xPS().Get_P();var jt_xS=jt_oxur.Get_3xXEID().Get_3xPS().Get_S();var jt_xV_cat=ji_oglr.Get_3xXEID().Get_3xCat().Get_Vcat();var jt_xte=jt_oxur.Get_3xXEID().Get_TypEntity();var jt_xWholeCountry=(jt_xZ>="3"&&jt_xZ<="9");var jt_xWholeArea=(jt_xZ>="1"&&jt_xZ<="2");var jt_xWholeAC=(jt_xWholeArea||jt_xWholeCountry);if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoArea)
{if(jt_xA||jt_xS)
return false;}
else if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoCountry)
{if(jt_xA||jt_xP)
return false;}
else if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoCity)
{if(!jt_xN||jt_xC)
return false;}
else if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoRegion)
{if(jt_xV_cat!=jc_gl.jc_oEntity.jc_VCat_Geo_Region)
return false;if(!jt_xZ)
return false;if(jt_xWholeAC)
return false;if(jt_xN)
return false;}
else if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoState)
{if(jt_xV_cat!=jc_gl.jc_oEntity.jc_VCat_Geo_State)
return false;if(!jt_xP)
return false;if((jt_xS||jt_xC)&&jt_xte!=jc_gl.jc_oEntity.jc_Typ_GeoCountry)
return false;}}
else
{}
var jt_oglrCategoryGroup=ji_ogldtCategory.Find(function(ji_oglrCatCur)
{if(ji_oglrCatCur.Get_3xXEID().Get_3xCat().Get_Vcat())
return false;if(ji_oglrCatCur.Get_3xXEID().Get_3xCat().Get_Ucat()==ji_oglr.Get_3xXEID().Get_3xCat().Get_Ucat())
return true;return false;});if(!jt_oglrCategoryGroup)
return false;jt_sCatGroup=jt_oglrCategoryGroup.Get_3xXEID().Get_3xCat().Get_String("-");var jt_oddig=this.Get_Child(jt_sCatGroup);if(!jt_oddig)
return false;var jt_oddie=jt_oddig.Get_Child(jt_sCat);if(!jt_oddie)
{jt_oddie=new A3xaDDItemRequestCategory();jt_oddie.Set_Key(jt_sCat);jt_oddie.Set_ValueXUR(ji_oglr);jt_oddie.Set_Descr(ji_oglr.Get_3xEBIS().Get_Descr());jt_oddie.Set_Order(ji_oglr.Get_3xEBIS().Get_Order());jt_oddig.Set_Value(jt_oddig.Get_Value()+","+jt_sCat);jt_oddig.Add_Child(jt_oddie);}
jt_oddie.IncrementCounters(true);jt_oddig.IncrementCounters(false);this.IncrementCounters(true);return true;};this._MakeXUR=function(ji_odc)
{var jr_oxur=new A3xaXur();jr_oxur.CopyFromXUR(jg_oApp.Get_AppXUR().Get_3xXUR());if(ji_odc)
jr_oxur.Get_3xXEID().Get_3xCat().CopyFrom(ji_odc.Get_3xXEID());else
jr_oxur.Get_3xXEID().Get_3xCat().Clear();var jt_o3xcat_xapp=new A3xaCategoryCode_XApp(jr_oxur.Get_3xXEID());var jt_TypGeo=jt_o3xcat_xapp.ToTypGeo();if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoArea)
{jr_oxur.Get_3xXEID().Set_GEID(jt_TypGeo,null,null,null);jr_oxur.Get_3xXEID().Get_3xAZNC().Clear();jr_oxur.Get_3xXEID().Get_3xPS().Clear();jr_oxur.MakeQUR(true,false);jr_oxur.jm_Single=jc_gl.jc_XURTG_Multiple;jr_oxur.jm_SubEntity=jc_gl.jc_XURTG_Master;}
else if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoRegion)
{if(!jr_oxur.Get_3xXEID().Get_3xAZNC().Get_Z()||New_A3xaAZNC_XApp(jr_oxur.Get_3xXEID()).IsBestFromBabylon())
return null;jr_oxur.Get_3xXEID().Get_3xCat().Clear();jr_oxur.Get_3xXEID().Set_GEID(jt_TypGeo,null,null,null);jr_oxur.Get_3xXEID().Get_3xAZNC().Clear_NC();jr_oxur.Get_3xXEID().Get_3xPS().Clear();jr_oxur.MakeQUR(true,false);jr_oxur.jm_Single=jc_gl.jc_XURTG_Multiple;jr_oxur.jm_SubEntity=jc_gl.jc_XURTG_Master;}
else if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoCity)
{if(!jr_oxur.Get_3xXEID().Get_3xAZNC().Get_Z()||New_A3xaAZNC_XApp(jr_oxur.Get_3xXEID()).IsBestFromBabylon())
return null;jr_oxur.Get_3xXEID().Get_3xCat().Clear();jr_oxur.Get_3xXEID().Set_GEID(jt_TypGeo,null,null,null);jr_oxur.Get_3xXEID().Get_3xAZNC().Clear_C();jr_oxur.Get_3xXEID().Get_3xPS().Clear();jr_oxur.MakeQUR(true,false);jr_oxur.jm_Single=jc_gl.jc_XURTG_Multiple;jr_oxur.jm_SubEntity=jc_gl.jc_XURTG_Master;}
else if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoCountry)
{jr_oxur.Get_3xXEID().Set_GEID(jt_TypGeo,null,null,null);jr_oxur.Get_3xXEID().Get_3xAZNC().Clear();jr_oxur.Get_3xXEID().Get_3xPS().Clear();jr_oxur.MakeQUR(true,false);jr_oxur.jm_Single=jc_gl.jc_XURTG_Multiple;jr_oxur.jm_SubEntity=jc_gl.jc_XURTG_Master;}
else if(jt_TypGeo==jc_gl.jc_oEntity.jc_Typ_GeoState)
{if(!jr_oxur.Get_3xXEID().Get_3xPS().Get_P()||New_A3xaAZNC_XApp(jr_oxur.Get_3xXEID()).IsBestFromBabylon())
return null;jr_oxur.Get_3xXEID().Set_GEID(jt_TypGeo,null,null,null);jr_oxur.Get_3xXEID().Get_3xAZNC().Clear();jr_oxur.Get_3xXEID().Get_3xPS().Clear_S();jr_oxur.MakeQUR(true,false);jr_oxur.jm_Single=jc_gl.jc_XURTG_Multiple;jr_oxur.jm_SubEntity=jc_gl.jc_XURTG_Master;}
else
{jr_oxur.Get_3xXEID().Set_GEID(jc_gl.jc_oEntity.jc_Typ_Enterprise,null,null,null);jr_oxur.Get_3xXEID().Get_3xPS().Clear();if(New_A3xaAZNC_XApp(jr_oxur.Get_3xXEID()).IsBestFromBabylon())
{if(jr_oxur.Get_3xXEID().Get_3xCat().IsEmpty())
jr_oxur.MakeQUR(false,false);else
jr_oxur.MakeQUR(true,false);}
else if(!jr_oxur.Get_3xXEID().Get_3xAZNC().Get_N())
{jr_oxur.MakeQUR(false,false);}
else if(true)
{jr_oxur.jm_QUR=jc_gl.jc_oQUR.jc_QUR_QuerySBS;}
jr_oxur.jm_Single=jc_gl.jc_XURTG_Multiple;jr_oxur.jm_SubEntity=jc_gl.jc_XURTG_Master;}
return jr_oxur;};}
function A3xaMgrCategory_Request(ji_bShowLabel)
{this.jm_oddiRoot=null;this.jm_oddbox=null;this.A3xaConstructor=function()
{this.jm_oddbox=new A3xaDDSelectBox(null,"RequestCategory",ji_bShowLabel?"Categoria":"");this.jm_oddbox.NewDDItem=function(){return new A3xaDDItemRequestCategory();};this.jm_oddbox.OnChange=function(ji_eddbox,ji_oddi)
{var jt_sUrlParams=ji_oddi.Get_Value();jg_oe.CanLogInfo()&&jg_oe.LogInfo("url-params="+(jt_sUrlParams||""),"","A3xaMgrCategory_Request.jm_oddbox.OnChange");if(!jt_sUrlParams)
return false;return jg_oApp.Get_AppXUR().OnChange_QUR(jt_sUrlParams);};this.jm_oddbox.Set_ColorsBGHL(["FF6080","FF80A0","FFC0E0"]);return true;};this._CompareEntityOrder=function(ji_oddi_a,ji_oddi_b)
{var jt_1=1;if(!(ji_oddi_a&&ji_oddi_b))
return 0;var jt_delta=Number(ji_oddi_a.Get_Order())-Number(ji_oddi_b.Get_Order());if(jt_delta>0)
return jt_1;if(jt_delta<0)
return-jt_1;return 0;};this.PrintHtmlDD=function(qi_oParent)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","A3xaMgrCategory_Request.PrintHtmlDD");this.ConfigDD();if(!this.jm_oddbox.PrintHtml(qi_oParent))
return false;{if(!this.jm_oddbox.Refresh())
return false;}
return true;};this.RefreshHtmlDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("CategoryFilter:"+
(ji_oDDCategoryCodeFilter?ji_oDDCategoryCodeFilter.Get_DDValue():"null"),"","A3xaMgrCategory_Request.RefreshHtmlDD");this.ConfigDD(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter);var jr_b=this.jm_oddbox.Refresh();return jr_b;};this.ConfigDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{this.jm_oddbox.jm_sKeySelected=null;var jt_sxeidSelected=null;if(jg_oApp.Get_AppXUR().Get_3xXUR().Get_3xXEID()&&true)
{this.jm_oddbox.jm_sKeySelected=jg_oApp.Get_AppXUR().Get_3xXUR().Get_3xXEID().Get_3xCat().Get_String("-");if(ji_oDDCategoryCodeFilter&&ji_oDDCategoryCodeFilter.Get_Key())
this.jm_oddbox.jm_sKeySelected=ji_oDDCategoryCodeFilter.Get_Key();jg_oe.CanLogInfo()&&jg_oe.LogInfo("GroupFocus key:"+
this.jm_oddbox.jm_sKeyGroupFocus,"","A3xaMgrCategory_Request.ConfigDD");this.jm_oddbox.jm_bVisibleGroupFocus=false;}
this.jm_oddbox.jm_bShowCount=false;return true;};this.LoadDataDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{this.ConfigDD(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter);var jt_odb=jg_oe.Get_Database();if(!jt_odb)
return false;var jt_ogldtCategory=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Category);if(!jt_ogldtCategory)
return false;var jt_oddiRequestCategory=new A3xaDDItemRequestCategory();var jt_nOfRows=jt_ogldtCategory.jm_aoglr.Get_Count();jt_oddiRequestCategory.Set_Descr("*** TODOS ***");jt_oddiRequestCategory.Set_ValueXUR(null);for(var i=0;i<jt_nOfRows;i++)
{var jt_oglr=jt_ogldtCategory.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oglr)
continue;if(jt_oglr.Get_3xXEID().Get_3xCat().Get_Vcat())
continue;if(!jt_oddiRequestCategory.Add_CategoryGroup(jt_oglr));}
for(i=0;i<jt_nOfRows;i++)
{var jt_oglr=jt_ogldtCategory.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oglr)
continue;if(!jt_oglr.Get_3xXEID().Get_3xCat().Get_Vcat())
continue;if(!jt_oddiRequestCategory.Add_Category(jt_oglr,jt_ogldtCategory));}
jt_oddiRequestCategory.Sort_Children(this._CompareEntityOrder,true);this.jm_oddiRoot=jt_oddiRequestCategory;this.jm_oddbox.jm_oddiRoot=this.jm_oddiRoot;return true;};this.A3xaConstructor();}
var jg_aoglGoogleMap=new Array();function GLGoogleMap(ji_Row,ji_Col,ji_Lat,ji_Lon,ji_Zoom,ji_sTip)
{this.PrintHtml=GLGoogleMap_PrintHtml;this.jm_mapconfig=null;this.jm_mapstyled=null;this.jm_varname_Googlemap=null;this.jm_Row=ji_Row;this.jm_Lat=ji_Lat;this.jm_Lon=ji_Lon;this.jm_sSuffixId="0_rbm61_"+this.jm_Row;this.jm_sUrlGoogleMapIcon=jc_gl.MakeUrlIcon_UserEntityInfo("Googlemap-icon-32x32");this.jm_sUrlTwitterMapIcon=jc_gl.MakeUrlIcon_Base("media/plugin_googlemap2/site/Twitter/twitter_map_icon");this.jm_sUrlTuristaIcon=jc_gl.MakeUrlIcon_Main("Turista-icon-64x96");this.jm_varname_Googlemap="googlemap"+this.jm_sSuffixId;window[this.jm_varname_Googlemap]=null;this.jm_mapconfig={"debug":"0","show":"0","mapclass":"","loadmootools":"1","googlewebsite":"maps.google.com","align":"center","width":"400px","height":"400px","effect":"none","deflatitude":this.jm_Lat,"deflongitude":this.jm_Lon,"centerlat":"","centerlon":"","address":"","latitudeid":"","latitudedesc":"1","latitudecoord":"0","latitudeform":"0","controltype":"UI","zoomtype":"3D-large","svcontrol":"1","zoom":ji_Zoom,"corzoom":"0","minzoom":"0","maxzoom":"19","rotation":"1","zoomnew":"0","zoomwheel":"0","keyboard":"0","maptype":"Normal","showmaptype":"1","shownormalmaptype":"1","showsatellitemaptype":"1","showhybridmaptype":"1","showterrainmaptype":"1","showearthmaptype":"1","showscale":"0","overview":"0","ovzoom":"-3","navlabel":"1","dragging":"1","marker":"1","traffic":"0","transit":"0","bicycle":"0","panoramio":"popular","panotype":"none","panoorder":"popularity","panomax":"50","youtube":"none","wiki":"none","adsmanager":"0","maxads":"3","localsearch":"0","adsense":"","channel":"","googlebar":"0","searchlist":"inline","searchtarget":"_blank","searchzoompan":"1","weather":"0","weathercloud":"0","weatherinfo":"1","weathertempunit":"celsius","weatherwindunit":"km","dir":"0","dirtype":"D","avoidhighways":"0","diroptimize":"0","diralternatives":"0","showdir":"1","animdir":"0","animspeed":"1","animautostart":"0","animunit":"kilometers","formspeed":"0","formdirtype":"0","formaddress":"0","formdir":"0","autocompl":"both","txtdir":"Directions: ","txtgetdir":"Get Directions","txtfrom":"From here","txtto":"To here","txtdiraddr":"Address: ","txt_driving":"","txt_avhighways":"","txt_walking":"","txt_bicycle":"","txt_transit":"","txt_optimize":"","txt_alternatives":"","dirdefault":"0","gotoaddr":"0","gotoaddrzoom":"0","txtaddr":"Address: ##","erraddr":"Address ## not found!","clientgeotype":"google","lightbox":"1","txtlightbox":"<img src='"+this.jm_sUrlGoogleMapIcon+"' border='0' alt='Map' title='Map' width='24' height='24' \/>","lbxcaption":"","lbxwidth":"400px","lbxheight":"400px","lbxcenterlat":this.jm_Lat,"lbxcenterlon":this.jm_Lon,"lbxzoom":"","sv":"none","svwidth":"100%","svheight":"300px","svautorotate":"0","svaddress":"1","earthtimeout":"100","earthborders":"1","earthbuildings":"0","earthroads":"0","earthterrain":"0","kmlrenderer":"google","kmlsidebar":"none","kmlsbwidth":"200px","kmllightbox":"0","proxy":"1","tilelayer":"","tilemethod":"","tileopacity":"1","tilebounds":"","tileminzoom":"0","tilemaxzoom":"19","imageurl":"","imagex":"","imagey":"","imagexyunits":"pixels","imagewidth":"","imageheight":"","imageanchorx":"","imageanchory":"","imageanchorunits":"pixels","twittername":"","twittertweets":"15","twittericon":this.jm_sUrlTwitterMapIcon,"twitterline":"#ff0000ff","twitterlinewidth":"4","twitterstartloc":"0,0,0","lang":"en","mapType":"hybrid","geocoded":0,"tolat":"","tolon":"","toaddress":"","description":"","tooltip":ji_sTip,"kml":[],"kmlsb":[],"layer":[],"lookat":[],"camera":[],"msid":"","searchtext":"","latitude":this.jm_Lat,"longitude":this.jm_Lon,"waypoints":[],"mapnm":this.jm_sSuffixId,"descr":"0","geoxmloptions":{"titlestyle":" ","veryquiet":true,"quiet":true,"nozoom":true,"iwmethod":"click","sortbyname":null,"linktarget":"_self","linkmethod":"dblclick","baseicon":"A"},"markericon":[{"name":"A","imageurl":this.jm_sUrlTuristaIcon,"iconwidth":"64","iconheight":"96","iconshadow":"","iconshadowwidth":"10","iconshadowheight":"10","iconanchorx":"0","iconanchory":"0","iconimagemap":"13,0,15,1,16,2,17,3,18,4,18,5,19,6,19,7,19,8,19,9,19,10,19,11,19,12,19,13,18,14,18,15,17,16,16,17,15,18,14,19,14,20,13,21,13,22,12,23,12,24,12,25,12,26,11,27,11,28,11,29,11,30,11,31,11,32,11,33,8,33,8,32,8,31,8,30,8,29,8,28,8,27,8,26,7,25,7,24,7,23,6,22,6,21,5,20,5,19,4,18,3,17,2,16,1,15,1,14,0,13,0,12,0,11,0,10,0,9,0,8,0,7,0,6,1,5,1,4,2,3,3,2,4,1,6,0,13,0"}],"icontype":"A"};}
function GLGoogleMap_PrintHtml(qi_oParent)
{if(!(qi_oParent&&qi_oParent.length))
return false;var jt_sh1="<a href='javascript:void(0)' onclick='javascript:MOOdalBox.open(\"googlemap"+this.jm_sSuffixId+"\", \"\", \"400px 400px\", googlemap"+this.jm_sSuffixId+".map, {mapcenter : \""+this.jm_Lat+" "+this.jm_Lon+"\"});return false;' class='lightboxlink'><img src='"+
jc_gl.MakeUrlIcon_UserEntityInfo("Googlemap-icon-32x32")+"' border='0' alt='Map' title='Map' width='24' height='24' /></a>";qi_oParent.append(jt_sh1);var jt_sh2="<div id='mapbody"+this.jm_sSuffixId+"' style='display: none; text-align:center'><div id='lightbox"+this.jm_sSuffixId+"' class='maplightbox' style='display:none;text-align:center;'><div id='googlemap"+this.jm_sSuffixId+"' class='map' style='margin-right: auto; margin-left: auto; width:400px; height:400px;'></div></div></div>";qi_oParent.append(jt_sh2);window[this.jm_varname_Googlemap]=new GoogleMaps(this.jm_sSuffixId,this.jm_mapconfig,this.jm_mapstyled);return true;}
function GLMgrLand()
{this.jm_o3xmlra=new A3xaMgrLand_RequestArea(jc_gl.jc_oEntity.jc_Typ_GeoArea);this.jm_o3xmlrr=new A3xaMgrLand_RequestArea(jc_gl.jc_oEntity.jc_Typ_GeoRegion);this.Get_MgrRequestArea=function(ji_TypEntity)
{if(ji_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoArea||!ji_TypEntity)
return this.jm_o3xmlra;if(ji_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoRegion)
return this.jm_o3xmlrr;return null;};this.jm_o3xmlsp=new A3xaMgrLand_SelectPlace();this.Get_MgrSelectPlace=function(){return this.jm_o3xmlsp;};this.PrintHtml_FlagGeoCountry=function(qi_oParent,ji_oglrMain)
{if(!(qi_oParent&&qi_oParent.length&&ji_oglrMain))
return false;var jt_oglrCategory=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_Category);var jt_oglrGeoArea=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoArea);var jt_oglrGeoRegion=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoRegion);var jt_oglrGeoCity=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCity);var jt_oglrGeoCountry=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCountry);var jt_oglrGeoState=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoState);if(jt_oglrGeoCountry)
{var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_ListEntity,null,null,jc_gl.jc_oQUR.jc_QUR_QueryViewEntity,null,jc_gl.jc_XURTG_Single,"",null);jt_oxur.CopyFrom(jt_oglrGeoCountry,true,true,false,false);var jt_ohButton=new A3xaSimpleButton(jc_gl.Get_UrlFlagEntity(jc_gl.jc_oEntity.jc_Typ_GeoCountry,jt_oglrGeoCountry.Get_3xXEID().Get_3xPS().Get_P()),jt_oxur.Get_A3xaUrl(false,true),jt_oglrGeoCountry.Get_3xEBIS().Get_Name(),jt_oglrGeoCountry.Get_3xXEID().Get_3xPS().Get_P());jt_ohButton.Set_Options("24","16",true,true);if(!jt_ohButton.PrintHtml(qi_oParent))
return false;}
return true;};this.PrintHtml_FlagGeoState=function(qi_oParent,ji_oglrMain)
{if(!(qi_oParent&&qi_oParent.length&&ji_oglrMain))
return false;var jt_oglrCategory=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_Category);var jt_oglrGeoArea=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoArea);var jt_oglrGeoRegion=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoRegion);var jt_oglrGeoCity=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCity);var jt_oglrGeoCountry=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCountry);var jt_oglrGeoState=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoState);if(jt_oglrGeoState)
{var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_ListEntity,null,null,jc_gl.jc_oQUR.jc_QUR_QueryViewEntity,null,jc_gl.jc_XURTG_Single,"",null);jt_oxur.CopyFrom(jt_oglrGeoState,true,true,false,false);jt_oxur.LinkCommonData(jg_oe.Get_Database(),true);var jt_ohButton=new A3xaSimpleButton(jc_gl.Get_UrlFlagEntity(jc_gl.jc_oEntity.jc_Typ_GeoState,jt_oglrGeoState.Get_3xXEID().Get_3xPS().Get_String("-")),jt_oxur.Get_A3xaUrl(false,true),jt_oglrGeoState.Get_3xEBIS().Get_Name()+" ("+jt_oglrGeoState.Get_3xXEID().Get_3xPS().Get_P()+")",jt_oglrGeoState.Get_3xXEID().Get_3xPS().Get_S()+"("+jt_oglrGeoState.Get_3xXEID().Get_3xPS().Get_P()+")");jt_ohButton.Set_Options("24","16",true,true);if(!jt_ohButton.PrintHtml(qi_oParent))
return false;}
return true;};this.PrintHtml_FlagGeoRegion=function(qi_oParent,ji_oglrMain)
{if(!(qi_oParent&&qi_oParent.length&&ji_oglrMain))
return false;var jt_oglrCategory=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_Category);var jt_oglrGeoArea=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoArea);var jt_oglrGeoRegion=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoRegion);var jt_oglrGeoCity=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCity);var jt_oglrGeoCountry=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCountry);var jt_oglrGeoState=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoState);if(jt_oglrGeoRegion&&jt_oglrGeoArea)
{var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_ListEntity,null,null,jc_gl.jc_oQUR.jc_QUR_QueryViewEntity,null,jc_gl.jc_XURTG_Single,"",null);jt_oxur.CopyFrom(jt_oglrGeoRegion,true,true,false,false);jt_oxur.LinkCommonData(jg_oe.Get_Database(),true);var jt_flagTyp=jc_gl.jc_oEntity.jc_Typ_GeoNA;var jt_flagCode=A3xaToString(jt_oglrGeoArea.Get_3xXEID().Get_3xAZNC().Get_A())+
A3xaToString(jt_oglrGeoArea.Get_3xXEID().Get_3xAZNC().Get_Z());var jt_shortdescr=jt_oglrGeoRegion.Get_3xXEID().Get_3xAZNC().Get_N()+"("+jt_flagCode+")";var jt_ohButton=new A3xaSimpleButton(jc_gl.Get_UrlFlagEntity(jt_flagTyp,jt_flagCode),jt_oxur.Get_A3xaUrl(false,true),jt_oglrGeoRegion.Get_3xEBIS().Get_Name()+", "+jt_oglrGeoArea.Get_3xEBIS().Get_Name(),jt_shortdescr);jt_ohButton.Set_Options("24","16",true,true);if(!jt_ohButton.PrintHtml(qi_oParent))
return false;}
return true;};this.PrintHtml_IconGeoCity=function(qi_oParent,ji_oglrMain)
{if(!(qi_oParent&&qi_oParent.length&&ji_oglrMain))
return false;var jt_oglrCategory=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_Category);var jt_oglrGeoArea=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoArea);var jt_oglrGeoRegion=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoRegion);var jt_oglrGeoCity=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCity);var jt_oglrGeoCountry=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCountry);var jt_oglrGeoState=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoState);if(jt_oglrGeoCity)
{var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_ListEntity,null,null,jc_gl.jc_oQUR.jc_QUR_QueryViewEntity,null,jc_gl.jc_XURTG_Single,"",null);jt_oxur.CopyFrom(jt_oglrGeoCity,true,true,false,false);jt_oxur.LinkCommonData(jg_oe.Get_Database(),true);var jt_o3xcat_Category_Geo_City=new A3xaCategoryCode();jt_o3xcat_Category_Geo_City.Set_Category(jc_gl.jc_oEntity.jc_UCat_Geo,jc_gl.jc_oEntity.jc_VCat_Geo_City);jt_o3xcat_xapp=new A3xaCategoryCode_XApp(jt_o3xcat_Category_Geo_City);var jt_ohButton=new A3xaSimpleButton(jt_o3xcat_xapp.Get_UrlIcon(),jt_oxur.Get_A3xaUrl(false,true),jt_oglrGeoCity.Get_3xEBIS().Get_Name(),"Ciudad");if(!jt_ohButton.PrintHtml(qi_oParent))
return false;}
return true;};this.PrintHtml_IconMap=function(qi_oParent,ji_oglrMain,ji_Row,ji_Col)
{if(!(qi_oParent&&qi_oParent.length&&ji_oglrMain))
return false;var jt_oglrCategory=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_Category);var jt_oglrGeoArea=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoArea);var jt_oglrGeoRegion=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoRegion);var jt_oglrGeoCity=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCity);var jt_oglrGeoCountry=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCountry);var jt_oglrGeoState=ji_oglrMain.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoState);var jt_Lat=0.0;var jt_Lon=0.0;var jt_Zoom=4;var jt_sTip="location";if(jt_oglrGeoCity)
{jt_Lat=jt_oglrGeoCity.Get_3xEBIS().Get_Lat();jt_Lon=jt_oglrGeoCity.Get_3xEBIS().Get_Lon();jt_sTip=jt_oglrGeoCity.Get_3xEBIS().Get_Name();jt_Zoom=12;}
else if(jt_oglrGeoRegion)
{jt_Lat=jt_oglrGeoRegion.Get_3xEBIS().Get_Lat();jt_Lon=jt_oglrGeoRegion.Get_3xEBIS().Get_Lon();jt_sTip=jt_oglrGeoRegion.Get_3xEBIS().Get_Name();jt_Zoom=8;}
else if(jt_oglrGeoArea)
{jt_Lat=jt_oglrGeoArea.Get_3xEBIS().Get_Lat();jt_Lon=jt_oglrGeoArea.Get_3xEBIS().Get_Lon();jt_sTip=jt_oglrGeoArea.Get_3xEBIS().Get_Name();jt_Zoom=4;}
var jt_oglGoogleMap=new GLGoogleMap(ji_Row,ji_Col,jt_Lat,jt_Lon,jt_Zoom,jt_sTip);jg_aoglGoogleMap.push(jt_oglGoogleMap);jt_oglGoogleMap.PrintHtml(qi_oParent);return true;};}
function A3xaDDItemEntity(ji_sKey,ji_sDescr)
{A3xaDDItem.call(this,ji_sKey,ji_sDescr);this.jm_bAZNC=true;this.jm_bPS=false;this.jm_odce=null;this.Set_DCEntity=function(ji_odce)
{this.jm_odce=ji_odce;if(this.jm_odce)
{this.Set_Key(this.jm_odce.Get_3xXEID().Get_String());this.Set_Value(this.jm_odce.Get_3xXEID().Get_String());}
return true;};this.Add_Place=function(ji_oglr,ji_oDDCategoryCodeFilter,ji_ogldtArea,ji_ogldtRegion,ji_ogldtCity)
{if(!ji_oglr)
return false;if(!(this.jm_TreeLevel==1))
return false;var jt_te=ji_oglr.Get_3xXEID().Get_TypEntity();var jt_o3xcat=ji_oglr.Get_3xXEID().Get_3xCat();var jt_C=ji_oglr.Get_3xXEID().Get_3xAZNC().Get_C();jg_oe.CanLogInfo()&&jg_oe.LogInfo("Typ,Cat: "+jt_te+","+jt_o3xcat.Get_String(),"","A3xaDDItemEntity.Add_Place");if(jt_te==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Skip MSC: ","","A3xaDDItemEntity.Add_Place");return true;}
var jt_bRestricted=false;if(ji_oDDCategoryCodeFilter&&ji_oDDCategoryCodeFilter.Get_Value()&&!ji_oDDCategoryCodeFilter.ValueMatch(jt_o3xcat.Get_String("-")))
jt_bRestricted=true;var jt_Order=Number(0);var jt_oglRecord_A=null;if(ji_ogldtArea)
jt_oglRecord_A=ji_ogldtArea.Get_GLRecord(ji_ogldtArea.AltKey_2_PrimaryKey(ji_ogldtArea.BuildAltKey(ji_oglr)));if(jt_oglRecord_A)
jt_Order=Number(jt_oglRecord_A.Get_3xEBIS().Get_Order())*10;var jt_oglRecord_R=null;if(ji_ogldtRegion)
jt_oglRecord_R=ji_ogldtRegion.Get_GLRecord(ji_ogldtRegion.AltKey_2_PrimaryKey(ji_ogldtRegion.BuildAltKey(ji_oglr)));if(jt_oglRecord_R)
jt_Order+=Number(jt_oglRecord_R.Get_3xEBIS().Get_Order());var jt_oddigNew=new A3xaDDItemEntity();var jt_odceg=new A3xaDCEntity();jt_odceg.Get_3xXEID().CopyFrom(ji_oglr);jt_odceg.Get_3xXEID().Clear_GEID();jt_odceg.Get_3xXEID().Get_3xCat().Clear();jt_odceg.Get_3xXEID().Get_3xAZNC().Clear_C();jt_odceg.Get_3xXEID().Get_3xPS().Clear();if(jt_oglRecord_A)
jt_odceg.Get_3xEBIS().Set_Order(jt_Order);jt_oddigNew.Set_DCEntity(jt_odceg);if(jt_oddigNew.IsEmpty())
return false;if(jt_odceg.Get_3xXEID().Get_3xAZNC().Get_Z())
{var jt_oddig=this.Get_Child(jt_oddigNew.Get_Key());if(!jt_oddig)
{jt_oddigNew.BuildDescr(ji_ogldtArea,ji_ogldtRegion,null);jt_oddig=jt_oddigNew;this.Add_Child(jt_oddigNew);}
if(jt_odceg.Get_3xXEID().Get_3xAZNC().Get_N()&&jt_C)
{var jt_oddieNew=new A3xaDDItemEntity();var jt_odce=new A3xaDCEntity();jt_odce.Get_3xXEID().CopyFrom(ji_oglr);jt_odce.Get_3xXEID().Clear_GEID();jt_odce.Get_3xXEID().Get_3xCat().Clear();jt_odce.Get_3xXEID().Get_3xPS().Clear();jt_oddieNew.Set_DCEntity(jt_odce);if(jt_oddieNew.IsEmpty())
return false;var jt_oddie=jt_oddig.Get_Child(jt_oddieNew.Get_Key());if(!jt_oddie)
{jt_oddieNew.BuildDescr(null,null,ji_ogldtCity);jt_oddie=jt_oddieNew;jt_oddig.Add_Child(jt_oddieNew);}
jt_oddie.IncrementCounters(!jt_bRestricted);}
jt_oddig.IncrementCounters(!jt_bRestricted);}
this.IncrementCounters(!jt_bRestricted);return true;};this.BuildDescr=function(ji_ogldtArea,ji_ogldtRegion,ji_ogldtCity)
{var jt_oglRecord_A=null;var jt_oglRecord_R=null;var jt_oglRecord_C=null;if(ji_ogldtArea)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDDEntity_BuildDescr,Name: "+
ji_ogldtArea.jm_aoglr.Get_Item_ByIndex(0));jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDDEntity_BuildDescr,BuildAltKey: "+
ji_ogldtArea.jm_aoglr.Get_Count()+"--"+ji_ogldtArea.BuildAltKey(this.jm_odce));jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDDEntity_BuildDescr,AltKey_2_PrimaryKey: "+
ji_ogldtArea.AltKey_2_PrimaryKey(ji_ogldtArea.BuildAltKey(this.jm_odce)));jt_oglRecord_A=ji_ogldtArea.Get_GLRecord(ji_ogldtArea.AltKey_2_PrimaryKey(ji_ogldtArea.BuildAltKey(this.jm_odce)));jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDDEntity_BuildDescr,Get_GLRecord: "+
(jt_oglRecord_A?jt_oglRecord_A.Get_3xEBIS().Get_Name():"A=NULL"));}
if(ji_ogldtRegion)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDDEntity_BuildDescr,Name: "+
ji_ogldtRegion.jm_aoglr.Get_Item_ByIndex(0));jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDDEntity_BuildDescr,BuildAltKey: "+
ji_ogldtRegion.jm_aoglr.Get_Count()+"--"+ji_ogldtRegion.BuildAltKey(this.jm_odce));jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDDEntity_BuildDescr,AltKey_2_PrimaryKey: "+
ji_ogldtRegion.AltKey_2_PrimaryKey(ji_ogldtRegion.BuildAltKey(this.jm_odce)));jt_oglRecord_R=ji_ogldtRegion.Get_GLRecord(ji_ogldtRegion.AltKey_2_PrimaryKey(ji_ogldtRegion.BuildAltKey(this.jm_odce)));jg_oe.CanLogInfo()&&jg_oe.LogInfo("GLDDEntity_BuildDescr,Get_GLRecord: "+
(jt_oglRecord_R?jt_oglRecord_R.Get_3xEBIS().Get_Name():"R=NULL"));}
if(ji_ogldtCity)
jt_oglRecord_C=ji_ogldtCity.Get_GLRecord(ji_ogldtCity.AltKey_2_PrimaryKey(ji_ogldtCity.BuildAltKey(this.jm_odce)));var jt_sArea=(jt_oglRecord_A?jt_oglRecord_A.Get_3xEBIS().Get_Name():"");var jt_sRegion=(jt_oglRecord_R?jt_oglRecord_R.Get_3xEBIS().Get_Name():"");var jt_sCity=(jt_oglRecord_C?jt_oglRecord_C.Get_3xEBIS().Get_Name():"");var jt_sDescr="";if(jt_sCity)
jt_sDescr=jt_sCity;if(jt_sRegion)
jt_sDescr+=(jt_sDescr?" - ":"")+jt_sRegion;if(jt_sArea)
jt_sDescr+=(jt_sDescr?" - ":"")+jt_sArea;this.Set_Descr(jt_sDescr);return true;};}
function A3xaMgrLand_SelectPlace()
{this.jm_oDDCategoryCodeFilter=null;this.jm_oDDPairLandFilter=null;this.jm_oddiLand=new A3xaDDItem();this.jm_oddboxLand=new A3xaDDSelectBox(null,"Filter_City","Destacar lugar y categoria");this.jm_oddboxLand.NewDDItem=function(){return new A3xaDDItemEntity();};this.jm_oddboxLand.OnChange=function(ji_eddbox,ji_oddi)
{return jg_oApp.jm_oecp.OnChangeDD_City(ji_eddbox,ji_oddi);};this.jm_oddboxLand.Set_ColorsBGHL(["FFFF80","FFFF80","FFFFC0"]);this.Get_DDSelected=function()
{return this.jm_oddboxLand.Get_DDItemUpdated(this.jm_oDDPairLandFilter);};this._CompareEntityOrder=function(ji_oddi_a,ji_oddi_b)
{var jt_1=1;if(!(ji_oddi_a&&ji_oddi_b))
return 0;var jt_o3xdce_a=ji_oddi_a.jm_odce;var jt_o3xdce_b=ji_oddi_b.jm_odce;if(!(jt_o3xdce_a&&jt_o3xdce_b))
return 0;var jt_oebis_a=jt_o3xdce_a.Get_3xEBIS();var jt_oebis_b=jt_o3xdce_b.Get_3xEBIS();if(!(jt_oebis_a&&jt_oebis_b))
return 0;var jt_delta=Number(jt_oebis_a.Get_Order())-Number(jt_oebis_b.Get_Order());if(jt_delta>0)
return jt_1;if(jt_delta<0)
return-jt_1;return 0;};this.PrintHtmlDD=function(qi_oParent,ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","GLMgrLand_PrintHtmlDD");this.jm_oddboxLand.jm_sKeySelected=(ji_oDDPairLandFilter?ji_oDDPairLandFilter.Get_Key():null);var jr_b=this.jm_oddboxLand.PrintHtml(qi_oParent);return jr_b;};this.RefreshHtmlDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("CategoryFilter:"+
(ji_oDDCategoryCodeFilter?ji_oDDCategoryCodeFilter.Get_DDValue():"null"),"","GLMgrLand_RefreshHtmlDD");this.jm_oddboxLand.jm_sKeySelected=(ji_oDDPairLandFilter?ji_oDDPairLandFilter.Get_Key():null);return this.jm_oddboxLand.Refresh();};this.LoadDataDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin, catfilter"+
(ji_oDDCategoryCodeFilter?ji_oDDCategoryCodeFilter.Get_DDValue():"null"),"","GLMgrLand_LoadData");this.jm_oDDPairLandFilter=ji_oDDPairLandFilter;var jt_odb=jg_oe.Get_Database();if(!jt_odb)
return false;var jt_ogldtMain=jt_odb.Get_MainDataTable();if(!jt_ogldtMain)
return false;var jt_ogldtCategory=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Category);if(!jt_ogldtCategory)
return false;var jt_ogldtArea=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoArea);if(!jt_ogldtArea)
return false;var jt_ogldtRegion=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoRegion);var jt_ogldtCity=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoCity);var jt_oddiLand=new A3xaDDItemEntity();jt_oddiLand.Set_Descr("*** TODOS ***");var jt_nOfRows=jt_ogldtMain.jm_aoglr.Get_Count();for(var i=0;i<jt_nOfRows;i++)
{var jt_oglr=jt_ogldtMain.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oddiLand.Add_Place(jt_oglr,ji_oDDCategoryCodeFilter,jt_ogldtArea,jt_ogldtRegion,jt_ogldtCity))
return false;}
jt_oddiLand.Sort_Children(this._CompareEntityOrder,false);this.jm_oddiLand=jt_oddiLand;this.jm_oddboxLand.jm_oddiRoot=this.jm_oddiLand;return true;};}
function A3xaDDItemRequestArea(ji_sKey,ji_sDescr)
{A3xaDDItem.call(this,ji_sKey,ji_sDescr);this.jm_odce=null;this.Set_DCEntity=function(ji_odce)
{this.jm_odce=ji_odce;if(this.jm_odce)
{var jt_sxeid=this.jm_odce.Get_3xXEID().Get_String();this.jm_odce.Get_3xXEID().Set_TypEntity(jc_gl.jc_oEntity.jc_Typ_Enterprise);var jt_sxeidQUR=this.jm_odce.Get_3xXEID().Get_String();this.Set_Key(jt_sxeid);var jt_oxur=new A3xaXur();if(this.jm_odce.Get_3xXEID().Get_3xAZNC().Get_N())
{jt_oxur.Set_UrlParams(null,null,null,jc_gl.jc_oQUR.jc_QUR_QuerySBS,jt_sxeidQUR,null,null,null);this.Set_Value("p3x="+jt_oxur.Get_XURString());}
else if(this.jm_odce.Get_3xXEID().Get_3xAZNC().Get_Z())
{jt_oxur.Set_UrlParams(null,null,null,jc_gl.jc_oQUR.jc_QUR_QueryLimSBS,jt_sxeidQUR,null,null,null);this.Set_Value("p3x="+jt_oxur.Get_XURString());}
else if(this.jm_odce.Get_3xXEID().Get_3xAZNC().Get_A())
{this.jm_bOnChange=false;jt_oxur.Set_UrlParams(null,null,null,jc_gl.jc_oQUR.jc_QUR_QueryLimSBS,jt_sxeidQUR,null,null,null);this.Set_Value("p3x="+jt_oxur.Get_XURString());}
else
{jt_oxur.Set_UrlParams(null,null,null,jc_gl.jc_oQUR.jc_QUR_QueryLimSBS,jt_sxeidQUR,null,null,null);this.Set_Value("p3x="+jt_oxur.Get_XURString());}}
return true;};this.Add_TopArea=function(ji_oglrTopArea)
{if(!ji_oglrTopArea)
return false;if(!(this.jm_TreeLevel==1))
return false;var jt_te=ji_oglrTopArea.Get_3xXEID().Get_TypEntity();var jt_oddigNew=new A3xaDDItemRequestArea();var jt_odceg=new A3xaDCEntity();jt_odceg.Get_3xXEID().CopyFrom(ji_oglrTopArea);jt_odceg.Get_3xXEID().Clear_GEID();jt_odceg.Get_3xXEID().Get_3xCat().Clear();jt_odceg.Get_3xXEID().Get_3xAZNC().Clear_ZNC();jt_odceg.Get_3xXEID().Get_3xPS().Clear();jt_odceg.Get_3xEBIS().CopyFrom(New_A3xaAZNC_XApp(jt_odceg.Get_3xXEID()).TopAreaTo3xEBIS());jt_oddigNew.Set_DCEntity(jt_odceg);if(jt_oddigNew.IsEmpty())
return false;var jt_oddig=this.Get_Child(jt_oddigNew.Get_Key());if(!jt_oddig)
{jt_oddigNew.Set_Descr(New_A3xaAZNC_XApp(jt_odceg.Get_3xXEID()).TopAreaToName());jt_oddig=jt_oddigNew;this.Add_Child(jt_oddigNew);}
jt_oddig.IncrementCounters(false);return true;};this.Add_Area=function(ji_oglrArea)
{if(!ji_oglrArea)
return false;if(!(this.jm_TreeLevel==1))
return false;var jt_te=ji_oglrArea.Get_3xXEID().Get_TypEntity();var jt_odceg=new A3xaDCEntity();jt_odceg.Get_3xXEID().CopyFrom(ji_oglrArea);jt_odceg.Get_3xXEID().Clear_GEID();jt_odceg.Get_3xXEID().Get_3xCat().Clear();jt_odceg.Get_3xXEID().Get_3xAZNC().Clear_ZNC();jt_odceg.Get_3xXEID().Get_3xPS().Clear();var jt_oddig=this.Get_Child(jt_odceg.Get_3xXEID().Get_String());if(jt_oddig)
{var jt_oddirNew=new A3xaDDItemRequestArea();var jt_odcer=new A3xaDCEntity();jt_odcer.Get_3xXEID().CopyFrom(ji_oglrArea);jt_odcer.Get_3xXEID().Clear_GEID();jt_odcer.Get_3xXEID().Get_3xCat().Clear();jt_odcer.Get_3xXEID().Get_3xAZNC().Clear_NC();jt_odcer.Get_3xXEID().Get_3xPS().Clear();jt_odcer.Get_3xEBIS().Set_Order(ji_oglrArea.Get_3xEBIS().Get_Order());jt_oddirNew.Set_DCEntity(jt_odcer);if(jt_oddirNew.IsEmpty())
return false;jt_oddirNew.Set_Descr(ji_oglrArea.Get_3xEBIS().Get_Name());jt_oddig.Add_Child(jt_oddirNew);jt_oddirNew.IncrementCounters(true);jt_oddig.IncrementCounters(false);}
this.IncrementCounters(true);return true;};this.Add_Region=function(ji_oglrRegion)
{if(!ji_oglrRegion)
return false;if(!(this.jm_TreeLevel==1))
return false;var jt_te=ji_oglrRegion.Get_3xXEID().Get_TypEntity();var jt_oddirNew=new A3xaDDItemRequestArea();var jt_odcer=new A3xaDCEntity();jt_odcer.Get_3xXEID().CopyFrom(ji_oglrRegion);jt_odcer.Get_3xXEID().Clear_GEID();jt_odcer.Get_3xXEID().Get_3xCat().Clear();jt_odcer.Get_3xXEID().Get_3xAZNC().Clear_C();jt_odcer.Get_3xXEID().Get_3xPS().Clear();jt_odcer.Get_3xEBIS().Set_Order(ji_oglrRegion.Get_3xEBIS().Get_Order());jt_oddirNew.Set_DCEntity(jt_odcer);if(jt_oddirNew.IsEmpty())
return false;jt_oddirNew.Set_Descr(ji_oglrRegion.Get_3xEBIS().Get_Name());this.Add_Child(jt_oddirNew);var jt_odtExtH=null;if(jt_odcer.Get_3xXEID().Get_3xAZNC().Get_N())
jt_odtExtH=jg_oApp.Get_Database().Get_MainDataTable(jt_odcer.Get_3xXEID().Get_3xAZNC().Get_A(),jt_odcer.Get_3xXEID().Get_3xAZNC().Get_Z(),jt_odcer.Get_3xXEID().Get_3xAZNC().Get_N());jt_oddirNew.IncrementCounters(jt_odtExtH?true:false);this.IncrementCounters(true);return true;};this.Add_City=function(ji_oglrCity)
{if(!ji_oglrCity)
return false;if(!(this.jm_TreeLevel==1))
return false;var jt_te=ji_oglrCity.Get_3xXEID().Get_TypEntity();var jt_odceg=new A3xaDCEntity();jt_odceg.Get_3xXEID().CopyFrom(ji_oglrCity);jt_odceg.Get_3xXEID().Clear_GEID();jt_odceg.Get_3xXEID().Get_3xCat().Clear();jt_odceg.Get_3xXEID().Get_3xAZNC().Clear_C();jt_odceg.Get_3xXEID().Get_3xPS().Clear();var jt_oddig=this.Get_Child(jt_odceg.Get_3xXEID().Get_String());if(jt_oddig)
{var jt_oddirNew=new A3xaDDItemRequestArea();var jt_odcer=new A3xaDCEntity();jt_odcer.Get_3xXEID().CopyFrom(ji_oglrCity);jt_odcer.Get_3xXEID().Clear_GEID();jt_odcer.Get_3xXEID().Get_3xCat().Clear();jt_odcer.Get_3xXEID().Get_3xPS().Clear();jt_oddirNew.Set_DCEntity(jt_odcer);if(jt_oddirNew.IsEmpty())
return false;jt_oddirNew.Set_Descr(ji_oglrCity.Get_3xEBIS().Get_Name());jt_oddig.Add_Child(jt_oddirNew);var jt_odtExtH=null;if(jt_odcer.Get_3xXEID().Get_3xAZNC().Get_N())
jt_odtExtH=jg_oApp.Get_Database().Get_MainDataTable(jt_odcer.Get_3xXEID().Get_3xAZNC().Get_A(),jt_odcer.Get_3xXEID().Get_3xAZNC().Get_Z(),jt_odcer.Get_3xXEID().Get_3xAZNC().Get_N());jt_oddirNew.IncrementCounters(jt_odtExtH?true:false);jt_oddig.IncrementCounters(false);}
this.IncrementCounters(true);return true;};}
function A3xaMgrLand_RequestArea(ji_TypEntity)
{var jt_this=this;this.jm_oddiRoot=null;this.jm_oddbox=null;this.A3xaConstructor=function()
{if(this.IsArea())
this.jm_oddbox=new A3xaDDSelectBox(null,"RequestArea","Area, Region, Categoria");else if(this.IsRegion())
this.jm_oddbox=new A3xaDDSelectBox(null,"RequestRegion","");else
return false;this.jm_oddbox.NewDDItem=function(){return new A3xaDDItemRequestArea();};this.jm_oddbox.OnChange=function(ji_eddbox,ji_oddi)
{var jt_sUrlParams=ji_oddi.Get_Value();jg_oe.CanLogInfo()&&jg_oe.LogInfo("url-params="+(jt_sUrlParams||""),"","A3xaMgrLand_RequestArea.jm_oddbox.OnChange");if(!jt_sUrlParams)
return false;return jg_oApp.Get_AppXUR().OnChange_QUR(jt_sUrlParams);};this.jm_oddbox.Set_ColorsBGHL(["80FF80","80FF80","C0FFC0"]);return true;};this._CompareEntityOrder=function(ji_oddi_a,ji_oddi_b)
{var jt_1=1;if(!(ji_oddi_a&&ji_oddi_b))
return 0;var jt_o3xdce_a=ji_oddi_a.jm_odce;var jt_o3xdce_b=ji_oddi_b.jm_odce;if(!(jt_o3xdce_a&&jt_o3xdce_b))
return 0;var jt_oebis_a=jt_o3xdce_a.Get_3xEBIS();var jt_oebis_b=jt_o3xdce_b.Get_3xEBIS();if(!(jt_oebis_a&&jt_oebis_b))
return 0;var jt_delta=Number(jt_oebis_a.Get_Order())-Number(jt_oebis_b.Get_Order());if(jt_delta>0)
return jt_1;if(jt_delta<0)
return-jt_1;return 0;};this.jm_TypReqArea=(ji_TypEntity?ji_TypEntity:jc_gl.jc_oEntity.jc_Typ_GeoArea);this.IsArea=function(){return this.jm_TypReqArea==jc_gl.jc_oEntity.jc_Typ_GeoArea;};this.IsRegion=function(){return this.jm_TypReqArea==jc_gl.jc_oEntity.jc_Typ_GeoRegion;};this.PrintHtmlDD=function(qi_oParent)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","A3xaMgrLand_RequestArea.PrintHtmlDD");this.ConfigDD();if(!this.jm_oddbox.PrintHtml(qi_oParent))
return false;{if(!this.jm_oddbox.Refresh())
return false;}
return true;};this.RefreshHtmlDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("CategoryFilter:"+
(ji_oDDCategoryCodeFilter?ji_oDDCategoryCodeFilter.Get_DDValue():"null"),"","A3xaMgrLand_RequestArea.RefreshHtmlDD");this.ConfigDD(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter);var jr_b=this.jm_oddbox.Refresh();return jr_b;};this.ConfigDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{this.jm_oddbox.jm_sKeySelected=null;var jt_sxeidSelected=null;if(jg_oApp.Get_AppXUR().Get_3xXUR().Get_3xXEID()&&jg_oApp.Get_AppXUR().Get_3xXUR().Get_3xXEID().Get_3xAZNC().Get_A())
{var jt_odcSelected=new A3xaDCEntity();var jt_o3xxeid=jt_odcSelected.Get_3xXEID();jt_o3xxeid.CopyFrom(jg_oApp.Get_AppXUR().Get_3xXUR().Get_XEIDHighlights());if(ji_oDDPairLandFilter&&ji_oDDPairLandFilter.Get_Key())
jt_o3xxeid.Set_String(ji_oDDPairLandFilter.Get_Key());jt_o3xxeid.Clear_GEID();jt_o3xxeid.Get_3xCat().Clear();jt_o3xxeid.Get_3xPS().Clear();if(this.IsArea())
{jt_odcSelected.Get_3xXEID().Get_3xAZNC().Clear_NC();this.jm_oddbox.jm_sKeySelected=jt_odcSelected.Get_3xXEID().Get_String();jt_odcSelected.Get_3xXEID().Get_3xAZNC().Clear_ZNC();this.jm_oddbox.jm_sKeyGroupFocus=jt_odcSelected.Get_3xXEID().Get_String();}
else if(this.IsRegion())
{this.jm_oddbox.jm_sKeySelected=jt_odcSelected.Get_3xXEID().Get_String();jt_odcSelected.Get_3xXEID().Get_3xAZNC().Clear_C();this.jm_oddbox.jm_sKeyGroupFocus=jt_odcSelected.Get_3xXEID().Get_String();}
else
{}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("GroupFocus key:"+
this.jm_oddbox.jm_sKeyGroupFocus,"","A3xaMgrLand_RequestArea.ConfigDD");this.jm_oddbox.jm_bVisibleGroupFocus=false;}
this.jm_oddbox.jm_bShowCount=false;return true;};this.LoadDataDD=function(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter)
{this.ConfigDD(ji_oDDCategoryCodeFilter,ji_oDDPairLandFilter);var jt_odb=jg_oe.Get_Database();if(!jt_odb)
{jg_oe.LogErr("Fail","Get Database","A3xaMgrLand_RequestArea::LoadDataDD");return false;}
var jt_ogldtCategory=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Category);var jt_ogldtArea=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoArea);var jt_ogldtRegion=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoRegion);var jt_ogldtCity=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoCity);if(!jt_ogldtCategory)
{jg_oe.LogErr("Fail","Get Tb Category","A3xaMgrLand_RequestArea::LoadDataDD");return false;}
if(!jt_ogldtArea)
{jg_oe.LogErr("Fail","Get Tb Area","A3xaMgrLand_RequestArea::LoadDataDD");return false;}
if(this.IsArea())
{var jt_oddiRequestArea=new A3xaDDItemRequestArea();var jt_nOfRows=jt_ogldtArea.jm_aoglr.Get_Count();jt_oddiRequestArea.Set_Descr("*** TODOS ***");var jt_odcer=new A3xaDCEntity();jt_odcer.Get_3xXEID().Set_GEID(jc_gl.jc_oEntity.jc_Typ_Enterprise,null,null,null);jt_odcer.Get_3xXEID().Get_3xCat().Clear();jt_odcer.Get_3xXEID().Get_3xAZNC().Clear();jt_odcer.Get_3xXEID().Get_3xPS().Clear();jt_oddiRequestArea.Set_DCEntity(jt_odcer);for(var i=0;i<jt_nOfRows;i++)
{var jt_oglrArea=jt_ogldtArea.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oglrArea)
continue;if(New_A3xaAZNC_XApp(jt_oglrArea.Get_3xXEID()).IsBestFromBabylon())
continue;if(!jt_oddiRequestArea.Add_TopArea(jt_oglrArea))
{jg_oe.LogErr("Fail","jt_oddiRequestArea.Add_TopArea()","A3xaMgrLand_RequestArea::LoadDataDD");return false;}}
for(var i=0;i<jt_nOfRows;i++)
{var jt_oglrArea=jt_ogldtArea.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oglrArea)
continue;if(New_A3xaAZNC_XApp(jt_oglrArea.Get_3xXEID()).IsBestFromBabylon())
continue;if(!jt_oddiRequestArea.Add_Area(jt_oglrArea))
{jg_oe.LogErr("Fail","jt_oddiRequestArea.Add_Area()","A3xaMgrLand_RequestArea::LoadDataDD");return false;}}
jt_oddiRequestArea.Sort_Children(this._CompareEntityOrder,true);}
else if(this.IsRegion())
{var jt_oxeidCurrent=jg_oApp.Get_AppXUR().Get_3xXUR().Get_3xXEID();var jt_oddiRequestArea=new A3xaDDItemRequestArea();jt_oddiRequestArea.Set_Descr("*** TODOS ***");var jt_odcer=new A3xaDCEntity();jt_odcer.Get_3xXEID().Set_GEID(jc_gl.jc_oEntity.jc_Typ_Enterprise,null,null,null);jt_odcer.Get_3xXEID().Get_3xCat().Clear();jt_odcer.Get_3xXEID().Set_3xAZ(jt_oxeidCurrent);jt_odcer.Get_3xXEID().Get_3xPS().Clear();jt_oddiRequestArea.Set_DCEntity(jt_odcer);var jt_nOfRegions=jt_ogldtRegion.jm_aoglr.Get_Count();jg_oe.CanLogInfo()&&jg_oe.LogInfo("NOFRegion="+jt_nOfRegions,"","A3xaMgrLand_RequestArea.LoadDataDD");for(var ir=0;ir<jt_nOfRegions;ir++)
{var jt_oglrRegion=jt_ogldtRegion.jm_aoglr.Get_Item_ByIndex(ir);jg_oe.CanLogInfo()&&jg_oe.LogInfo("Region="+
(jt_oglrRegion?jt_oglrRegion.Get_3xEBIS().Get_Name():""),"","A3xaMgrLand_RequestArea.LoadDataDD");if(!(jt_oglrRegion.Get_3xXEID().Get_3xAZNC().Get_A()&&jt_oglrRegion.Get_3xXEID().Get_3xAZNC().Get_Z()))
continue;if(jt_oglrRegion.Get_3xXEID().Get_3xAZNC().Get_A()!=jt_oxeidCurrent.Get_3xXEID().Get_3xAZNC().Get_A())
continue;if(jt_oglrRegion.Get_3xXEID().Get_3xAZNC().Get_Z()!=jt_oxeidCurrent.Get_3xXEID().Get_3xAZNC().Get_Z())
continue;if(!jt_oddiRequestArea.Add_Region(jt_oglrRegion))
{jg_oe.LogErr("Fail","jt_oddiRequestArea.Add_Region()","A3xaMgrLand_RequestArea::LoadDataDD");return false;}}
jt_oddiRequestArea.Sort_Children(this._CompareEntityOrder,false);var jt_nOfCities=jt_ogldtCity.jm_aoglr.Get_Count();jg_oe.CanLogInfo()&&jg_oe.LogInfo("NOFCity="+jt_nOfCities,"","A3xaMgrLand_RequestArea.LoadDataDD");for(var ic=0;ic<jt_nOfCities;ic++)
{var jt_oglrCity=jt_ogldtCity.jm_aoglr.Get_Item_ByIndex(ic);jg_oe.CanLogInfo()&&jg_oe.LogInfo("City="+
(jt_oglrCity?jt_oglrCity.Get_3xEBIS().Get_Name():""),"","A3xaMgrLand_RequestArea.LoadDataDD");var jt_A=jt_oglrCity.Get_3xXEID().Get_3xAZNC().Get_A();var jt_Z=jt_oglrCity.Get_3xXEID().Get_3xAZNC().Get_Z();if(!(jt_A&&jt_Z))
continue;if(jt_A!=jt_oxeidCurrent.Get_3xXEID().Get_3xAZNC().Get_A())
continue;if(jt_Z!=jt_oxeidCurrent.Get_3xXEID().Get_3xAZNC().Get_Z())
continue;if(!jt_oddiRequestArea.Add_City(jt_oglrCity))
{jg_oe.LogErr("Fail","jt_oddiRequestArea.Add_City()","A3xaMgrLand_RequestArea::LoadDataDD");return false;}}}
this.jm_oddiRoot=jt_oddiRequestArea;this.jm_oddbox.jm_oddiRoot=this.jm_oddiRoot;return true;};this.A3xaConstructor();}
function A3xaImageMap_Scale(ji_offsetX,ji_offsetY,ji_scaleX,ji_scaleY)
{this.jm_offsetX=Number(ji_offsetX||0);this.jm_offsetY=Number(ji_offsetY||0);this.jm_LonMin=Number(0.0);this.jm_LatMin=Number(0.0);this.jm_LonMax=Number(0.0);this.jm_LatMax=Number(0.0);this.jm_LonCentre=Number(0.0);this.jm_LatCentre=Number(0.0);this.jm_GeoBoxSideMax=Number(0.0);this.jm_bGBSMLon=false;this.jm_scaleX=Number(ji_scaleX||0.0);this.jm_scaleY=Number(ji_scaleY||0.0);this.jm_KMSide=Number(0.0);this.Set_Box=function(ji_LonMin,ji_LatMin,ji_LonMax,ji_LatMax)
{this.jm_LonMin=Number(ji_LonMin);this.jm_LatMin=Number(ji_LatMin);this.jm_LonMax=Number(ji_LonMax);this.jm_LatMax=Number(ji_LatMax);this.jm_LonCentre=((this.jm_LonMin+this.jm_LonMax)/2);this.jm_LatCentre=((this.jm_LatMin+this.jm_LatMax)/2);var jt_LonSide=Math.abs(this.jm_LonMin-this.jm_LonMax);var jt_LatSide=Math.abs(this.jm_LatMin-this.jm_LatMax);if(jt_LonSide>(jt_LatSide*1.333))
{this.jm_GeoBoxSideMax=jt_LonSide;this.jm_bGBSMLon=true;}
else
{this.jm_GeoBoxSideMax=jt_LatSide;this.jm_bGBSMLon=false;}
if(this.jm_scaleX>=0.1&&this.jm_GeoBoxSideMax<0.1)
{this.jm_GeoBoxSideMax=75.0/this.jm_scaleX;this.jm_bGBSMLon=false;}
var jt_px=222.4;this.jm_KMSide=this.jm_GeoBoxSideMax*jt_px;return true;};this.AutoScale=function()
{var jt_pxx=(this.jm_bGBSMLon?100.0:75.0);if(this.jm_GeoBoxSideMax>=0.1)
{this.jm_scaleX=jt_pxx/this.jm_GeoBoxSideMax;this.jm_scaleY=jt_pxx/this.jm_GeoBoxSideMax;}
return true;};}
function A3xaImageMap_HotSpotRect(ji_XL,ji_YU,ji_W,ji_H)
{this.jm_XL=ji_XL;this.jm_YU=ji_YU;this.jm_W=ji_W;this.jm_H=ji_H;}
function A3xaImageMap_HotSpot(ji_o3ximap_Scale,ji_odc,ji_bBig,ji_fnClick)
{var jt_this=this;this.jm_odc=null;this.jm_Lon=0;this.jm_Lat=0;this.jm_sLabel="";this.jm_bBig=(ji_bBig||false);this.jm_fnClick=(ji_fnClick||null);this.jm_o3ximap_Scale=ji_o3ximap_Scale;this.jm_X=0;this.jm_Y=0;this.jm_XLeft=0;this.jm_XRight=0;this.jm_YUp=0;this.jm_YDown=0;this.jm_Zoom=0;this.A3xaConstructor=function()
{this._InitCoords();};this._InitCoords=function()
{if(!ji_odc)
return false;this.jm_odc=ji_odc;this.jm_Lon=(ji_odc.Get_3xEBIS().Get_Lon()||0);this.jm_Lat=(ji_odc.Get_3xEBIS().Get_Lat()||0);this.jm_sLabel=(ji_odc.Get_3xEBIS().Get_Name()||"");this._CalcRect(1);return true;};this._CalcRect=function(ji_Zoom)
{var jt_zoffX=1;var jt_zoffY=1;if(ji_Zoom>1.799)
{jt_zoffX=Number(1.8);jt_zoffY=Number(1.8);}
this.jm_X=Math.floor(this.jm_o3ximap_Scale.jm_offsetX*jt_zoffX+
(Number(this.jm_Lon)-this.jm_o3ximap_Scale.jm_LonCentre)*this.jm_o3ximap_Scale.jm_scaleX*ji_Zoom);this.jm_Y=Math.floor(this.jm_o3ximap_Scale.jm_offsetY*jt_zoffY-
(Number(this.jm_Lat)-this.jm_o3ximap_Scale.jm_LatCentre)*this.jm_o3ximap_Scale.jm_scaleY*ji_Zoom);this.jm_XLeft=((this.jm_X-2)|0);if(this.jm_XLeft<0)this.jm_XLeft=0;this.jm_XRight=((this.jm_X+2)|0);if(this.jm_XRight>=200)this.jm_XRight=199;this.jm_YUp=((this.jm_Y-2)|0);if(this.jm_YUp<0)this.jm_YUp=0;this.jm_YDown=((this.jm_Y+2)|0);if(this.jm_YDown>=150)this.jm_YDown=149;return true;};this._Get_Rect=function(ji_big,ji_Zoom)
{if(ji_Zoom===1||ji_Zoom>1.0)
this._CalcRect(ji_Zoom);var jt_XL=Math.floor(this.jm_XLeft);var jt_YU=Math.floor(this.jm_YUp);if(ji_big)
return new A3xaImageMap_HotSpotRect(jt_XL-8,jt_YU+0,24,24);return new A3xaImageMap_HotSpotRect(jt_XL,jt_YU,8,8);};this.Intersect=function(ji_o3xhs)
{return!(ji_o3xhs.jm_XLeft>this.jm_XRight||ji_o3xhs.jm_XRight<this.jm_XLeft||ji_o3xhs.jm_YUp>this.jm_YDown||ji_o3xhs.jm_YDown<this.jm_YUp);};this._MakeId=function()
{if(!this.jm_odc)
return"";var jt_ide=this.jm_odc.Get_3xXEID().Get_IdEntity();if(!(jt_ide>0))
return"";return"hsicon_"+jt_ide;};this.PrintHtml=function(qi_oParent,ji_sStarUrl,ji_sbgImageId)
{if(!(qi_oParent&&qi_oParent.length))
return false;var jt_hsrectNormal=this._Get_Rect(this.jm_bBig);var jt_hsrectBig=this._Get_Rect(true);var qt_oMapHS_Div=jQuery("<div>",{id:this._MakeId(),border:'0'});qt_oMapHS_Div.css({position:'absolute',top:jt_hsrectNormal.jm_YU.toString()+'px',left:jt_hsrectNormal.jm_XL.toString()+'px'});var qt_oMapHS_Link=jQuery("<a>",{href:'javascript:void(0)',title:this.jm_sLabel,});qt_oMapHS_Link.css({backgroundColor:'transparent'});if(this.jm_fnClick)
qt_oMapHS_Link.click(this.jm_fnClick);var qt_oMapHS_Icon=jQuery("<img>",{src:ji_sStarUrl,width:jt_hsrectNormal.jm_W,height:jt_hsrectNormal.jm_H,border:'0',});qt_oMapHS_Icon.hover(function()
{A3xaImageMap_HotSpotUpdIcon(jQuery(this),false,true,jt_this._Get_Rect(true,jt_this.jm_Zoom));},function()
{A3xaImageMap_HotSpotUpdIcon(jQuery(this),false,false,jt_this._Get_Rect(jt_this.jm_bBig,jt_this.jm_Zoom));});qi_oParent.append(qt_oMapHS_Div);qt_oMapHS_Div.append(qt_oMapHS_Link);qt_oMapHS_Link.append(qt_oMapHS_Icon);};this.HotSpotUpdIcon=function(ji_bBig)
{var jt_idq=this._MakeId();if(!jt_idq)
return false;this.jm_bBig=(ji_bBig||false);A3xaImageMap_HotSpotUpdIcon(jQuery('#'+jt_idq),true,this.jm_bBig,this._Get_Rect(this.jm_bBig,this.jm_Zoom));return true;};this.HotSpotZoom=function(ji_Zoom)
{var jt_idq=this._MakeId();if(!jt_idq)
return false;if(ji_Zoom)
this.jm_Zoom=ji_Zoom;else
this.jm_Zoom=0;A3xaImageMap_HotSpotUpdIcon(jQuery('#'+jt_idq),true,this.jm_bBig,this._Get_Rect(this.jm_bBig,this.jm_Zoom),true);return true;};this.A3xaConstructor();}
function A3xaImageMap_HotSpotUpdIcon(qi_o,ji_bDiv,ji_bBig,ji_rect,ji_Zoom,ji_bZoomOnly)
{if(!(qi_o&&qi_o.length))
return false;var qt_this=null;var qt_div=null;if(ji_bDiv)
{qt_div=qi_o;qt_this=qt_div.children().first();if(qt_this&&qt_this.length)
qt_this=qt_this.children().first();}
else
{qt_this=qi_o;qt_div=qt_this.parent().parent();}
if(!(qt_this&&qt_this.length))
return false;if(!(qt_div&&qt_div.length))
return false;qt_div.css({top:ji_rect.jm_YU.toString()+'px',left:ji_rect.jm_XL.toString()+'px'});if(ji_bZoomOnly)
return true;qt_this.width(ji_rect.jm_W);qt_this.height(ji_rect.jm_H);if(ji_bBig)
{}
else
{var qt_divOuter=qt_div.parent();if(qt_divOuter&&qt_divOuter.length)
{qt_div.detach();qt_divOuter.prepend(qt_div);}}
return true;}
function A3xaImageMap_AZNC_ZoomContext()
{this.jm_qMapDiv_css="";this.jm_qMapImg_css="";this.Save=function(qi_oMapDiv,qi_oMapImg)
{this.jm_qMapDiv_css=qi_oMapDiv.attr('style');this.jm_qMapImg_css=qi_oMapImg.attr('style');return true;}
this.Restore=function(qi_oMapDiv,qi_oMapImg)
{qi_oMapDiv.attr('style',this.jm_qMapDiv_css);qi_oMapImg.attr('style',this.jm_qMapImg_css);return true;}}
function A3xaImageMap_AZNC(ji_odt,ji_oxeidFilter,ji_fnZoom)
{var jt_this=this;this.jm_odt=(ji_odt||null);this.jm_oxeidFilter=(ji_oxeidFilter||new A3xaDCEntity());this.jm_ao3ximhs=null;this.jm_o3ximap_Scale=null;this.jm_AZNC_code=null;this.jm_fnZoon=(ji_fnZoom||null);this.jm_o3xzoomctx=null;this.A3xaConstructor=function()
{if(this.IsLA())
{this.jm_o3ximap_Scale=new A3xaImageMap_Scale(85,75,1.5,1.5);this.jm_AZNC_code="LA";}
else if(this.IsArea())
{this.jm_o3ximap_Scale=new A3xaImageMap_Scale(100,70,20,20);this.jm_AZNC_code=this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Get_Code(false,false);}
else if(this.IsRegion())
{this.jm_o3ximap_Scale=new A3xaImageMap_Scale(100,70,200,200);this.jm_AZNC_code=this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Get_Code(true,false);}};this.IsLA=function()
{if(!this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Get_A()||this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Get_A()=='L')
return true;return false;};this.IsYB=function()
{if(this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().IsEmpty()||New_A3xaAZNC_XApp(this.jm_oxeidFilter.Get_3xXEID()).IsBestFromBabylon())
return true;return false;};this.IsArea=function()
{if(this.IsLA()||this.IsYB())
return false;if(!this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Get_Z())
return false;if(!this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Get_N())
return true;return false;};this.IsRegion=function()
{if(this.IsLA()||this.IsYB())
return false;if(this.IsArea())
return false;if(!this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Get_C())
return true;return false;};this.IsCurrent=function(ji_odc)
{if(!ji_odc)
return false;if(!jg_oApp.Get_AppXUR().Get_3xXUR())
return false;return(jg_oApp.Get_AppXUR().Get_3xXUR().Get_3xXEID().Get_3xAZNC().Matches(ji_odc.Get_3xXEID(),true,this.IsArea(),this.IsRegion()));};this._Get_OnClickCallback=function(ji_odc,ji_Row,ji_Col)
{if(!ji_odc)
return null;var jt_QUR=jc_gl.jc_oQUR.jc_QUR_QueryLimSBS;var jt_odc=new A3xaDCEntity();jt_odc.CopyFrom(ji_odc,true,false,false,false);jt_odc.Get_3xXEID().Set_GEID(jc_gl.jc_oEntity.jc_Typ_Enterprise,null,null,null);jt_odc.Get_3xXEID().Get_3xCat().Clear();if(this.IsArea())
{jt_QUR=jc_gl.jc_oQUR.jc_QUR_QuerySBS;jt_odc.Get_3xXEID().Get_3xAZNC().Clear_C();}
else if(this.IsRegion())
{jt_QUR=jc_gl.jc_oQUR.jc_QUR_QuerySBS;}
else
{jt_odc.Get_3xXEID().Get_3xAZNC().Clear_NC();}
jt_odc.Get_3xXEID().Get_3xPS().Clear();var jt_sxeid=(jt_odc.Get_3xXEID().Get_String()||"");if(!jt_sxeid)
return null;var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(null,null,null,jt_QUR,jt_sxeid,null,null,null);var qt_oMapDiv=jQuery('#'+this._MakeId(ji_Row,ji_Col));var jr_fnClick=function(ji_event)
{ji_event.stopImmediatePropagation();jt_this.OnZoom(qt_oMapDiv,-100,ji_Row,ji_Col);return jg_oApp.Get_AppXUR().OnChange_QUR("p3x="+jt_oxur.Get_XURString());};return jr_fnClick;};this._MakeId=function(ji_Row,ji_Col)
{var jr_sQHMapId="Cell_NavMapUnk_"+ji_Row+"_"+ji_Col;if(this.IsLA()||this.IsYB())
jr_sQHMapId="Cell_NavMapLA_"+ji_Row+"_"+ji_Col;else if(this.IsArea())
jr_sQHMapId="Cell_NavMapArea_"+ji_Row+"_"+ji_Col;else if(this.IsRegion())
jr_sQHMapId="Cell_NavMapRegion_"+ji_Row+"_"+ji_Col;return jr_sQHMapId;};this.Foreground=function(ji_Row,ji_Col)
{var jt_sQHMapId=this._MakeId(ji_Row,ji_Col);var qt_oMapDiv=jQuery("#"+jt_sQHMapId);if(!(qt_oMapDiv&&qt_oMapDiv.length))
return false;var qt_oCell=qt_oMapDiv.parent();if(!(qt_oCell&&qt_oCell.length))
return false;qt_oMapDiv.detach();qt_oCell.append(qt_oMapDiv);return true;};this._Get_UrlImageMap=function(ji_bBlank)
{var jt_AZNC_code=this.jm_AZNC_code;if(ji_bBlank===true)
{if(this.IsArea())
jt_AZNC_code="A0";else if(this.IsRegion())
jt_AZNC_code="R0";else
jt_AZNC_code="";}
if(!jt_AZNC_code)
return"";return jc_gl.Get_UrlImageMap(jt_AZNC_code);};this.PrintHtml=function(qi_oCell,ji_Row,ji_Col)
{if(!this.jm_odt)
return false;var jt_sMapUrlBlank=this._Get_UrlImageMap(true);var jt_sMapUrl=this._Get_UrlImageMap();var jt_sQHMapId=this._MakeId(ji_Row,ji_Col);var qt_oMapDiv=jQuery("<div>",{id:jt_sQHMapId,width:'202',height:'152',border:'0'});qt_oMapDiv.css({position:'absolute',top:'0px',left:'2px','box-shadow':'3px 3px 10px #000000'});if(!(qt_oMapDiv&&qt_oMapDiv.length))
return false;var qt_oMapImg=jQuery("<img>",{width:'200',height:'150',border:'0'});if(!(qt_oMapImg&&qt_oMapImg.length))
return false;qt_oMapImg.error(function()
{var qt_this=jQuery(this);var jt_src=qt_this.attr("src");if(jt_src!=jt_sMapUrlBlank)
qt_this.attr("src",jt_sMapUrlBlank);});qt_oMapImg.attr("src",jt_sMapUrl);qt_oMapImg.css({position:'absolute',top:'1px',left:'1px'});qi_oCell.append(qt_oMapDiv);qt_oMapDiv.append(qt_oMapImg);var jt_CountHS=0;if(ji_odt)
jt_CountHS=ji_odt.jm_aoglr.Get_Count();var jt_ao3ximhs=new Array();var jt_LonMin=0.0;var jt_LatMin=0.0;var jt_LonMax=0.0;var jt_LatMax=0.0;var jt_bdynoffinit=false;var i=0;for(i=0;i<jt_CountHS;i++)
{var jt_oglr=this.jm_odt.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oglr)
continue;if(this.IsLA()||this.IsYB()||(this.IsArea()&&this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Matches(jt_oglr.Get_3xXEID(),true,false,false))||(this.IsRegion()&&this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Matches(jt_oglr.Get_3xXEID(),true,true,false)))
{var jt_lon=Number(jt_oglr.Get_3xEBIS().Get_Lon());var jt_lat=Number(jt_oglr.Get_3xEBIS().Get_Lat());if(!jt_bdynoffinit)
{jt_bdynoffinit=true;jt_LonMax=jt_LonMin=jt_lon;jt_LatMax=jt_LatMin=jt_lat;}
else
{if(jt_LonMin>jt_lon)
jt_LonMin=jt_lon;if(jt_LatMin<jt_lat)
jt_LatMin=jt_lat;if(jt_LonMax<jt_lon)
jt_LonMax=jt_lon;if(jt_LatMax>jt_lat)
jt_LatMax=jt_lat;}}}
this.jm_o3ximap_Scale.Set_Box(jt_LonMin,jt_LatMin,jt_LonMax,jt_LatMax);if(this.IsArea()||this.IsRegion())
this.jm_o3ximap_Scale.AutoScale();for(i=0;i<jt_CountHS;i++)
{var jt_oglr=this.jm_odt.jm_aoglr.Get_Item_ByIndex(i);if(!jt_oglr)
continue;if(this.IsLA()||this.IsYB()||(this.IsArea()&&this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Matches(jt_oglr.Get_3xXEID(),true,false,false))||(this.IsRegion()&&this.jm_oxeidFilter.Get_3xXEID().Get_3xAZNC().Matches(jt_oglr.Get_3xXEID(),true,true,false)))
{var jt_bCurrent=this.IsCurrent(jt_oglr);var jt_o3ximhs=new A3xaImageMap_HotSpot(this.jm_o3ximap_Scale,jt_oglr,jt_bCurrent,this._Get_OnClickCallback(jt_oglr,ji_Row,ji_Col));if(jt_bCurrent)
jt_ao3ximhs.unshift(jt_o3ximhs);else
jt_ao3ximhs.push(jt_o3ximhs);}}
jt_CountHS=jt_ao3ximhs.length;var qt_oMapDivHSBox=jQuery("<div>",{width:'202',height:'152',border:'0'});qt_oMapDivHSBox.css({position:'absolute',top:'0px',left:'0px'});if(!(qt_oMapDivHSBox&&qt_oMapDivHSBox.length))
return false;qt_oMapDiv.append(qt_oMapDivHSBox);qt_oMapDiv.click(function()
{return jt_this.OnZoom(jQuery(this),0,ji_Row,ji_Col);});var jt_sHSStarUrl=jc_gl.MakeUrlIcon_Main("Star-icon-32x32");for(i=0;i<jt_CountHS;i++)
jt_ao3ximhs[i].PrintHtml(qt_oMapDivHSBox,jt_sHSStarUrl,jt_sQHMapId);this.jm_ao3ximhs=jt_ao3ximhs;return true;};this._Get_QImg=function(qi_oMapDiv)
{if(!(qi_oMapDiv&&qi_oMapDiv.length))
return null;var jt_aqChildren=qi_oMapDiv.children();for(var i=0;i<jt_aqChildren.length;i++)
{var qr_oChild=jQuery(jt_aqChildren[i]);if(qr_oChild.is("img"))
return qr_oChild;}
return null;}
this.OnZoom=function(qi_oMapDiv,ji_TypZoom,ji_Row,ji_Col)
{if(!this.jm_fnZoom)
return false;if(!(this.IsRegion()||ji_TypZoom==-100))
return false;var jt_TypZoom=this.jm_fnZoom(this,qi_oMapDiv,ji_TypZoom,ji_Row,ji_Col);};this.Zoom=function(qi_oMapDiv,ji_TypZoom,ji_Row,ji_Col)
{if(!(qi_oMapDiv&&qi_oMapDiv.length))
{qi_oMapDiv=jQuery('#'+this._MakeId(ji_Row,ji_Col));if(!(qi_oMapDiv&&qi_oMapDiv.length))
return false;}
var qt_oImg=this._Get_QImg(qi_oMapDiv);if(!(qt_oImg&&qt_oImg.length))
return false;if(!this.IsRegion())
return false;if(ji_TypZoom===1)
{if(!this.jm_o3xzoomctx)
{this.jm_o3xzoomctx=new A3xaImageMap_AZNC_ZoomContext();this.jm_o3xzoomctx.Save(qi_oMapDiv,qt_oImg);}
qi_oMapDiv.css({width:'362px',height:'272px'});qt_oImg.css({width:'360px',height:'270px'});if(this.jm_ao3ximhs)
{for(var i=0;i<this.jm_ao3ximhs.length;i++)
this.jm_ao3ximhs[i].HotSpotZoom(Number(1.8));}}
else if(ji_TypZoom===2)
{if(this.jm_ao3ximhs)
{for(var i=0;i<this.jm_ao3ximhs.length;i++)
this.jm_ao3ximhs[i].HotSpotZoom(Number(3.4));}}
else if(ji_TypZoom===-1)
{if(this.jm_o3xzoomctx)
{if(this.jm_ao3ximhs)
{for(var i=0;i<this.jm_ao3ximhs.length;i++)
this.jm_ao3ximhs[i].HotSpotZoom(1);}
this.jm_o3xzoomctx.Restore(qi_oMapDiv,qt_oImg);this.jm_o3xzoomctx=null;}}
return true;};this.ShowSelectedHotSpot=function(ji_aoxeid)
{if(!(this.jm_ao3ximhs&&ji_aoxeid))
return false;var ihs=0;var szhs=this.jm_ao3ximhs.length;var isel=0;var szsel=ji_aoxeid.length;for(ihs=0;ihs<szhs;ihs++)
{var jt_o3ximhs=this.jm_ao3ximhs[ihs];var jt_bigSelected=false;for(isel=0;isel<szsel;isel++)
{var jt_oxeidsel=ji_aoxeid[isel];if(!jt_oxeidsel)
continue;if(jt_o3ximhs.jm_odc.Get_3xXEID().Get_3xAZNC().Matches(jt_oxeidsel.Get_3xXEID(),false,true,true))
{jt_bigSelected=true;break;}}
jt_o3ximhs.HotSpotUpdIcon(jt_bigSelected);}
return true;};this.A3xaConstructor();};function A3xaImageMap_Tab(ji_sTypArea,ji_Row,ji_Col,ji_fnOver,ji_bEnable)
{var jt_this=this;this.jm_sTypArea=(ji_sTypArea||"");this.jm_Row=ji_Row;this.jm_Col=ji_Col;this.jm_fnOver=(ji_fnOver||null);this.jm_bEnable=(ji_bEnable===true);this.Get_Id=function()
{return"Cell_ImgTabs_"+this.jm_sTypArea+"_"+this.jm_Row+"_"+this.jm_Col;};this.Get_UrlIcon=function(ji_Status)
{if(!ji_Status)
ji_Status="DIS";var jt_sIconPrefix="";if(this.jm_sTypArea=="LA")
jt_sIconPrefix=jc_gl.jc_oIcons.jc_sIconPrefix_StaticMapLA;else if(this.jm_sTypArea=="Area")
jt_sIconPrefix=jc_gl.jc_oIcons.jc_sIconPrefix_StaticMapArea;else if(this.jm_sTypArea=="Region")
jt_sIconPrefix=jc_gl.jc_oIcons.jc_sIconPrefix_StaticMapRegion;return jc_gl.MakeUrlIcon_UserControls(jt_sIconPrefix+ji_Status,true);};this.PrintHtml=function(qi_oParent)
{var jt_sQHTabsImg=this.Get_Id();var jt_surlIcon_DIS=this.Get_UrlIcon("DIS");var qt_oTabsImg=jQuery("<img>",{id:jt_sQHTabsImg,src:jt_surlIcon_DIS,width:'16',height:'16',border:'0'});if(!(qt_oTabsImg&&qt_oTabsImg.length))
return false;qt_oTabsImg.hover(function(){jt_this.UpdateStatus("ON");},function(){});qi_oParent.append(qt_oTabsImg);return true;};this.Get_Status=function(qi_oThis)
{if(!(qi_oThis&&qi_oThis.length))
{qi_oThis=jQuery("#"+this.Get_Id());if(!(qi_oThis&&qi_oThis.length))
return null;}
var jt_urlCur=qi_oThis.attr('src');if(jt_urlCur==this.Get_UrlIcon("DIS"))
return"DIS";if(jt_urlCur==this.Get_UrlIcon("ON"))
return"ON";if(jt_urlCur==this.Get_UrlIcon("OFF"))
return"OFF";return null;};this.UpdateStatus=function(ji_Status)
{if(!ji_Status)
return false;var jt_fnOver=this.jm_fnOver;var qt_oTabsImg=jQuery("#"+this.Get_Id());if(!(qt_oTabsImg&&qt_oTabsImg.length))
return false;var jt_StatusCur=this.Get_Status(qt_oTabsImg);if(!jt_StatusCur)
return false;if(jt_StatusCur==ji_Status)
return true;if(jt_StatusCur=="DIS"&&!this.jm_bEnable)
return false;if(ji_Status=="ON")
{if(this.jm_fnOver&&!this.jm_fnOver(this))
return false;}
qt_oTabsImg.attr('src',this.Get_UrlIcon(ji_Status));return true;};}
function A3xaImageMap_Tabs(ji_fnChangeTab,ji_bEnableArea)
{this.jm_fnChangeTab=(ji_fnChangeTab||null);this.jm_bEnableLA=true;this.jm_bEnableArea=(ji_bEnableArea||false);this.jm_bEnableRegion=false;this.jm_KM=Number(0.0);this._MakeId=function(ji_Row,ji_Col)
{var jr_sQHTabsDiv="Cell_DivTabs_"+ji_Row+"_"+ji_Col;return jr_sQHTabsDiv;};this.PrintHtml=function(qi_oCell,ji_Row,ji_Col)
{var jt_sQHTabsDiv=this._MakeId(ji_Row,ji_Col);var qt_oTabsDiv=jQuery("<div>",{id:jt_sQHTabsDiv,});qt_oTabsDiv.css({position:'relative'});qi_oCell.append(qt_oTabsDiv);var jt_fnOver=null;var jt_o3ximap_tab_LA=new A3xaImageMap_Tab("LA",ji_Row,ji_Col,jt_fnOver,true);var jt_o3ximap_tab_Area=new A3xaImageMap_Tab("Area",ji_Row,ji_Col,jt_fnOver,this.jm_bEnableArea);var jt_o3ximap_tab_Region=new A3xaImageMap_Tab("Region",ji_Row,ji_Col,jt_fnOver,this.jm_bEnableRegion);var jt_fnChangeTab=this.jm_fnChangeTab;var jt_fnOver=function(ji_o3ximap_tab)
{if(jt_fnChangeTab&&!jt_fnChangeTab(ji_o3ximap_tab))
return false;if(ji_o3ximap_tab.jm_sTypArea!="LA")
jt_o3ximap_tab_LA.UpdateStatus("OFF");if(ji_o3ximap_tab.jm_sTypArea!="Area")
jt_o3ximap_tab_Area.UpdateStatus("OFF");if(ji_o3ximap_tab.jm_sTypArea!="Region")
jt_o3ximap_tab_Region.UpdateStatus("OFF");return true;};jt_o3ximap_tab_LA.jm_fnOver=jt_fnOver;jt_o3ximap_tab_Area.jm_fnOver=jt_fnOver;jt_o3ximap_tab_Region.jm_fnOver=jt_fnOver;jt_o3ximap_tab_LA.PrintHtml(qt_oTabsDiv);jt_o3ximap_tab_Area.PrintHtml(qt_oTabsDiv);jt_o3ximap_tab_Region.PrintHtml(qt_oTabsDiv);jt_o3ximap_tab_LA.UpdateStatus("ON");jt_o3ximap_tab_Area.UpdateStatus("OFF");jt_o3ximap_tab_Region.UpdateStatus("OFF");if(this.jm_bEnableRegion)
jt_o3ximap_tab_Region.UpdateStatus("ON");else if(this.jm_bEnableArea)
jt_o3ximap_tab_Area.UpdateStatus("ON");else
jt_o3ximap_tab_LA.UpdateStatus("ON");var qt_oSpanKM=jQuery("<span>",{});qt_oTabsDiv.append(qt_oSpanKM);qt_oSpanKM.text("km="+this.jm_KM);return true;};this.RefreshKM=function(ji_KM,ji_Row,ji_Col)
{if(ji_KM<0.0)
return false;var jt_sQHTabsDiv=this._MakeId(ji_Row,ji_Col);var qt_oTabsDiv=jQuery('#'+jt_sQHTabsDiv);if(!(qt_oTabsDiv&&qt_oTabsDiv.length))
return false;var jt_aqChildren=qt_oTabsDiv.children();var qt_oSpanKM=null;for(var i=0;i<jt_aqChildren.length;i++)
{var qt_oChild=jQuery(jt_aqChildren[i]);if(qt_oChild.is("span"))
{qt_oSpanKM=qt_oChild;break;}}
if(!(qt_oSpanKM&&qt_oSpanKM.length))
return false;if(ji_KM>=0.1)
qt_oSpanKM.text(" km "+Math.floor(ji_KM*1.333)+"x"+Math.floor(ji_KM));else
qt_oSpanKM.text("");return true;};}
function A3xaImageMap_ZoomContext()
{this.jm_TypZoom=-1;this.jm_qMapIntDiv_css="";this.qm_oHook=null;this.qm_oParent=null;this.Save=function(qi_oMapIntDiv)
{this.jm_TypZoom=1;this.jm_qMapIntDiv_css=qi_oMapIntDiv.attr('style');this.qm_oHook=qi_oMapIntDiv.prev();this.qm_oParent=qi_oMapIntDiv.parent();return true;}
this.Restore=function(qi_oMapIntDiv)
{qi_oMapIntDiv.attr('style',this.jm_qMapIntDiv_css);qi_oMapIntDiv.detach();if(this.qm_oHook&&this.qm_oHook.length)
this.qm_oHook.after(qi_oMapIntDiv);else
this.qm_oParent.append(qi_oMapIntDiv);return true;}}
function A3xaMgrLand_InteractiveMap()
{var jt_this=this;this.jm_o3ximapTabs=null;this.jm_o3ximapLA=null;this.jm_o3ximapArea=null;this.jm_o3ximapRegion=null;this.jm_o3ximapzoomctx=null;this.A3xaConstructor=function()
{var jt_oxur=jg_oApp.Get_AppXUR().Get_3xXUR().Get_3xXEID();this.jm_o3ximapTabs=new A3xaImageMap_Tabs(null);var jt_ogldtGeoArea=jg_oe.Get_Database().Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoArea);this.jm_o3ximapLA=new A3xaImageMap_AZNC(jt_ogldtGeoArea,null);if(jt_oxur&&jt_oxur.Get_3xXEID().Get_3xAZNC().Get_Z()&&!New_A3xaAZNC_XApp(jt_oxur.Get_3xXEID()).IsLA()&&!New_A3xaAZNC_XApp(jt_oxur.Get_3xXEID()).IsBestFromBabylon())
{this.jm_o3ximapTabs.jm_bEnableArea=true;var jt_ogldtGeoRegion=jg_oe.Get_Database().Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoRegion);var jt_oxeidArea=new A3xaDCEntity();jt_oxeidArea.Get_3xXEID().Set_3xAZ(jt_oxur);this.jm_o3ximapArea=new A3xaImageMap_AZNC(jt_ogldtGeoRegion,jt_oxeidArea);if(jt_oxur.Get_3xXEID().Get_3xAZNC().Get_N())
{this.jm_o3ximapTabs.jm_bEnableRegion=true;var jt_ogldtGeoCity=jg_oe.Get_Database().Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_GeoCity);var jt_oxeidRegion=new A3xaDCEntity();jt_oxeidRegion.Get_3xXEID().Set_3xAZN(jt_oxur.Get_3xXEID());var jt_fnZoom=null;this.jm_o3ximapRegion=new A3xaImageMap_AZNC(jt_ogldtGeoCity,jt_oxeidRegion,jt_fnZoom);}}};this.PrintHtml=function(qi_oCell,ji_Row,ji_Col)
{var jt_sQHMapIntDiv="Cell_DivMapint_"+ji_Row+"_"+ji_Col;var qt_oMapIntDiv=jQuery("<div>",{id:jt_sQHMapIntDiv,width:'204',height:'174',border:'0'});qt_oMapIntDiv.css({position:'relative'});qi_oCell.append(qt_oMapIntDiv);if(this.jm_o3ximapTabs)
{var jt_o3ximapLA=this.jm_o3ximapLA;var jt_o3ximapArea=this.jm_o3ximapArea;var jt_o3ximapRegion=this.jm_o3ximapRegion;this.jm_o3ximapTabs.jm_fnChangeTab=function(ji_o3ximap_tab)
{if(!ji_o3ximap_tab)
return false;if(ji_o3ximap_tab.jm_sTypArea=="LA")
{jt_o3ximapLA.Foreground(ji_Row,ji_Col);if(jt_o3ximapLA&&jt_o3ximapLA.jm_o3ximap_Scale)
jt_this.jm_o3ximapTabs.RefreshKM(0.0,ji_Row,ji_Col);return true;}
else if(ji_o3ximap_tab.jm_sTypArea=="Area")
{jt_o3ximapArea.Foreground(ji_Row,ji_Col);if(jt_o3ximapArea&&jt_o3ximapArea.jm_o3ximap_Scale)
jt_this.jm_o3ximapTabs.RefreshKM(jt_o3ximapArea.jm_o3ximap_Scale.jm_KMSide,ji_Row,ji_Col);return true;}
else if(ji_o3ximap_tab.jm_sTypArea=="Region")
{jt_o3ximapRegion.Foreground(ji_Row,ji_Col);if(jt_o3ximapRegion&&jt_o3ximapRegion.jm_o3ximap_Scale)
{var jt_KM=jt_this.jm_o3ximapRegion.jm_o3ximap_Scale.jm_KMSide;if(jt_this.jm_o3ximapzoomctx&&jt_this.jm_o3ximapzoomctx.jm_TypZoom==2)
jt_KM*=1.8/3.4;jt_this.jm_o3ximapTabs.RefreshKM(jt_KM,ji_Row,ji_Col);}
return true;}
return false;};this.jm_o3ximapTabs.PrintHtml(qt_oMapIntDiv,ji_Row,ji_Col);}
var qt_oMapDiv=jQuery("<div>",{});qt_oMapDiv.css({position:'relative'});qt_oMapIntDiv.append(qt_oMapDiv);var jt_fnZoom=function(ji_o3ximap,qi_o3ximapDiv,ji_TypZoom,ji_Row,ji_Col)
{if(!(ji_o3ximap&&qi_o3ximapDiv&&qi_o3ximapDiv.length))
return false;var qt_oMapIntDiv2=qi_o3ximapDiv.parent().parent();if(!(qt_oMapIntDiv2&&qt_oMapIntDiv2.length))
return false;if(!jt_this.jm_o3ximapzoomctx)
{if(ji_TypZoom==-100)
return false;}
if(!jt_this.jm_o3ximapzoomctx)
{jt_this.jm_o3ximapzoomctx=new A3xaImageMap_ZoomContext();jt_this.jm_o3ximapzoomctx.Save(qt_oMapIntDiv2);var jt_pos=qt_oMapIntDiv2.offset();qt_oMapIntDiv2.css({position:'absolute',left:(Math.floor(jt_pos.left)-160).toString()+'px',top:(Math.floor(jt_pos.top)-0).toString()+'px',width:'364px',height:'300px','z-index':1000,'background-color':'#FFFFFF','box-shadow':'3px 3px 10px #000000'});qt_oMapIntDiv2.detach();qt_oMapIntDiv2.appendTo("body");if(jt_this.jm_o3ximapRegion)
jt_this.jm_o3ximapRegion.Zoom(null,jt_this.jm_o3ximapzoomctx.jm_TypZoom,ji_Row,ji_Col);}
else if(jt_this.jm_o3ximapzoomctx.jm_TypZoom==1)
{jt_this.jm_o3ximapzoomctx.jm_TypZoom=2;if(jt_this.jm_o3ximapRegion)
jt_this.jm_o3ximapRegion.Zoom(null,jt_this.jm_o3ximapzoomctx.jm_TypZoom,ji_Row,ji_Col);if(jt_this.jm_o3ximapRegion&&jt_this.jm_o3ximapRegion.jm_o3ximap_Scale)
{var jt_KM=jt_this.jm_o3ximapRegion.jm_o3ximap_Scale.jm_KMSide*1.8/3.4;jt_this.jm_o3ximapTabs.RefreshKM(jt_KM,ji_Row,ji_Col);}}
else
{jt_this.jm_o3ximapzoomctx.jm_TypZoom=-1;if(jt_this.jm_o3ximapRegion)
jt_this.jm_o3ximapRegion.Zoom(null,jt_this.jm_o3ximapzoomctx.jm_TypZoom,ji_Row,ji_Col);jt_this.jm_o3ximapzoomctx.Restore(qt_oMapIntDiv2);if(jt_this.jm_o3ximapRegion&&jt_this.jm_o3ximapRegion.jm_o3ximap_Scale)
{var jt_KM=jt_this.jm_o3ximapRegion.jm_o3ximap_Scale.jm_KMSide;jt_this.jm_o3ximapTabs.RefreshKM(jt_KM,ji_Row,ji_Col);}
jt_this.jm_o3ximapzoomctx=null;}};if(this.jm_o3ximapRegion)
this.jm_o3ximapRegion.jm_fnZoom=jt_fnZoom;if(this.jm_o3ximapArea)
this.jm_o3ximapArea.jm_fnZoom=jt_fnZoom;if(this.jm_o3ximapLA)
this.jm_o3ximapLA.jm_fnZoom=jt_fnZoom;if(this.jm_o3ximapTabs.jm_bEnableRegion)
{if(this.jm_o3ximapLA)
this.jm_o3ximapLA.PrintHtml(qt_oMapDiv,ji_Row,ji_Col);if(this.jm_o3ximapArea)
this.jm_o3ximapArea.PrintHtml(qt_oMapDiv,ji_Row,ji_Col);if(this.jm_o3ximapRegion)
this.jm_o3ximapRegion.PrintHtml(qt_oMapDiv,ji_Row,ji_Col);if(this.jm_o3ximapRegion&&this.jm_o3ximapRegion.jm_o3ximap_Scale)
this.jm_o3ximapTabs.RefreshKM(this.jm_o3ximapRegion.jm_o3ximap_Scale.jm_KMSide,ji_Row,ji_Col);}
else if(this.jm_o3ximapTabs.jm_bEnableArea)
{if(this.jm_o3ximapRegion)
this.jm_o3ximapRegion.PrintHtml(qt_oMapDiv,ji_Row,ji_Col);if(this.jm_o3ximapLA)
this.jm_o3ximapLA.PrintHtml(qt_oMapDiv,ji_Row,ji_Col);if(this.jm_o3ximapArea)
this.jm_o3ximapArea.PrintHtml(qt_oMapDiv,ji_Row,ji_Col);if(this.jm_o3ximapArea&&this.jm_o3ximapArea.jm_o3ximap_Scale)
this.jm_o3ximapTabs.RefreshKM(this.jm_o3ximapArea.jm_o3ximap_Scale.jm_KMSide,ji_Row,ji_Col);}
else
{if(this.jm_o3ximapArea)
this.jm_o3ximapArea.PrintHtml(qt_oMapDiv,ji_Row,ji_Col);if(this.jm_o3ximapRegion)
this.jm_o3ximapRegion.PrintHtml(qt_oMapDiv,ji_Row,ji_Col);if(this.jm_o3ximapLA)
this.jm_o3ximapLA.PrintHtml(qt_oMapDiv,ji_Row,ji_Col);if(this.jm_o3ximapLA&&this.jm_o3ximapLA.jm_o3ximap_Scale)
this.jm_o3ximapTabs.RefreshKM(0.0,ji_Row,ji_Col);}
return true;};this.ShowSelectedHotSpot=function(ji_aoxeid)
{if(this.jm_o3ximapRegion&&!this.jm_o3ximapRegion.ShowSelectedHotSpot(ji_aoxeid))
return false;return true;};this.A3xaConstructor();};function A3xaECPOrder_DDIOption(ji_sKey,ji_sValue,ji_sDescr)
{A3xaDDItem.call(this,ji_sKey,ji_sValue,ji_sDescr);}
function A3xaECPOrder_Mgr()
{var jt_this=this;this.jc_Opt_By=100;this.jc_Opt_ByScore=1000;this.jc_Opt_ByScoreDesc=1200;this.jc_Opt_ByTime=2000;this.jc_Opt_ByTimeDesc=2200;this.jm_oddi=new A3xaECPOrder_DDIOption();this.jm_oddbox=new A3xaDDSelectBox(this.jm_oddi,"ECPOrder","Orden");this.jm_oddbox.NewDDItem=function(){return new A3xaECPOrder_DDIOption();};this.jm_oddbox.OnChange=function(ji_eddbox,ji_oddi)
{return jt_this.OnChangeDD_Order(ji_eddbox,ji_oddi);};this.OnChangeDD_Order=function(ji_eddbox,ji_oddi)
{var jt_oDatabase=jg_oe.Get_Database();var jt_odtMain=jt_oDatabase.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Enterprise);var jt_ohes=jg_oe.Get_HtmlSetEntity();var jt_oxur=jg_oApp.Get_AppXUR().Get_3xXUR();var jt_oxurNew=new A3xaXur();jt_oxurNew.CopyFromXUR(jt_oxur);if(ji_oddi.Get_Value()==this.jc_Opt_ByTimeDesc)
{if(!jt_oxurNew.ConvertQURSort(false))
return false;return jg_oApp.Get_AppXUR().OnChange_QUR("p3x="+jt_oxurNew.Get_XURString());}
else if(ji_oddi.Get_Value()==this.jc_Opt_ByScoreDesc)
{if(!jt_oxurNew.ConvertQURSort(true))
return false;return jg_oApp.Get_AppXUR().OnChange_QUR("p3x="+jt_oxurNew.Get_XURString());}
else
return false;return true;};this.PrintHtmlDD=function(qi_oParent)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","","A3xaECPOrder_Mgr.PrintHtml");if(!this.jm_oddbox.PrintHtml(qi_oParent))
return false;return true;};this.LoadDataDD=function()
{this.jm_oddbox.jm_bShowCount=false;var jt_oxur=jg_oApp.Get_AppXUR().Get_3xXUR();if(jt_oxur.IsSortByTime())
this.jm_oddbox.jm_sKeySelected=this.jc_Opt_ByTimeDesc;else
this.jm_oddbox.jm_sKeySelected=this.jc_Opt_ByScoreDesc;this.jm_oddi.jm_bVisible=false;var jt_oddip=new A3xaECPOrder_DDIOption(this.jc_Opt_By,this.jc_Opt_By,"Order by");this.jm_oddi.Add_Child(jt_oddip);jt_oddip.jm_bVisible=false;jt_oddip.Add_Child(new A3xaECPOrder_DDIOption(this.jc_Opt_ByScoreDesc,this.jc_Opt_ByScoreDesc,"Clasificación"));jt_oddip.Add_Child(new A3xaECPOrder_DDIOption(this.jc_Opt_ByTimeDesc,this.jc_Opt_ByTimeDesc,"Tiempo"));return true;};}
function A3xaECP_Mgr(ji_oxe,ji_o3xehf)
{A3xaEntity_Html.call(this,ji_oxe,ji_o3xehf);var jt_this=this;this.jm_oDDCategoryCode=null;this.jm_oDDPairLand=null;this.jm_o3xMgrLand_IMap=null;var jt_oxeidHL=jg_oApp.Get_AppXUR().Get_3xXUR().Get_XEIDHighlights();if(jt_oxeidHL)
{var jt_odcSelected=new A3xaDCEntity();jt_odcSelected.Get_3xXEID().CopyFrom(jt_oxeidHL);jt_odcSelected.Get_3xXEID().Clear_GEID();jt_odcSelected.Get_3xXEID().Get_3xCat().Clear();jt_odcSelected.Get_3xXEID().Get_3xPS().Clear();jt_oDDPairLand=new A3xaDDItemEntity();jt_oDDPairLand.Set_DCEntity(jt_odcSelected);this.jm_oDDPairLand=jt_oDDPairLand;}
this.jm_oecpOrder=new A3xaECPOrder_Mgr();this.jm_RowHtmlMasterPanel=-1;this.jm_nofPanels=1;this.Set_MasterPanelRow=function(ji_Row)
{if(ji_Row<=0)
return false;if(this.jm_RowHtmlMasterPanel>=0)
return this.jm_RowHtmlMasterPanel==ji_Row;this.jm_RowHtmlMasterPanel=ji_Row;return true;};this.ResetECP=function()
{this.jm_oDDCategoryCode=null;this.jm_oDDPairLand=null;this.jm_RowHtmlMasterPanel=-1;this.jm_oecpOrder=null;this.jm_o3xMgrLand_IMap=null;return true;};this.PrintHtml_FilterBoxCP=function(qi_oCell,ji_Row,ji_Col,ji_oCPLandButtonStatus)
{var jt_bMasterCP=this.Set_MasterPanelRow(ji_Row);jg_oe.CanLogInfo()&&jg_oe.LogInfo("mcp,row: "+
jt_bMasterCP+","+ji_Row,"","A3xaECP_Mgr.PrintHtml_FilterBoxCP");if((this.jm_nofPanels==1&&jt_bMasterCP)||(this.jm_nofPanels>=2&&!jt_bMasterCP))
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("","","A3xaECP_Mgr.PrintHtml_FilterBox");var jt_bBestFromBabylon=New_A3xaAZNC_XApp(this.jm_oxe.Get_3xXEID()).IsBestFromBabylon();var jt_oglmLand=new GLMgrLand();var jt_oglmCategory=new GLMgrCategory(jt_bBestFromBabylon);if(!jt_bBestFromBabylon)
{var jt_bRequestArea=true;var jt_o3xmlra=jt_oglmLand.Get_MgrRequestArea(jc_gl.jc_oEntity.jc_Typ_GeoArea);jt_bRequestArea=jt_o3xmlra.LoadDataDD();jt_bRequestArea=(jt_bRequestArea&&jt_o3xmlra.PrintHtmlDD(qi_oCell));if(!jt_bRequestArea)
{jg_oe.LogErr("Fail","DDRequestArea","A3xaEntity_PrintHtml_SummaryBox");}
var jt_o3xmlrr=jt_oglmLand.Get_MgrRequestArea(jc_gl.jc_oEntity.jc_Typ_GeoRegion);jt_bRequestArea=(jt_bRequestArea&&jt_o3xmlrr.LoadDataDD());jt_bRequestArea=(jt_bRequestArea&&jt_o3xmlrr.PrintHtmlDD(qi_oCell));if(!jt_bRequestArea)
{jg_oe.LogErr("Fail","DDRequestRegion","A3xaEntity_PrintHtml_SummaryBox");}}
var jt_bRequestCategory=true;var jt_o3xmcr=jt_oglmCategory.Get_MgrRequestCategory();jt_bRequestCategory=jt_o3xmcr.LoadDataDD();jt_bRequestCategory=(jt_bRequestCategory&&jt_o3xmcr.PrintHtmlDD(qi_oCell));if(!jt_bRequestCategory)
{jg_oe.LogErr("Fail","DDRequestCategory","A3xaEntity_PrintHtml_SummaryBox");}
if(!jt_bBestFromBabylon)
{var jt_bLand=true;jt_bLand=jt_oglmLand.Get_MgrSelectPlace().LoadDataDD();jt_bLand=(jt_bLand&&jt_oglmLand.Get_MgrSelectPlace().PrintHtmlDD(qi_oCell,this.jm_oDDCategoryCode,this.jm_oDDPairLand));if(!jt_bLand)
{jg_oe.LogErr("Fail","LandDD","A3xaECP_Mgr.PrintHtml_FilterBoxCP");}}
var jt_bCategory=true;jt_bCategory=jt_oglmCategory.Get_MgrSelectCategory().LoadDataDD();if(!jt_bCategory)
{jg_oe.LogErr("Fail","CategoryDD-LoadDataDD","A3xaECP_Mgr.PrintHtml_FilterBoxCP");}
jt_bCategory=(jt_bCategory&&jt_oglmCategory.Get_MgrSelectCategory().PrintHtmlDD(qi_oCell));if(!jt_bCategory)
{jg_oe.LogErr("Fail","CategoryDD-PrintHtmlDD","A3xaECP_Mgr.PrintHtml_FilterBoxCP");}
if(ji_oCPLandButtonStatus)
ji_oCPLandButtonStatus.jm_Value="OFF";}
this.jm_oecpOrder.LoadDataDD();this.jm_oecpOrder.PrintHtmlDD(qi_oCell);return true;};this.PrintHtml_IdentityBoxCP=function(qi_oCell,ji_Row,ji_Col)
{var jt_oCPLandButtonStatus={jm_Value:null};this.PrintHtml_FilterBoxCP(qi_oCell,ji_Row,ji_Col,jt_oCPLandButtonStatus);var jt_ocpLand=new A3xaPanelLandIcons3(null,-1,ji_Row,jc_gl.jc_oHtml.jc_Col_LandIcons,true,ji_Col);jt_ocpLand.InitButtonsStatus(jt_oCPLandButtonStatus.jm_Value);return true;};this.PrintHtml_ImageBox=function(qi_oCell,ji_Row,ji_Col){return true;};this.PrintHtml_Score=function(qi_oCell,ji_Row,ji_Col){return true;};this.PrintHtml_Likes=function(qi_oCell,ji_Row,ji_Col){return true;};this.PrintHtml_Date=function(qi_oCell,ji_Row,ji_Col){return true;};this.PrintHtml_IconsViewBox=function(qi_oCell,ji_Row,ji_Col)
{this.PrintHtml_GLMore(qi_oCell,ji_Row,ji_Col);return true;};this.PrintHtml_IconsAdmin_NewMajor=function(qi_oCell,ji_Row,ji_Col)
{if(this.Set_MasterPanelRow(ji_Row))
{if(!this.PrintHtml_IconAdmin(qi_oCell,jc_gl.jc_oQUR.jc_QUR_QueryNewEntity,false))
{}}
return true;};this.PrintHtml_SummaryBoxCP=function(qi_oCell,ji_Row,ji_Col)
{if(!this.jm_o3xMgrLand_IMap)
this.jm_o3xMgrLand_IMap=new A3xaMgrLand_InteractiveMap();this.jm_o3xMgrLand_IMap.PrintHtml(qi_oCell,ji_Row,ji_Col);return true;};this.PrintHtml_ControlIconsBoxCP=function(qi_oCell,ji_Row,ji_Col)
{if(this.Set_MasterPanelRow(ji_Row))
{var jt_ociPanel=new A3xaPanelControlIcons(null,-1,ji_Row,ji_Col,true,true);var jt_oBtnTurbo=jt_ociPanel.Get_Button("Turbo");jt_oBtnTurbo.PrintHtml(qi_oCell);}
return true;};this.ShowHtmlSelected=function()
{var jt_oheSet=jg_oe.Get_HtmlSetEntity();if(jt_oheSet&&!jt_oheSet.ShowHtmlSelected(this.jm_oDDCategoryCode,this.jm_oDDPairLand))
return false;if(this.jm_o3xMgrLand_IMap)
this.jm_o3xMgrLand_IMap.ShowSelectedHotSpot(jt_oheSet.Get_XEIDRowList(true,false));return true;};this.OnChangeDD_Category=function(ji_edd,ji_oddi)
{this.jm_oDDCategoryCode=ji_oddi;return this.ShowHtmlSelected();};this.OnChangeDD_City=function(ji_edd,ji_oddi)
{this.jm_oDDPairLand=ji_oddi;return this.ShowHtmlSelected();};this.OnGLMore=function(ji_Row,ji_bStatus)
{var jt_oheSet=jg_oe.Get_HtmlSetEntity();if(!jt_oheSet)
return false;var jt_o3xehf=new A3xaEntity_HtmlFrame(ji_Row,true);if(!jt_o3xehf.ShowBody(ji_bStatus))
{}
return true;};}
function A3xaEntityInfo_Attributes(ji_Itemid,ji_sName,ji_bVisible,ji_Row,ji_Col,ji_sUrlWebsite,ji_QUR)
{this.jm_Itemid=ji_Itemid;this.jm_sName=ji_sName;this.jm_bVisible=(ji_bVisible==true);this.jm_Row=ji_Row;this.jm_Col=ji_Col;this.jm_bSkip=false;this.jm_sUrlWebsite=(ji_sUrlWebsite?ji_sUrlWebsite:"");this.jm_QUR=(ji_QUR?ji_QUR:"");}
function A3xaEntityInfo(ji_oglr,ji_oeifa)
{this.PrintHtml=A3xaEntityInfo_PrintHtml;this.Set_Attrib=A3xaEntityInfo_Set_Attrib;this.IsValid=A3xaEntityInfo_IsValid;this.jm_oglr=ji_oglr;this.jm_oeifa=ji_oeifa;}
function A3xaEntityInfo_Set_Attrib(ji_Itemid,ji_sName,ji_bVisible,ji_Row,ji_Col,ji_QUR)
{if(!this.jm_oeifa)
return false;return this.jm_oeifa.Attach_Attributes(new A3xaEntityInfo_Attributes(ji_Itemid,ji_sName,ji_bVisible,ji_Row,ji_Col,ji_QUR));}
function A3xaEntityInfo_IsValid()
{if(!this.jm_oglr)
return false;if(!(this.jm_oeifa&&this.jm_oeifa.Get_Master()))
return false;return true;}
function A3xaEntityInfo_PrintHtml(qi_oParent)
{return false;}
function A3xaEntityInfoSet(ji_oglr,ji_aoeifa,ji_ogeiattrCommon)
{this.NewGEI=A3xaEntityInfoSet_NewGEI;this.PrintHtml=A3xaEntityInfoSet_PrintHtml;this.Set_CommonAttrib=A3xaEntityInfoSet_Set_CommonAttrib;this.IsValid=A3xaEntityInfoSet_IsValid;this.jm_oglr=ji_oglr;this.jm_aoeifa=ji_aoeifa;this.jm_ogeiattrCommon=ji_ogeiattrCommon;}
function A3xaEntityInfoSet_Set_CommonAttrib(ji_ogeiattrCommon)
{this.jm_ogeiattrCommon=ji_ogeiattrCommon;return true;}
function A3xaEntityInfoSet_IsValid()
{if(!this.jm_oglr)
return false;if(!(this.jm_aoeifa&&this.jm_aoeifa.length))
return false;for(var i=0;i<this.jm_aoeifa.length;i++)
{if(!(this.jm_aoeifa[i]&&this.jm_aoeifa[i].Get_Master()))
return false;}
return true;}
function A3xaEntityInfoSet_NewGEI(ji_oeifa)
{if(!ji_oeifa)
return null;var jt_ti=ji_oeifa.Get_Master()[jc_gl.jc_oA3xaDbZero.jc_Eifa_Typ];var jr_gei=null;if(!jt_ti)
jr_gei=null;else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Website)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Website_Button,true,jc_gl.jc_oIcons.jc_sIconEI_Url,"Website","www"),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Website_Bold,false,null,"Website","www",null,null,null,true,false)));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Video)
jr_gei=new GEISB_Video(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Video_YoutubeId,true,jc_gl.jc_oIcons.jc_sIconEI_Video,"Youtube","ytb",null,null,null,null,false,false,null,null,true),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Video_VimeoId,true,jc_gl.jc_oIcons.jc_sIconEI_Video,"Vimeo","vmo",null,null,null,null,false,false,null,null,true),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Video_Url,true,jc_gl.jc_oIcons.jc_sIconEI_VideoUrl,"Video Link","vdl",null,null,null,null,false,false,null,null,null)));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Facebook)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Facebook_Page,true,jc_gl.jc_oIcons.jc_sIconEI_FacebookPage,"Pagina Facebook","fbp"),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Facebook_Group,false,jc_gl.jc_oIcons.jc_sIconEI_FacebookGroup,"Grupo Facebook","fbg"),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Facebook_User,false,jc_gl.jc_oIcons.jc_sIconEI_FacebookUser,"Perfil Facebook","fbu")));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Twitter)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Twitter_Url,true,jc_gl.jc_oIcons.jc_sIconEI_Twitter,"Twitter","twt")));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_GooglePlus)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_GooglePlus_Url,true,jc_gl.jc_oIcons.jc_sIconEI_Gplus,"G+","gpl")));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Phone)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Phone_Number,true,jc_gl.jc_oIcons.jc_sIconEI_Phone,"Tel","tel",null,null,null,null,false,true)));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Skype)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Skype_Id,true,jc_gl.jc_oIcons.jc_sIconEI_Skypetxt,"Skype","skp",null,null,null,null,false,null,"skype:","?call")));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Note)
jr_gei=new GEINote(this.jm_oglr,ji_oeifa);else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Email)
jr_gei=new GEISB_Email(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Email_Addr,true,jc_gl.jc_oIcons.jc_sIconEI_Email,"Email","eml",null,null,null,null,false,null,null,null)));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Image)
jr_gei=new GEIImage(this.jm_oglr,ji_oeifa);else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Gallery)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Gallery_FlickrUrl,true,jc_gl.jc_oIcons.jc_sIconEI_Flickrtxt,"Galeria Foto","gal"),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Gallery_Flickrset,true,jc_gl.jc_oIcons.jc_sIconEI_Flickrtxt,"Flickr-set","gfs",null,null,null,null,null,null,"http://www.flickr.com/photos/avenidaazul/sets/"),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_A3xaGallery_FlickrGallery,true,jc_gl.jc_oIcons.jc_sIconEI_Flickrtxt,"Flickr-gallery","gfg",null,null,null,null,null,null,"http://www.flickr.com/photos/avenidaazul/galleries/")));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_A3xaGallery)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_A3xaGallery_Url,true,jc_gl.jc_oIcons.jc_sIconEI_A3xaGallery,"Galeria Foto A3xa","gaa"),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_A3xaGallery_Flickrset,true,jc_gl.jc_oIcons.jc_sIconEI_A3xaGallery,"Galeria Foto A3xa","gaa",null,null,null,null,null,null,"index.php?option=com_content&view=article&id=34"+"&Itemid=397"+"&p_TypInfo="+jc_gl.jc_oEntityInfo.jc_TI_A3xaGallery+"&p_CodInfo="+jc_gl.jc_oEntityInfo.jc_CI_A3xaGallery_Flickrset+"&p_Flickrset=")));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Person)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Person_Name,true,jc_gl.jc_oIcons.jc_sIconEI_Person,"Person","psn",null,null,null,null,false,true)));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_Wiki)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Wikipedia,true,jc_gl.jc_oIcons.jc_sIconEI_Wikipedia,"Wiki Geographic","wkg"),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Wikiphoneprefix,true,jc_gl.jc_oIcons.jc_sIconEI_Wikiphoneprefix,"Wiki Phone Prefix","wkp"),new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_Wikitravel,false,jc_gl.jc_oIcons.jc_sIconEI_Wikitravel,"Wikitravel","wkt")));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_WaterCloset)
jr_gei=new GEISimpleButton(this.jm_oglr,ji_oeifa,new Array(new GEISimpleButton_Parameters(jc_gl.jc_oEntityInfo.jc_CI_WCUrl,true,jc_gl.jc_oIcons.jc_sIconEI_WCUrl,"WC","wc")));else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_MetasystemControl)
jr_gei=null;else if(jt_ti==jc_gl.jc_oEntityInfo.jc_TI_QueryUnifiedRequest)
jr_gei=null;if(!jr_gei)
return null;if(this.jm_ogeiattrCommon)
ji_oeifa.Attach_Attributes(this.jm_ogeiattrCommon);return jr_gei;}
function A3xaEntityInfoSet_PrintHtml(qi_oParent)
{if(!this.IsValid())
return false;var jr_b=true;for(var i=0;i<this.jm_aoeifa.length;i++)
{jt_oeifa=this.jm_aoeifa[i];jt_ogei=this.NewGEI(jt_oeifa);if(jt_ogei)
{if(!jt_ogei.PrintHtml(qi_oParent))
jr_b=false;}
var jt_aMaster=jt_oeifa.Get_Master();if(jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Typ]==jc_gl.jc_oEntityInfo.jc_TI_A3xaGallery&&jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Cod]==jc_gl.jc_oEntityInfo.jc_CI_A3xaGallery_Flickrset)
{jt_oeifaTwin=new A3xaREntityInfo(null,null);jt_oeifaTwin.CopyFrom(jt_oeifa);var jt_aMasterTwin=jt_oeifaTwin.Get_Master();jt_aMasterTwin[jc_gl.jc_oA3xaDbZero.jc_Eifa_Typ]=jc_gl.jc_oEntityInfo.jc_TI_Gallery;jt_aMasterTwin[jc_gl.jc_oA3xaDbZero.jc_Eifa_Cod]=jc_gl.jc_oEntityInfo.jc_CI_Gallery_Flickrset;jt_ogeiTwin=this.NewGEI(jt_oeifaTwin);if(jt_ogeiTwin)
{if(!jt_ogeiTwin.PrintHtml(qi_oParent))
jr_b=false;}}}
return true;}
function GEINote(ji_oglr,ji_oeifa)
{A3xaEntityInfo.call(this,ji_oglr,ji_oeifa);this.PrintHtml=GEINote_PrintHtml;}
function GEINote_PrintHtml(qi_oParent)
{if(!this.IsValid())
return false;if(!(qi_oParent&&qi_oParent.length))
return false;var jt_aMaster=this.jm_oeifa.Get_Master();var jt_ogeiattr=this.jm_oeifa.Get_Attributes();var jt_sText=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Info];var jt_CodInfo=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Cod];if(!jt_CodInfo||jt_CodInfo==jc_gl.jc_oEntityInfo.jc_CI_Note_Text)
{qi_oParent.append("<p>"+jt_sText+"</p>");}
return true;}
function GEIImage(ji_oglr,ji_oeifa)
{A3xaEntityInfo.call(this,ji_oglr,ji_oeifa);this.PrintHtml=GEIImage_PrintHtml;}
function GEIImage_PrintHtml(qi_oParent)
{if(!this.IsValid())
return false;if(!(qi_oParent&&qi_oParent.length))
return false;var jt_aMaster=this.jm_oeifa.Get_Master();var jt_ogeiattr=this.jm_oeifa.Get_Attributes();var jt_TypEntity=this.jm_oglr.Get_3xXEID().Get_TypEntity();var jt_IdEntity=this.jm_oglr.Get_3xXEID().Get_IdEntity();var jt_TypInfo=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Typ];var jt_IdInfo=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Id];var jt_CodInfo=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Cod];var jt_sUrl=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Info];var jt_sId="";if(!jt_CodInfo||jt_CodInfo==jc_gl.jc_oEntityInfo.jc_CI_Image_Url)
{if(jt_ogeiattr)
{if(jt_ogeiattr.jm_bSkip)
return true;jt_ogeiattr.jm_bSkip=true;}
jt_sId="Cell_Image_";}
else if(jt_CodInfo==jc_gl.jc_oEntityInfo.jc_CI_Image_StaticMapUrl)
{if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoArea)
jt_sId="Cell_StaticMapA_";else if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_GeoRegion)
jt_sId="Cell_StaticMapR_";else
jt_sId="Cell_StaticMapU_";}
else
jt_sId="Cell_ImageUnk_";var jt_sName="";var jt_bVisible=true;if(jt_ogeiattr)
{if(jt_ogeiattr.jm_Row>0&&jt_ogeiattr.jm_Col>0)
jt_sId+=jt_ogeiattr.jm_Row+"_"+jt_ogeiattr.jm_Col;jt_sName=jt_ogeiattr.jm_sName;jt_bVisible=jt_ogeiattr.jm_bVisible;jt_ogeiattr.jm_bVisible=false;}
var qt_oImg=jQuery("<img>",{id:jt_sId,src:jt_sUrl,alt:jt_sName,title:jt_sName,width:'200',height:'150',border:'0'});if(!(qt_oImg&&qt_oImg.length))
return false;qt_oImg.css({margin:'0px'});if(!jt_bVisible)
{qt_oImg.css("visibility","hidden");qt_oImg.css("position","absolute");}
qi_oParent.append(qt_oImg);return true;}
function GEISimpleButton_Parameters(ji_CodInfo,ji_bCodNull,ji_sIconFileName,ji_sTitle,ji_sAlt,ji_Width,ji_Height,ji_bTargetNew,ji_bShadow,ji_bParagraph,ji_bTipPopup,ji_sUrlLead,ji_sUrlTrail,ji_bSimplePopupPlugin)
{this.jm_CodInfo=ji_CodInfo;this.jm_bCodNull=(ji_bCodNull==true?true:false);this.jm_sIconFileName=ji_sIconFileName;this.jm_sTitle=ji_sTitle;this.jm_sAlt=ji_sAlt;this.jm_Width=ji_Width;this.jm_Height=ji_Height;this.jm_bTargetNew=(ji_bTargetNew==false?false:true);this.jm_bShadow=ji_bShadow;this.jm_bParagraph=(ji_bParagraph==true?true:false);this.jm_bTipPopup=(ji_bTipPopup==true?true:false);this.jm_bSimplePopupPlugin=(ji_bSimplePopupPlugin==true?true:false);this.jm_sUrlLead="";this.jm_sUrlTrail="";if(ji_sUrlLead&&ji_sUrlLead.length)
this.jm_sUrlLead=ji_sUrlLead;if(ji_sUrlTrail&&ji_sUrlTrail.length)
this.jm_sUrlTrail=ji_sUrlTrail;}
function GEISimpleButton(ji_oglr,ji_oeifa,ji_aoParametersSB)
{A3xaEntityInfo.call(this,ji_oglr,ji_oeifa);this.IsValid=GEISimpleButton_IsValid;this.PrintHtml=GEISimpleButton_PrintHtml;this.Set_ParametersSB=GEISimpleButton_Set_ParametersSB;this.ConvertUrlLink=GEISimpleButton_ConvertUrlLink;this.ConvertSimplePopupPluginContents=GEISimpleButton_ConvertSimplePopupPluginContents;this.jm_aoParametersSB=null;if(ji_aoParametersSB&&ji_aoParametersSB.length)
this.jm_aoParametersSB=ji_aoParametersSB;}
function GEISimpleButton_Set_ParametersSB(ji_aoParametersSB)
{this.jm_aoParametersSB=ji_aoParametersSB;return true;}
function GEISimpleButton_IsValid()
{if(!A3xaEntityInfo_IsValid.call(this))
return false;if(!(this.jm_aoParametersSB&&this.jm_aoParametersSB.length))
return false;return true;}
function GEISimpleButton_PrintHtml(qi_oParent)
{if(!this.IsValid())
return false;if(!(qi_oParent&&qi_oParent.length))
return false;var jt_aMaster=this.jm_oeifa.Get_Master();var jt_arsSlaves=this.jm_oeifa.Get_Slaves();var jt_TypEntity=this.jm_oglr.Get_3xXEID().Get_TypEntity();var jt_IdEntity=this.jm_oglr.Get_3xXEID().Get_IdEntity();var jt_TypInfo=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Typ];var jt_CodInfo=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Cod];var jt_IdInfo=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Id];var jt_sInfo=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Info];var jr_b=false;for(var i=0;i<this.jm_aoParametersSB.length;i++)
{var jt_oParSB=this.jm_aoParametersSB[i];if((!jt_CodInfo&&jt_oParSB.jm_bCodNull)||jt_CodInfo==jt_oParSB.jm_CodInfo)
{var jt_sUrlIcon=jc_gl.MakeUrlIcon_UserEntityInfo(jt_oParSB.jm_sIconFileName);var jt_oUrlLink=null;var jt_sTitle=null;var jt_sId=null;var jt_sSimplePopupPluginContents=null;if(jt_oParSB.jm_bSimplePopupPlugin)
{jt_sId=jt_TypEntity+jt_IdEntity+"_"+
jt_TypInfo+"_"+jt_CodInfo+"_"+jt_IdInfo;jt_sTitle=jt_oParSB.jm_sTitle;jt_sSimplePopupPluginContents=this.ConvertSimplePopupPluginContents(jt_sInfo,jt_oParSB);}
else if(jt_oParSB.jm_bTipPopup)
{jt_sTitle=jt_sInfo;for(var s=0;jt_arsSlaves&&s<jt_arsSlaves.length;s++)
jt_sTitle+=" - "+jt_arsSlaves[s][jc_gl.jc_oA3xaDbZero.jc_Eifa_Info];}
else
{jt_oUrlLink=new A3xaUrl(this.ConvertUrlLink(jt_oParSB.jm_sUrlLead+jt_sInfo+
jt_oParSB.jm_sUrlTrail,jt_oParSB),null);jt_sTitle=jt_oParSB.jm_sTitle;}
var jt_ohButton=new A3xaSimpleButton(jt_sUrlIcon,jt_oUrlLink,jt_sTitle,jt_oParSB.jm_sAlt,jt_sId);jt_ohButton.Set_Options(jt_oParSB.jm_Width,jt_oParSB.jm_Height,jt_oParSB.jm_bTargetNew,jt_oParSB.jm_bShadow,jt_oParSB.jm_bParagraph,jt_oParSB.jm_bTipPopup,jt_sSimplePopupPluginContents);jr_b=jt_ohButton.PrintHtml(qi_oParent);break;}}
return jr_b;}
function GEISimpleButton_ConvertUrlLink(ji_s,ji_oParametersSB){return ji_s;}
function GEISimpleButton_ConvertSimplePopupPluginContents(ji_s,ji_oParametersSB)
{return ji_s;}
function GEISB_Email(ji_oglr,ji_oeifa,ji_aoParametersSB)
{GEISimpleButton.call(this,ji_oglr,ji_oeifa,ji_aoParametersSB);this.ConvertUrlLink=GEISB_Email_ConvertUrlLink;}
function GEISB_Email_ConvertUrlLink(ji_s,ji_oParametersSB)
{return EmailAntispam_UrlLink(ji_s);}
function GEISB_Video(ji_oglr,ji_oeifa,ji_aoParametersSB)
{GEISimpleButton.call(this,ji_oglr,ji_oeifa,ji_aoParametersSB);this.ConvertSimplePopupPluginContents=GEISB_Video_ConvertSimplePopupPluginContents;}
function GEISB_Video_ConvertSimplePopupPluginContents(ji_s,ji_oParametersSB)
{if(!ji_s)
return null;if(ji_oParametersSB.jm_CodInfo==jc_gl.jc_oEntityInfo.jc_CI_Video_YoutubeId)
{return"<iframe width='400' height='300' src='http://www.youtube.com/embed/"+
ji_s+"' frameborder='0' allowfullscreen></iframe>";}
else if(ji_oParametersSB.jm_CodInfo==jc_gl.jc_oEntityInfo.jc_CI_Video_VimeoId)
{return"<iframe src='http://player.vimeo.com/video/"+
ji_s+"' width='400' height='300' frameborder='0'"+" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>";}
return null;}
function GEIQur(ji_oglr,ji_oeifa)
{A3xaEntityInfo.call(this,ji_oglr,ji_oeifa);this.PrintHtml=GEIQur_PrintHtml;}
function GEIQur_PrintHtml(qi_oParent)
{if(!this.IsValid())
return false;if(!(qi_oParent&&qi_oParent.length))
return false;var jt_aMaster=this.jm_oeifa.Get_Master();var jt_ogeiattr=this.jm_oeifa.Get_Attributes();var jt_sText=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Info];var jt_CodInfo=jt_aMaster[jc_gl.jc_oA3xaDbZero.jc_Eifa_Cod];if(!jt_CodInfo||jt_CodInfo==jc_gl.jc_oEntityInfo.jc_CI_QueryUnifiedRequest_DD)
{var jt_aDDItems=jt_sText.split("__ite__");var jt_aaDDItems=new Array();var jt_ddiSelected=-1;for(var i=0;jt_aDDItems&&i<jt_aDDItems.length;i++)
{var jt_addiDirty=jt_aDDItems[i].replace(/&#10;/g,"").replace(/&#13;/g,"").split("__at2__");if(!(jt_addiDirty&&jt_addiDirty.length&&jt_addiDirty[0]))
continue;var jt_addiValue=jQuery.trim(jt_addiDirty[0]);var jt_addiDescr=(jt_addiDirty[1]?jQuery.trim(jt_addiDirty[1]):"");var jt_addi=new Array(jt_addiValue,jt_addiDescr);if(jt_addi[0])
{jt_aaDDItems.push(jt_addi);if(!(jt_ddiSelected>=0)&&jt_ogeiattr.jm_QUR&&jt_addiValue.indexOf(jt_ogeiattr.jm_QUR)>=0)
jt_ddiSelected=i;}}
for(var i=0;jt_aaDDItems&&i<jt_aaDDItems.length;i++)
{var jt_addi=jt_aaDDItems[i];if(!jt_addi[0])
continue;var jt_sUrlImg="";var jt_sTitle="";var jt_QUR="";if(jt_addi[0].indexOf(jc_gl.jc_oQUR.jc_QUR_QueryLimSBS)>=0)
jt_QUR=jc_gl.jc_oQUR.jc_QUR_QueryLimSBS;else if(jt_addi[0].indexOf(jc_gl.jc_oQUR.jc_QUR_QuerySBS)>=0)
jt_QUR=jc_gl.jc_oQUR.jc_QUR_QuerySBS;else if(jt_addi[0].indexOf(jc_gl.jc_oQUR.jc_QUR_QuerySBT)>=0)
jt_QUR=jc_gl.jc_oQUR.jc_QUR_QuerySBT;else if(jt_addi[0].indexOf(jc_gl.jc_oQUR.jc_QUR_QueryLimSBT)>=0)
jt_QUR=jc_gl.jc_oQUR.jc_QUR_QueryLimSBT;if(jt_QUR)
{var jt_oxur=new A3xaXur();jt_oxur.Set_UrlParams(jc_gl.jc_XURFN_ListEntity,null,null,null,null,null,null,jt_addi[0]);jt_oxur.LinkCommonData(jg_oe.Get_Database(),true);var jt_ohButton=new A3xaSimpleButton(jc_gl.Get_UrlIconQUR(jt_QUR,i==jt_ddiSelected?"ON":"OFF"),jt_oxur.Get_A3xaUrl(false,true),jc_gl.QUR_Get_Descr(jt_QUR,jt_oxur.Get_3xXEID().Get_TypEntity()),jt_QUR);jt_ohButton.Set_Options(null,null,false,null,false,null,null);jt_ohButton.PrintHtml(qi_oParent);}}
var jt_shDD="";jt_shDD+="<div class='ccms_form_element cfdiv_select label_over' id='filter_qur1_container_div' style=''><label>Solicitar Pagina</label><select size='1' class='' title='' name='Filter_QUR'"+" onchange='return jg_oApp.Get_AppXUR().OnChangeDD_QUR(this);' style='width:180px;'>";if(jt_ddiSelected>=0)
jt_shDD+="<option value=''>ninguna</option>";else
jt_shDD+="<option value='' selected='selected'>ninguna</option>";for(var i=0;jt_aaDDItems&&i<jt_aaDDItems.length;i++)
{var jt_addi=jt_aaDDItems[i];if(!jt_addi[0])
continue;if(jt_ddiSelected>=0&&i==jt_ddiSelected)
jt_shDD+="<option value='"+jt_addi[0]+"' selected='selected'>"+
jt_addi[1]+"</option>";else
jt_shDD+="<option value='"+jt_addi[0]+"'>"+jt_addi[1]+"</option>";}
jt_shDD+="</select><div class='clear'></div><div id='error-message-Filter_QUR'></div></div>"
qi_oParent.append("<p>"+jt_shDD+"</p>");}
return true;}
function A3xaPanelControlIcons(ji_aNames,ji_Rows,ji_Row,ji_Col,ji_bMasterSlave,ji_bAjax)
{if(ji_aNames==null)
ji_aNames=new Array("Like","Turbo","GLMore");A3xaEntityButtonSet2.call(this,ji_aNames,ji_Rows,ji_Row,ji_Col,ji_bMasterSlave,ji_bAjax,false);this.OnBtnChangeStatus=A3xaPanelControlIcons_OnBtnChangeStatus;this.NewSlavePanel=A3xaPanelControlIcons_NewSlavePanel;this.Get_AjaxUrlParams=A3xaPanelControlIcons_Get_AjaxUrlParams;this.Set_AjaxUrlParams=A3xaPanelControlIcons_Set_AjaxUrlParams;this.OnAjaxReadyFn=A3xaPanelControlIcons_OnAjaxReadyFn;this.AsyncChangeStatus=A3xaPanelControlIcons_AsyncChangeStatus;this.jm_sAjaxUrlParams=null;var jt_oBtnTurbo=this.Get_Button("Turbo");if(jt_oBtnTurbo&&this.IsMaster())
{var jt_oAjaxUrlParams=new A3xaUrl(null,null);jt_oAjaxUrlParams.Add_UrlParam2("p_GLTurbo",jg_oe.Get_TurboString());jt_oAjaxUrlParams.Add_UrlParam2("p_GLHeader",jc_gl.jc_oA3xaDbZero.jc_GLID_All+
jc_gl.jc_oA3xaDbZero.jc_GLMID_DT);jt_oAjaxUrlParams.Add_UrlParam2("p_GLAltIndex",jc_gl.jc_oA3xaDbZero.jc_GLID_Enterprise+
jc_gl.jc_oA3xaDbZero.jc_GLMID_AX);jt_oBtnTurbo.Set_SrcInfo(jc_gl.MakeUrlIcon_UserControls(jc_gl.jc_oIcons.jc_sIconPrefixCtrl_Turbo,false),"A3xaTurboZero (...en desarrollo...) - ahora está "+jg_oe.Get_TurboDescr(),"Turbo","jg_oPanelControlIcons_Builder.OnClick",-1,jt_oAjaxUrlParams.Get_UrlParams());jt_oBtnTurbo.AttachProperties(false,false,true);jt_oBtnTurbo.Set_Status(jg_oe.IsTurboON()?"ON":"OFF",false);}
var jt_oBtnGLMore=this.Get_Button("GLMore");if(jt_oBtnGLMore)
{jt_oBtnGLMore.Set_SrcInfo(jc_gl.MakeUrlIcon_UserControls(jc_gl.jc_oIcons.jc_sIconPrefixCtrl_GLMore,false),"Expandir","xpd","jg_oPanelControlIcons_Builder.OnClick",-1,null);jt_oBtnGLMore.Set_Properties(false);jt_oBtnGLMore.AttachProperties(this.IsMaster(),true,false);}
var jt_oBtnLike=this.Get_Button("Like");if(jt_oBtnLike)
{jt_oBtnLike.Set_Properties(false);jt_oBtnLike.AttachProperties(false,false,true);}}
function A3xaPanelControlIcons_AsyncChangeStatus(ji_Name,ji_NewStatus)
{if(ji_Name=="Turbo")
{if(ji_NewStatus=="ON")
{jg_oe.Set_TurboStatus(true);}
else if(ji_NewStatus=="OFF")
jg_oe.Set_TurboStatus(false);}
return A3xaEntityButtonSet2_AsyncChangeStatus.call(this,ji_Name,ji_NewStatus);}
function A3xaPanelControlIcons_NewSlavePanel(ji_aNames,ji_Rows,ji_Row,ji_Col)
{if(ji_Rows==null)
ji_Rows=this.jm_Rows;if(ji_Col==null)
ji_Col=this.jm_Col;if(!(ji_Row>0&&ji_Col>0))
return null;return new A3xaPanelControlIcons(ji_aNames,ji_Rows,ji_Row,ji_Col,true,true);}
function A3xaPanelControlIcons_Set_AjaxUrlParams(ji_ButtonName,ji_sAjaxUrlParams)
{if(ji_ButtonName=="Like")
this.jm_sAjaxUrlParams=ji_sAjaxUrlParams;return true;}
function A3xaPanelControlIcons_Get_AjaxUrlParams(ji_ButtonName,ji_ButtonStatus)
{if(ji_ButtonName=="Like")
return this.jm_sAjaxUrlParams;if(ji_ButtonName=="Turbo")
{var jt_oHostReporter=jg_oe.Get_Reporter();return jt_oHostReporter.Get_AjaxUrlParams();}
return"";}
function A3xaPanelControlIcons_OnAjaxReadyFn(ji_ogAjaxResponse)
{var jt_ButtonName=ji_ogAjaxResponse.Get_ItemValue("ButtonName");var jt_ButtonStatus=ji_ogAjaxResponse.Get_ItemValue("ButtonStatus");if(jt_ButtonName=="Like")
{var jt_IdEntity=ji_ogAjaxResponse.Get_ItemValue("IdEntity");var jt_TypEntity=ji_ogAjaxResponse.Get_ItemValue("TypEntity");var jt_LikesTotal=ji_ogAjaxResponse.Get_ItemValue("LikesTotal");var jt_Fan=ji_ogAjaxResponse.Get_ItemValue("Fan");var jt_elemEntity=null;var div_Entity_Children=null;if(jt_IdEntity>0&&jt_TypEntity!=null&&jt_LikesTotal!=null&&jt_Fan!=null)
jt_elemEntity=document.getElementById("likes_"+jt_TypEntity+"_"+jt_IdEntity);if(jt_elemEntity!=null)
div_Entity_Children=jt_elemEntity.childNodes;for(var i=0;div_Entity_Children!=null&&i<div_Entity_Children.length;i++)
{if(div_Entity_Children.item(i).nodeName=='SPAN')
div_Entity_Children.item(i).innerHTML=jt_LikesTotal;}}
else if(jt_ButtonName=="Turbo")
{}
return A3xaEntityButtonSet2_OnAjaxReadyFn.call(this,ji_ogAjaxResponse);}
function A3xaPanelControlIcons_OnBtnChangeStatus(ji_Name,ji_btnStatus)
{if(ji_Name=="GLMore")
{var jt_bStatus=null;if(ji_btnStatus=="ON")
jt_bStatus=true;else if(ji_btnStatus=="OFF")
jt_bStatus=false;jg_oApp.jm_oecp.OnGLMore(this.jm_Row,jt_bStatus);}
return A3xaEntityButtonSet2_OnBtnChangeStatus.call(this,ji_Name,ji_btnStatus);}
jg_oPanelControlIcons_Builder=new A3xaPanelControlIcons_Builder();function A3xaPanelControlIcons_Builder()
{this.OnPageFooterEnd=A3xaPanelControlIcons_Builder_OnPageFooterEnd;this.OnClick=A3xaPanelControlIcons_Builder_OnClick;this.Builder_RefreshButtonStatus=A3xaPanelControlIcons_Builder_RefreshButtonStatus;}
function A3xaPanelControlIcons_Builder_OnPageFooterEnd()
{for(var jt_Row=1;jt_Row<=500;jt_Row++)
{var jt_RowElem=document.getElementById("Row_"+jt_Row);if(jt_RowElem==null)
jt_RowElem=document.getElementById("RowS_"+jt_Row);if(jt_RowElem==null)
break;var jt_oxeid=new A3xaDCEntity();var jt_o3xxeid=jt_oxeid.Get_3xXEID();jt_o3xxeid.Set_String(jt_RowElem.getAttribute('XEIDCode'));var jt_TypEntity=jt_o3xxeid.Get_TypEntity();if(jt_TypEntity==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl)
{if(jg_oApp.jm_oecp.Set_MasterPanelRow(jt_Row))
{var jt_oExecPanel=new A3xaPanelControlIcons(null,-1,jt_Row,jc_gl.jc_oHtml.jc_Col_ControlIcons,true,true,"");var jt_oHostReporter=jg_oe.Get_Reporter();jt_oHostReporter.Set_AjaxUrlParams("&p_GLTurbo="+jg_oe.Get_TurboString()+"&p_GLHeader="+jc_gl.jc_oA3xaDbZero.jc_GLID_All+jc_gl.jc_oA3xaDbZero.jc_GLMID_DT+"&p_GLAltIndex="+jc_gl.jc_oA3xaDbZero.jc_GLID_Enterprise+jc_gl.jc_oA3xaDbZero.jc_GLMID_AX);jt_oHostReporter.Set_ExecDevice(jt_oExecPanel);var jt_bSingle=false;var jt_oxur=null;var jt_oAppXUR=jg_oApp.Get_AppXUR();if(jt_oAppXUR)
jt_oxur=jt_oAppXUR.Get_3xXUR();if(jt_oxur)
jt_bSingle=jt_oxur.IsSingle();if(jt_bSingle)
{var jt_oBtnGLMore=null;jt_oBtnGLMore=jt_oExecPanel.Get_Button("GLMore");if(jt_oBtnGLMore)
jt_oBtnGLMore.Set_Status("ON",false);}
break;}}}
return true;}
function A3xaPanelControlIcons_Builder_OnClick(ji_Name,ji_Rows,ji_Row,ji_Col,ji_ColTarget,ji_sButtonSrcBase,ji_sAjaxUrlParams)
{if(!(ji_Row>0&&ji_Col>0))
return false;var jt_oHostReporter=jg_oe.Get_Reporter();var jt_oPanel=jt_oHostReporter.Get_ExecDevice();if(!(jt_oPanel&&jt_oPanel.jm_Row==ji_Row&&jt_oPanel.jm_Col==ji_Col))
{jt_oPanel=null;jt_oPanel=new A3xaPanelControlIcons(null,ji_Rows,ji_Row,ji_Col,true,true);}
if(ji_Name=="Like")
{jt_oPanel.Set_AjaxUrlParams(ji_Name,ji_sAjaxUrlParams);}
else if(ji_Name=="Turbo")
{var jt_CurrentStatus=jt_oPanel.Get_ButtonStatus(ji_Name);return jg_oApp.OnClickTurbo(jt_CurrentStatus=="ON",function(){jt_oPanel.OnButtonClick(ji_Name);});}
jt_oPanel.OnButtonClick(ji_Name);return true;}
function A3xaPanelControlIcons_Builder_RefreshButtonStatus(ji_Name,ji_Rows,ji_Row,ji_Col,ji_ColTarget,ji_sButtonSrcBase,ji_sAjaxUrlParams)
{var jt_oHostReporter=jg_oe.Get_Reporter();var jt_oPanel=jt_oHostReporter.Get_ExecDevice();if(!jt_oPanel)
return false;jt_oPanel.Set_SlavesButtonStatus(ji_Name,"KS");return true;}
function A3xaPanelLandIcons3(ji_aNames,ji_Rows,ji_Row,ji_Col,ji_bMasterSlave,ji_ColImages)
{if(ji_aNames==null)
ji_aNames=new Array("StaticMapA","StaticMapR");A3xaEntityButtonSet2.call(this,ji_aNames,ji_Rows,ji_Row,ji_Col,ji_bMasterSlave,false,true);this.OnBtnChangeStatus=A3xaPanelLandIcons3_OnBtnChangeStatus;this.NewSlavePanel=A3xaPanelLandIcons3_NewSlavePanel;this.ShowImage=A3xaPanelLandIcons3_ShowImage;this.InitButtonsStatus=A3xaPanelLandIcons3_InitButtonsStatus;this.jm_oImage=null;this.jm_oStaticMapA=null;this.jm_oStaticMapR=null;this.jm_ColImages=ji_ColImages;var jt_oBtnStaticMapA=this.Get_Button("StaticMapA");if(jt_oBtnStaticMapA)
{jt_oBtnStaticMapA.Set_SrcInfo(jc_gl.MakeUrlIcon_UserControls(jc_gl.jc_oIcons.jc_sIconPrefix_StaticMapArea,false),"Mapa Area","MapA","A3xaPanelLandIcons3_OnClick",ji_ColImages,"",null);jt_oBtnStaticMapA.AttachProperties(this.IsMaster(),false,false);}
var jt_oBtnStaticMapR=this.Get_Button("StaticMapR");if(jt_oBtnStaticMapR)
{jt_oBtnStaticMapR.Set_SrcInfo(jc_gl.MakeUrlIcon_UserControls(jc_gl.jc_oIcons.jc_sIconPrefix_StaticMapRegion,false),"Mapa Region","MapR","A3xaPanelLandIcons3_OnClick",ji_ColImages,"",null);jt_oBtnStaticMapR.AttachProperties(this.IsMaster(),false,false);}
this.jm_oImage=new A3xaHtmlItem2("Cell_Image_"+this.jm_Row+"_"+this.jm_ColImages);this.jm_oStaticMapA=new A3xaHtmlItem2("Cell_StaticMapA_"+this.jm_Row+"_"+this.jm_ColImages);this.jm_oStaticMapR=new A3xaHtmlItem2("Cell_StaticMapR_"+this.jm_Row+"_"+this.jm_ColImages);}
function A3xaPanelLandIcons3_OnBtnChangeStatus(ji_Name,ji_btnStatus)
{this.ShowImage(ji_Name,ji_btnStatus=="ON");return A3xaEntityButtonSet2_OnBtnChangeStatus.call(this,ji_Name,ji_btnStatus);}
function A3xaPanelLandIcons3_NewSlavePanel(ji_aNames,ji_Rows,ji_Row,ji_Col)
{if(ji_Rows==null)
ji_Rows=this.jm_Rows;if(ji_Col==null)
ji_Col=this.jm_Col;var jt_ColImages=this.jm_ColImages;if(!(ji_Row>0&&ji_Col>0&&jt_ColImages>0))
return null;return new A3xaPanelLandIcons3(ji_aNames,ji_Rows,ji_Row,ji_Col,false,jt_ColImages);}
function A3xaPanelLandIcons3_ShowImage(ji_Name,ji_bShow)
{var jt_bShowImage=false;var jt_bShowStaticMapA=false;var jt_bShowStaticMapR=false;if(ji_Name=="")
jt_bShowImage=ji_bShow;else if(ji_Name=="StaticMapA")
jt_bShowStaticMapA=ji_bShow;else if(ji_Name=="StaticMapR")
jt_bShowStaticMapR=ji_bShow;else
return false;if(!(jt_bShowImage||jt_bShowStaticMapA||jt_bShowStaticMapR))
jt_bShowImage=true;if(this.jm_oImage)
this.jm_oImage.Show(jt_bShowImage);if(this.jm_oStaticMapA)
this.jm_oStaticMapA.Show(jt_bShowStaticMapA);if(this.jm_oStaticMapR)
this.jm_oStaticMapR.Show(jt_bShowStaticMapR);return true;}
function A3xaPanelLandIcons3_InitButtonsStatus(ji_Status)
{if(ji_Status)
return A3xaEntityButtonSet2_InitButtonsStatus.call(this,ji_Status);if(!this.IsValid())
return false;for(var i=0;i<this.jm_aoButtons.length;i++)
{var jt_oStaticMap=null;var jt_o=this.jm_aoButtons[i];var jt_n=jt_o.Get_Name();if(jt_n=="StaticMapA")
jt_oStaticMap=this.jm_oStaticMapA;else if(jt_n=="StaticMapR")
jt_oStaticMap=this.jm_oStaticMapR;else
continue;jt_o.Set_Status((jt_oStaticMap&&jt_oStaticMap.IsValid()?"OFF":"DIS"),false);}
return true;}
function A3xaPanelLandIcons3_OnClick(ji_Name,ji_Rows,ji_Row,ji_Col,ji_ColImages)
{if(!(ji_Row>0&&ji_Col>0))
return false;var jt_oPanel=new A3xaPanelLandIcons3(null,ji_Rows,ji_Row,ji_Col,true,ji_ColImages);jt_oPanel.OnButtonClick(ji_Name);return true;}
function A3xaEntity_HtmlFrameColumn(ji_o3xehf,ji_oxe,ji_Row,ji_Col)
{this.jm_o3xehf=ji_o3xehf;this.jm_oxe=ji_oxe;this.jm_Row=(ji_Row||null);this.jm_Col=(ji_Col||null);var jt_sColor=this.jm_oxe.Get_3xEBIS().Get_Color();if(!jt_sColor)
jt_sColor="FFFFFF";this.jm_Header_Id="CellH_"+this.jm_Row+"_"+this.jm_Col;this.jm_Body_Id="Cell_"+this.jm_Row+"_"+this.jm_Col;this.jm_Header_Width=30;this.jm_Header_Colspan=null;this.jm_Header_Padding=2;this.jm_Header_BkgndColor=jt_sColor;this.jm_Header_BkgndImgUrl=null;this.jm_Header_Align=null;this.jm_Header_VerticalAlign=null;this.jm_Header_Float=null;this.jm_Header_Height=null;this.jm_Body_Width=30;this.jm_Body_Padding=2;this.jm_Body_BkgndColor="FFFFFF";this.jm_Body_BkgndImgUrl=null;this.jm_Body_Align=null;this.jm_Body_VerticalAlign=null;this.jm_Body_Float=null;this.jm_Body_Height=null;this.Get_Elem=function(ji_bHeader)
{if(ji_bHeader)
{var qt_oCellH=jQuery("#"+this.jm_Header_Id);if(!(qt_oCellH&&qt_oCellH.length))
return null;return qt_oCellH;}
var qt_oCell=jQuery("#"+this.jm_Body_Id);if(!(qt_oCell&&qt_oCell.length))
return null;return qt_oCell;};this.Set_Options_Header=function(ji_Width,ji_BkgndColor,ji_BkgndImgUrl,ji_Padding,ji_VerticalAlign,ji_Float,ji_Height,ji_Colspan)
{if(!(ji_Width===null))
this.jm_Header_Width=ji_Width;if(!(ji_Colspan===null))
this.jm_Header_Colspan=ji_Colspan;if(!(ji_BkgndColor===null))
this.jm_Header_BkgndColor=ji_BkgndColor;if(!(ji_BkgndImgUrl===null))
this.jm_Header_BkgndImgUrl=ji_BkgndImgUrl;if(!(ji_Padding===null))
this.jm_Header_Padding=ji_Padding;if(!(ji_VerticalAlign===null))
this.jm_Header_VerticalAlign=ji_VerticalAlign;if(!(ji_Float===null))
this.jm_Header_Float=ji_Float;if(!(ji_Height===null))
this.jm_Header_Height=ji_Height;return true;};this.Set_XtdOptions_Header=function(ji_Align)
{if(!(ji_Align===null))
this.jm_Header_Align=ji_Align;return true;};this.Set_Options_Body=function(ji_Width,ji_BkgndColor,ji_BkgndImgUrl,ji_Padding,ji_VerticalAlign,ji_Float,ji_Height)
{if(!(ji_Width===null))
this.jm_Body_Width=ji_Width;if(!(ji_BkgndColor===null))
this.jm_Body_BkgndColor=ji_BkgndColor;if(!(ji_BkgndImgUrl===null))
this.jm_Body_BkgndImgUrl=ji_BkgndImgUrl;if(!(ji_Padding===null))
this.jm_Body_Padding=ji_Padding;if(!(ji_VerticalAlign===null))
this.jm_Body_VerticalAlign=ji_VerticalAlign;if(!(ji_Float===null))
this.jm_Body_Float=ji_Float;if(!(ji_Height===null))
this.jm_HBody_Height=ji_Height;return true;};this.Set_XtdOptions_Body=function(ji_Align)
{if(!(ji_Align===null))
this.jm_Body_Align=ji_Align;return true;};this.Init=function()
{return true;};this.PrintHtml=function(ji_bFrameHeader)
{if(!this.jm_o3xehf)
return false;if(!this.jm_oxe)
return false;if(!(this.jm_Row>0&&this.jm_Col>0))
return false;var jt_oglrCategory=this.jm_oxe.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_Category);var jt_oglrGeoArea=this.jm_oxe.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoArea);var jt_oglrGeoCountry=this.jm_oxe.Get_CommonLinkedRecord(jc_gl.jc_oEntity.jc_Typ_GeoCountry);var jt_sBgColor=null;if(jt_oglrCategory)
jt_sBgColor=jt_oglrCategory.Get_3xEBIS().Get_Color();if(this.jm_Col==jc_gl.jc_oHtml.jc_Col_IdTag)
{this.Set_Options_Header(80,"",null,null,null,null,null,null);this.Set_Options_Body(80,null,null,null,"top","none","none");this.Set_XtdOptions_Header("right");this.Set_XtdOptions_Body("right");}
else if(this.jm_Col==jc_gl.jc_oHtml.jc_Col_LandIcons)
{var jt_sBgColor=jt_oglrGeoArea?jt_oglrGeoArea.Get_3xEBIS().Get_Color():null;var jt_bgcode=A3xaToString(this.jm_oxe.Get_3xXEID().Get_3xAZNC().Get_A())+
A3xaToString(this.jm_oxe.Get_3xXEID().Get_3xAZNC().Get_Z());var jt_bgtyp=jc_gl.jc_oEntity.jc_Typ_GeoNA;var jt_sBgIcon=jc_gl.Get_UrlBkgndEntity(jt_bgtyp,jt_bgcode);this.Set_Options_Header(30,jt_sBgColor,jt_sBgIcon,null,null,null,null);this.Set_Options_Body(30,jt_sBgColor,jt_sBgIcon,null,"top","none","none");}
else if(this.jm_Col==jc_gl.jc_oHtml.jc_Col_Identity)
{this.Set_Options_Header("",jt_sBgColor,null,null,null,null,null,2);this.Set_Options_Body(210,null,null,"1px","top","none","none");}
else if(this.jm_Col==jc_gl.jc_oHtml.jc_Col_InfoIcons)
{this.Set_Options_Body(90,null,null,null,"top","none","none");if(ji_bFrameHeader)
return true;}
else if(this.jm_Col==jc_gl.jc_oHtml.jc_Col_ControlIcons)
{this.Set_Options_Header("",jt_sBgColor,null,null,null,null,null,2);this.Set_Options_Body(null,null,null,null,null,"none","none");}
else if(this.jm_Col==jc_gl.jc_oHtml.jc_Col_AdminIcons)
{this.Set_Options_Body(null,null,null,null,"top","none","none");if(ji_bFrameHeader)
return true;}
else if(this.jm_Col==jc_gl.jc_oHtml.jc_Col_Info)
{this.Set_Options_Header("",jt_sBgColor,null,null,null,null,null,null);this.Set_Options_Body("",null,null,null,"top","none","none");}
if(ji_bFrameHeader)
{var qt_oCellH=this.Get_Elem(true);if(!qt_oCellH)
{qt_oCellH=jQuery("<td>",{id:this.jm_Header_Id});if(!(qt_oCellH&&qt_oCellH.length))
return false;}
if(!this.PrintHtml_Header2(qt_oCellH))
return false;}
else
{jg_oe.CanLogInfo({VW:4})&&jg_oe.LogInfo("p1","","A3xaEntity_HtmlFrameColumn.PrintHtml(body)");var qt_oCell=this.Get_Elem(false);if(!qt_oCell)
{qt_oCell=jQuery("<td>",{id:this.jm_Body_Id});if(!(qt_oCell&&qt_oCell.length))
return false;}
jg_oe.CanLogInfo({VW:4})&&jg_oe.LogInfo("p2","","A3xaEntity_HtmlFrameColumn.PrintHtml(body)");if(!this.PrintHtml_Body2(qt_oCell))
return false;}
return true;};this.PrintHtml_Header2=function(qi_oCell)
{if(this.jm_Header_Width)
qi_oCell.css("width",this.jm_Header_Width);if(this.jm_Header_Padding)
qi_oCell.css("padding",this.jm_Header_Padding);if(this.jm_Header_Align)
qi_oCell.css("text-align",this.jm_Header_Align);if(this.jm_Header_VerticalAlign)
qi_oCell.css("vertical-align",this.jm_Header_VerticalAlign);if(this.jm_Header_Float)
qi_oCell.css("float",this.jm_Header_Float);if(this.jm_Header_Height)
qi_oCell.css("height",this.jm_Header_Height);if(this.jm_Header_BkgndColor)
qi_oCell.css("background-color","#"+this.jm_Header_BkgndColor);if(this.jm_Header_BkgndImgUrl)
qi_oCell.css("background-image","url(\""+this.jm_Header_BkgndImgUrl+"\")");if(this.jm_Header_Colspan)
qi_oCell.attr("colspan",this.jm_Header_Colspan);var qt_oCellPrevH=null;var qt_oCellH=jQuery("#"+this.jm_Header_Id);if(!(qt_oCellH&&qt_oCellH.length))
{for(var ih=this.jm_Col-1;ih>0&&!(qt_oCellPrevH&&qt_oCellPrevH.length);ih--)
qt_oCellPrevH=jQuery("#CellH_"+this.jm_Row+"_"+ih);if(qt_oCellPrevH&&qt_oCellPrevH.length)
qt_oCellPrevH.after(qi_oCell);else
{var qt_oRowH=this.jm_o3xehf.Get_ElemRowH();if(qt_oRowH&&qt_oRowH.length)
{qt_oRowH.prepend(qi_oCell);}}}
return true;};this.PrintHtml_Body2=function(qi_oCell)
{jg_oe.CanLogInfo({VW:4})&&jg_oe.LogInfo("","","A3xaEntity_HtmlFrameColumn.PrintHtml_Body2");if(this.jm_Body_Width)
qi_oCell.css("width",this.jm_Body_Width);if(this.jm_Body_Padding)
qi_oCell.css("padding",this.jm_Body_Padding);if(this.jm_Body_Align)
qi_oCell.css("text-align",this.jm_Body_Align);if(this.jm_Body_VerticalAlign)
qi_oCell.css("vertical-align",this.jm_Body_VerticalAlign);if(this.jm_Body_Float)
qi_oCell.css("float",this.jm_Body_Float);if(this.jm_Body_Height)
qi_oCell.css("height",this.jm_Body_Height);if(this.jm_Body_BkgndColor)
qi_oCell.css("background-color","#"+this.jm_Body_BkgndColor);if(this.jm_Body_BkgndImgUrl)
qi_oCell.css("background-image","url(\""+this.jm_Body_BkgndImgUrl+"\")");var qt_oCellPrev=null;for(var ib=this.jm_Col-1;ib>0&&!(qt_oCellPrev&&qt_oCellPrev.length);ib--)
qt_oCellPrev=jQuery("#Cell_"+this.jm_Row+"_"+ib);if(qt_oCellPrev&&qt_oCellPrev.length)
qt_oCellPrev.after(qi_oCell);else
{var qt_oRow=this.jm_o3xehf.Get_ElemRow();if(qt_oRow&&qt_oRow.length)
qt_oRow.prepend(qi_oCell);}
return true;};}
function A3xaEntity_HtmlFrame(ji_Row,ji_bLoad)
{this.jm_Row=(ji_Row||null);this.jm_oxeid=null;this.qm_oHeader=null;this.qm_oBody=null;this.jm_bStick=false;this.jm_oxe=null;this.jm_ao3xehc=new Array();this.Set_XtdEntity=function(ji_oxe)
{this.jm_oxe=(ji_oxe||null);if(this.jm_oxe)
{this.jm_oxeid=this.jm_oxe.Get_3xXEID();if(this.jm_oxeid.Get_TypEntity()==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl)
this.jm_bStick=true;}};this.Get_XtdEntity=function(){return this.jm_oxe;};this.IsEOT=function(){return!(this.qm_oHeader&&this.qm_oHeader.length);};this.HasBody=function(){return this.qm_oBody&&this.qm_oBody.length;};this.IsStick=function(){return this.jm_bStick;};this.IsPanel=function()
{return this.jm_oxeid&&this.jm_oxeid.Get_3xXEID().Get_TypEntity()==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl;};this.Get_3xXEID=function(){return this.jm_oxeid||null;};this.ReplaceId=function(ji_Row)
{if(this.IsEOT())
return false;this.qm_oHeader.attr("id","RowH_"+ji_Row);this.qm_oBody.attr("id",(this.IsStick()?"RowS_":"Row_")+ji_Row);this.jm_Row=ji_Row;return true;};this.Clear=function()
{this.jm_oxeid=null;this.qm_oHeader=null;this.qm_oBody=null;this.jm_bStick=false;return true;};this.LoadFromHtml=function()
{this.qm_oHeader=null;this.qm_oBody=null;this.jm_bStick=false;this.jm_oxeid=null;if(!(this.jm_Row>0))
return false;var qt_oHeader=jQuery("#RowH_"+this.jm_Row);if(!(qt_oHeader&&qt_oHeader.length))
return false;this.qm_oHeader=qt_oHeader;var qt_oBody=jQuery("#Row_"+this.jm_Row);if(!(qt_oBody&&qt_oBody.length))
{qt_oBody=jQuery("#RowS_"+this.jm_Row);if(qt_oBody&&qt_oBody.length)
this.jm_bStick=true;}
if(qt_oBody&&qt_oBody.length)
this.qm_oBody=qt_oBody;var jt_sxeid=this.qm_oHeader.attr('XEIDCode');if(jt_sxeid&&jt_sxeid.length)
{var jt_oxeid=new A3xaDCEntity();if(jt_oxeid.Get_3xXEID().Set_String(jt_sxeid))
this.jm_oxeid=jt_oxeid.Get_3xXEID();}
return true;};this.Get_ElemRowH=function()
{if(!(this.qm_oHeader&&this.qm_oHeader.length))
{if(!(this.jm_Row>0))
return null;this.qm_oHeader=jQuery('#RowH_'+this.jm_Row);if(!(this.qm_oHeader&&this.qm_oHeader.length))
return null;}
return this.qm_oHeader;};this.Get_ElemRow=function()
{if(!(this.qm_oBody&&this.qm_oBody.length))
{if(!(this.jm_Row>0))
return null;this.qm_oBody=jQuery('#Row_'+this.jm_Row);if(!(this.qm_oBody&&this.qm_oBody.length))
{this.qm_oBody=jQuery('#RowS_'+this.jm_Row);if(!(this.qm_oBody&&this.qm_oBody.length))
return null;}}
return this.qm_oBody;};this.MoveAfter=function(ji_Row,ji_bReplaceId)
{this.InsertAfter(new A3xaEntity_HtmlFrame(ji_Row,true));if(ji_bReplaceId)
{var jt_o3xehf_Next=new A3xaEntity_HtmlFrame(ji_Row+1,true);jt_o3xehf_Next.ReplaceId(this.jm_Row);this.ReplaceId(ji_Row+1);}
return true;};this.InsertAfter=function(ji_o3xehf_Prev)
{this.qm_oHeader.detach();this.qm_oBody.detach();if(!ji_o3xehf_Prev||ji_o3xehf_Prev.IsEOT())
jQuery("#A3xaTableMainBody").prepend(this.qm_oHeader);else
this.qm_oHeader.insertAfter(ji_o3xehf_Prev.qm_oBody);this.qm_oBody.insertAfter(this.qm_oHeader);return true;};this.IsVisible=function()
{if(this.IsEOT())
return false;if(this.qm_oHeader.css("visibility")=="hidden")
return false;return true;};this.IsGrayed=function()
{if(this.IsEOT())
return false;if(this.qm_oHeader.attr('Grayed')=="Y")
return true;return false;};this.IsActive=function(){return this.IsVisible()&&!this.IsGrayed();};this._ShowHeaderElem=function(ji_bShow)
{if(this.IsEOT())
return false;if(ji_bShow==true)
this.qm_oHeader.css({"visibility":"visible","position":"relative","left":"none","top":"none"});else if(ji_bShow===false)
this.qm_oHeader.css({"visibility":"hidden","position":"absolute","left":"0px","top":"0px"});return true;};this._ShowBodyElem=function(ji_bShow)
{if(this.IsEOT())
return false;if(!this.qm_oBody)
return false;if(ji_bShow==true)
this.qm_oBody.css({"visibility":"visible","position":"relative","left":"none","top":"none"});else if(ji_bShow===false)
this.qm_oBody.css({"visibility":"hidden","position":"absolute","left":"0px","top":"0px"});return true;};this._GrayHeaderElem=function(ji_bGray)
{if(this.IsEOT())
return false;if(ji_bGray==true)
{var jt_ColorGray="#606060";this.qm_oHeader.attr({"Grayed":"Y"});jQuery("td",this.qm_oHeader).each(function()
{var jt_bkColor=jQuery(this).css("background-color");if(jt_bkColor&&jt_bkColor.length&&jt_bkColor!="transparent")
{var jt_bkColorSaved=jQuery(this).attr('BkColorSaved');if(!(jt_bkColorSaved&&jt_bkColorSaved.length))
jQuery(this).attr({"BkColorSaved":jt_bkColor});jQuery(this).css({"background-color":jt_ColorGray});}});}
else if(ji_bGray===false)
{this.qm_oHeader.attr({"Grayed":"N"});jQuery("td",this.qm_oHeader).each(function()
{var jt_bkColorSaved=jQuery(this).attr("BkColorSaved");if(jt_bkColorSaved&&jt_bkColorSaved.length)
jQuery(this).css({"background-color":jt_bkColorSaved});});}
return true;};this.ShowHeader=function(ji_bShow,ji_bGray)
{if(this.IsStick())
return false;if(this._ShowHeaderElem(ji_bShow)&&ji_bShow==true)
this._GrayHeaderElem(ji_bGray);if(!this.IsActive())
this._ShowBodyElem(false);return true;};this.ShowBody=function(ji_bShow)
{if(this.IsStick())
return false;var jt_bHeaderActive=this.IsActive();if(ji_bShow==true&&jt_bHeaderActive)
this._ShowBodyElem(true);else if(ji_bShow===false||!jt_bHeaderActive)
this._ShowBodyElem(false);return true;}
this.ShowByFilter=function(ji_oxeidLand,ji_o3xcatl,ji_bHideOrGray,ji_bLandCountHigher)
{if(this.IsEOT())
return false;var jt_bMatchesLand=true;var jt_bMatchesCategory=true;if(ji_o3xcatl&&!ji_o3xcatl.Match(this.jm_oxeid))
jt_bMatchesCategory=false;if(ji_oxeidLand)
{jt_bMatchesLand=this.Get_3xXEID().Matches(ji_oxeidLand,true);jg_oe.CanLogInfo()&&jg_oe.LogInfo("MatchingLand y/n,trg,src "+
(jt_bMatchesLand?"y":"n")+","+
this.jm_oxeid.Get_String()+","+ji_oxeidLand.Get_String(),"","A3xaEntity_HtmlFrame.ShowByFilter");}
var jt_bHeader=true;var jt_bGray=false;if(!(jt_bMatchesLand&&jt_bMatchesCategory))
{jt_bGray=true;if(ji_bHideOrGray&&(!ji_oxeidLand||!jt_bMatchesLand||ji_bLandCountHigher))
jt_bHeader=false;}
this.ShowHeader(jt_bHeader,jt_bGray);return true;};this.Get_Column=function(ji_Col)
{if(!(ji_Col>=1))
return null;if(!(this.jm_ao3xehc&&this.jm_ao3xehc.length>=ji_Col))
return null;return this.jm_ao3xehc[ji_Col-1];};this.PrintHtml=function()
{var jt_shTableRowH="<tr id='RowH_"+this.jm_Row+"'"+" XEIDCode='"+this.jm_oxe.Get_3xXEID().Get_String()+"'"+" style='float:none; height:none; visibility: visible;'></tr>";var jt_RowBPfx=(this.IsStick()?"RowS_":"Row_");var qt_oRowB=jQuery("#"+jt_RowBPfx+this.jm_Row);if(qt_oRowB&&qt_oRowB.length)
qt_oRowB.before(jt_shTableRowH);else
{jQuery("#A3xaTableMainBody").append(jt_shTableRowH);}
var jt_RowPfx=(this.IsStick()?"RowS_":"Row_");var jt_shTableRow="<tr id='"+jt_RowPfx+this.jm_Row+"'"+" XEIDCode='"+this.jm_oxe.Get_3xXEID().Get_String()+"'";if(this.IsStick())
{jt_shTableRow+=" style='float:none; height:none; visibility: visible;'>";}
else
{jt_shTableRow+=" style='float:none; height:none; "+"visibility: hidden; position:absolute; left:0px; top:0px;'>";}
jt_shTableRow+="</tr>";var qt_oRowH=jQuery("#RowH_"+this.jm_Row);if(qt_oRowH&&qt_oRowH.length)
qt_oRowH.after(jt_shTableRow);else;this.jm_ao3xehc.push(new A3xaEntity_HtmlFrameColumn(this,this.jm_oxe,this.jm_Row,jc_gl.jc_oHtml.jc_Col_IdTag));this.jm_ao3xehc.push(new A3xaEntity_HtmlFrameColumn(this,this.jm_oxe,this.jm_Row,jc_gl.jc_oHtml.jc_Col_LandIcons));this.jm_ao3xehc.push(new A3xaEntity_HtmlFrameColumn(this,this.jm_oxe,this.jm_Row,jc_gl.jc_oHtml.jc_Col_Identity));this.jm_ao3xehc.push(new A3xaEntity_HtmlFrameColumn(this,this.jm_oxe,this.jm_Row,jc_gl.jc_oHtml.jc_Col_InfoIcons));this.jm_ao3xehc.push(new A3xaEntity_HtmlFrameColumn(this,this.jm_oxe,this.jm_Row,jc_gl.jc_oHtml.jc_Col_ControlIcons));this.jm_ao3xehc.push(new A3xaEntity_HtmlFrameColumn(this,this.jm_oxe,this.jm_Row,jc_gl.jc_oHtml.jc_Col_AdminIcons));this.jm_ao3xehc.push(new A3xaEntity_HtmlFrameColumn(this,this.jm_oxe,this.jm_Row,jc_gl.jc_oHtml.jc_Col_Info));for(var i=0;i<this.jm_ao3xehc.length;i++)
{var jt_o3xehc=this.jm_ao3xehc[i];if(!jt_o3xehc.PrintHtml(true))
{}}
for(i=0;i<this.jm_ao3xehc.length;i++)
{var jt_o3xehc=this.jm_ao3xehc[i];if(!jt_o3xehc.PrintHtml(false))
{}}
return true;};if(ji_bLoad)
this.LoadFromHtml();}
function A3xaHtmlEntitySet()
{var jt_this=this;this.jm_nRows=null;this.jm_TimerLoPry=null;this.jm_bReleased=false;this.jm_ao3xehf=new Array();this.jm_ao3xeh=new Array();this.Release=function(ji_bClearHtml)
{this.jm_bReleased=true;this.jm_TimerLoPry=null;this.jm_nRows=null;this.jm_ao3xeh=new Array();this.jm_ao3xehf=new Array();if(ji_bClearHtml)
{jQuery("#A3xaTableMainBody").text("");}
jg_oe.CanLogInfo({VW:4})&&jg_oe.LogInfo("OK","","A3xaHtmlEntitySet.Release");return true;};this.AbortPrintHtmlLowPriority=function(ji_bClearHtml,ji_bClearCP)
{var jt_bIE=false;if(navigator.appName=="Microsoft Internet Explorer")
jt_bIE=true;if(!jt_bIE)
{try
{window.stop();}
catch(e)
{jt_bIE=true;}}
if(jt_bIE)
window.document.execCommand('Stop');this.jm_TimerLoPry=null;return true;}
this.Init=function()
{var jt_odb=jg_oe.Get_Database();if(!jt_odb)
return false;var jt_ogldtMain=jt_odb.Get_MainDataTable();if(!jt_ogldtMain)
return false;var jt_nRows=jt_ogldtMain.jm_aoglr.Get_Count();if(!(jt_nRows>0))
return false;this.jm_nRows=jt_nRows;for(var jt_Row=1;jt_Row<=jt_nRows;jt_Row++)
{var jt_oxe=jt_ogldtMain.jm_aoglr.Get_Item_ByIndex(jt_Row-1);jt_oxe.LinkCommonData(jt_odb);jt_oxe.Get_3xEBIS().Set_DefaultColor("FFFFFF");}
return true;};this.Get_EHRowList=function()
{var jt_odb=jg_oe.Get_Database();if(!jt_odb)
return null;var jt_ogldtMain=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Enterprise);if(!jt_ogldtMain)
return null;var jt_nRows=jt_ogldtMain.jm_aoglr.Get_Count();if(!(jt_nRows>0))
return null;var jr_ao3xehf=new Array();for(var jt_Row=1;jt_Row<=jt_nRows;jt_Row++)
{var jt_oxe=jt_ogldtMain.jm_aoglr.Get_Item_ByIndex(jt_Row-1);if(!jt_oxe)
break;var jt_o3xehf=this.FindRowElem(jt_oxe.Get_3xXEID(),1,jt_nRows);if(!jt_o3xehf||jt_o3xehf.IsEOT())
continue;jr_ao3xehf.push(jt_o3xehf);}
return jr_ao3xehf;};this.PrintHtmlFrame=function()
{var jr_b=true;var jt_bPrintHeader=true;var jt_bPrintBody=true;if(!jg_oe.IsTurboON())
{jt_bPrintHeader=false;}
var jt_odb=jg_oe.Get_Database();if(!jt_odb)
return false;jg_oe.CanLogInfo()&&jg_oe.LogInfo("PrintHtml-main Data Table:");var jt_ogldtMain=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Enterprise);if(!jt_ogldtMain)
return false;var jt_nRows=jt_ogldtMain.jm_aoglr.Get_Count();jg_oe.CanLogInfo()&&jg_oe.LogInfo("PrintHtml-rows:"+jt_nRows);if(!(jt_nRows>0))
return false;this.jm_nRows=jt_nRows;jg_oe.CanLogInfo()&&jg_oe.LogInfo("PrintHtml-rows2:"+this.jm_nRows);for(var jt_Row=1;jt_Row<=this.jm_nRows;jt_Row++)
{var jt_oxe=jt_ogldtMain.jm_aoglr.Get_Item_ByIndex(jt_Row-1);jg_oe.CanLogInfo()&&jg_oe.LogInfo("PrintHtml-current row:"+jt_Row);var jt_o3xehf=new A3xaEntity_HtmlFrame(jt_Row);jt_o3xehf.Set_XtdEntity(jt_oxe);this.jm_ao3xehf.push(jt_o3xehf);jt_o3xehf.PrintHtml();}
return true;};this.PrintHtmlContents=function(ji_bLowPriority)
{var jr_b=true;if(this.jm_bReleased)
return false;var jt_odb=jg_oe.Get_Database();if(!jt_odb)
return false;var jt_ogldtMain=jt_odb.Get_MainDataTable();if(!jt_ogldtMain)
return false;var jt_nRows=jt_ogldtMain.jm_aoglr.Get_Count();if(!(jt_nRows>0))
return false;this.jm_nRows=jt_nRows;if(!ji_bLowPriority)
{for(var jt_Row=1;jt_Row<=this.jm_nRows;jt_Row++)
{var jt_oxe=jt_ogldtMain.jm_aoglr.Get_Item_ByIndex(jt_Row-1);var jt_o3xehf=this.jm_ao3xehf[jt_Row-1];var jt_o3xeh=null;if(jt_oxe.Get_3xXEID().Get_TypEntity()==jc_gl.jc_oEntity.jc_Typ_MetaSystemControl)
{jt_o3xeh=new A3xaECP_Mgr(jt_oxe,jt_o3xehf);jg_oApp.jm_oecp=jt_o3xeh;}
else
{jt_o3xeh=new A3xaEntity_Html(jt_oxe,jt_o3xehf);}
this.jm_ao3xeh.push(jt_o3xeh);jt_o3xeh.PrintHtml(true);}
var jt_ehCount=0;if(this.jm_ao3xeh)
jt_ehCount=this.jm_ao3xeh.length;for(var i=0;i<jt_ehCount;i++)
this.jm_ao3xeh[i].PrintHtml(false,false);}
else
{var jt_ehCount=0;if(this.jm_ao3xeh)
jt_ehCount=this.jm_ao3xeh.length;this.jm_TimerLoPry=setTimeout(function()
{for(var i=0;i<jt_ehCount;i++)
{if(!jt_this.jm_TimerLoPry||jt_this.jm_bReleased)
break;jt_this.jm_ao3xeh[i].PrintHtml(false,true);}
jg_oe.CanLogInfo({VW:4})&&jg_oe.LogInfo("End.LoPry.at:"+i+"of"+jt_ehCount,"","A3xaHtmlEntitySet.PrintHtmlContents");},5000);}
return true;};this.ShowHtmlSelected=function(ji_oDDCategoryCode,ji_oDDPairLand)
{var jt_oxeidDD=null;if(ji_oDDPairLand)
{var jt_oxeidDDt=new A3xaDCEntity();jt_oxeidDD=jt_oxeidDDt.Get_3xXEID();jt_oxeidDD.Set_String(ji_oDDPairLand.Get_Key());}
var jt_odb=jg_oe.Get_Database();if(!jt_odb)
return false;var jt_ogldtMain=jt_odb.Get_DataTable(jc_gl.jc_oA3xaDbZero.jc_GLID_Enterprise);if(!jt_ogldtMain)
return false;this.jm_nRows=0;var jt_nRows=jt_ogldtMain.jm_aoglr.Get_Count();if(!(jt_nRows>0))
return false;var jt_oglmLand=new GLMgrLand();var jt_oglmCategory=new GLMgrCategory();var jt_o3xmlrr=jt_oglmLand.Get_MgrRequestArea(jc_gl.jc_oEntity.jc_Typ_GeoRegion);var jt_bo3xmlrr=(jt_o3xmlrr?jt_o3xmlrr.LoadDataDD(ji_oDDCategoryCode,ji_oDDPairLand):false);var jt_bDDLand=jt_oglmLand.Get_MgrSelectPlace().LoadDataDD(ji_oDDCategoryCode,ji_oDDPairLand);var jt_bDDCategory=jt_oglmCategory.Get_MgrSelectCategory().LoadDataDD(ji_oDDCategoryCode,ji_oDDPairLand);var jt_oDDPairLand=jt_oglmLand.Get_MgrSelectPlace().Get_DDSelected();jt_bo3xmlrr&&jt_o3xmlrr.RefreshHtmlDD(ji_oDDCategoryCode,ji_oDDPairLand);jt_bDDLand&&jt_oglmLand.Get_MgrSelectPlace().RefreshHtmlDD(ji_oDDCategoryCode,ji_oDDPairLand);jt_bDDCategory&&jt_oglmCategory.Get_MgrSelectCategory().RefreshHtmlDD(ji_oDDCategoryCode,ji_oDDPairLand);var jt_bHideOrGray=false;var jt_bLandCountHigher=false;if(jt_nRows>jc_gl.jc_oHtml.jc_MaxViewRows)
{jt_bHideOrGray=true;if(!jt_oDDPairLand||jt_oDDPairLand.jm_Count>jc_gl.jc_oHtml.jc_MaxViewRows)
jt_bLandCountHigher=true;}
var jt_Row=1;while(1)
{var jt_o3xehf=new A3xaEntity_HtmlFrame(jt_Row,true);if(jt_o3xehf.IsEOT())
break;if(jt_o3xehf.IsStick())
{jt_Row++;continue;}
var jt_o3xcatl=null;if(ji_oDDCategoryCode&&ji_oDDCategoryCode.Get_Value())
jt_o3xcatl=new A3xaCategoryList(ji_oDDCategoryCode.Get_Value());jt_o3xehf.ShowByFilter(jt_oxeidDD,jt_o3xcatl,jt_bHideOrGray,jt_bLandCountHigher);jt_Row++;}
jg_oPanelControlIcons_Builder.Builder_RefreshButtonStatus("GLMore",-1,-1,-1,-1,null,null);return true;};this.Get_XEIDRowList=function(ji_bActiveOnly,ji_bIncludeStick)
{var jr_aoxeid=new Array();var jt_Row=1;while(1)
{var jt_o3xehf=new A3xaEntity_HtmlFrame(jt_Row,true);if(jt_o3xehf.IsEOT())
break;if(!jt_o3xehf.Get_3xXEID())
{jt_Row++;continue;}
if(!ji_bIncludeStick&&jt_o3xehf.IsStick())
{jt_Row++;continue;}
if(ji_bActiveOnly&&!jt_o3xehf.IsActive())
{jt_Row++;continue;}
jr_aoxeid.push(jt_o3xehf.Get_3xXEID());jt_Row++;}
return jr_aoxeid;};this.FindRowElem=function(ji_oxeid,ji_FirstRow,ji_LastRow)
{if(ji_oxeid)
ji_oxeid=ji_oxeid.Get_3xXEID();if(!ji_oxeid)
return null;if(!(ji_LastRow>0))
return null;if(!(ji_FirstRow>=1&&ji_FirstRow<=ji_LastRow))
return null;for(var jt_Row=ji_FirstRow;jt_Row<=ji_LastRow;jt_Row++)
{var jr_o3xehf=new A3xaEntity_HtmlFrame(jt_Row,true);if(jr_o3xehf.IsEOT())
return null;var jt_3xxeidehf=jr_o3xehf.Get_3xXEID().Get_3xXEID();if(jt_3xxeidehf.Get_TypEntity()==ji_oxeid.Get_TypEntity()&&jt_3xxeidehf.Get_IdEntity()==ji_oxeid.Get_IdEntity())
return jr_o3xehf;}
return null;};this.Reorder=function()
{var jt_ao3xehf=this.Get_EHRowList();if(!(jt_ao3xehf&&jt_ao3xehf.length))
return false;var jt_o3xehf_Prev=null;for(var i=0;i<jt_ao3xehf.length;i++)
{var jt_o3xehf=jt_ao3xehf[i];jt_o3xehf.InsertAfter(jt_o3xehf_Prev);jt_o3xehf_Prev=jt_o3xehf;}
return true;};this.OnClickEntity=function(ji_TypEntity,ji_IdEntity,ji_TypInfo,ji_IdInfo,ji_CodInfo)
{var jt_o3xeh=new A3xaEntity_Html(null);if(!jt_o3xeh.OnClick(ji_TypEntity,ji_IdEntity,ji_TypInfo,ji_IdInfo,ji_CodInfo))
{}
return true;};}
var jc_glheedit=new A3xaHtmlEntityEdit_Defines();function A3xaHtmlEntityEdit_Defines()
{this.jc_Dummy=1;}
function A3xaDDXEID(ji_sId,ji_helem)
{this.jm_TypEntity=null;this.jm_IdEntity=null;this.jm_TypGroup=null;this.jm_IdGroup=null;this.jm_Ucat=null;this.jm_Vcat=null;this.jm_A=null;this.jm_Z=null;this.jm_N=null;this.jm_C=null;this.jm_P=null;this.jm_S=null;var jt_selValue=null;if(!ji_sId)
{if(!ji_helem)
return;var jt_selIndex=ji_helem.selectedIndex;jt_selValue=ji_helem.options[jt_selIndex].value;}
else
{var qt_oDD=jQuery("#"+ji_sId);if(!(qt_oDD&&qt_oDD.length))
return;jt_selValue=qt_oDD.val();}
if(!jt_selValue)
return;var jt_aSelValue=jt_selValue.trim().split(",");if(!jt_aSelValue)
return;var jt_nofSVFields=jt_aSelValue.length;if(jt_nofSVFields>0)
this.jm_TypEntity=jt_aSelValue[0];if(jt_nofSVFields>1)
this.jm_IdEntity=jt_aSelValue[1];if(jt_nofSVFields>2)
this.jm_TypGroup=jt_aSelValue[2];if(jt_nofSVFields>3)
this.jm_IdGroup=jt_aSelValue[3];if(jt_nofSVFields>4);if(jt_nofSVFields>5)
this.jm_A=jt_aSelValue[5];if(jt_nofSVFields>6)
this.jm_Z=jt_aSelValue[6];if(jt_nofSVFields>7)
this.jm_N=jt_aSelValue[7];if(jt_nofSVFields>8)
this.jm_C=jt_aSelValue[8];if(jt_nofSVFields>9)
this.jm_P=jt_aSelValue[9];if(jt_nofSVFields>10)
this.jm_S=jt_aSelValue[10];if(jt_nofSVFields>11)
this.jm_Ucat=jt_aSelValue[11];if(jt_nofSVFields>12)
this.jm_Vcat=jt_aSelValue[12];}
function A3xaHtmlEntityEdit()
{this.PrintHtml=A3xaHtmlEntityEdit_PrintHtml;this.OnChangeDD=A3xaHtmlEntityEdit_OnChangeDD;this.OnChangeDD_EditEntityInfoList=A3xaHtmlEntityEdit_OnChangeDD_EditEntityInfoList;this.Get_Cache=A3xaHtmlEntityEdit_Get_Cache;this.jm_ogle=new A3xaDCEntity();}
function A3xaHtmlEntityEdit_PrintHtml()
{return true;}
function A3xaHtmlEntityEdit_OnChangeDD(ji_eDropDown,ji_QUR,ji_oxeid,ji_bSecundary,ji_Itemid)
{var jt_oUrlLink=A3xaEntity_MakeUrl_Edit_Params2(jc_gl.jc_XURFN_ReloadEntity,ji_QUR,this.Get_Cache(true,true,false),ji_bSecundary,ji_Itemid);jt_oUrlLink.Redirect();return true;}
function A3xaHtmlEntityEdit_OnChangeDD_EditEntityInfoList(ji_eDropDown,ji_QUR,ji_TypEntity,ji_IdEntity,ji_Itemid)
{var jt_selIndex=ji_eDropDown.selectedIndex;var jt_selValue=ji_eDropDown.options[jt_selIndex].value.trim();if(jt_selValue=='')
return true;var jt_IdFieldInfo=jt_selValue;if(!(jt_IdFieldInfo>0))
jt_IdFieldInfo=null;var jt_oUrlLink=A3xaEntity_MakeUrl_EditInfo_Params(jc_gl.jc_XURFN_EditEntityInfo,ji_QUR,jt_IdFieldInfo,ji_TypEntity,ji_IdEntity,ji_Itemid);jt_oUrlLink.Redirect();return true;}
function A3xaHtmlEntityEdit_Get_Cache(ji_bGEID,ji_bEC,ji_bAll)
{if(ji_bGEID||ji_bEC||ji_bAll)
{var qt_oTypEntity=jQuery("#h_TypEntity");if(qt_oTypEntity&&qt_oTypEntity.length)
this.jm_ogle.jm_TypEntity=qt_oTypEntity.val();}
if(ji_bGEID||ji_bAll)
{var qt_oIdEntity=jQuery("#h_IdEntity");if(qt_oIdEntity&&qt_oIdEntity.length)
this.jm_ogle.jm_IdEntity=qt_oIdEntity.val();var qt_oTypGroup=jQuery("#h_TypGroup");if(qt_oTypGroup&&qt_oTypGroup.length)
this.jm_ogle.jm_TypGroup=qt_oTypGroup.val();var qt_oIdGroup=jQuery("#h_IdGroup");if(qt_oIdGroup&&qt_oIdGroup.length)
this.jm_ogle.jm_IdGroup=qt_oIdGroup.val();}
if(ji_bEC||ji_bAll)
{this.jm_ogle.jm_Ucat=null;this.jm_ogle.jm_Vcat=null;var jt_oDDCategory=new A3xaDDXEID("h_Category");this.jm_ogle.jm_Ucat=jt_oDDCategory.jm_Ucat;this.jm_ogle.jm_Vcat=jt_oDDCategory.jm_Vcat;this.jm_ogle.jm_A=null;this.jm_ogle.jm_Z=null;this.jm_ogle.jm_N=null;this.jm_ogle.jm_C=null;var jt_oDDNAZ=new A3xaDDXEID("h_NAZ");var jt_oDDNN=new A3xaDDXEID("h_NN");var jt_oDDCity=new A3xaDDXEID("h_City");this.jm_ogle.jm_A=jt_oDDNAZ.jm_A;this.jm_ogle.jm_Z=jt_oDDNAZ.jm_Z;if(jt_oDDNAZ.jm_A&&(jt_oDDNN.jm_A==jt_oDDNAZ.jm_A)&&jt_oDDNAZ.jm_Z&&(jt_oDDNN.jm_Z==jt_oDDNAZ.jm_Z))
{this.jm_ogle.jm_N=jt_oDDNN.jm_N;if(jt_oDDNN.jm_N&&(jt_oDDCity.jm_A==jt_oDDNN.jm_A)&&(jt_oDDCity.jm_Z==jt_oDDNN.jm_Z)&&(jt_oDDCity.jm_N==jt_oDDNN.jm_N))
{this.jm_ogle.jm_C=jt_oDDCity.jm_C;}}
this.jm_ogle.jm_P=null;this.jm_ogle.jm_S=null;var jt_oDDCountry=new A3xaDDXEID("h_Country");var jt_oDDState=new A3xaDDXEID("h_State");this.jm_ogle.jm_P=jt_oDDCountry.jm_P;if(jt_oDDCountry.jm_P&&(jt_oDDState.jm_P==jt_oDDCountry.jm_P))
{this.jm_ogle.jm_S=jt_oDDState.jm_S;}}
if(ji_bAll)
{var qt_oName=jQuery("#h_EName");if(qt_oName&&qt_oName.length)
this.jm_ogle.jm_sName=qt_oName.val();var qt_oDescr=jQuery("#h_EDescr");if(qt_oDescr&&qt_oDescr.length)
this.jm_ogle.jm_sDescr=qt_oDescr.val();var qt_oWebsite=jQuery("#h_EWebsite");if(qt_oWebsite&&qt_oWebsite.length)
this.jm_ogle.jm_sWebsite=qt_oWebsite.val();var qt_oColor=jQuery("#h_EColor");if(qt_oColor&&qt_oColor.length)
this.jm_ogle.jm_Color=qt_oColor.val();var qt_oLat=jQuery("#h_ELat");if(qt_oLat&&qt_oLat.length)
this.jm_ogle.jm_Lat=qt_oLat.val();var qt_oLon=jQuery("#h_ELon");if(qt_oLon&&qt_oLon.length)
this.jm_ogle.jm_Lon=qt_oLon.val();var qt_oLikes=jQuery("#h_ELikes");if(qt_oLikes&&qt_oLikes.length)
this.jm_ogle.jm_Likes=qt_oLikes.val();var qt_oLikesBonus=jQuery("#h_ELikesBonus");if(qt_oLikesBonus&&qt_oLikesBonus.length)
this.jm_ogle.jm_LikesBonus=qt_oLikesBonus.val();var qt_oRating=jQuery("#h_ERating");if(qt_oRating&&qt_oRating.length)
this.jm_ogle.jm_Rating=qt_oRating.val();var qt_oClicks=jQuery("#h_EClicks");if(qt_oClicks&&qt_oClicks.length)
this.jm_ogle.jm_Clicks=qt_oClicks.val();var qt_oScore=jQuery("#h_EScore");if(qt_oScore&&qt_oScore.length)
this.jm_ogle.jm_Score=qt_oScore.val();}
return this.jm_ogle;}
var jg_oApp=new A3xaAppManager();function A3xaAppManager()
{A3xaEnvironment.call(this);this.jm_odbLoaderManager=null;var jt_this=this;this.jm_oAppXUR=new A3xaAppXUR();this.Set_CommonValues=function(ji_bDebug,ji_bCanEdit,ji_bCanLike,ji_IdUser,ji_Itemid,ji_sxur,ji_sDirBase)
{this.A3xaAbsEnvironment_Set_CommonValues(ji_bDebug,ji_bCanEdit,ji_bCanLike,ji_IdUser,ji_Itemid,ji_sDirBase);this.Set_Debug((ji_bDebug?1:0),{VW:3,DB:3});this.Get_AppXUR().Set_XURString(ji_sxur);return true;};this._OnDocumentReady=function()
{this.ResetApp();this.LogStatusBar("Ready");this.StoreData();return true;};this.StoreData=function()
{this.Get_Database().jm_oDTStatus.jm_fnOnChange=function(ji_oDTStatus)
{jt_this.OnDatabaseStore(ji_oDTStatus);}
this.Get_Database().StoreAllData(true);return true;};this.OnDatabaseStore=function(ji_oDTStatus)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Event ("+ji_oDTStatus.Get_Descr()+")","","A3xaAppManager.OnDatabaseStore");var jt_this=this;if(ji_oDTStatus.IsFail())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Fail ("+ji_oDTStatus.Get_Descr()+")","","A3xaAppManager.OnDatabaseStore");this.Get_Database().jm_aoDTStatus_TableToClear=null;this.Get_Database().jm_aoglDataTableStore=new A3xaArray();return true;}
var jt_DTStatus=ji_oDTStatus.Get();if(jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Stored||jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Empty)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","Load Database","A3xaAppManager.OnDatabaseStore");this.Get_Database().jm_aoDTStatus_TableToClear=null;this.Get_Database().jm_aoglDataTableStore=new A3xaArray();return this.LoadData();}
return true;};this.LoadData=function()
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Begin","QuickLoad Database","A3xaAppManager.LoadData");this.jm_odbLoaderManager=new A3xaDbLoaderManager(function(ji_oDTStatus)
{return jt_this.OnLoadDataDone(ji_oDTStatus);},this.Get_Database());this.jm_odbLoaderManager.Load();return true;};this.OnLoadDataDone=function(ji_oDTStatus)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Event ("+ji_oDTStatus.Get_Descr()+")","","A3xaAppManager.OnLoadDataDone");jg_oe.CanLogInfo()&&jg_oe.LogInfo("descr2 ("+ji_oDTStatus.Get_Descr2()+")","","A3xaAppManager.OnLoadDataDone");var jt_this=this;if(ji_oDTStatus.IsFail())
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Fail ("+ji_oDTStatus.Get_Descr()+")","","A3xaAppManager.OnLoadDataDone");return true;}
var jt_DTStatus=ji_oDTStatus.Get();if(jt_DTStatus==jc_gl.jc_oA3xaDbZero.jc_DTStatus_Loaded)
{jg_oe.CanLogInfo()&&jg_oe.LogInfo("Loaded OK","","A3xaAppManager.OnLoadDataDone");var jt_oxur=this.Get_AppXUR().jm_oxur;jt_oxur.LinkMainData(this.Get_Database());jt_oxur.LinkCommonData(this.Get_Database(),true);var jt_ogldtMain=this.Get_Database().Get_MainDataTable();if(jt_ogldtMain&&jt_oxur.IsQURUnlimited())
{if(jt_oxur.IsSortByTime())
jt_ogldtMain.SortByTime(true);else if(jt_oxur.IsSortByScore())
jt_ogldtMain.SortByScore(true);}
this.DocumentShow();}
jg_oe.CanLogInfo()&&jg_oe.LogInfo("Void event","","A3xaAppManager.OnLoadDataDone");return true;};this.ResetApp=function()
{if(this.jm_oecp)
this.jm_oecp.ResetECP();this.Set_Reporter(new GLReporter());return true;};this.OnClickTurbo=function(ji_bCurrentStatus,ji_fnChangeStatus)
{if(!ji_bCurrentStatus)
{if(!this.IsTurboAvailable())
{alert("A3xaTurboZero is not allowed on your browser,"+" because you are browsing in Private-Mode and/or "+" your browser DOM-storage is switched-off");return false;}}
var jt_odb=this.Get_Database();jt_odb.ClearArrayDTLoad({jp_bTyp_TurboHeader:true});this.Set_TurboStatus(!ji_bCurrentStatus);this.jm_odbLoaderManager=new A3xaDbLoaderManager(ji_fnChangeStatus,jt_odb);this.jm_odbLoaderManager.DatabaseLoadTurboHeader();return true;};this.DocumentShow=function()
{var jr_b=true;try
{this.Get_AppXUR().UpdatePageTitle();var jt_oheSet=this.Get_HtmlSetEntity();if(jt_oheSet)
jt_oheSet.Release(true);jt_oheSet=new A3xaHtmlEntitySet();this.Set_HtmlSetEntity(jt_oheSet);jt_oheSet.Init();if(!jt_oheSet.PrintHtmlFrame())
jr_b=false;else if(!jt_oheSet.PrintHtmlContents(false))
jr_b=false;if(jr_b)
{jg_oPanelControlIcons_Builder.OnPageFooterEnd();if(this.jm_oecp)
{if(!this.jm_oecp.ShowHtmlSelected())
jr_b=false;}
jt_oheSet.PrintHtmlContents(true);}}
catch(e)
{this.ExceptionMessage(e,"ShowHtmlPage");jr_b=false;}
if(jr_b)
jg_oe.LogStatusBar("",true);return jr_b;};this.WriteGLRS2=function(ji_glid,ji_sGLRS,ji_sGLRS_AltIndex)
{var jr_b=false;try
{if(this.Get_Database())
jr_b=this.Get_Database().WriteGLRS2(ji_glid,ji_sGLRS,ji_sGLRS_AltIndex);}
catch(e)
{this.ExceptionMessage(e,"WriteLocalStorage");}
return jr_b;};this.OnClickEntity=function(ji_TypEntity,ji_IdEntity,ji_TypInfo,ji_IdInfo,ji_CodInfo)
{try
{var jt_oheSet=this.Get_HtmlSetEntity();if(!jt_oheSet.OnClickEntity(ji_TypEntity,ji_IdEntity,ji_TypInfo,ji_IdInfo,ji_CodInfo))
{}}
catch(e)
{this.ExceptionMessage(e,"ClickEntity");}
return true;};this.OnChangeDD_EditEntity=function(ji_eDropDown,ji_QUR,ji_sXEID,ji_bSecundary,ji_Itemid)
{var jt_oheEdit=new A3xaHtmlEntityEdit();var jt_oxeid=new A3xaDCEntity();jt_oxeid.Get_3xXEID().Set_String(ji_sXEID);return jt_oheEdit.OnChangeDD(ji_eDropDown,ji_QUR,jt_oxeid,ji_bSecundary,ji_Itemid);};this.OnChangeDD_EditEntityInfoList=function(ji_eDropDown,ji_QUR,ji_TypEntity,ji_IdEntity,ji_Itemid)
{var jt_oheEdit=new A3xaHtmlEntityEdit();return jt_oheEdit.OnChangeDD_EditEntityInfoList(ji_eDropDown,ji_QUR,ji_TypEntity,ji_IdEntity,ji_Itemid);};this.Set_Storage(new A3xaStorageFLY());this.Set_Storage(new A3xaStorageSS());this.Set_Storage(new A3xaStorageLS());this.Set_Storage(new A3xaStorageIDB());this.Set_Reporter(new GLReporter());this.Set_Database(new A3xaDbZero());this.Set_TurboStatus(false);}
