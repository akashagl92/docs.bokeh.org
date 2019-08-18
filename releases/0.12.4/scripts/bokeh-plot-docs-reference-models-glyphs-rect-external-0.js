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
      };var element = document.getElementById("90308286-de4b-43ba-abb1-6ce8979c917a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '90308286-de4b-43ba-abb1-6ce8979c917a' but no matching script tag was found. ")
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
                var docs_json = {"b3125e6b-1846-4227-8575-79c34f38bb7e":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"92f70406-6c7e-42c5-8850-679e84f7fd63","type":"Plot"},"ticker":{"id":"3c25f547-4c63-4354-833a-c67b5f54b9d7","type":"BasicTicker"}},"id":"1cca6ea5-94df-4f43-9a52-7b3f52b84db3","type":"Grid"},{"attributes":{"below":[{"id":"0b351849-a80d-4ceb-9436-15f6e6b752b0","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"64a6e882-a3af-4d56-91c2-57c99a4c0034","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c32011e1-e3d8-4ca2-934b-ac1fa84950a8","type":"GlyphRenderer"},{"id":"0b351849-a80d-4ceb-9436-15f6e6b752b0","type":"LinearAxis"},{"id":"64a6e882-a3af-4d56-91c2-57c99a4c0034","type":"LinearAxis"},{"id":"2315ddef-83fc-4ee1-b43f-a04510d5a5e4","type":"Grid"},{"id":"1cca6ea5-94df-4f43-9a52-7b3f52b84db3","type":"Grid"}],"title":null,"tool_events":{"id":"261fffd6-b688-4532-9bb8-4e65fd3dee63","type":"ToolEvents"},"toolbar":{"id":"d82ac773-b101-4465-90a8-9a2693a2a47c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"be06aada-335d-4742-b966-c2dc9a53f974","type":"DataRange1d"},"y_range":{"id":"dd856a2a-1850-4edc-891b-453f493c4fb4","type":"DataRange1d"}},"id":"92f70406-6c7e-42c5-8850-679e84f7fd63","type":"Plot"},{"attributes":{"formatter":{"id":"465ad3b6-ca9b-47a4-b4ce-2003a5a74e1f","type":"BasicTickFormatter"},"plot":{"id":"92f70406-6c7e-42c5-8850-679e84f7fd63","type":"Plot"},"ticker":{"id":"3c25f547-4c63-4354-833a-c67b5f54b9d7","type":"BasicTicker"}},"id":"64a6e882-a3af-4d56-91c2-57c99a4c0034","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["h","x","w","y"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"e1661f2d-f56c-449c-b79c-b3fcce25643b","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d96c74f0-c338-4dff-a7d6-9297be6938c2","type":"Rect"},{"attributes":{"plot":{"id":"92f70406-6c7e-42c5-8850-679e84f7fd63","type":"Plot"},"ticker":{"id":"06cf3e06-a117-44aa-8660-8ade96916b06","type":"BasicTicker"}},"id":"2315ddef-83fc-4ee1-b43f-a04510d5a5e4","type":"Grid"},{"attributes":{},"id":"261fffd6-b688-4532-9bb8-4e65fd3dee63","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d82ac773-b101-4465-90a8-9a2693a2a47c","type":"Toolbar"},{"attributes":{},"id":"06cf3e06-a117-44aa-8660-8ade96916b06","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0c99f5a5-690d-4035-879c-fe6e7cea0251","type":"BasicTickFormatter"},"plot":{"id":"92f70406-6c7e-42c5-8850-679e84f7fd63","type":"Plot"},"ticker":{"id":"06cf3e06-a117-44aa-8660-8ade96916b06","type":"BasicTicker"}},"id":"0b351849-a80d-4ceb-9436-15f6e6b752b0","type":"LinearAxis"},{"attributes":{},"id":"465ad3b6-ca9b-47a4-b4ce-2003a5a74e1f","type":"BasicTickFormatter"},{"attributes":{},"id":"0c99f5a5-690d-4035-879c-fe6e7cea0251","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"be06aada-335d-4742-b966-c2dc9a53f974","type":"DataRange1d"},{"attributes":{"data_source":{"id":"e1661f2d-f56c-449c-b79c-b3fcce25643b","type":"ColumnDataSource"},"glyph":{"id":"d96c74f0-c338-4dff-a7d6-9297be6938c2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c32011e1-e3d8-4ca2-934b-ac1fa84950a8","type":"GlyphRenderer"},{"attributes":{},"id":"3c25f547-4c63-4354-833a-c67b5f54b9d7","type":"BasicTicker"},{"attributes":{"callback":null},"id":"dd856a2a-1850-4edc-891b-453f493c4fb4","type":"DataRange1d"}],"root_ids":["92f70406-6c7e-42c5-8850-679e84f7fd63"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"b3125e6b-1846-4227-8575-79c34f38bb7e","elementid":"90308286-de4b-43ba-abb1-6ce8979c917a","modelid":"92f70406-6c7e-42c5-8850-679e84f7fd63"}];
                
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
