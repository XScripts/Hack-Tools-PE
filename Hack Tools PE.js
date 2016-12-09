/*
Mod Developer: XScripts
Twitter: @XScriptsModder
*/

var GUI;
var menu;
var exitUI;

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var ScrollView = android.widget.ScrollView;
var CheckBox = android.widget.CheckBox;
var EditText = android.widget.EditText;
var TextView = android.widget.TextView;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var PopupWindow = android.widget.PopupWindow;
var ColorDrawable = android.graphics.drawable.ColorDrawable;

var VERSION = "0.3.0";
var NAME = "Hack Tools PE";
var DEVELOPER = "XScripts";

var MARK = "©";
var ORIGIN = "®";
var split = " ";
var down = "\n";

var creativech = false;
var creativech;

var fly = false;
var fly;

var speed = false;
var speed;

var onlydaych = false;
var onlydaych;
var onlyday = false;

var infinitelifech = false;
var infinitelifech;
var infinitelife = false;

var spamch = false;
var spamch;
var spam = false;

var instakillch = false;
var instakillch;
var instakill = false;

var tapexplodech = false;
var tapexplodech;
var tapexplode = false;

var infiniteXPch = false;
var infiniteXPch;
var infiniteXP = false;

var speedslowch = false;
var speedslowch;

var jesusch = false;
var jesusch;
var waterwalk = false;

var invscrch = false;
var invscrch;

