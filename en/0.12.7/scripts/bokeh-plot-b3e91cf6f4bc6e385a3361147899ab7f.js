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
      };var element = document.getElementById("95fb1774-2329-4f42-a065-f5594540a26e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '95fb1774-2329-4f42-a065-f5594540a26e' but no matching script tag was found. ")
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
                var docs_json = {"b94f7eed-5feb-45cb-896c-83def4a7b64a":{"roots":{"references":[{"attributes":{"formatter":{"id":"da3cdf53-b624-47e3-9f67-b9fee82b8339","type":"BasicTickFormatter"},"plot":{"id":"0ef1c284-c9bc-474c-8fe8-4bddd1d2c2d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"04f95f91-8236-45f1-a129-417a4c92f963","type":"BasicTicker"}},"id":"4e7c295e-8ac0-46c1-a75c-cb1518d78e37","type":"LinearAxis"},{"attributes":{"plot":{"id":"0ef1c284-c9bc-474c-8fe8-4bddd1d2c2d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"04f95f91-8236-45f1-a129-417a4c92f963","type":"BasicTicker"}},"id":"667e326c-6cbd-40cc-ac92-d5a20825f330","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","desc"],"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"93317033-0382-40ea-88a4-0f414377881b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"93317033-0382-40ea-88a4-0f414377881b","type":"ColumnDataSource"},"glyph":{"id":"7c25dba8-970a-45a2-9bd7-b69ad7a08f56","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d665e77c-82de-4b28-be79-cc8edcd3adba","type":"Circle"},"selection_glyph":null,"view":{"id":"3bdc320e-cc47-4f6c-a48a-45fa5c9e3ef5","type":"CDSView"}},"id":"963f9bf3-c351-4da8-8e69-5d85a286004f","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"69e46155-8893-4148-b1d7-04b8e2c4ae7e","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"0ef1c284-c9bc-474c-8fe8-4bddd1d2c2d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2087432-eb63-4d07-9317-8cde0a02d8e4","type":"BasicTicker"}},"id":"ae0f7d3d-91ac-4941-9d0e-21864d6d0b5f","type":"Grid"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"3d4708c9-5b94-45ae-99e5-2bc9371efe4e","type":"HoverTool"},{"attributes":{"callback":null},"id":"cf672c5e-4e5f-4f5b-b5f9-199121ae65ef","type":"DataRange1d"},{"attributes":{},"id":"0c1fc4d7-19ed-4279-83c9-92a838eafe67","type":"LinearScale"},{"attributes":{},"id":"da3cdf53-b624-47e3-9f67-b9fee82b8339","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d665e77c-82de-4b28-be79-cc8edcd3adba","type":"Circle"},{"attributes":{},"id":"04f95f91-8236-45f1-a129-417a4c92f963","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3d4708c9-5b94-45ae-99e5-2bc9371efe4e","type":"HoverTool"}]},"id":"00759fbf-65a5-468f-a982-2f391345748d","type":"Toolbar"},{"attributes":{"below":[{"id":"4e7c295e-8ac0-46c1-a75c-cb1518d78e37","type":"LinearAxis"}],"left":[{"id":"4f37ade0-e697-418d-8bd3-945c25db3df4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4e7c295e-8ac0-46c1-a75c-cb1518d78e37","type":"LinearAxis"},{"id":"667e326c-6cbd-40cc-ac92-d5a20825f330","type":"Grid"},{"id":"4f37ade0-e697-418d-8bd3-945c25db3df4","type":"LinearAxis"},{"id":"ae0f7d3d-91ac-4941-9d0e-21864d6d0b5f","type":"Grid"},{"id":"963f9bf3-c351-4da8-8e69-5d85a286004f","type":"GlyphRenderer"}],"title":{"id":"69e46155-8893-4148-b1d7-04b8e2c4ae7e","type":"Title"},"toolbar":{"id":"00759fbf-65a5-468f-a982-2f391345748d","type":"Toolbar"},"x_range":{"id":"86d72864-26e6-4446-8781-8098a72aaea4","type":"DataRange1d"},"x_scale":{"id":"0c1fc4d7-19ed-4279-83c9-92a838eafe67","type":"LinearScale"},"y_range":{"id":"cf672c5e-4e5f-4f5b-b5f9-199121ae65ef","type":"DataRange1d"},"y_scale":{"id":"3e09c0bd-e00f-4402-85e0-f69560583098","type":"LinearScale"}},"id":"0ef1c284-c9bc-474c-8fe8-4bddd1d2c2d8","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"93317033-0382-40ea-88a4-0f414377881b","type":"ColumnDataSource"}},"id":"3bdc320e-cc47-4f6c-a48a-45fa5c9e3ef5","type":"CDSView"},{"attributes":{"callback":null},"id":"86d72864-26e6-4446-8781-8098a72aaea4","type":"DataRange1d"},{"attributes":{"formatter":{"id":"4f97d71e-b539-4270-8fa9-8a232fb40c09","type":"BasicTickFormatter"},"plot":{"id":"0ef1c284-c9bc-474c-8fe8-4bddd1d2c2d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2087432-eb63-4d07-9317-8cde0a02d8e4","type":"BasicTicker"}},"id":"4f37ade0-e697-418d-8bd3-945c25db3df4","type":"LinearAxis"},{"attributes":{},"id":"d2087432-eb63-4d07-9317-8cde0a02d8e4","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c25dba8-970a-45a2-9bd7-b69ad7a08f56","type":"Circle"},{"attributes":{},"id":"4f97d71e-b539-4270-8fa9-8a232fb40c09","type":"BasicTickFormatter"},{"attributes":{},"id":"3e09c0bd-e00f-4402-85e0-f69560583098","type":"LinearScale"}],"root_ids":["0ef1c284-c9bc-474c-8fe8-4bddd1d2c2d8"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"b94f7eed-5feb-45cb-896c-83def4a7b64a","elementid":"95fb1774-2329-4f42-a065-f5594540a26e","modelid":"0ef1c284-c9bc-474c-8fe8-4bddd1d2c2d8"}];
                
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
