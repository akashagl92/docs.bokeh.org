document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("c2414e46-e590-41f8-a5bb-e954b9bc9fe0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c2414e46-e590-41f8-a5bb-e954b9bc9fe0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6f35269f-443c-49ac-b743-6f48a04d661d":{"roots":{"references":[{"attributes":{},"id":"d250ad9e-1806-4cc2-a2f3-3c5ace860c75","type":"BasicTickFormatter"},{"attributes":{},"id":"b0e111d6-d076-44f4-9b25-cd094c10e0ab","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"2778d8f6-9683-42ad-ad94-ee7a1117d573","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"b8965d5d-c2ec-4c49-8d2c-4cf5b70b1765","type":"ColumnDataSource"},{"attributes":{},"id":"a12b1eea-2b5f-4788-baf6-8c8e7d072e7b","type":"ToolEvents"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc3ce4e2-fbd3-4da3-a67d-3be09eb878af","type":"X"},{"attributes":{"callback":null},"id":"079909a9-6525-48f4-a528-91bad9931ada","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"732a2757-937f-4463-b134-aafd60ad723d","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"9f3052f1-c67b-4dd5-a688-60480596f65f","type":"Plot"},"ticker":{"id":"95f74a9d-704c-454e-a52e-a5e83722b3fa","type":"BasicTicker"}},"id":"a5d97176-2346-478a-97f5-162cbe1e97ef","type":"Grid"},{"attributes":{"plot":{"id":"9f3052f1-c67b-4dd5-a688-60480596f65f","type":"Plot"},"ticker":{"id":"fc422cea-662b-4250-beae-d18950becd8e","type":"BasicTicker"}},"id":"1da4a1aa-5dc4-4578-bd16-1cc58b3fafc4","type":"Grid"},{"attributes":{},"id":"95f74a9d-704c-454e-a52e-a5e83722b3fa","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d250ad9e-1806-4cc2-a2f3-3c5ace860c75","type":"BasicTickFormatter"},"plot":{"id":"9f3052f1-c67b-4dd5-a688-60480596f65f","type":"Plot"},"ticker":{"id":"fc422cea-662b-4250-beae-d18950becd8e","type":"BasicTicker"}},"id":"2f6fcef3-876c-409d-8023-0497859fe14b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"b8965d5d-c2ec-4c49-8d2c-4cf5b70b1765","type":"ColumnDataSource"},"glyph":{"id":"bc3ce4e2-fbd3-4da3-a67d-3be09eb878af","type":"X"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3c862664-0d4f-42ea-bebb-050d324aa787","type":"GlyphRenderer"},{"attributes":{},"id":"fc422cea-662b-4250-beae-d18950becd8e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b0e111d6-d076-44f4-9b25-cd094c10e0ab","type":"BasicTickFormatter"},"plot":{"id":"9f3052f1-c67b-4dd5-a688-60480596f65f","type":"Plot"},"ticker":{"id":"95f74a9d-704c-454e-a52e-a5e83722b3fa","type":"BasicTicker"}},"id":"f27e03ed-249a-4f5f-af0c-c34a49b34396","type":"LinearAxis"},{"attributes":{"below":[{"id":"2f6fcef3-876c-409d-8023-0497859fe14b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f27e03ed-249a-4f5f-af0c-c34a49b34396","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3c862664-0d4f-42ea-bebb-050d324aa787","type":"GlyphRenderer"},{"id":"2f6fcef3-876c-409d-8023-0497859fe14b","type":"LinearAxis"},{"id":"f27e03ed-249a-4f5f-af0c-c34a49b34396","type":"LinearAxis"},{"id":"1da4a1aa-5dc4-4578-bd16-1cc58b3fafc4","type":"Grid"},{"id":"a5d97176-2346-478a-97f5-162cbe1e97ef","type":"Grid"}],"title":null,"tool_events":{"id":"a12b1eea-2b5f-4788-baf6-8c8e7d072e7b","type":"ToolEvents"},"toolbar":{"id":"732a2757-937f-4463-b134-aafd60ad723d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2778d8f6-9683-42ad-ad94-ee7a1117d573","type":"DataRange1d"},"y_range":{"id":"079909a9-6525-48f4-a528-91bad9931ada","type":"DataRange1d"}},"id":"9f3052f1-c67b-4dd5-a688-60480596f65f","type":"Plot"}],"root_ids":["9f3052f1-c67b-4dd5-a688-60480596f65f"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"6f35269f-443c-49ac-b743-6f48a04d661d","elementid":"c2414e46-e590-41f8-a5bb-e954b9bc9fe0","modelid":"9f3052f1-c67b-4dd5-a688-60480596f65f"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});