var godmodech = false;
var godmodech;

      function newLevel(){
      clientMessage(down + ChatColor.GRAY + NAME + split + "Version:" + split + VERSION + split + "Made by" + split + DEVELOPER);
      initializeUI();
      }
      
      function dip2px(dips){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
      }
      
      function initializeUI(){
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var layout = new LinearLayout(ctx);
      layout.setOrientation(1);
      var menuBtn = new Button(ctx);
      menuBtn.setText("[H]");
	  menuBtn.setTextColor(Color.RED);
      menuBtn.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      mainMenu();
      exit();
      }
      }));
      layout.addView(menuBtn);
      GUI = new PopupWindow(layout, dip2px(42), dip2px(42));
      GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
      GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
      }catch(err){
      print('An error occured: ' + err);
      }
      }}));
      }
      
       function mainMenu(){
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var menuLayout = new LinearLayout(ctx);
      var menuScroll = new ScrollView(ctx);
      var menuLayout1 = new LinearLayout(ctx);
      menuLayout.setOrientation(1);
      menuLayout1.setOrientation(1);
      menuScroll.addView(menuLayout);
      menuLayout1.addView(menuScroll);
      
      var textview = new TextView(ctx);
      textview.setTextSize(22);
      textview.setText(NAME + split + VERSION + split + MARK);
      textview.setTextColor(Color.RED);
      textview.setGravity(Gravity.CENTER);
      menuLayout.addView(textview);
      
	  var textview = new TextView(ctx);
      textview.setTextSize(15);
      textview.setText("Made by" + split + DEVELOPER);
      textview.setTextColor(Color.RED);
      textview.setGravity(Gravity.CENTER);
      menuLayout.addView(textview);

      
	  
	  var btncreative = new Button(ctx);
      btncreative.setText('Creative');
	  btncreative.setTextColor(Color.BLUE);
      btncreative.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      Level.setGameMode(1);
      }
      }));
	  menuLayout.addView(btncreative);
	  
	  var btnsurvival = new Button(ctx);
      btnsurvival.setText('Survival');
	  btnsurvival.setTextColor(Color.BLUE);
      btnsurvival.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      Level.setGameMode(0);
      }
      }));
	  menuLayout.addView(btnsurvival);
	  
      var checkfly = new CheckBox(ctx);
      checkfly.setText("Fly");
      checkfly.setChecked(fly);
      checkfly.setTextColor(Color.RED);
      checkfly.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!fly){
      fly = true;
      Player.setCanFly(true);
      checkfly.setTextColor(Color.GREEN);
      }else{
      fly = false;
      Player.setCanFly(false);
      checkfly.setTextColor(Color.RED);
      }
      checkfly.setChecked(fly);
      }
      }));
      menuLayout.addView(checkfly);
      
      if(fly){
      checkfly.setTextColor(Color.GREEN);
     }

     var checkspeed = new CheckBox(ctx);
      checkspeed.setText("Speed 4x");
      checkspeed.setChecked(speed);
      checkspeed.setTextColor(Color.RED);
      checkspeed.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!speed){
      speed = true;
      ModPE.setGameSpeed(70);
      checkspeed.setTextColor(Color.GREEN);
      }else{
      speed = false;
      ModPE.setGameSpeed(20);
      checkspeed.setTextColor(Color.RED);
      }
      checkspeed.setChecked(speed);
      }
      }));
      menuLayout.addView(checkspeed);

     if(speed){
      checkspeed.setTextColor(Color.GREEN);
     }
     
     var checkday = new CheckBox(ctx);
      checkday.setText("Only Day");
      checkday.setChecked(onlydaych);
      checkday.setTextColor(Color.RED);
      checkday.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!onlydaych){
      onlydaych = true;
      onlyday = true;
      checkday.setTextColor(Color.GREEN);
      }else{
      onlydaych = false;
      onlyday = false;
      checkday.setTextColor(Color.RED);
      }
      checkday.setChecked(onlydaych);
      }
      }));
      menuLayout.addView(checkday);

      if(onlydaych){
        checkday.setTextColor(Color.GREEN);
       }
       
       var checklife = new CheckBox(ctx);
      checklife.setText("Infinite Life");
      checklife.setChecked(infinitelifech);
      checklife.setTextColor(Color.RED);
      checklife.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!infinitelifech){
      infinitelifech = true;
      infinitelife = true;
      checklife.setTextColor(Color.GREEN);
      }else{
      infinitelifech = false;
      infinitelife = false;
      checklife.setTextColor(Color.RED);
      }
      checklife.setChecked(infinitelifech);
      }
      }));
      menuLayout.addView(checklife);

      if(infinitelifech){
        checklife.setTextColor(Color.GREEN);
       }
       
      var checkspam = new CheckBox(ctx);
      checkspam.setText("Spam");
      checkspam.setChecked(spamch);
      checkspam.setTextColor(Color.RED);
      checkspam.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!spamch){
      spamch = true;
      spam = true;
      checkspam.setTextColor(Color.GREEN);
      }else{
      spamch = false;
      spam = false;
      checkspam.setTextColor(Color.RED);
      }
      checkspam.setChecked(spamch);
      }
      }));
      menuLayout.addView(checkspam);

      if(spamch){
        checkspam.setTextColor(Color.GREEN);
       }
       
       var checkkill = new CheckBox(ctx);
      checkkill.setText("Insta Kill");
      checkkill.setChecked(instakillch);
      checkkill.setTextColor(Color.RED);
      checkkill.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!instakillch){
      instakillch = true;
      instakill = true;
      checkkill.setTextColor(Color.GREEN);
      }else{
      instakillch = false;
      instakill = false;
      checkkill.setTextColor(Color.RED);
      }
      checkkill.setChecked(instakillch);
      }
      }));
      menuLayout.addView(checkkill);

      if(instakillch){
        checkkill.setTextColor(Color.GREEN);
       }
	   
	   var checkexplode = new CheckBox(ctx);
      checkexplode.setText("Tap Explode");
      checkexplode.setChecked(tapexplodech);
      checkexplode.setTextColor(Color.RED);
      checkexplode.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!tapexplodech){
      tapexplodech = true;
      tapexplode = true;
      checkexplode.setTextColor(Color.GREEN);
      }else{
      tapexplodech = false;
      tapexplode = false;
      checkexplode.setTextColor(Color.RED);
      }
      checkexplode.setChecked(tapexplodech);
      }
      }));
      menuLayout.addView(checkexplode);

      if(tapexplodech){
        checkexplode.setTextColor(Color.GREEN);
       }
	   
	   
	   var checkxp = new CheckBox(ctx);
      checkxp.setText("Infinite XP");
      checkxp.setChecked(infiniteXPch);
      checkxp.setTextColor(Color.RED);
      checkxp.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!infiniteXPch){
      infiniteXPch = true;
      infiniteXP = true;
      checkxp.setTextColor(Color.GREEN);
      }else{
      infiniteXPch = false;
      infiniteXP = false;
      checkxp.setTextColor(Color.RED);
      }
      checkxp.setChecked(infiniteXPch);
      }
      }));
      menuLayout.addView(checkxp);

      if(infiniteXPch){
        checkxp.setTextColor(Color.GREEN);
       }
	   
     var checkslow = new CheckBox(ctx);
      checkslow.setText("Speed Slow");
      checkslow.setChecked(speedslowch);
      checkslow.setTextColor(Color.RED);
      checkslow.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!speedslowch){
      speedslowch = true;
	  ModPE.setGameSpeed(5);
      checkslow.setTextColor(Color.GREEN);
      }else{
      speedslowch = false;
	  ModPE.setGameSpeed(20);
      checkslow.setTextColor(Color.RED);
      }
      checkslow.setChecked(speedslowch);
      }
      }));
      menuLayout.addView(checkslow);

      if(speedslowch){
        checkslow.setTextColor(Color.GREEN);
       }
	   
	   var checkjesus = new CheckBox(ctx);
      checkjesus.setText("Jesus / Water Walk");
      checkjesus.setChecked(jesusch);
      checkjesus.setTextColor(Color.RED);
      checkjesus.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!jesusch){
      jesusch = true;
	  waterwalk = true;
      checkjesus.setTextColor(Color.GREEN);
      }else{
      jesusch = false;
	  waterwalk = false;
      checkjesus.setTextColor(Color.RED);
      }
      checkjesus.setChecked(jesusch);
      }
      }));
      menuLayout.addView(checkjesus);

      if(jesusch){
        checkjesus.setTextColor(Color.GREEN);
       }
	   
	  var checkgod = new CheckBox(ctx);
      checkgod.setText("God Mode");
      checkgod.setChecked(godmodech);
      checkgod.setTextColor(Color.RED);
      checkgod.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!godmodech){
      godmodech = true;
	  Player.setHealth(50000);
      checkgod.setTextColor(Color.GREEN);
      }else{
      godmodech = false;
	  Player.setHealth(20);
      checkgod.setTextColor(Color.RED);
      }
      checkgod.setChecked(godmodech);
      }
      }));
      menuLayout.addView(checkgod);

      if(godmodech){
        checkgod.setTextColor(Color.GREEN);
       }
	   
	   invscr = new CheckBox(ctx);
			invscr.setText("Inverted Screen");
			invscr.setTextColor(Color.RED);
			invscr.setChecked(invscrch);
			invscr.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!invscrch){
						invscrch = true;
						invscr.setTextColor(Color.GREEN);
						ModPE.setFov(300.0);
					}else{
						invscrch = false;
						invscr.setTextColor(Color.RED);
						ModPE.resetFov();
					}
					invscr.setChecked(invscrch);
				}
			}));
			menuLayout.addView(invscr);
			
			if(invscrch) {
				invscr.setTextColor(Color.GREEN);
			}
			
	   
	  var btnday = new Button(ctx);
      btnday.setText('Day');
	  btnday.setTextColor(Color.BLUE);
      btnday.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      Level.setTime(0);
      }
      }));
      menuLayout.addView(btnday);

	  var btnnight = new Button(ctx);
      btnnight.setText('Night');
	  btnnight.setTextColor(Color.BLUE);
      btnnight.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      Level.setTime(14000);
      }
      }));
      menuLayout.addView(btnnight);

	   
	  
	  
      menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
      menu.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
      menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
      }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }
      
      function exit(){
      var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var xLayout = new LinearLayout(ctxe);
      var xButton = new Button(ctxe);
      xButton.setText('X');
      xButton.setTextColor(Color.RED);
      xButton.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      exitUI.dismiss();
      menu.dismiss();
      }
      }));
      xLayout.addView(xButton);
      exitUI = new PopupWindow(xLayout, dip2px(40), dip2px(40));
      exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
      exitUI.showAtLocation(ctxe.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
      }catch(exception){
      print(exception);
      }
      }}));
      }
	  
      function leaveGame(){
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      if(GUI != null){
      GUI.dismiss();
      GUI = null;
      }
      if(menu != null){
      menu.dismiss();
      menu = null;
      }
      if(exitUI != null){
      exitUI.dismiss();
      exitUI = null;
      }
      }}));
      }
      
    
 function modTick(){
 
 if(onlyday){
 Level.setTime(0);
 }
 if(infinitelife){
 Player.setHealth(20);
 }
 
 if(spam){
 clientMessage("SPAM!!!");
 }
 
 if(infiniteXP){
 Player.addExp(500);
 }
 
 if(waterwalk){
 if(Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==8 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==9 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==10 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==11) {
 setVelY(getPlayerEnt(), 0);
 }
 }
 
 }
 
 function attackHook(attacker, victim){
 if(instakill){
 Entity.setHealth(victim, 1);
 }

 }
 
 function useItem(x, y, z, i, b, s){
 
 if(tapexplode){
 explode(x, y, z, 5);
 }
 
 }
