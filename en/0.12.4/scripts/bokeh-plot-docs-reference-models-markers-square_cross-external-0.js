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
      };var element = document.getElementById("b6ecefa2-0709-4129-ab39-476d8bbba6d9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b6ecefa2-0709-4129-ab39-476d8bbba6d9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"fd61986c-9581-4ddc-ba27-462f4fed6bdd":{"roots":{"references":[{"attributes":{"callback":null},"id":"277fc4db-46f5-40d9-be73-766418e4225a","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"1dcc8602-167a-42be-acdb-ba53ab0ce37b","type":"Plot"},"ticker":{"id":"59935c2e-b33e-48ee-992c-1ae022694875","type":"BasicTicker"}},"id":"20f5e21b-6aac-4c93-a6ff-95987a0252f0","type":"Grid"},{"attributes":{"data_source":{"id":"c40f5481-3a3c-4dae-94b1-94d8f85d6fcb","type":"ColumnDataSource"},"glyph":{"id":"86ce3b4f-b36d-4a3c-b6fa-3331c80309b8","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"79d4d2ee-408f-4b30-a104-c05e375601c0","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"f6197732-a014-47e8-8f1c-73ab6c4175ad","type":"BasicTickFormatter"},"plot":{"id":"1dcc8602-167a-42be-acdb-ba53ab0ce37b","type":"Plot"},"ticker":{"id":"9258fdd6-23cd-42e7-a051-550b8405b98c","type":"BasicTicker"}},"id":"b51d55e6-0a4d-4d46-8677-8f6590fd4baf","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"c40f5481-3a3c-4dae-94b1-94d8f85d6fcb","type":"ColumnDataSource"},{"attributes":{},"id":"f6197732-a014-47e8-8f1c-73ab6c4175ad","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1dcc8602-167a-42be-acdb-ba53ab0ce37b","type":"Plot"},"ticker":{"id":"9258fdd6-23cd-42e7-a051-550b8405b98c","type":"BasicTicker"}},"id":"31788974-5cf0-4023-af34-5188a54db38a","type":"Grid"},{"attributes":{},"id":"8074e264-19c9-458e-ad17-5a5d0bf39442","type":"ToolEvents"},{"attributes":{},"id":"a26ce2bb-43be-4032-970a-17166b290232","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cff1f033-d9f0-46cf-a414-ddea3c65069c","type":"Toolbar"},{"attributes":{"formatter":{"id":"a26ce2bb-43be-4032-970a-17166b290232","type":"BasicTickFormatter"},"plot":{"id":"1dcc8602-167a-42be-acdb-ba53ab0ce37b","type":"Plot"},"ticker":{"id":"59935c2e-b33e-48ee-992c-1ae022694875","type":"BasicTicker"}},"id":"cba2af60-0f4d-4feb-8f3e-5ec06de33beb","type":"LinearAxis"},{"attributes":{"callback":null},"id":"31b5dbcb-b710-4e82-bd8f-00015ce30b47","type":"DataRange1d"},{"attributes":{},"id":"59935c2e-b33e-48ee-992c-1ae022694875","type":"BasicTicker"},{"attributes":{},"id":"9258fdd6-23cd-42e7-a051-550b8405b98c","type":"BasicTicker"},{"attributes":{"below":[{"id":"b51d55e6-0a4d-4d46-8677-8f6590fd4baf","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"cba2af60-0f4d-4feb-8f3e-5ec06de33beb","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"79d4d2ee-408f-4b30-a104-c05e375601c0","type":"GlyphRenderer"},{"id":"b51d55e6-0a4d-4d46-8677-8f6590fd4baf","type":"LinearAxis"},{"id":"cba2af60-0f4d-4feb-8f3e-5ec06de33beb","type":"LinearAxis"},{"id":"31788974-5cf0-4023-af34-5188a54db38a","type":"Grid"},{"id":"20f5e21b-6aac-4c93-a6ff-95987a0252f0","type":"Grid"}],"title":null,"tool_events":{"id":"8074e264-19c9-458e-ad17-5a5d0bf39442","type":"ToolEvents"},"toolbar":{"id":"cff1f033-d9f0-46cf-a414-ddea3c65069c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"277fc4db-46f5-40d9-be73-766418e4225a","type":"DataRange1d"},"y_range":{"id":"31b5dbcb-b710-4e82-bd8f-00015ce30b47","type":"DataRange1d"}},"id":"1dcc8602-167a-42be-acdb-ba53ab0ce37b","type":"Plot"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"86ce3b4f-b36d-4a3c-b6fa-3331c80309b8","type":"SquareCross"}],"root_ids":["1dcc8602-167a-42be-acdb-ba53ab0ce37b"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"fd61986c-9581-4ddc-ba27-462f4fed6bdd","elementid":"b6ecefa2-0709-4129-ab39-476d8bbba6d9","modelid":"1dcc8602-167a-42be-acdb-ba53ab0ce37b"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
