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
      };var element = document.getElementById("c173367b-bd54-4ff7-ad18-ac8dc8745dbc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c173367b-bd54-4ff7-ad18-ac8dc8745dbc' but no matching script tag was found. ")
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
                var docs_json = {"4ea1e60c-76a2-48c9-aaca-b65c1686d50c":{"roots":{"references":[{"attributes":{"callback":null},"id":"b75813d8-ea40-485c-bf75-6d28a03038a7","type":"DataRange1d"},{"attributes":{},"id":"974262e2-8352-4855-9d07-fd361e87ad09","type":"BasicTickFormatter"},{"attributes":{},"id":"75d7e440-e062-4ee1-b54f-1d0c4febccee","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["w","y","h","x"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"ba9b4828-ad7a-4777-920b-3a459ca80813","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"75f116dd-cf4c-44f3-b642-ddb5b8ced083","type":"DataRange1d"},{"attributes":{},"id":"b11855f4-1fdc-4f15-89c1-77b18c6189a3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"974262e2-8352-4855-9d07-fd361e87ad09","type":"BasicTickFormatter"},"plot":{"id":"c7f4690e-2331-4beb-a72b-8e49e45570d3","type":"Plot"},"ticker":{"id":"1af22cc6-2640-46f3-8ea0-491f97869f97","type":"BasicTicker"}},"id":"14954a32-db14-4f27-8795-6532e482f867","type":"LinearAxis"},{"attributes":{},"id":"3ac6281c-65d0-463d-a58c-5b878ef8759f","type":"ToolEvents"},{"attributes":{},"id":"1af22cc6-2640-46f3-8ea0-491f97869f97","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"243848e1-1d95-4681-a45c-1d1b5bd3ce76","type":"Rect"},{"attributes":{"data_source":{"id":"ba9b4828-ad7a-4777-920b-3a459ca80813","type":"ColumnDataSource"},"glyph":{"id":"243848e1-1d95-4681-a45c-1d1b5bd3ce76","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"6b341a3c-678c-460c-b434-9cf11b1bb748","type":"GlyphRenderer"},{"attributes":{},"id":"5cd8f9fa-730a-44f7-be69-58d755716c05","type":"LinearScale"},{"attributes":{"formatter":{"id":"75d7e440-e062-4ee1-b54f-1d0c4febccee","type":"BasicTickFormatter"},"plot":{"id":"c7f4690e-2331-4beb-a72b-8e49e45570d3","type":"Plot"},"ticker":{"id":"b11855f4-1fdc-4f15-89c1-77b18c6189a3","type":"BasicTicker"}},"id":"a61fb5b0-45ad-4dba-bc9a-dd0441d518c2","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5ca40aa5-b48d-43cb-a743-e8f8aa8e8956","type":"Toolbar"},{"attributes":{"below":[{"id":"14954a32-db14-4f27-8795-6532e482f867","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a61fb5b0-45ad-4dba-bc9a-dd0441d518c2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"6b341a3c-678c-460c-b434-9cf11b1bb748","type":"GlyphRenderer"},{"id":"14954a32-db14-4f27-8795-6532e482f867","type":"LinearAxis"},{"id":"a61fb5b0-45ad-4dba-bc9a-dd0441d518c2","type":"LinearAxis"},{"id":"05d9b421-637a-4f0d-8707-eee4f715627a","type":"Grid"},{"id":"bf472a2a-e050-4dc8-9e74-40f499f75a1c","type":"Grid"}],"title":null,"tool_events":{"id":"3ac6281c-65d0-463d-a58c-5b878ef8759f","type":"ToolEvents"},"toolbar":{"id":"5ca40aa5-b48d-43cb-a743-e8f8aa8e8956","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b75813d8-ea40-485c-bf75-6d28a03038a7","type":"DataRange1d"},"x_scale":{"id":"5cd8f9fa-730a-44f7-be69-58d755716c05","type":"LinearScale"},"y_range":{"id":"75f116dd-cf4c-44f3-b642-ddb5b8ced083","type":"DataRange1d"},"y_scale":{"id":"c6c2d028-1077-49b1-9a61-b2b6dd559214","type":"LinearScale"}},"id":"c7f4690e-2331-4beb-a72b-8e49e45570d3","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"c7f4690e-2331-4beb-a72b-8e49e45570d3","type":"Plot"},"ticker":{"id":"b11855f4-1fdc-4f15-89c1-77b18c6189a3","type":"BasicTicker"}},"id":"bf472a2a-e050-4dc8-9e74-40f499f75a1c","type":"Grid"},{"attributes":{"plot":{"id":"c7f4690e-2331-4beb-a72b-8e49e45570d3","type":"Plot"},"ticker":{"id":"1af22cc6-2640-46f3-8ea0-491f97869f97","type":"BasicTicker"}},"id":"05d9b421-637a-4f0d-8707-eee4f715627a","type":"Grid"},{"attributes":{},"id":"c6c2d028-1077-49b1-9a61-b2b6dd559214","type":"LinearScale"}],"root_ids":["c7f4690e-2331-4beb-a72b-8e49e45570d3"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"4ea1e60c-76a2-48c9-aaca-b65c1686d50c","elementid":"c173367b-bd54-4ff7-ad18-ac8dc8745dbc","modelid":"c7f4690e-2331-4beb-a72b-8e49e45570d3"}];
                
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
