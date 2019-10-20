
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("57faedca-6f72-4f19-b9a1-c5f719b10571");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '57faedca-6f72-4f19-b9a1-c5f719b10571' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"478a9df9-4328-4467-afb7-3a6ff08b665b":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["outers","color","level","centers","end","values","start","abbr_medal","inners"],"data":{"abbr_medal":[["AUT",""],["AUT","bronze"],["AUT","gold"],["AUT","silver"],["CAN",""],["CAN","bronze"],["CAN","gold"],["CAN","silver"],["CHE",""],["CHE","bronze"],["CHE","gold"],["CHE","silver"],["DEU",""],["DEU","bronze"],["DEU","gold"],["DEU","silver"],["FRA",""],["FRA","bronze"],["FRA","gold"],["FRA","silver"],["NLD",""],["NLD","bronze"],["NLD","gold"],["NLD","silver"],["NOR",""],["NOR","bronze"],["NOR","gold"],["NOR","silver"],["RUS",""],["RUS","bronze"],["RUS","gold"],["RUS","silver"],["SWE",""],["SWE","bronze"],["SWE","gold"],["SWE","silver"],["USA",""],["USA","bronze"],["USA","gold"],["USA","silver"]],"centers":[1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25],"color":["#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320","#00ad9c","#00ad9c","#00ad9c","#00ad9c","#c33ff3","#c33ff3","#c33ff3","#c33ff3","#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320"],"end":[0.37952126016520993,0.04216902890724555,0.12650708672173663,0.37952126016520993,1.0542257226811387,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.475916011753594,1.0963947515883843,1.3494089250318575,1.475916011753594,2.1084514453622774,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.530141734434733,2.319296589898505,2.445803676620242,2.530141734434733,3.373522312579644,2.8674939656926974,3.1205081391361706,3.373522312579644,4.174733861817309,3.6687055149303625,4.006057746188326,4.174733861817309,5.060283468869465,4.469917064168028,4.722931237611501,5.060283468869465,5.439804729034675,5.144621526683956,5.228959584498447,5.439804729034674,6.283185307179586,5.86149501810713,6.114509191550603,6.283185307179585],"inners":[0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5],"level":[0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0],"outers":[1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0],"start":[0.0,0.0,0.04216902890724555,0.12650708672173663,0.37952126016520993,0.37952126016520993,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.0542257226811387,1.0963947515883843,1.3494089250318575,1.475916011753594,1.475916011753594,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.1084514453622774,2.319296589898505,2.445803676620242,2.530141734434733,2.530141734434733,2.8674939656926974,3.1205081391361706,3.373522312579644,3.373522312579644,3.6687055149303625,4.006057746188326,4.174733861817309,4.174733861817309,4.469917064168028,4.722931237611501,5.060283468869465,5.060283468869465,5.144621526683956,5.228959584498447,5.439804729034675,5.439804729034674,5.86149501810713,6.114509191550603],"values":[9,1,2,6,16,4,4,8,10,1,6,3,15,4,8,3,10,5,3,2,20,8,6,6,19,7,8,4,21,7,6,8,9,2,2,5,20,10,6,4]}},"id":"64a913f7-7514-4fb7-add4-f929aadb8ac0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"64a913f7-7514-4fb7-add4-f929aadb8ac0","type":"ColumnDataSource"},"glyph":{"id":"c73f5e8e-211e-4d70-b0b7-149046f7ecb8","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"844c112f-947a-4be8-b026-d41e6449166a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"}},"id":"87ac2247-72b3-4d38-9e63-d1f66cd814cd","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"}},"id":"0d288947-4517-4233-b4ab-1c52d554e91c","type":"PreviewSaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"244f9b90-dad5-489f-9153-a10f584ce73a","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"3f3fc0ee-1194-4b48-86a5-7dcd9abb05d9","type":"ColumnDataSource"},"glyph":{"id":"779f5442-f725-4810-8fd9-a62f2bc673a3","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f234bcc4-b3e3-421d-aab0-4b659e2bce92","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"244f9b90-dad5-489f-9153-a10f584ce73a","type":"BoxAnnotation"},"plot":{"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"}},"id":"9cd64505-8563-40ba-95de-6c6e2de6f64b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"}},"id":"424cdd82-44d7-4d2b-a14d-6e49644fede0","type":"PanTool"},{"attributes":{"plot":{"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"}},"id":"e3c4f285-2c43-4de3-b1f9-ee0204cc16f1","type":"HelpTool"},{"attributes":{"below":[{"id":"495e8d51-3201-4d61-9086-0f2c81d261fc","type":"LinearAxis"}],"left":[{"id":"14f4edba-2b89-4eda-8ab4-497c9cdc4bde","type":"LinearAxis"}],"legend":null,"plot_height":400,"plot_width":400,"renderers":[{"id":"244f9b90-dad5-489f-9153-a10f584ce73a","type":"BoxAnnotation"},{"id":"844c112f-947a-4be8-b026-d41e6449166a","type":"GlyphRenderer"},{"id":"f234bcc4-b3e3-421d-aab0-4b659e2bce92","type":"GlyphRenderer"},{"id":"495e8d51-3201-4d61-9086-0f2c81d261fc","type":"LinearAxis"},{"id":"14f4edba-2b89-4eda-8ab4-497c9cdc4bde","type":"LinearAxis"}],"title_text_font_size":{"value":"14pt"},"tool_events":{"id":"916bfd81-4dfc-47b0-bea3-0f4b2810f846","type":"ToolEvents"},"tools":[{"id":"424cdd82-44d7-4d2b-a14d-6e49644fede0","type":"PanTool"},{"id":"87ac2247-72b3-4d38-9e63-d1f66cd814cd","type":"WheelZoomTool"},{"id":"9cd64505-8563-40ba-95de-6c6e2de6f64b","type":"BoxZoomTool"},{"id":"0d288947-4517-4233-b4ab-1c52d554e91c","type":"PreviewSaveTool"},{"id":"a988e371-b984-456f-a34a-260fdaeec536","type":"ResizeTool"},{"id":"baa0fed7-2934-4733-8864-29c26de797ad","type":"ResetTool"},{"id":"e3c4f285-2c43-4de3-b1f9-ee0204cc16f1","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"88947af6-dc7d-434a-9c49-4b2856024699","type":"Range1d"},"xgrid":false,"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"1b10f54f-edcb-4e65-b67d-ec946b3629ae","type":"Range1d"},"ygrid":false,"yscale":"auto"},"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"}},"id":"a988e371-b984-456f-a34a-260fdaeec536","type":"ResizeTool"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"1b10f54f-edcb-4e65-b67d-ec946b3629ae","type":"Range1d"},{"attributes":{},"id":"1d2acf74-ace1-498d-b0a8-8f4f9384d07f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"88947af6-dc7d-434a-9c49-4b2856024699","type":"Range1d"},{"attributes":{},"id":"09f64270-f8f0-43df-a345-35ac1bf52191","type":"BasicTicker"},{"attributes":{},"id":"d94c8169-6803-4dd5-a26f-d8c634b773b5","type":"BasicTicker"},{"attributes":{},"id":"916bfd81-4dfc-47b0-bea3-0f4b2810f846","type":"ToolEvents"},{"attributes":{"plot":{"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"}},"id":"baa0fed7-2934-4733-8864-29c26de797ad","type":"ResetTool"},{"attributes":{"end_angle":{"field":"end","units":"rad"},"fill_alpha":{"value":0.8},"fill_color":{"field":"color"},"inner_radius":{"field":"inners","units":"data"},"line_color":{"value":"White"},"outer_radius":{"field":"outers","units":"data"},"start_angle":{"field":"start","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"c73f5e8e-211e-4d70-b0b7-149046f7ecb8","type":"AnnularWedge"},{"attributes":{"callback":null,"column_names":["y","text_angle","x","text"],"data":{"text":["AUT","bronze","gold","silver","CAN","bronze","gold","silver","CHE","bronze","gold","silver","DEU","bronze","gold","silver","FRA","bronze","gold","silver","NLD","bronze","gold","silver","NOR","bronze","gold","silver","RUS","bronze","gold","silver","SWE","bronze","gold","silver","USA","bronze","gold","silver"],"text_angle":[0.0,0.021084514453622773,0.0843380578144911,0.25301417344347327,0.0,0.46385931797970104,0.6325354336086833,0.8855496070521565,0.0,1.0753102371347616,1.222901838310121,1.4126624683927258,0.0,1.560254069568085,4.954860896601351,5.186790555591202,0.0,5.355466671220184,5.524142786849167,5.62956535911728,0.0,5.840410503653509,6.135593706004228,6.388607879447701,0.0,6.662706567344796,6.978974284149137,7.23198845759261,0.0,7.4639181165824615,7.738016804479558,4.891607353240483,0.0,5.10245249777671,5.186790555591202,5.33438215676656,0.0,5.650649873570902,5.988002104828866,6.198847249365095],"x":[1.104805590886699,2.249499892184141,2.2420027205170387,2.178365181744732,0.8480965760393239,2.012248106600736,1.8146951444761354,1.4239441276355629,0.33860820772678335,1.069783512354476,0.767068174776323,0.35432015483704005,-0.24703129626183343,0.023719639391054256,-0.5402316686595636,-1.0278139286434214,-0.7656082347002524,-1.3492377266828857,-1.632364439995781,-1.7862476490719368,-1.104805590886699,-2.0330241374833724,-2.2255382623177966,-2.2375084170483754,-0.907347572238068,-2.0898947329938067,-1.7269834802180628,-1.3109764694102914,-0.10658027550270278,-0.8555561148769509,-0.2603364557048132,0.40108616972985656,0.5761387742118242,0.8555561148769484,1.0278139286434202,1.3109764694102874,1.0264482036225655,1.8146951444761346,2.1526849395915697,2.2420027205170387],"y":[0.21220180570742547,0.04743664262507488,0.18953575175727672,0.5632274273881197,0.7391597917300259,1.0066566234231777,1.3301810149805693,1.7420915938526873,1.0728324574042563,1.9794098202985961,2.11520836213488,2.221926467702353,1.0975429552720013,2.2498749695721223,2.184181710430088,2.0015240513385235,0.8242991149814265,1.8005714528714485,1.5485110057849962,1.3681444865894021,0.21220180570742506,0.9640087429115931,0.3308767791179714,-0.23676165998250986,-0.6650905074902843,-0.8335706358820144,-1.4422302378794822,-1.8286171542049274,-1.1199400184267763,-2.0809910461836827,-2.234888124678964,-2.213962484878963,-0.9662758989283012,-2.0809910461836836,-2.001524051338524,-1.82861715420493,-0.46046616084138936,-1.3301810149805708,-0.6545590507017991,-0.18953575175727858]}},"id":"3f3fc0ee-1194-4b48-86a5-7dcd9abb05d9","type":"ColumnDataSource"},{"attributes":{"axis_label":null,"formatter":{"id":"1d2acf74-ace1-498d-b0a8-8f4f9384d07f","type":"BasicTickFormatter"},"plot":{"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"},"ticker":{"id":"d94c8169-6803-4dd5-a26f-d8c634b773b5","type":"BasicTicker"},"visible":false},"id":"495e8d51-3201-4d61-9086-0f2c81d261fc","type":"LinearAxis"},{"attributes":{"axis_label":null,"formatter":{"id":"a41f8bc6-b31c-4c1c-b3d1-901fc5ef774c","type":"BasicTickFormatter"},"plot":{"id":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c","subtype":"Chart","type":"Plot"},"ticker":{"id":"09f64270-f8f0-43df-a345-35ac1bf52191","type":"BasicTicker"},"visible":false},"id":"14f4edba-2b89-4eda-8ab4-497c9cdc4bde","type":"LinearAxis"},{"attributes":{"angle":{"field":"text_angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_font_size":{"value":"8pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"779f5442-f725-4810-8fd9-a62f2bc673a3","type":"Text"},{"attributes":{},"id":"a41f8bc6-b31c-4c1c-b3d1-901fc5ef774c","type":"BasicTickFormatter"}],"root_ids":["7f78f2cc-0714-4ce1-9600-e8e6e40bec0c"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"478a9df9-4328-4467-afb7-3a6ff08b665b","elementid":"57faedca-6f72-4f19-b9a1-c5f719b10571","modelid":"7f78f2cc-0714-4ce1-9600-e8e6e40bec0c"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));