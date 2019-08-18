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
      };var element = document.getElementById("436b75c9-6def-41fc-a623-50fa4b44bc99");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '436b75c9-6def-41fc-a623-50fa4b44bc99' but no matching script tag was found. ")
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
                var docs_json = {"f35206aa-95cc-4581-a2d8-7aa99fee603f":{"roots":{"references":[{"attributes":{},"id":"7f54489d-f888-4929-a345-eff354ad7f6e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"41f4cac3-0ee2-42c6-8731-1cfb2d267041","type":"BasicTickFormatter"},"plot":{"id":"b45a5b71-dd7c-4e1f-af77-2b3206fe404b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f54489d-f888-4929-a345-eff354ad7f6e","type":"BasicTicker"}},"id":"8a3ed714-8bfe-4d20-9565-9fc0f13a3c19","type":"LinearAxis"},{"attributes":{"data_source":{"id":"0dfa1fb7-c5df-4c73-9eff-cd4a7ecfa021","type":"ColumnDataSource"},"glyph":{"id":"53057dab-197c-48c3-ad63-4768cd08e125","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7b8ecfec-9a29-4965-a531-c09700a03f99","type":"Line"},"selection_glyph":null,"visible":false},"id":"9b7bee07-e096-4013-a3de-2e57b0b95a33","type":"GlyphRenderer"},{"attributes":{},"id":"10a6d14a-00b2-4015-9f11-4b6994ac4a33","type":"ToolEvents"},{"attributes":{},"id":"bd0b4e40-4c93-4983-8c3e-75373dc05d06","type":"BasicTicker"},{"attributes":{},"id":"76cc0b70-b087-4b6f-aa12-3b500ef01e1e","type":"LinearScale"},{"attributes":{},"id":"41f4cac3-0ee2-42c6-8731-1cfb2d267041","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"41ca720c-062c-4e7a-9286-ccd1b519f2bf","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"b45a5b71-dd7c-4e1f-af77-2b3206fe404b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f54489d-f888-4929-a345-eff354ad7f6e","type":"BasicTicker"}},"id":"7ce2439a-8d20-4b1b-b532-998c31788698","type":"Grid"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"53057dab-197c-48c3-ad63-4768cd08e125","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b8ecfec-9a29-4965-a531-c09700a03f99","type":"Line"},{"attributes":{"callback":null},"id":"4321f1cc-a266-4129-bff1-385278440623","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"0dfa1fb7-c5df-4c73-9eff-cd4a7ecfa021","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"66ed4aeb-0e0f-4a5d-8fa7-e72c17527f19","type":"ColumnDataSource"},"glyph":{"id":"2347f7ca-d718-4ccf-aee5-6dcb33e1f078","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e8210908-fb7c-41e8-a484-1ffbddd12b1c","type":"Line"},"selection_glyph":null},"id":"533c9dd4-7a63-47ad-81da-a15c6f6a01b7","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9b506781-b03f-4fd8-9459-7f4d32541573","type":"BasicTickFormatter"},"plot":{"id":"b45a5b71-dd7c-4e1f-af77-2b3206fe404b","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd0b4e40-4c93-4983-8c3e-75373dc05d06","type":"BasicTicker"},"visible":false},"id":"9706f8fd-09b3-4381-9363-7838d970a218","type":"LinearAxis"},{"attributes":{"below":[{"id":"9706f8fd-09b3-4381-9363-7838d970a218","type":"LinearAxis"}],"left":[{"id":"8a3ed714-8bfe-4d20-9565-9fc0f13a3c19","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"9706f8fd-09b3-4381-9363-7838d970a218","type":"LinearAxis"},{"id":"678e605e-26f5-4efa-bc69-6e081cfa4c78","type":"Grid"},{"id":"8a3ed714-8bfe-4d20-9565-9fc0f13a3c19","type":"LinearAxis"},{"id":"7ce2439a-8d20-4b1b-b532-998c31788698","type":"Grid"},{"id":"533c9dd4-7a63-47ad-81da-a15c6f6a01b7","type":"GlyphRenderer"},{"id":"9b7bee07-e096-4013-a3de-2e57b0b95a33","type":"GlyphRenderer"}],"title":{"id":"e977a66e-2f13-41b6-9e70-4d6ae2f4b0af","type":"Title"},"tool_events":{"id":"10a6d14a-00b2-4015-9f11-4b6994ac4a33","type":"ToolEvents"},"toolbar":{"id":"41ca720c-062c-4e7a-9286-ccd1b519f2bf","type":"Toolbar"},"x_range":{"id":"1436bd83-45e1-43de-b001-d51df36bb5dc","type":"DataRange1d"},"x_scale":{"id":"76cc0b70-b087-4b6f-aa12-3b500ef01e1e","type":"LinearScale"},"y_range":{"id":"4321f1cc-a266-4129-bff1-385278440623","type":"DataRange1d"},"y_scale":{"id":"a2b14bb8-0ac5-46b0-8431-5b7928eace46","type":"LinearScale"}},"id":"b45a5b71-dd7c-4e1f-af77-2b3206fe404b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"e977a66e-2f13-41b6-9e70-4d6ae2f4b0af","type":"Title"},{"attributes":{},"id":"a2b14bb8-0ac5-46b0-8431-5b7928eace46","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e8210908-fb7c-41e8-a484-1ffbddd12b1c","type":"Line"},{"attributes":{"plot":{"id":"b45a5b71-dd7c-4e1f-af77-2b3206fe404b","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd0b4e40-4c93-4983-8c3e-75373dc05d06","type":"BasicTicker"},"visible":false},"id":"678e605e-26f5-4efa-bc69-6e081cfa4c78","type":"Grid"},{"attributes":{"callback":null},"id":"1436bd83-45e1-43de-b001-d51df36bb5dc","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"66ed4aeb-0e0f-4a5d-8fa7-e72c17527f19","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2347f7ca-d718-4ccf-aee5-6dcb33e1f078","type":"Line"},{"attributes":{},"id":"9b506781-b03f-4fd8-9459-7f4d32541573","type":"BasicTickFormatter"}],"root_ids":["b45a5b71-dd7c-4e1f-af77-2b3206fe404b"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f35206aa-95cc-4581-a2d8-7aa99fee603f","elementid":"436b75c9-6def-41fc-a623-50fa4b44bc99","modelid":"b45a5b71-dd7c-4e1f-af77-2b3206fe404b"}];
                
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
