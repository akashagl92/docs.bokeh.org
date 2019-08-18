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
      };var element = document.getElementById("577843ba-8151-4970-a5c3-6b804486122f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '577843ba-8151-4970-a5c3-6b804486122f' but no matching script tag was found. ")
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
                var docs_json = {"28dcdb5c-1338-42e5-8d07-3d94f6c85acb":{"roots":{"references":[{"attributes":{"data_source":{"id":"5ced8e00-31b3-45b5-8415-17d865fb4fb4","type":"ColumnDataSource"},"glyph":{"id":"6feb482e-66e8-4d77-b95c-be811b6aac6c","type":"Ray"},"hover_glyph":null,"muted_glyph":null},"id":"2dacbacb-33e5-4bb4-b35b-273fd4d76edc","type":"GlyphRenderer"},{"attributes":{},"id":"4c13a5e4-c247-4555-ba12-de329c8a0384","type":"ToolEvents"},{"attributes":{"below":[{"id":"39cae200-af1d-44d2-b287-dac809fcc75c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ace071a9-75d0-434a-8e91-adcc59241f3e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2dacbacb-33e5-4bb4-b35b-273fd4d76edc","type":"GlyphRenderer"},{"id":"39cae200-af1d-44d2-b287-dac809fcc75c","type":"LinearAxis"},{"id":"ace071a9-75d0-434a-8e91-adcc59241f3e","type":"LinearAxis"},{"id":"d871a1b7-5283-4d04-a607-ad4fc7202add","type":"Grid"},{"id":"b5622fd9-dafb-46ec-94a3-82d1f44c084c","type":"Grid"}],"title":null,"tool_events":{"id":"4c13a5e4-c247-4555-ba12-de329c8a0384","type":"ToolEvents"},"toolbar":{"id":"cf4057d6-fb11-4b9a-94e5-165545a023a4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c6aca43b-f4b6-4305-9658-dd684268f55a","type":"DataRange1d"},"x_scale":{"id":"3c337f72-9c48-45a7-b9f0-c429c52e5e5e","type":"LinearScale"},"y_range":{"id":"096a1536-ff98-4429-982b-01eef3992ea4","type":"DataRange1d"},"y_scale":{"id":"b3a45c1f-bac9-4702-9fd2-551e5f83cb3b","type":"LinearScale"}},"id":"f57f578d-59b2-4322-aef5-f4eb6af3393f","type":"Plot"},{"attributes":{},"id":"b3a45c1f-bac9-4702-9fd2-551e5f83cb3b","type":"LinearScale"},{"attributes":{"callback":null},"id":"c6aca43b-f4b6-4305-9658-dd684268f55a","type":"DataRange1d"},{"attributes":{},"id":"166a9a2f-81b1-43cb-bbf2-abf10524cd4b","type":"BasicTicker"},{"attributes":{"plot":{"id":"f57f578d-59b2-4322-aef5-f4eb6af3393f","type":"Plot"},"ticker":{"id":"166a9a2f-81b1-43cb-bbf2-abf10524cd4b","type":"BasicTicker"}},"id":"d871a1b7-5283-4d04-a607-ad4fc7202add","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"f57f578d-59b2-4322-aef5-f4eb6af3393f","type":"Plot"},"ticker":{"id":"392daff4-ccee-4d21-ac2b-abca971687cf","type":"BasicTicker"}},"id":"b5622fd9-dafb-46ec-94a3-82d1f44c084c","type":"Grid"},{"attributes":{},"id":"815478c2-9054-4e77-8d81-8e772f3a9d12","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"096a1536-ff98-4429-982b-01eef3992ea4","type":"DataRange1d"},{"attributes":{},"id":"392daff4-ccee-4d21-ac2b-abca971687cf","type":"BasicTicker"},{"attributes":{},"id":"dc97b3a0-21ec-4550-bde5-b166094f3663","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"815478c2-9054-4e77-8d81-8e772f3a9d12","type":"BasicTickFormatter"},"plot":{"id":"f57f578d-59b2-4322-aef5-f4eb6af3393f","type":"Plot"},"ticker":{"id":"166a9a2f-81b1-43cb-bbf2-abf10524cd4b","type":"BasicTicker"}},"id":"39cae200-af1d-44d2-b287-dac809fcc75c","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"6feb482e-66e8-4d77-b95c-be811b6aac6c","type":"Ray"},{"attributes":{"formatter":{"id":"dc97b3a0-21ec-4550-bde5-b166094f3663","type":"BasicTickFormatter"},"plot":{"id":"f57f578d-59b2-4322-aef5-f4eb6af3393f","type":"Plot"},"ticker":{"id":"392daff4-ccee-4d21-ac2b-abca971687cf","type":"BasicTicker"}},"id":"ace071a9-75d0-434a-8e91-adcc59241f3e","type":"LinearAxis"},{"attributes":{},"id":"3c337f72-9c48-45a7-b9f0-c429c52e5e5e","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","l","x"],"data":{"l":{"__ndarray__":"AAAAAAAALkAAAAAAAIAxQAAAAAAAADRAAAAAAACANkAAAAAAAAA5QAAAAAAAgDtAAAAAAAAAPkAAAAAAAEBAQAAAAAAAgEFA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"5ced8e00-31b3-45b5-8415-17d865fb4fb4","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cf4057d6-fb11-4b9a-94e5-165545a023a4","type":"Toolbar"}],"root_ids":["f57f578d-59b2-4322-aef5-f4eb6af3393f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"28dcdb5c-1338-42e5-8d07-3d94f6c85acb","elementid":"577843ba-8151-4970-a5c3-6b804486122f","modelid":"f57f578d-59b2-4322-aef5-f4eb6af3393f"}];
                
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
