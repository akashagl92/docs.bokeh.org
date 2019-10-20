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
      };var element = document.getElementById("69b7fd36-90f1-4f31-9947-f6f77d4e68c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '69b7fd36-90f1-4f31-9947-f6f77d4e68c0' but no matching script tag was found. ")
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
                var docs_json = {"772c6b2a-5161-425c-8403-159dc11a62a9":{"roots":{"references":[{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4124278-19ae-41cd-ab70-bd19c6ae0471","type":"Line"},{"attributes":{"data_source":{"id":"5af0272f-10d2-407c-846c-fd112791c42d","type":"ColumnDataSource"},"glyph":{"id":"4fdcb890-b135-4043-8d7d-a0705102fbed","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d220a805-e28a-4fee-a432-264aaaee5249","type":"Line"},"selection_glyph":null},"id":"2580d562-f5c3-4314-a6b7-20a17f735573","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"743054df-6f86-423e-89f8-481cea60b655","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"d6e20ad2-04d5-45b2-8f3e-222f4ea5fa09","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c36f1d8-aa96-4459-b797-34869023731a","type":"BasicTicker"}},"id":"ab727726-ea7d-41ac-90f6-615060ce383e","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"d7607f95-c6ea-40a8-8a27-56ede4e73a85","type":"Title"},{"attributes":{"button_type":"success","callback":{"id":"3f9b642a-94f6-4131-9f2c-cd8f0bf9a57d","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"22498e17-d1f5-482e-b79d-31aaa56e7c21","type":"Toggle"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4fdcb890-b135-4043-8d7d-a0705102fbed","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d220a805-e28a-4fee-a432-264aaaee5249","type":"Line"},{"attributes":{},"id":"a4784ccb-ef72-4984-9326-a7b5c0c200e0","type":"LinearScale"},{"attributes":{"formatter":{"id":"58356347-0029-492b-81ad-0786b3bb1112","type":"BasicTickFormatter"},"plot":{"id":"d6e20ad2-04d5-45b2-8f3e-222f4ea5fa09","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c36f1d8-aa96-4459-b797-34869023731a","type":"BasicTicker"}},"id":"c3bdb2e6-907a-40c7-a7fe-22852109b851","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"15cc1355-7ecf-4de9-a04c-8f0c4427c784","type":"Line"},{"attributes":{"plot":{"id":"d6e20ad2-04d5-45b2-8f3e-222f4ea5fa09","subtype":"Figure","type":"Plot"},"ticker":{"id":"545725c0-1ee9-4ad0-ae5a-53d9a1f89d23","type":"BasicTicker"}},"id":"823098d4-2991-442f-9d3e-596de7cc381f","type":"Grid"},{"attributes":{"children":[{"id":"735850d9-02aa-4050-80c5-8786ab28dba7","type":"Toggle"}]},"id":"f22c88ab-a875-4a03-aed1-348d23dc9091","type":"WidgetBox"},{"attributes":{},"id":"6283a321-fd84-4282-acc6-1daaff584715","type":"LinearScale"},{"attributes":{"args":{"object":{"id":"1f97f838-17a0-4e07-a7c6-ed0701e0ba62","type":"BoxAnnotation"},"toggle":{"id":"735850d9-02aa-4050-80c5-8786ab28dba7","type":"Toggle"}},"code":"object.visible = toggle.active;\n"},"id":"b781fec3-65ab-4937-af1d-ad9db5910bbc","type":"CustomJS"},{"attributes":{"children":[{"id":"356eb053-2f99-4abd-8c7a-d80d90fd99e8","type":"Row"},{"id":"c5fe3ac8-0871-4e93-b727-03a02bfdb4ae","type":"Row"}]},"id":"f899b00f-b579-41a8-bd6a-d4271bce4ac6","type":"Column"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"83ca8106-64a6-4d19-a134-fe84b281657c","type":"ColumnDataSource"},{"attributes":{},"id":"545725c0-1ee9-4ad0-ae5a-53d9a1f89d23","type":"BasicTicker"},{"attributes":{},"id":"9bff0a3b-e40c-4985-9717-d4219f94e049","type":"ToolEvents"},{"attributes":{"data_source":{"id":"83ca8106-64a6-4d19-a134-fe84b281657c","type":"ColumnDataSource"},"glyph":{"id":"d4124278-19ae-41cd-ab70-bd19c6ae0471","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15cc1355-7ecf-4de9-a04c-8f0c4427c784","type":"Line"},"selection_glyph":null},"id":"a29cfcd4-674b-441c-97bd-6de1c9fe34a0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"plot":{"id":"d6e20ad2-04d5-45b2-8f3e-222f4ea5fa09","subtype":"Figure","type":"Plot"},"right":2.5},"id":"1f97f838-17a0-4e07-a7c6-ed0701e0ba62","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"d6e20ad2-04d5-45b2-8f3e-222f4ea5fa09","subtype":"Figure","type":"Plot"}]},"id":"356eb053-2f99-4abd-8c7a-d80d90fd99e8","type":"Row"},{"attributes":{"children":[{"id":"22498e17-d1f5-482e-b79d-31aaa56e7c21","type":"Toggle"}]},"id":"fd4fd143-9208-4743-b5e9-12c8e2b4e78b","type":"WidgetBox"},{"attributes":{"args":{"object":{"id":"a29cfcd4-674b-441c-97bd-6de1c9fe34a0","type":"GlyphRenderer"},"toggle":{"id":"22498e17-d1f5-482e-b79d-31aaa56e7c21","type":"Toggle"}},"code":"object.visible = toggle.active;\n"},"id":"3f9b642a-94f6-4131-9f2c-cd8f0bf9a57d","type":"CustomJS"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"5af0272f-10d2-407c-846c-fd112791c42d","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"f22c88ab-a875-4a03-aed1-348d23dc9091","type":"WidgetBox"},{"id":"fd4fd143-9208-4743-b5e9-12c8e2b4e78b","type":"WidgetBox"}]},"id":"c5fe3ac8-0871-4e93-b727-03a02bfdb4ae","type":"Row"},{"attributes":{},"id":"e47bb643-d962-4aeb-ab92-02e95305378f","type":"BasicTickFormatter"},{"attributes":{"button_type":"success","callback":{"id":"b781fec3-65ab-4937-af1d-ad9db5910bbc","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"735850d9-02aa-4050-80c5-8786ab28dba7","type":"Toggle"},{"attributes":{"below":[{"id":"be68e1c0-a4a7-4efe-a89d-a1d4fc384d2f","type":"LinearAxis"}],"left":[{"id":"c3bdb2e6-907a-40c7-a7fe-22852109b851","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"be68e1c0-a4a7-4efe-a89d-a1d4fc384d2f","type":"LinearAxis"},{"id":"823098d4-2991-442f-9d3e-596de7cc381f","type":"Grid"},{"id":"c3bdb2e6-907a-40c7-a7fe-22852109b851","type":"LinearAxis"},{"id":"ab727726-ea7d-41ac-90f6-615060ce383e","type":"Grid"},{"id":"2580d562-f5c3-4314-a6b7-20a17f735573","type":"GlyphRenderer"},{"id":"a29cfcd4-674b-441c-97bd-6de1c9fe34a0","type":"GlyphRenderer"},{"id":"1f97f838-17a0-4e07-a7c6-ed0701e0ba62","type":"BoxAnnotation"}],"title":{"id":"d7607f95-c6ea-40a8-8a27-56ede4e73a85","type":"Title"},"tool_events":{"id":"9bff0a3b-e40c-4985-9717-d4219f94e049","type":"ToolEvents"},"toolbar":{"id":"470beac3-f6f5-4c8a-936b-06707822fb32","type":"Toolbar"},"x_range":{"id":"743054df-6f86-423e-89f8-481cea60b655","type":"DataRange1d"},"x_scale":{"id":"a4784ccb-ef72-4984-9326-a7b5c0c200e0","type":"LinearScale"},"y_range":{"id":"5940b7a8-f7c4-44d1-b30c-80fe31dd968e","type":"DataRange1d"},"y_scale":{"id":"6283a321-fd84-4282-acc6-1daaff584715","type":"LinearScale"}},"id":"d6e20ad2-04d5-45b2-8f3e-222f4ea5fa09","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"58356347-0029-492b-81ad-0786b3bb1112","type":"BasicTickFormatter"},{"attributes":{},"id":"2c36f1d8-aa96-4459-b797-34869023731a","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"470beac3-f6f5-4c8a-936b-06707822fb32","type":"Toolbar"},{"attributes":{"callback":null},"id":"5940b7a8-f7c4-44d1-b30c-80fe31dd968e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e47bb643-d962-4aeb-ab92-02e95305378f","type":"BasicTickFormatter"},"plot":{"id":"d6e20ad2-04d5-45b2-8f3e-222f4ea5fa09","subtype":"Figure","type":"Plot"},"ticker":{"id":"545725c0-1ee9-4ad0-ae5a-53d9a1f89d23","type":"BasicTicker"}},"id":"be68e1c0-a4a7-4efe-a89d-a1d4fc384d2f","type":"LinearAxis"}],"root_ids":["f899b00f-b579-41a8-bd6a-d4271bce4ac6"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"772c6b2a-5161-425c-8403-159dc11a62a9","elementid":"69b7fd36-90f1-4f31-9947-f6f77d4e68c0","modelid":"f899b00f-b579-41a8-bd6a-d4271bce4ac6"}];
                
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
