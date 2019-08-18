(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("fada600c-1192-4c56-92df-1af147192d1a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fada600c-1192-4c56-92df-1af147192d1a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"e4c800b7-d71b-4de2-a95d-a67753923624":{"roots":{"references":[{"attributes":{"plot":{"id":"6d228ca3-27cc-437b-9550-9ff70e7176a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9df78eb6-3049-4f9f-9f9d-78db9ffe8de2","type":"BasicTicker"}},"id":"b6736af3-2ff8-4ada-a3bf-cd33c02e78ed","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f74fc6f5-b903-4602-8003-ade3cd119314","type":"PanTool"},{"id":"8451d7df-f074-4a57-b3eb-7b2a56106535","type":"WheelZoomTool"},{"id":"3ff8471f-b86e-464b-9526-92ebb7386532","type":"BoxZoomTool"},{"id":"860a9c64-38eb-4482-97eb-bdad3c712780","type":"SaveTool"},{"id":"91c3774f-344b-4731-932d-4e2cff828cf7","type":"ResetTool"},{"id":"0e253c14-ceca-46a4-9246-45e63c5d88a1","type":"HelpTool"}]},"id":"15c023bf-9c32-44e4-818d-76714152fe2c","type":"Toolbar"},{"attributes":{},"id":"0e253c14-ceca-46a4-9246-45e63c5d88a1","type":"HelpTool"},{"attributes":{},"id":"9df78eb6-3049-4f9f-9f9d-78db9ffe8de2","type":"BasicTicker"},{"attributes":{},"id":"b34b35c8-4dca-40fa-9a50-d43d799c6647","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"e8f402e9-1644-441e-8c62-7f72504ab9c0","type":"LinearAxis"}],"left":[{"id":"b75c4483-c4de-4a56-8da8-e97717b36b5d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e8f402e9-1644-441e-8c62-7f72504ab9c0","type":"LinearAxis"},{"id":"b6736af3-2ff8-4ada-a3bf-cd33c02e78ed","type":"Grid"},{"id":"b75c4483-c4de-4a56-8da8-e97717b36b5d","type":"LinearAxis"},{"id":"c1c6aeb9-4439-4567-8866-70f2a6f21d2f","type":"Grid"},{"id":"325902c1-2da2-42ff-8399-159eb4707f61","type":"BoxAnnotation"},{"id":"00f87a73-204c-4728-a63c-df7999bb33a4","type":"GlyphRenderer"}],"title":{"id":"da949755-7f8e-41e0-b9ad-0df0be9f8f3f","type":"Title"},"toolbar":{"id":"15c023bf-9c32-44e4-818d-76714152fe2c","type":"Toolbar"},"x_range":{"id":"e8282c06-aa21-4464-948b-4ccf95e8ee60","type":"DataRange1d"},"x_scale":{"id":"57337b5c-da0b-4067-acef-76225f09118d","type":"LinearScale"},"y_range":{"id":"f179ea8f-5439-45c8-82be-485d4d7ca5ad","type":"DataRange1d"},"y_scale":{"id":"0de600a6-fcde-4364-84bb-194104a41148","type":"LinearScale"}},"id":"6d228ca3-27cc-437b-9550-9ff70e7176a5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"860a9c64-38eb-4482-97eb-bdad3c712780","type":"SaveTool"},{"attributes":{},"id":"f74fc6f5-b903-4602-8003-ade3cd119314","type":"PanTool"},{"attributes":{"source":{"id":"5dfc526f-e60d-4330-8fd5-9211296163c6","type":"ColumnDataSource"}},"id":"c90d4b7d-6003-4b23-8c12-78db12beb159","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"da949755-7f8e-41e0-b9ad-0df0be9f8f3f","type":"Title"},{"attributes":{"callback":null},"id":"f179ea8f-5439-45c8-82be-485d4d7ca5ad","type":"DataRange1d"},{"attributes":{"callback":null},"id":"e8282c06-aa21-4464-948b-4ccf95e8ee60","type":"DataRange1d"},{"attributes":{},"id":"91c3774f-344b-4731-932d-4e2cff828cf7","type":"ResetTool"},{"attributes":{"formatter":{"id":"cc0e761f-1b30-4731-bc6a-46532c6710ad","type":"BasicTickFormatter"},"plot":{"id":"6d228ca3-27cc-437b-9550-9ff70e7176a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"260f374e-1ffe-49a7-b466-1b0b01a06772","type":"BasicTicker"}},"id":"b75c4483-c4de-4a56-8da8-e97717b36b5d","type":"LinearAxis"},{"attributes":{},"id":"8451d7df-f074-4a57-b3eb-7b2a56106535","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"b34b35c8-4dca-40fa-9a50-d43d799c6647","type":"BasicTickFormatter"},"plot":{"id":"6d228ca3-27cc-437b-9550-9ff70e7176a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9df78eb6-3049-4f9f-9f9d-78db9ffe8de2","type":"BasicTicker"}},"id":"e8f402e9-1644-441e-8c62-7f72504ab9c0","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"5dfc526f-e60d-4330-8fd5-9211296163c6","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"325902c1-2da2-42ff-8399-159eb4707f61","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3bc3632-8173-4904-81a8-329a3187c286","type":"Square"},{"attributes":{},"id":"260f374e-1ffe-49a7-b466-1b0b01a06772","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf30120c-30eb-47d3-b271-e207fb1b535f","type":"Square"},{"attributes":{"data_source":{"id":"5dfc526f-e60d-4330-8fd5-9211296163c6","type":"ColumnDataSource"},"glyph":{"id":"a3bc3632-8173-4904-81a8-329a3187c286","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cf30120c-30eb-47d3-b271-e207fb1b535f","type":"Square"},"selection_glyph":null,"view":{"id":"c90d4b7d-6003-4b23-8c12-78db12beb159","type":"CDSView"}},"id":"00f87a73-204c-4728-a63c-df7999bb33a4","type":"GlyphRenderer"},{"attributes":{},"id":"57337b5c-da0b-4067-acef-76225f09118d","type":"LinearScale"},{"attributes":{"overlay":{"id":"325902c1-2da2-42ff-8399-159eb4707f61","type":"BoxAnnotation"}},"id":"3ff8471f-b86e-464b-9526-92ebb7386532","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"6d228ca3-27cc-437b-9550-9ff70e7176a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"260f374e-1ffe-49a7-b466-1b0b01a06772","type":"BasicTicker"}},"id":"c1c6aeb9-4439-4567-8866-70f2a6f21d2f","type":"Grid"},{"attributes":{},"id":"0de600a6-fcde-4364-84bb-194104a41148","type":"LinearScale"},{"attributes":{},"id":"cc0e761f-1b30-4731-bc6a-46532c6710ad","type":"BasicTickFormatter"}],"root_ids":["6d228ca3-27cc-437b-9550-9ff70e7176a5"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e4c800b7-d71b-4de2-a95d-a67753923624","elementid":"fada600c-1192-4c56-92df-1af147192d1a","modelid":"6d228ca3-27cc-437b-9550-9ff70e7176a5"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
