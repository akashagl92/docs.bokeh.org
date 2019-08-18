document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("5d849975-04c5-4f45-9286-96ffa7663770");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d849975-04c5-4f45-9286-96ffa7663770' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"0aa6eef6-d6cc-4b47-99cf-28b8dcb5e735":{"roots":{"references":[{"attributes":{},"id":"7fbf1a80-aefb-411a-b06c-cdc2cd05916b","type":"BasicTicker"},{"attributes":{"below":[{"id":"b81da79b-c9b6-45cb-95f7-b38c9aa6de49","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"547bc498-c0b8-41f7-8785-217bc2cc2b60","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f11c2c91-2782-4754-8adc-afcb8f52ce1b","type":"GlyphRenderer"},{"id":"b81da79b-c9b6-45cb-95f7-b38c9aa6de49","type":"LinearAxis"},{"id":"547bc498-c0b8-41f7-8785-217bc2cc2b60","type":"LinearAxis"},{"id":"72a3ba39-9fc0-4edb-a31c-581d2ab609d8","type":"Grid"},{"id":"3898a0ce-955d-474b-ba85-67255d3d16a5","type":"Grid"}],"title":null,"tool_events":{"id":"91fe2f65-ec77-4539-ab83-2c4408590c0b","type":"ToolEvents"},"toolbar":{"id":"61305151-66d2-4ee5-b20e-351dffbd41be","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b60cf838-7b6f-434f-b113-250849c07161","type":"DataRange1d"},"y_range":{"id":"8fc0f325-8501-41f7-9b44-77018284ccd9","type":"DataRange1d"}},"id":"58e7578a-d7f6-4f0a-83dd-74232232e16a","type":"Plot"},{"attributes":{"formatter":{"id":"0889e1c3-9a5e-43d8-94e3-a4a2bafad82b","type":"BasicTickFormatter"},"plot":{"id":"58e7578a-d7f6-4f0a-83dd-74232232e16a","type":"Plot"},"ticker":{"id":"7fbf1a80-aefb-411a-b06c-cdc2cd05916b","type":"BasicTicker"}},"id":"b81da79b-c9b6-45cb-95f7-b38c9aa6de49","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"61305151-66d2-4ee5-b20e-351dffbd41be","type":"Toolbar"},{"attributes":{},"id":"91fe2f65-ec77-4539-ab83-2c4408590c0b","type":"ToolEvents"},{"attributes":{},"id":"0889e1c3-9a5e-43d8-94e3-a4a2bafad82b","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8fc0f325-8501-41f7-9b44-77018284ccd9","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","h","w","x"],"data":{"h":[0.5,0.4125,0.35,0.3125,0.3,0.3125,0.35,0.4125,0.5],"w":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"c779b82a-0405-4ce3-b0d4-a3e23df82556","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"a6c19cde-33a0-45aa-b15d-ff24147018bc","type":"BasicTickFormatter"},"plot":{"id":"58e7578a-d7f6-4f0a-83dd-74232232e16a","type":"Plot"},"ticker":{"id":"e2ec96de-8847-4e6c-83f1-0d6527a25e52","type":"BasicTicker"}},"id":"547bc498-c0b8-41f7-8785-217bc2cc2b60","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"58e7578a-d7f6-4f0a-83dd-74232232e16a","type":"Plot"},"ticker":{"id":"e2ec96de-8847-4e6c-83f1-0d6527a25e52","type":"BasicTicker"}},"id":"3898a0ce-955d-474b-ba85-67255d3d16a5","type":"Grid"},{"attributes":{},"id":"e2ec96de-8847-4e6c-83f1-0d6527a25e52","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b60cf838-7b6f-434f-b113-250849c07161","type":"DataRange1d"},{"attributes":{},"id":"a6c19cde-33a0-45aa-b15d-ff24147018bc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"58e7578a-d7f6-4f0a-83dd-74232232e16a","type":"Plot"},"ticker":{"id":"7fbf1a80-aefb-411a-b06c-cdc2cd05916b","type":"BasicTicker"}},"id":"72a3ba39-9fc0-4edb-a31c-581d2ab609d8","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a22eeac-96b5-464d-b608-e6dddcd6ccac","type":"Ellipse"},{"attributes":{"data_source":{"id":"c779b82a-0405-4ce3-b0d4-a3e23df82556","type":"ColumnDataSource"},"glyph":{"id":"9a22eeac-96b5-464d-b608-e6dddcd6ccac","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f11c2c91-2782-4754-8adc-afcb8f52ce1b","type":"GlyphRenderer"}],"root_ids":["58e7578a-d7f6-4f0a-83dd-74232232e16a"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"0aa6eef6-d6cc-4b47-99cf-28b8dcb5e735","elementid":"5d849975-04c5-4f45-9286-96ffa7663770","modelid":"58e7578a-d7f6-4f0a-83dd-74232232e16a"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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