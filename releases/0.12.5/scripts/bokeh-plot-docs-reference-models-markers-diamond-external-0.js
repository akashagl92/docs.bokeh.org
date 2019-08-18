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
      };var element = document.getElementById("d5b4302e-b1b1-4886-95b9-ca134910812d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5b4302e-b1b1-4886-95b9-ca134910812d' but no matching script tag was found. ")
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
                var docs_json = {"4051de9c-0f9a-40fb-b964-21107d799d90":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"0eee1561-1575-4b1f-8976-a0c5c3ac5372","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"3dbc8439-65d6-4ee4-b102-107c36041717","type":"DataRange1d"},{"attributes":{},"id":"1dace9c2-1c26-4a9d-a156-b1d88c79aa0a","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4663f911-ab9b-4637-9974-e1cfc5df00e1","type":"Toolbar"},{"attributes":{},"id":"ecd8e22b-a69a-4cad-8e8e-57e78279a6e0","type":"BasicTicker"},{"attributes":{"plot":{"id":"e99ebbbc-9d70-4714-966e-78bb411d5661","type":"Plot"},"ticker":{"id":"154e4c45-2e26-4022-8a79-703f80f3c52f","type":"BasicTicker"}},"id":"200df1d9-3ed1-44d6-9ad9-8ee0df5246d7","type":"Grid"},{"attributes":{},"id":"154e4c45-2e26-4022-8a79-703f80f3c52f","type":"BasicTicker"},{"attributes":{"below":[{"id":"750b28d5-9cf1-485e-8c54-5ea0ec75607a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a78b87dc-87b4-482b-902a-c23292f15f24","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d3a76b04-b0e5-42e1-b271-c1c9e616cfeb","type":"GlyphRenderer"},{"id":"750b28d5-9cf1-485e-8c54-5ea0ec75607a","type":"LinearAxis"},{"id":"a78b87dc-87b4-482b-902a-c23292f15f24","type":"LinearAxis"},{"id":"200df1d9-3ed1-44d6-9ad9-8ee0df5246d7","type":"Grid"},{"id":"b0860e93-6897-4cf7-a079-b6770ed7d9b3","type":"Grid"}],"title":null,"tool_events":{"id":"84ef00f4-067a-42d2-9d9d-5740d438ea7c","type":"ToolEvents"},"toolbar":{"id":"4663f911-ab9b-4637-9974-e1cfc5df00e1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3dbc8439-65d6-4ee4-b102-107c36041717","type":"DataRange1d"},"y_range":{"id":"05cfe369-1456-432f-9838-83de0c4f698b","type":"DataRange1d"}},"id":"e99ebbbc-9d70-4714-966e-78bb411d5661","type":"Plot"},{"attributes":{},"id":"84ef00f4-067a-42d2-9d9d-5740d438ea7c","type":"ToolEvents"},{"attributes":{"formatter":{"id":"1dace9c2-1c26-4a9d-a156-b1d88c79aa0a","type":"BasicTickFormatter"},"plot":{"id":"e99ebbbc-9d70-4714-966e-78bb411d5661","type":"Plot"},"ticker":{"id":"154e4c45-2e26-4022-8a79-703f80f3c52f","type":"BasicTicker"}},"id":"750b28d5-9cf1-485e-8c54-5ea0ec75607a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e99ebbbc-9d70-4714-966e-78bb411d5661","type":"Plot"},"ticker":{"id":"ecd8e22b-a69a-4cad-8e8e-57e78279a6e0","type":"BasicTicker"}},"id":"b0860e93-6897-4cf7-a079-b6770ed7d9b3","type":"Grid"},{"attributes":{"callback":null},"id":"05cfe369-1456-432f-9838-83de0c4f698b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e34ec8ac-9b68-4d1d-bcee-a4f839189ff9","type":"BasicTickFormatter"},"plot":{"id":"e99ebbbc-9d70-4714-966e-78bb411d5661","type":"Plot"},"ticker":{"id":"ecd8e22b-a69a-4cad-8e8e-57e78279a6e0","type":"BasicTicker"}},"id":"a78b87dc-87b4-482b-902a-c23292f15f24","type":"LinearAxis"},{"attributes":{"data_source":{"id":"0eee1561-1575-4b1f-8976-a0c5c3ac5372","type":"ColumnDataSource"},"glyph":{"id":"d2c00db0-40f8-4bf8-b0bf-0d117fcf2d7a","type":"Diamond"},"hover_glyph":null,"muted_glyph":null},"id":"d3a76b04-b0e5-42e1-b271-c1c9e616cfeb","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d2c00db0-40f8-4bf8-b0bf-0d117fcf2d7a","type":"Diamond"},{"attributes":{},"id":"e34ec8ac-9b68-4d1d-bcee-a4f839189ff9","type":"BasicTickFormatter"}],"root_ids":["e99ebbbc-9d70-4714-966e-78bb411d5661"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"4051de9c-0f9a-40fb-b964-21107d799d90","elementid":"d5b4302e-b1b1-4886-95b9-ca134910812d","modelid":"e99ebbbc-9d70-4714-966e-78bb411d5661"}];
                
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
