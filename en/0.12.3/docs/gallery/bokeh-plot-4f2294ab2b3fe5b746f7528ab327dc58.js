document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("bf300b62-9599-434a-bdd5-2588c64304f9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf300b62-9599-434a-bdd5-2588c64304f9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"d9d6b732-e6bd-43b9-b9e3-d1239df4eed2":{"roots":{"references":[{"attributes":{},"id":"46a2d2ec-375e-441e-92c0-8436c7e16061","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fef822fa-57b5-4511-ab21-788d81985665","type":"PanTool"},{"id":"f95f1451-ec68-4ef5-9ecd-3310e33c438a","type":"WheelZoomTool"},{"id":"9217b056-df24-4133-94f9-753af06396b9","type":"BoxZoomTool"},{"id":"418fccdf-5efe-4fb7-b8be-3d317ff9aaf0","type":"SaveTool"},{"id":"0e8a9a0f-dd9f-47eb-ab34-fe406d5b5624","type":"ResetTool"},{"id":"84727c60-e94c-48db-8b80-1f09e6c61eaf","type":"HelpTool"}]},"id":"982f9fb3-832e-4c44-a040-e4d8bdeea19b","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"70b8b69f-6b41-4138-ace1-a8123dff1e40","type":"Circle"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"46a2d2ec-375e-441e-92c0-8436c7e16061","type":"BasicTickFormatter"},"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdf386a0-509b-40fa-af44-bc993ebf1f64","type":"BasicTicker"}},"id":"154852a6-fe02-4f31-916c-4b52446062bf","type":"LinearAxis"},{"attributes":{},"id":"1355b2d2-b371-4983-a74d-33036740c6d1","type":"BasicTicker"},{"attributes":{"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"}},"id":"418fccdf-5efe-4fb7-b8be-3d317ff9aaf0","type":"SaveTool"},{"attributes":{"overlay":{"id":"da791fdc-27f1-49c8-97da-f1f8273a5529","type":"BoxAnnotation"},"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"}},"id":"9217b056-df24-4133-94f9-753af06396b9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"}},"id":"fef822fa-57b5-4511-ab21-788d81985665","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d26dc9e0-176a-47b6-afc4-47a882fd8cc0","type":"Circle"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"656b4777-e0d1-4180-8d9e-8272b296523e","type":"BasicTickFormatter"},"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"1355b2d2-b371-4983-a74d-33036740c6d1","type":"BasicTicker"}},"id":"359627a0-8f4c-471a-b81f-ba96c098be76","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdf386a0-509b-40fa-af44-bc993ebf1f64","type":"BasicTicker"}},"id":"6cd77361-3e9a-4859-80c2-478edf8d7efc","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4,4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1,6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2,1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3,2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"6ca806a2-a29d-46e3-a223-ba82963ab197","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"5272d759-1e65-4631-b795-3c15785a58d0","type":"Title"},{"attributes":{"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"1355b2d2-b371-4983-a74d-33036740c6d1","type":"BasicTicker"}},"id":"9f365011-2ccb-4f24-950e-fe2906d6f722","type":"Grid"},{"attributes":{"callback":null},"id":"a2e0f732-f2c3-4be2-8b64-a3bf7b71afd0","type":"DataRange1d"},{"attributes":{"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"}},"id":"f95f1451-ec68-4ef5-9ecd-3310e33c438a","type":"WheelZoomTool"},{"attributes":{},"id":"656b4777-e0d1-4180-8d9e-8272b296523e","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"359627a0-8f4c-471a-b81f-ba96c098be76","type":"LinearAxis"}],"left":[{"id":"154852a6-fe02-4f31-916c-4b52446062bf","type":"LinearAxis"}],"renderers":[{"id":"359627a0-8f4c-471a-b81f-ba96c098be76","type":"LinearAxis"},{"id":"9f365011-2ccb-4f24-950e-fe2906d6f722","type":"Grid"},{"id":"154852a6-fe02-4f31-916c-4b52446062bf","type":"LinearAxis"},{"id":"6cd77361-3e9a-4859-80c2-478edf8d7efc","type":"Grid"},{"id":"da791fdc-27f1-49c8-97da-f1f8273a5529","type":"BoxAnnotation"},{"id":"0873fdd6-a52c-4784-ab91-547e13d7eb27","type":"GlyphRenderer"}],"title":{"id":"5272d759-1e65-4631-b795-3c15785a58d0","type":"Title"},"tool_events":{"id":"09ef23ba-537e-4ed0-865a-f82ed454a4b6","type":"ToolEvents"},"toolbar":{"id":"982f9fb3-832e-4c44-a040-e4d8bdeea19b","type":"Toolbar"},"x_range":{"id":"4b38dad0-de0b-4ec6-bf9d-1ba39a1703e8","type":"DataRange1d"},"y_range":{"id":"a2e0f732-f2c3-4be2-8b64-a3bf7b71afd0","type":"DataRange1d"}},"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"}},"id":"84727c60-e94c-48db-8b80-1f09e6c61eaf","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"da791fdc-27f1-49c8-97da-f1f8273a5529","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"4b38dad0-de0b-4ec6-bf9d-1ba39a1703e8","type":"DataRange1d"},{"attributes":{},"id":"cdf386a0-509b-40fa-af44-bc993ebf1f64","type":"BasicTicker"},{"attributes":{"plot":{"id":"2d275f1f-7d75-44d6-b9da-9894486682d9","subtype":"Figure","type":"Plot"}},"id":"0e8a9a0f-dd9f-47eb-ab34-fe406d5b5624","type":"ResetTool"},{"attributes":{"data_source":{"id":"6ca806a2-a29d-46e3-a223-ba82963ab197","type":"ColumnDataSource"},"glyph":{"id":"d26dc9e0-176a-47b6-afc4-47a882fd8cc0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"70b8b69f-6b41-4138-ace1-a8123dff1e40","type":"Circle"},"selection_glyph":null},"id":"0873fdd6-a52c-4784-ab91-547e13d7eb27","type":"GlyphRenderer"},{"attributes":{},"id":"09ef23ba-537e-4ed0-865a-f82ed454a4b6","type":"ToolEvents"}],"root_ids":["2d275f1f-7d75-44d6-b9da-9894486682d9"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"d9d6b732-e6bd-43b9-b9e3-d1239df4eed2","elementid":"bf300b62-9599-434a-bdd5-2588c64304f9","modelid":"2d275f1f-7d75-44d6-b9da-9894486682d9"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});