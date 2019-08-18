(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("3c885276-75b6-473e-a74b-c14d80125fa9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3c885276-75b6-473e-a74b-c14d80125fa9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"59a06fb3-3527-4ca4-aad3-37712480411b":{"roots":{"references":[{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"1d49dcac-9473-40d7-846a-6adb168da54b","type":"AdaptiveTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"a61d8bf2-5043-48e6-a205-dd09c850c79a","type":"MonthsTicker"},{"attributes":{},"id":"6c0ad9e9-5018-4655-ad08-f1a7940353b9","type":"DatetimeTickFormatter"},{"attributes":{"items":[{"id":"4728aeb7-ba59-4a7d-9572-f145414518d3","type":"LegendItem"}],"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"}},"id":"9e02b7c2-d054-4d5d-95e1-b66286b614e4","type":"Legend"},{"attributes":{"line_color":{"value":"gray"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7361a504-a181-413a-89e3-433853c545ac","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d894e06e-fb27-4a6d-87b8-caa26a4f3e1d","type":"PanTool"},{"id":"f72bfa98-6ab8-406e-8441-12e7f114e92b","type":"WheelZoomTool"},{"id":"42299be7-dcb9-4348-95ca-943917ac0a1c","type":"BoxZoomTool"},{"id":"0f11cb06-4cfc-4160-a99b-10d75aee374b","type":"ResetTool"},{"id":"225a4691-f596-45db-88f8-21f9f50c70f9","type":"SaveTool"}]},"id":"b613c3eb-b128-48d8-8bf1-b9589a3dda5b","type":"Toolbar"},{"attributes":{"axis_label":"Time","formatter":{"id":"6c0ad9e9-5018-4655-ad08-f1a7940353b9","type":"DatetimeTickFormatter"},"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"},"ticker":{"id":"abedbb77-054b-42bb-8ac6-c6d8439b258a","type":"DatetimeTicker"}},"id":"8384cdc3-6422-4955-9d7f-b9d0d1593d1d","type":"DatetimeAxis"},{"attributes":{"days":[1,15]},"id":"f89aec1c-02f3-426d-b7fa-44071464a221","type":"DaysTicker"},{"attributes":{"plot":null,"text":"Glucose Range"},"id":"5fa1943b-0e6f-4f25-aba6-b95725aca921","type":"Title"},{"attributes":{"bottom":80,"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"},"top":180},"id":"d69e47f1-5237-4688-87e3-107bbbd4fae3","type":"BoxAnnotation"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"},"ticker":{"id":"abedbb77-054b-42bb-8ac6-c6d8439b258a","type":"DatetimeTicker"}},"id":"09d69a5f-e296-4b77-93c2-a9d0d1d3e798","type":"Grid"},{"attributes":{"label":{"value":"glucose"},"renderers":[{"id":"00aaab79-01f1-4652-b86e-1586530bb748","type":"GlyphRenderer"}]},"id":"4728aeb7-ba59-4a7d-9572-f145414518d3","type":"LegendItem"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"df56b784-079f-41e3-afe7-a0bc7f8eeefa","type":"MonthsTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AADyke23ckIAADDb7bdyQgAAbiTut3JCAACsbe63ckIAAOq27rdyQgAAKADvt3JCAABmSe+3ckIAAKSS77dyQgAA4tvvt3JCAAAgJfC3ckIAAF5u8LdyQgAAnLfwt3JCAADaAPG3ckIAABhK8bdyQgAAVpPxt3JCAACU3PG3ckIAANIl8rdyQgAAEG/yt3JCAABOuPK3ckIAAIwB87dyQgAAykrzt3JCAAAIlPO3ckIAAEbd87dyQgAAhCb0t3JCAADCb/S3ckIAAAC59LdyQgAAPgL1t3JCAAB8S/W3ckIAALqU9bdyQgAA+N31t3JCAAA2J/a3ckIAAHRw9rdyQgAAsrn2t3JCAADwAve3ckIAAC5M97dyQgAAbJX3t3JCAACq3ve3ckIAAOgn+LdyQgAAJnH4t3JCAABkuvi3ckIAAKID+bdyQgAA4Ez5t3JCAAAelvm3ckIAAFzf+bdyQgAAmij6t3JCAADYcfq3ckIAABa7+rdyQgAAVAT7t3JCAACSTfu3ckIAANCW+7dyQgAADuD7t3JCAABMKfy3ckIAAIpy/LdyQgAAyLv8t3JCAAAGBf23ckIAAERO/bdyQgAAgpf9t3JCAADA4P23ckIAAP4p/rdyQgAAPHP+t3JCAAB6vP63ckIAALgF/7dyQgAA9k7/t3JCAAA0mP+3ckIAAHLh/7dyQgAAsCoAuHJCAADucwC4ckIAACy9ALhyQgAAagYBuHJCAACoTwG4ckIAAOaYAbhyQgAAJOIBuHJCAABiKwK4ckIAAKB0ArhyQgAA3r0CuHJCAAAcBwO4ckIAAFpQA7hyQgAAmJkDuHJCAADW4gO4ckIAABQsBLhyQgAAUnUEuHJCAACQvgS4ckIAAM4HBbhyQgAADFEFuHJCAABKmgW4ckIAAIjjBbhyQgAAxiwGuHJCAAAEdga4ckIAAEK/BrhyQgAAgAgHuHJCAAC+UQe4ckIAAPyaB7hyQgAAOuQHuHJCAAB4LQi4ckIAALZ2CLhyQgAA9L8IuHJCAAAyCQm4ckIAAHBSCbhyQgAArpsJuHJCAADs5Am4ckIAACouCrhyQgAAaHcKuHJCAACmwAq4ckIAAOQJC7hyQgAAIlMLuHJCAABgnAu4ckIAAJ7lC7hyQgAA3C4MuHJCAAAaeAy4ckIAAFjBDLhyQgAAlgoNuHJCAADUUw24ckIAABKd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2bhyQgAAWNXZuHJCAACWHtq4ckIAANRn2rhyQgAAErHauHJCAABQ+tq4ckIAAI5D27hyQgAAzIzbuHJCAAAK1tu4ckIAAEgf3LhyQgAAhmjcuHJCAADEsdy4ckIAAAL73LhyQgAAQETduHJCAAB+jd24ckIAALzW3bhyQgAA+h/euHJCAAA4ad64ckIAAHay3rhyQgAAtPveuHJCAADyRN+4ckIAADCO37hyQgAAbtffuHJCAACsIOC4ckIAAOpp4LhyQgAAKLPguHJCAABm/OC4ckIAAKRF4bhyQgAA4o7huHJCAAAg2OG4ckIAAF4h4rhyQgAAnGriuHJCAADas+K4ckIAABj94rhyQgAAVkbjuHJCAACUj+O4ckIAANLY47hyQgAAECLkuHJCAABOa+S4ckIAAIy05LhyQgAAyv3kuHJCAAAIR+W4ckIAAEaQ5bhyQgAAhNnluHJCAADCIua4ckIAAABs5rhyQgAAPrXmuHJCAAB8/ua4ckIAALpH57hyQgAA+JDnuHJCAAA22ue4ckIAAHQj6LhyQgAAsmzouHJCAADwtei4ckIAAC7/6LhyQgAAbEjpuHJCAACqkem4ckIAAOja6bhyQgAAJiTquHJCAABkbeq4ckIAAKK26rhyQgAA4P/quHJCAAAeSeu4ckIAAFyS67hyQgAAmtvruHJCAADYJOy4ckIAABZu7LhyQgAAVLfsuHJCAACSAO24ckIAANBJ7bhyQgAADpPtuHJCAABM3O24ckIAAIol7rhyQgAAyG7uuHJCAAAGuO64ckIAAEQB77hyQgAAgkrvuHJCAADAk++4ckIAAP7c77hyQgAAPCbwuHJCAAB6b/C4ckIAALi48LhyQgAA9gHxuHJCAAA0S/G4ckIAAHKU8bhyQgAAsN3xuHJCAADuJvK4ckIAACxw8rhyQgAAarnyuHJCAACoAvO4ckIAAOZL87hyQgAAJJXzuHJCAABi3vO4ckIAAKAn9LhyQgAA3nD0uHJCAAAcuvS4ckIAAFoD9bhyQgAAmEz1uHJCAADWlfW4ckIAABTf9bhyQgAAUij2uHJCAACQcfa4ckIAAM669rhyQgAADAT3uHJCAABKTfe4ckIAAIiW97hyQgAAxt/3uHJCAAAEKfi4ckIAAEJy+LhyQgAAgLv4uHJCAAC+BPm4ckIAAPxN+bhyQgAAOpf5uHJC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","dtype":"float64","shape":[1397]},"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150,150,152,149,147,148,150,152,152,152,151,151,150,149,147,146,143,140,138,136,137,138,140,138,135,132,130,129,129,129,130,130,129,128,128,128,129,129,128,127,126,125,125,125,125,124,124,121,120,120,123,124,123,122,120,115,113,114,114,115,116,115,112,111,111,109,108,107,107,110,113,114,115,115,115,114,113,113,116,119,120,121,121,122,123,124,125,126,126,126,126,126,127,127,125,122,118,115,111,112,115,117,120,124,127,131,137,143,148,153,159,166,172,178,184,191,199,206,212,217,223,229,232,233,235,237,240,241,243,246,247,246,243,240,234,229,225,221,217,216,215,215,215,212,208,203,199,196,194,190,185,180,177,163,158,152,149,153,163,174,182,188,192,195,197,201,204,205,203,199,195,189,184,176,169,162,150,138,128,119,110,100,90,80,73,68,64,63,63,66,68,70,71,72,74,80,94,116,141,164,183,198,210,220,228,233,237,241,247,252,256,260,259,258,256,251,245,238,234,227,221,215,208,207,207,203,201,201,199,179,176,171,163,152,137,119,98,77,61,50,45,47,59,71,86,99,109,116,117,115,111,107,102,96,91,90,94,97,97,95,92,87,84,84,83,84,86,86,86,84,82,82,81,81,82,84,87,89,91,92,94,93,93,94,96,100,101,99,97,96,96,97,97,98,99,101,102,106,114,121,127,130,124,105,109,119,127,129,132,129,126,126,126,126,126,125,124,125,130,130,128,126,126,126,126,126,126,126,127,128,129,129,127,128,136,141,143,141,138,131,129,133,134,130,129,134,137,139,138,130,122,118,115,114,113,113,112,112,117,118,117,118,118,117,117,114,112,115,118,124,126,119,121,122,274,285,293,297,298,298,296,293,289,282,275,267,256,249,242,233,225,217,217,215,203,190,185,193,202,202,194,182,170,143,130,120,110,102,93,80,67,57,52,50,49,49,54,72,93,104,114,125,134,140,145,145,141,136,130,124,118,116,114,112,108,105,102,99,95,91,88,85,83,82,80,79,79,83,86,87,88,89,89,88,88,90,92,88,86,86,86,84,82,84,88,90,94,99,104,107,107,105,104,103,95,94,93,93,93,93,93,94,99,109,122,172,169,164,156,147,137,126,115,104,99,99,103,106,111,115,117,118,120,120,120,120,119,119,118,118,117,116,115,115,116,116,115,115,114,112,109,110,111,111,110,109,109,109,108,107,106,105,101,100,99,99,98,97,97,97,98,88,96,106,115,121,124,124,124,122,122,122,123,125,126,128,129,130,132,134,135,135,134,133,131,129,127,127,127,127,127,128,127,126,125,125,127,129,130,130,130,130,129,127,125,124,122,121,121,120,118,115,114,113,113,113,113,114,113,113,111,109,109,110,109,110,110,111,112,112,111,109,109,109,111,114,116,118,119,120,122,122,123,123,123,123,124,124,123,123,123,123,123,124,125,125,126,127,127,126,126,126,124,121,120,118,116,115,113,112,110,108,107,109,111,111,112,112,111,108,105,103,101,99,80,79,79,77,77,82,92,104,115,123,128,132,138,142,146,148,148,144,139,132,126,121,118,116,115,113,111,107,102,96,89,83,79,77,75,75,75,75,76,76,75,74,73,73,71,70,68,67,66,65,64,59,61,66,70,72,72,71,68,64,60,57,56,56,57,58,60,64,68,72,75,77,77,76,73,70,67,65,63,62,61,60,59,58,57,57,57,57,58,59,62,67,76,84,89,95,106,117,126,132,136,139,143,152,164,176,185,192,200,210,219,226,231,235,239,241,241,264,261,254,244,234,220,201,184,172,161,150,141,135,129,125,121,117,112,107,102,99,95,90,87,84,80,76,72,68,66,64,64,64,66,72,79,87,92,97,102,105,107,110,113,115,114,114,114,115,117,119,120,121,122,123,124,125,126,127,127,128,127,126,125,123,122,121,121,120,119,118,117,119,122,123,123,122,121,121,120,120,120,119,118,117,117,117,118,118,118,118,116,114,113,112,113,115,118,119,120,121,122,122,123,123,123,123,123,122,122,121,119,118,117,117,118,118,118,119,119,119,120,121,121,121,121,121,121,120,120,120,120,119,118,118,117,116,115,115,115,116,116,116,115,114,115,116,115,114,115,116,114,114,113,113,112,112,111,109,108,108,107,107,107,107,107,110,113,116,129,129,129,128,125,121,120,121,124,128,129,129,126,121,115,110,107,105,104,107,112,119,130,141,153,164,174,184,196,207,218,229,280,292,299,300,301,302,303,302,295,286,277,264,248,232,218,207,199,191,183,177,172,166,123,117,110,102,94,87,84,83,83,83,85,87,90,90,91,92,94,96,97,98,100,103,105,110,125,154,182,213,250,285,306,311,320,331,359,373,378,378,374,370,367,364,362,360,353,339,321,302,287,276,267,262,261,263,266,269,270,268,243,238,235,231,224,215,202,192,183,177,170,162,156,151,147,144,140,131,120,109,102,112,127,142,155,164,170,171,171,171,169,166,162,158,157,157,156,156,155,155,155,155,158,160,160,160,161,165]}},"id":"781ebb60-e0bd-4d41-ab3d-17cd92945642","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"}},"id":"d894e06e-fb27-4a6d-87b8-caa26a4f3e1d","type":"PanTool"},{"attributes":{"bottom":180,"fill_alpha":{"value":0.1},"fill_color":{"value":"red"},"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"}},"id":"fa13d9ae-f42f-427f-b828-4408675a24db","type":"BoxAnnotation"},{"attributes":{},"id":"9fc022a4-888f-45cc-8990-b5bf31f577f9","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Value","formatter":{"id":"9fc022a4-888f-45cc-8990-b5bf31f577f9","type":"BasicTickFormatter"},"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb32999f-d194-4a93-a724-35bed8c9d22b","type":"BasicTicker"}},"id":"4b351423-4df7-43a6-91ae-31aca412b686","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"red"},"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"},"top":80},"id":"c7281e9a-222f-4c24-9379-cf2a1717bd72","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"}},"id":"225a4691-f596-45db-88f8-21f9f50c70f9","type":"SaveTool"},{"attributes":{"days":[1,8,15,22]},"id":"dff8b938-b274-4979-980a-afeb292d020e","type":"DaysTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"de4e3cbe-e804-4348-bc22-0ac88374904c","type":"AdaptiveTicker"},{"attributes":{"below":[{"id":"8384cdc3-6422-4955-9d7f-b9d0d1593d1d","type":"DatetimeAxis"}],"left":[{"id":"4b351423-4df7-43a6-91ae-31aca412b686","type":"LinearAxis"}],"renderers":[{"id":"8384cdc3-6422-4955-9d7f-b9d0d1593d1d","type":"DatetimeAxis"},{"id":"09d69a5f-e296-4b77-93c2-a9d0d1d3e798","type":"Grid"},{"id":"4b351423-4df7-43a6-91ae-31aca412b686","type":"LinearAxis"},{"id":"17315104-85f6-413e-b715-03a85e3d8ef1","type":"Grid"},{"id":"6224cdc3-97cb-42b6-b3c3-ebaa3673f8c4","type":"BoxAnnotation"},{"id":"9e02b7c2-d054-4d5d-95e1-b66286b614e4","type":"Legend"},{"id":"00aaab79-01f1-4652-b86e-1586530bb748","type":"GlyphRenderer"},{"id":"c7281e9a-222f-4c24-9379-cf2a1717bd72","type":"BoxAnnotation"},{"id":"d69e47f1-5237-4688-87e3-107bbbd4fae3","type":"BoxAnnotation"},{"id":"fa13d9ae-f42f-427f-b828-4408675a24db","type":"BoxAnnotation"}],"title":{"id":"5fa1943b-0e6f-4f25-aba6-b95725aca921","type":"Title"},"tool_events":{"id":"b8a3e476-d207-4bb9-80cf-0552b56994c7","type":"ToolEvents"},"toolbar":{"id":"b613c3eb-b128-48d8-8bf1-b9589a3dda5b","type":"Toolbar"},"x_range":{"id":"133562cf-7fee-44ed-a6dc-c8116cd3c371","type":"DataRange1d"},"y_range":{"id":"cca21a2c-f420-4402-8e76-011730bfa56f","type":"DataRange1d"}},"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b8a3e476-d207-4bb9-80cf-0552b56994c7","type":"ToolEvents"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1cb05f84-ef15-4b10-bc6c-4ef45d139d1c","type":"Line"},{"attributes":{"callback":null},"id":"133562cf-7fee-44ed-a6dc-c8116cd3c371","type":"DataRange1d"},{"attributes":{"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"}},"id":"0f11cb06-4cfc-4160-a99b-10d75aee374b","type":"ResetTool"},{"attributes":{"callback":null},"id":"cca21a2c-f420-4402-8e76-011730bfa56f","type":"DataRange1d"},{"attributes":{"months":[0,4,8]},"id":"61f8a434-bc2e-4308-b201-df4f67c245ad","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"781ebb60-e0bd-4d41-ab3d-17cd92945642","type":"ColumnDataSource"},"glyph":{"id":"7361a504-a181-413a-89e3-433853c545ac","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1cb05f84-ef15-4b10-bc6c-4ef45d139d1c","type":"Line"},"selection_glyph":null},"id":"00aaab79-01f1-4652-b86e-1586530bb748","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"}},"id":"f72bfa98-6ab8-406e-8441-12e7f114e92b","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"6224cdc3-97cb-42b6-b3c3-ebaa3673f8c4","type":"BoxAnnotation"},"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"}},"id":"42299be7-dcb9-4348-95ca-943917ac0a1c","type":"BoxZoomTool"},{"attributes":{},"id":"68865733-03ed-4f83-bc64-4afa773640a0","type":"YearsTicker"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"plot":{"id":"b172a232-9339-4253-99f2-9bd311993217","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb32999f-d194-4a93-a724-35bed8c9d22b","type":"BasicTicker"}},"id":"17315104-85f6-413e-b715-03a85e3d8ef1","type":"Grid"},{"attributes":{"months":[0,6]},"id":"f0270974-dda9-41b3-b0f6-751a76766b22","type":"MonthsTicker"},{"attributes":{},"id":"cb32999f-d194-4a93-a724-35bed8c9d22b","type":"BasicTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"e963c18d-b919-4a5d-994d-736e023c8d4f","type":"DaysTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"ab4b508e-3675-4ed2-a7e6-8d8c46cc10ac","type":"DaysTicker"},{"attributes":{"num_minor_ticks":5},"id":"abedbb77-054b-42bb-8ac6-c6d8439b258a","type":"DatetimeTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6224cdc3-97cb-42b6-b3c3-ebaa3673f8c4","type":"BoxAnnotation"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"1b5a6f04-2785-46a4-afcc-c852b931c22e","type":"AdaptiveTicker"}],"root_ids":["b172a232-9339-4253-99f2-9bd311993217"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"59a06fb3-3527-4ca4-aad3-37712480411b","elementid":"3c885276-75b6-473e-a74b-c14d80125fa9","modelid":"b172a232-9339-4253-99f2-9bd311993217"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
