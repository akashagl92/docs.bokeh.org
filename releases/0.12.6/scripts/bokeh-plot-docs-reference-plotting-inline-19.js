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
      };var element = document.getElementById("e607d332-268a-4711-80c4-30a8f96e936d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e607d332-268a-4711-80c4-30a8f96e936d' but no matching script tag was found. ")
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
                var docs_json = {"258a737b-6633-4d33-bc18-5162be742d67":{"roots":{"references":[{"attributes":{"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3baea69d-8fa9-4a80-8283-d8455027226e","type":"BasicTicker"}},"id":"04f473f1-3c21-41a5-a0e9-1b71755c5861","type":"Grid"},{"attributes":{"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"}},"id":"227da996-cac0-4faf-a21c-8f65a87f6d96","type":"HelpTool"},{"attributes":{"formatter":{"id":"781cee99-fb2a-449d-8898-21b9454cd91a","type":"BasicTickFormatter"},"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0063cd63-734c-410f-ba07-d5cd8a33d5fb","type":"BasicTicker"}},"id":"a8464548-66a2-41e9-985c-ff66d439de9e","type":"LinearAxis"},{"attributes":{},"id":"781cee99-fb2a-449d-8898-21b9454cd91a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"}},"id":"84a52362-3e6f-410a-a312-0e1bc2c95e86","type":"PanTool"},{"attributes":{},"id":"3baea69d-8fa9-4a80-8283-d8455027226e","type":"BasicTicker"},{"attributes":{"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"}},"id":"137dee92-778f-4d1e-92db-a2aeea19d02d","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"d503d4c0-d82b-4cd3-9c88-95b6b7950da3","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0063cd63-734c-410f-ba07-d5cd8a33d5fb","type":"BasicTicker"}},"id":"4e00c974-e8bb-44dd-a6f9-cbcd1f237a33","type":"Grid"},{"attributes":{},"id":"d2eacf10-d7e1-46d7-992a-78bd446fea66","type":"ToolEvents"},{"attributes":{"plot":null,"text":""},"id":"d2ee0b2c-33dd-4e05-98d1-cb40be0b0bdb","type":"Title"},{"attributes":{"callback":null},"id":"e132f086-9b00-4e37-9a04-459e39bc37fb","type":"DataRange1d"},{"attributes":{"below":[{"id":"80db5af0-db94-4fcc-9974-f187f68ed6c5","type":"LinearAxis"}],"left":[{"id":"a8464548-66a2-41e9-985c-ff66d439de9e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"80db5af0-db94-4fcc-9974-f187f68ed6c5","type":"LinearAxis"},{"id":"04f473f1-3c21-41a5-a0e9-1b71755c5861","type":"Grid"},{"id":"a8464548-66a2-41e9-985c-ff66d439de9e","type":"LinearAxis"},{"id":"4e00c974-e8bb-44dd-a6f9-cbcd1f237a33","type":"Grid"},{"id":"e42b2aba-be49-4cb8-8bd1-e828a7aac6df","type":"BoxAnnotation"},{"id":"8e079dd4-e2fa-421f-8a47-ba5f56483a95","type":"GlyphRenderer"}],"title":{"id":"d2ee0b2c-33dd-4e05-98d1-cb40be0b0bdb","type":"Title"},"tool_events":{"id":"d2eacf10-d7e1-46d7-992a-78bd446fea66","type":"ToolEvents"},"toolbar":{"id":"97028a38-afc8-4d6a-acc3-aad3b8dbcdb2","type":"Toolbar"},"x_range":{"id":"e132f086-9b00-4e37-9a04-459e39bc37fb","type":"DataRange1d"},"x_scale":{"id":"ec38bbc8-bd8f-42a8-937f-281759e90915","type":"LinearScale"},"y_range":{"id":"d503d4c0-d82b-4cd3-9c88-95b6b7950da3","type":"DataRange1d"},"y_scale":{"id":"2fef2c8c-e693-49d5-9db8-eb184cd9c775","type":"LinearScale"}},"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"962c7a43-b72d-47ee-b0d1-5f6931b23205","type":"Segment"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"1d7136ad-c30b-465c-9a09-55c3e5c59646","type":"Segment"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e42b2aba-be49-4cb8-8bd1-e828a7aac6df","type":"BoxAnnotation"},{"attributes":{},"id":"ec38bbc8-bd8f-42a8-937f-281759e90915","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"84a52362-3e6f-410a-a312-0e1bc2c95e86","type":"PanTool"},{"id":"137dee92-778f-4d1e-92db-a2aeea19d02d","type":"WheelZoomTool"},{"id":"a0a49d1e-1635-4ae4-bfe3-e623475718a9","type":"BoxZoomTool"},{"id":"dec0cf53-28cd-4883-b333-fec27ba212b6","type":"SaveTool"},{"id":"0dc57d29-0b7b-455c-abc4-addb6226863e","type":"ResetTool"},{"id":"227da996-cac0-4faf-a21c-8f65a87f6d96","type":"HelpTool"}]},"id":"97028a38-afc8-4d6a-acc3-aad3b8dbcdb2","type":"Toolbar"},{"attributes":{"data_source":{"id":"2a7fc9cc-d366-4a92-9ac2-7ab1c2ed5d69","type":"ColumnDataSource"},"glyph":{"id":"962c7a43-b72d-47ee-b0d1-5f6931b23205","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1d7136ad-c30b-465c-9a09-55c3e5c59646","type":"Segment"},"selection_glyph":null},"id":"8e079dd4-e2fa-421f-8a47-ba5f56483a95","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y0","x0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"2a7fc9cc-d366-4a92-9ac2-7ab1c2ed5d69","type":"ColumnDataSource"},{"attributes":{},"id":"b0ac4657-1316-45e5-83d6-02159c0dba90","type":"BasicTickFormatter"},{"attributes":{},"id":"0063cd63-734c-410f-ba07-d5cd8a33d5fb","type":"BasicTicker"},{"attributes":{"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"}},"id":"dec0cf53-28cd-4883-b333-fec27ba212b6","type":"SaveTool"},{"attributes":{"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"}},"id":"0dc57d29-0b7b-455c-abc4-addb6226863e","type":"ResetTool"},{"attributes":{"overlay":{"id":"e42b2aba-be49-4cb8-8bd1-e828a7aac6df","type":"BoxAnnotation"},"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"}},"id":"a0a49d1e-1635-4ae4-bfe3-e623475718a9","type":"BoxZoomTool"},{"attributes":{},"id":"2fef2c8c-e693-49d5-9db8-eb184cd9c775","type":"LinearScale"},{"attributes":{"formatter":{"id":"b0ac4657-1316-45e5-83d6-02159c0dba90","type":"BasicTickFormatter"},"plot":{"id":"d3d70a2d-4cac-4326-8089-43e6fd8514b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3baea69d-8fa9-4a80-8283-d8455027226e","type":"BasicTicker"}},"id":"80db5af0-db94-4fcc-9974-f187f68ed6c5","type":"LinearAxis"}],"root_ids":["d3d70a2d-4cac-4326-8089-43e6fd8514b7"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"258a737b-6633-4d33-bc18-5162be742d67","elementid":"e607d332-268a-4711-80c4-30a8f96e936d","modelid":"d3d70a2d-4cac-4326-8089-43e6fd8514b7"}];
                
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
