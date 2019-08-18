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
      };var element = document.getElementById("c75b30db-dc78-4726-822c-707769b97e82");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c75b30db-dc78-4726-822c-707769b97e82' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"e507950f-ba9f-4420-85c6-ceff6f0043d7":{"roots":{"references":[{"attributes":{},"id":"5387f396-91f5-4651-b98c-0e750f9fce37","type":"BasicTicker"},{"attributes":{"below":[{"id":"e6599e44-39d8-4798-ae93-c565e4b8804f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"02f8d12b-8cea-47d6-a916-f452a0497c17","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4366b615-19dc-4441-aabd-01a8905cfea1","type":"GlyphRenderer"},{"id":"e6599e44-39d8-4798-ae93-c565e4b8804f","type":"LinearAxis"},{"id":"02f8d12b-8cea-47d6-a916-f452a0497c17","type":"LinearAxis"},{"id":"ab9d6520-9f9c-4fc1-818a-55123a3d9c4d","type":"Grid"},{"id":"61914245-071a-4006-a98c-56a0bcf9ab7c","type":"Grid"}],"title":null,"tool_events":{"id":"38990e29-1e55-4f14-8014-c0074a56f2ca","type":"ToolEvents"},"toolbar":{"id":"5766b137-e8f7-4f45-9785-37a1a233a76b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"623a45a3-23b1-46b9-86cb-dc0b195089fa","type":"DataRange1d"},"y_range":{"id":"a77c71ad-4bd8-4c5c-9812-21c7cdb9358c","type":"DataRange1d"}},"id":"6b4f5d5d-19a6-4d88-be31-a51e54915cbc","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"6b4f5d5d-19a6-4d88-be31-a51e54915cbc","type":"Plot"},"ticker":{"id":"5387f396-91f5-4651-b98c-0e750f9fce37","type":"BasicTicker"}},"id":"61914245-071a-4006-a98c-56a0bcf9ab7c","type":"Grid"},{"attributes":{"plot":{"id":"6b4f5d5d-19a6-4d88-be31-a51e54915cbc","type":"Plot"},"ticker":{"id":"f63cd574-baf6-47c3-8250-abbba8801dff","type":"BasicTicker"}},"id":"ab9d6520-9f9c-4fc1-818a-55123a3d9c4d","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5766b137-e8f7-4f45-9785-37a1a233a76b","type":"Toolbar"},{"attributes":{},"id":"f63cd574-baf6-47c3-8250-abbba8801dff","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"0e358184-2dba-490d-a6a4-7e783f39256c","type":"ColumnDataSource"},{"attributes":{},"id":"3c821c71-b115-4417-bda4-42dd3b9c0c6a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"623a45a3-23b1-46b9-86cb-dc0b195089fa","type":"DataRange1d"},{"attributes":{},"id":"38990e29-1e55-4f14-8014-c0074a56f2ca","type":"ToolEvents"},{"attributes":{},"id":"f4cbb58e-c6be-47aa-9619-c3c0b2b62f48","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0e358184-2dba-490d-a6a4-7e783f39256c","type":"ColumnDataSource"},"glyph":{"id":"74f3be32-8a4c-4d9b-b7f2-87daa47e6c35","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4366b615-19dc-4441-aabd-01a8905cfea1","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3c821c71-b115-4417-bda4-42dd3b9c0c6a","type":"BasicTickFormatter"},"plot":{"id":"6b4f5d5d-19a6-4d88-be31-a51e54915cbc","type":"Plot"},"ticker":{"id":"5387f396-91f5-4651-b98c-0e750f9fce37","type":"BasicTicker"}},"id":"02f8d12b-8cea-47d6-a916-f452a0497c17","type":"LinearAxis"},{"attributes":{"formatter":{"id":"f4cbb58e-c6be-47aa-9619-c3c0b2b62f48","type":"BasicTickFormatter"},"plot":{"id":"6b4f5d5d-19a6-4d88-be31-a51e54915cbc","type":"Plot"},"ticker":{"id":"f63cd574-baf6-47c3-8250-abbba8801dff","type":"BasicTicker"}},"id":"e6599e44-39d8-4798-ae93-c565e4b8804f","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74f3be32-8a4c-4d9b-b7f2-87daa47e6c35","type":"InvertedTriangle"},{"attributes":{"callback":null},"id":"a77c71ad-4bd8-4c5c-9812-21c7cdb9358c","type":"DataRange1d"}],"root_ids":["6b4f5d5d-19a6-4d88-be31-a51e54915cbc"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"e507950f-ba9f-4420-85c6-ceff6f0043d7","elementid":"c75b30db-dc78-4726-822c-707769b97e82","modelid":"6b4f5d5d-19a6-4d88-be31-a51e54915cbc"}];
              
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