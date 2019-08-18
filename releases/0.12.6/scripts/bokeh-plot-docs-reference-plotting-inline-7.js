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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("0630ac46-eb24-4398-aa05-f280d43be628");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0630ac46-eb24-4398-aa05-f280d43be628' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"2c421261-96c6-4f6f-9751-30f7d6fe6d6b":{"roots":{"references":[{"attributes":{"overlay":{"id":"00eb7909-26bd-446e-b80c-5b99340ee9d1","type":"BoxAnnotation"},"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"}},"id":"22259f68-fe82-4e4b-8780-0af713e9c6a4","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"}},"id":"917fce61-10da-4be0-8527-e25856814e31","type":"WheelZoomTool"},{"attributes":{},"id":"99b838b6-db96-4fd3-8af4-7c23654d85e6","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c85a16f6-16bb-4713-bc99-582d01dd9ff2","type":"PanTool"},{"id":"917fce61-10da-4be0-8527-e25856814e31","type":"WheelZoomTool"},{"id":"22259f68-fe82-4e4b-8780-0af713e9c6a4","type":"BoxZoomTool"},{"id":"701e97f1-5679-45d6-8e21-82a3a0846dd9","type":"SaveTool"},{"id":"4a346068-526e-41b6-9bd8-dfe7c79c3d57","type":"ResetTool"},{"id":"7d741e8a-e207-499d-8e6f-2e24c01f0688","type":"HelpTool"}]},"id":"dc2c64a0-be62-469b-9767-1a8e17da606c","type":"Toolbar"},{"attributes":{"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"}},"id":"c85a16f6-16bb-4713-bc99-582d01dd9ff2","type":"PanTool"},{"attributes":{"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"}},"id":"4a346068-526e-41b6-9bd8-dfe7c79c3d57","type":"ResetTool"},{"attributes":{},"id":"77badfec-2c46-42b2-9cd0-aef8dab87a45","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"fb7f0b42-55e3-4067-b43d-2fd08b4f8efc","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"7b1fd353-4c52-4c45-bfd8-eed5230a5e94","type":"Title"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12cb182c-8814-4215-9af4-7c98e598cef7","type":"DiamondCross"},{"attributes":{"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"}},"id":"701e97f1-5679-45d6-8e21-82a3a0846dd9","type":"SaveTool"},{"attributes":{"formatter":{"id":"33854d08-00a4-4619-b72c-7fea703dd919","type":"BasicTickFormatter"},"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"99b838b6-db96-4fd3-8af4-7c23654d85e6","type":"BasicTicker"}},"id":"dfc098ca-d08b-4e60-96f2-7b9f1a909c4f","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f425fcbf-6d9b-4255-b1aa-fcc676cb0da7","type":"DiamondCross"},{"attributes":{},"id":"481055b3-2c17-4b5b-8b5d-326eda59a5bf","type":"ToolEvents"},{"attributes":{"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"99b838b6-db96-4fd3-8af4-7c23654d85e6","type":"BasicTicker"}},"id":"d4ffa21c-66ec-499d-9a10-4a62bdb764c6","type":"Grid"},{"attributes":{"formatter":{"id":"77badfec-2c46-42b2-9cd0-aef8dab87a45","type":"BasicTickFormatter"},"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"eea28c68-2bbc-413e-a534-5a5245670989","type":"BasicTicker"}},"id":"ff205076-68be-4f8e-b1cd-12aaa7f9a7d2","type":"LinearAxis"},{"attributes":{},"id":"33854d08-00a4-4619-b72c-7fea703dd919","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"}},"id":"7d741e8a-e207-499d-8e6f-2e24c01f0688","type":"HelpTool"},{"attributes":{},"id":"dacdb0ea-2b8f-4f34-aafb-813ddcff9b4a","type":"LinearScale"},{"attributes":{"callback":null},"id":"741d1a68-f7ab-4b5e-b832-d2d44c97a969","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"eea28c68-2bbc-413e-a534-5a5245670989","type":"BasicTicker"}},"id":"b8563fee-17c4-4e80-94e9-8f94cf9e6933","type":"Grid"},{"attributes":{},"id":"776e83bb-0c00-4c42-b339-3c115ddff5d1","type":"LinearScale"},{"attributes":{"below":[{"id":"dfc098ca-d08b-4e60-96f2-7b9f1a909c4f","type":"LinearAxis"}],"left":[{"id":"ff205076-68be-4f8e-b1cd-12aaa7f9a7d2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"dfc098ca-d08b-4e60-96f2-7b9f1a909c4f","type":"LinearAxis"},{"id":"d4ffa21c-66ec-499d-9a10-4a62bdb764c6","type":"Grid"},{"id":"ff205076-68be-4f8e-b1cd-12aaa7f9a7d2","type":"LinearAxis"},{"id":"b8563fee-17c4-4e80-94e9-8f94cf9e6933","type":"Grid"},{"id":"00eb7909-26bd-446e-b80c-5b99340ee9d1","type":"BoxAnnotation"},{"id":"f68c306f-9df1-4ac3-99ad-75aceaacaf8d","type":"GlyphRenderer"}],"title":{"id":"7b1fd353-4c52-4c45-bfd8-eed5230a5e94","type":"Title"},"tool_events":{"id":"481055b3-2c17-4b5b-8b5d-326eda59a5bf","type":"ToolEvents"},"toolbar":{"id":"dc2c64a0-be62-469b-9767-1a8e17da606c","type":"Toolbar"},"x_range":{"id":"e8062976-0783-4f80-b7c0-cd48f785e742","type":"DataRange1d"},"x_scale":{"id":"dacdb0ea-2b8f-4f34-aafb-813ddcff9b4a","type":"LinearScale"},"y_range":{"id":"741d1a68-f7ab-4b5e-b832-d2d44c97a969","type":"DataRange1d"},"y_scale":{"id":"776e83bb-0c00-4c42-b339-3c115ddff5d1","type":"LinearScale"}},"id":"883496db-7a36-4341-b77b-dfd644402bb7","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"00eb7909-26bd-446e-b80c-5b99340ee9d1","type":"BoxAnnotation"},{"attributes":{},"id":"eea28c68-2bbc-413e-a534-5a5245670989","type":"BasicTicker"},{"attributes":{"data_source":{"id":"fb7f0b42-55e3-4067-b43d-2fd08b4f8efc","type":"ColumnDataSource"},"glyph":{"id":"12cb182c-8814-4215-9af4-7c98e598cef7","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f425fcbf-6d9b-4255-b1aa-fcc676cb0da7","type":"DiamondCross"},"selection_glyph":null},"id":"f68c306f-9df1-4ac3-99ad-75aceaacaf8d","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"e8062976-0783-4f80-b7c0-cd48f785e742","type":"DataRange1d"}],"root_ids":["883496db-7a36-4341-b77b-dfd644402bb7"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"2c421261-96c6-4f6f-9751-30f7d6fe6d6b","elementid":"0630ac46-eb24-4398-aa05-f280d43be628","modelid":"883496db-7a36-4341-b77b-dfd644402bb7"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
