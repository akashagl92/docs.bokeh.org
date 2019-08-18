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
      };var element = document.getElementById("b552b54a-1990-47ab-b535-be2c077e93ee");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b552b54a-1990-47ab-b535-be2c077e93ee' but no matching script tag was found. ")
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
                var docs_json = {"c148f2ae-623b-44a5-9944-0b2cfe0530d9":{"roots":{"references":[{"attributes":{"below":[{"id":"0507903b-df13-4bb4-81d2-15b6040f7a52","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"dea49136-110c-40ba-b34f-fb767407dd37","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e1362ea5-6ba7-4986-8330-331180040880","type":"GlyphRenderer"},{"id":"0507903b-df13-4bb4-81d2-15b6040f7a52","type":"LinearAxis"},{"id":"dea49136-110c-40ba-b34f-fb767407dd37","type":"LinearAxis"},{"id":"d2fecc9a-aec9-46f2-804f-d4afb9eec1ef","type":"Grid"},{"id":"83c4757c-fef8-4748-8022-53a98bb8baac","type":"Grid"}],"title":null,"tool_events":{"id":"bfd98c19-35f8-41e6-a7de-bfda2e4de129","type":"ToolEvents"},"toolbar":{"id":"c7be2b9a-4d6e-416d-9d9e-b56d9f42d73f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e3fad51f-4804-400c-8f3c-adcd3f37f5f9","type":"DataRange1d"},"x_scale":{"id":"7e5568b9-d6cc-4ead-807c-2e0cab92cb61","type":"LinearScale"},"y_range":{"id":"3a07a63a-9b7d-49b3-a72d-18bedeadf6b7","type":"DataRange1d"},"y_scale":{"id":"94b89c6a-85f2-446d-99ee-b103464f99e3","type":"LinearScale"}},"id":"3ca3432d-8a7a-479d-af54-20c05bc0280b","type":"Plot"},{"attributes":{},"id":"94b89c6a-85f2-446d-99ee-b103464f99e3","type":"LinearScale"},{"attributes":{},"id":"88d726f9-afc0-4a3a-ac67-fe05f78b5826","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"3a07a63a-9b7d-49b3-a72d-18bedeadf6b7","type":"DataRange1d"},{"attributes":{"plot":{"id":"3ca3432d-8a7a-479d-af54-20c05bc0280b","type":"Plot"},"ticker":{"id":"5d720102-ed93-4b54-bf6e-9912a802a2f3","type":"BasicTicker"}},"id":"d2fecc9a-aec9-46f2-804f-d4afb9eec1ef","type":"Grid"},{"attributes":{},"id":"7e5568b9-d6cc-4ead-807c-2e0cab92cb61","type":"LinearScale"},{"attributes":{},"id":"5d720102-ed93-4b54-bf6e-9912a802a2f3","type":"BasicTicker"},{"attributes":{},"id":"bfd98c19-35f8-41e6-a7de-bfda2e4de129","type":"ToolEvents"},{"attributes":{},"id":"b1507043-a9d0-46a9-a045-6b6f8c9d1e73","type":"BasicTicker"},{"attributes":{"formatter":{"id":"13fabb6c-ee07-4102-bb6a-11d2e0c5cf5b","type":"BasicTickFormatter"},"plot":{"id":"3ca3432d-8a7a-479d-af54-20c05bc0280b","type":"Plot"},"ticker":{"id":"5d720102-ed93-4b54-bf6e-9912a802a2f3","type":"BasicTicker"}},"id":"0507903b-df13-4bb4-81d2-15b6040f7a52","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e3fad51f-4804-400c-8f3c-adcd3f37f5f9","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"3ca3432d-8a7a-479d-af54-20c05bc0280b","type":"Plot"},"ticker":{"id":"b1507043-a9d0-46a9-a045-6b6f8c9d1e73","type":"BasicTicker"}},"id":"83c4757c-fef8-4748-8022-53a98bb8baac","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c7be2b9a-4d6e-416d-9d9e-b56d9f42d73f","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"243ffb96-4218-4ff8-9689-095f267a5873","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"88d726f9-afc0-4a3a-ac67-fe05f78b5826","type":"BasicTickFormatter"},"plot":{"id":"3ca3432d-8a7a-479d-af54-20c05bc0280b","type":"Plot"},"ticker":{"id":"b1507043-a9d0-46a9-a045-6b6f8c9d1e73","type":"BasicTicker"}},"id":"dea49136-110c-40ba-b34f-fb767407dd37","type":"LinearAxis"},{"attributes":{},"id":"13fabb6c-ee07-4102-bb6a-11d2e0c5cf5b","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c4cee72-bb47-4f99-b264-336405cf5cf1","type":"X"},{"attributes":{"data_source":{"id":"243ffb96-4218-4ff8-9689-095f267a5873","type":"ColumnDataSource"},"glyph":{"id":"8c4cee72-bb47-4f99-b264-336405cf5cf1","type":"X"},"hover_glyph":null,"muted_glyph":null},"id":"e1362ea5-6ba7-4986-8330-331180040880","type":"GlyphRenderer"}],"root_ids":["3ca3432d-8a7a-479d-af54-20c05bc0280b"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"c148f2ae-623b-44a5-9944-0b2cfe0530d9","elementid":"b552b54a-1990-47ab-b535-be2c077e93ee","modelid":"3ca3432d-8a7a-479d-af54-20c05bc0280b"}];
                
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
