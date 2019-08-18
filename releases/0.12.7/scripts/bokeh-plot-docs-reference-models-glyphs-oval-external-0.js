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
      };var element = document.getElementById("efd85b49-7ad7-4cae-99e6-08d44f3d2b56");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'efd85b49-7ad7-4cae-99e6-08d44f3d2b56' but no matching script tag was found. ")
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
                var docs_json = {"d03a0f2a-32e9-4020-978e-04a57dac0fd6":{"roots":{"references":[{"attributes":{},"id":"e5f9f656-6e79-4a45-b0a6-8f66bc0580a2","type":"BasicTicker"},{"attributes":{},"id":"7dd69969-99a9-4de4-9973-e42be5908e9a","type":"BasicTicker"},{"attributes":{"source":{"id":"a43ed5fd-8464-4564-adf6-c6e454b191bd","type":"ColumnDataSource"}},"id":"619422e5-e990-4044-8d65-b6303beb297d","type":"CDSView"},{"attributes":{"plot":{"id":"2b97302a-cb6b-4dfd-b283-2b6cb0c9cb84","type":"Plot"},"ticker":{"id":"e5f9f656-6e79-4a45-b0a6-8f66bc0580a2","type":"BasicTicker"}},"id":"fcdc9390-1e53-4d83-8c5f-e8dbedfb90e8","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d40d60ff-1bfe-4253-ac64-8bee435de7a4","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"a43ed5fd-8464-4564-adf6-c6e454b191bd","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"341efd6e-7249-4fa1-9cb1-23b9e9a5e2a8","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b21d05cb-d57a-48f8-85e5-5efa4d6aaf84","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"1be6183f-c69b-43b3-8635-9a8fdcd2ea7b","type":"GlyphRenderer"},{"id":"341efd6e-7249-4fa1-9cb1-23b9e9a5e2a8","type":"LinearAxis"},{"id":"b21d05cb-d57a-48f8-85e5-5efa4d6aaf84","type":"LinearAxis"},{"id":"fcdc9390-1e53-4d83-8c5f-e8dbedfb90e8","type":"Grid"},{"id":"dedca822-b24d-4698-a1d5-3ee8e62d1e79","type":"Grid"}],"title":null,"toolbar":{"id":"d40d60ff-1bfe-4253-ac64-8bee435de7a4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1533ff41-53c6-4420-af86-abe79fa17080","type":"DataRange1d"},"x_scale":{"id":"c3ba09cd-12de-4862-b453-394872bd4ede","type":"LinearScale"},"y_range":{"id":"1ea154bc-de73-496a-95ba-3c77b7c743aa","type":"DataRange1d"},"y_scale":{"id":"f4f0156c-42ee-4e2a-b870-fd5e85338a32","type":"LinearScale"}},"id":"2b97302a-cb6b-4dfd-b283-2b6cb0c9cb84","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3c332f4-a256-412a-90cf-c474f7fc64c0","type":"Oval"},{"attributes":{},"id":"f4f0156c-42ee-4e2a-b870-fd5e85338a32","type":"LinearScale"},{"attributes":{},"id":"b793e04b-d030-4fe4-8295-73f69a819fc8","type":"BasicTickFormatter"},{"attributes":{},"id":"2976d555-c9d8-4e13-9311-86c0799f4395","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a43ed5fd-8464-4564-adf6-c6e454b191bd","type":"ColumnDataSource"},"glyph":{"id":"d3c332f4-a256-412a-90cf-c474f7fc64c0","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"619422e5-e990-4044-8d65-b6303beb297d","type":"CDSView"}},"id":"1be6183f-c69b-43b3-8635-9a8fdcd2ea7b","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"b793e04b-d030-4fe4-8295-73f69a819fc8","type":"BasicTickFormatter"},"plot":{"id":"2b97302a-cb6b-4dfd-b283-2b6cb0c9cb84","type":"Plot"},"ticker":{"id":"7dd69969-99a9-4de4-9973-e42be5908e9a","type":"BasicTicker"}},"id":"b21d05cb-d57a-48f8-85e5-5efa4d6aaf84","type":"LinearAxis"},{"attributes":{},"id":"c3ba09cd-12de-4862-b453-394872bd4ede","type":"LinearScale"},{"attributes":{"callback":null},"id":"1ea154bc-de73-496a-95ba-3c77b7c743aa","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"2b97302a-cb6b-4dfd-b283-2b6cb0c9cb84","type":"Plot"},"ticker":{"id":"7dd69969-99a9-4de4-9973-e42be5908e9a","type":"BasicTicker"}},"id":"dedca822-b24d-4698-a1d5-3ee8e62d1e79","type":"Grid"},{"attributes":{"formatter":{"id":"2976d555-c9d8-4e13-9311-86c0799f4395","type":"BasicTickFormatter"},"plot":{"id":"2b97302a-cb6b-4dfd-b283-2b6cb0c9cb84","type":"Plot"},"ticker":{"id":"e5f9f656-6e79-4a45-b0a6-8f66bc0580a2","type":"BasicTicker"}},"id":"341efd6e-7249-4fa1-9cb1-23b9e9a5e2a8","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1533ff41-53c6-4420-af86-abe79fa17080","type":"DataRange1d"}],"root_ids":["2b97302a-cb6b-4dfd-b283-2b6cb0c9cb84"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"d03a0f2a-32e9-4020-978e-04a57dac0fd6","elementid":"efd85b49-7ad7-4cae-99e6-08d44f3d2b56","modelid":"2b97302a-cb6b-4dfd-b283-2b6cb0c9cb84"}];
                
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
