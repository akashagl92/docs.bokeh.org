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
      };var element = document.getElementById("dd8289d0-a6a2-4723-9b87-3615bf03a86d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dd8289d0-a6a2-4723-9b87-3615bf03a86d' but no matching script tag was found. ")
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
                  var docs_json = {"d87df648-b827-41f9-a281-3573af797920":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"637d3b7f-d5b7-45e5-b2af-9bc5a88abf8d","type":"ColumnDataSource"},{"attributes":{},"id":"5b4941ec-341f-4481-b133-a964a8f3dc29","type":"BasicTickFormatter"},{"attributes":{},"id":"486391ac-00b8-4432-b989-7bce82a20387","type":"BasicTicker"},{"attributes":{},"id":"7894893a-a08e-4e5b-b351-39255368e34b","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e843137e-5c59-4acd-859f-ec3127e86a78","type":"Plot"},"ticker":{"id":"486391ac-00b8-4432-b989-7bce82a20387","type":"BasicTicker"}},"id":"798cba6f-bd0e-4550-8050-33c5f1ede789","type":"Grid"},{"attributes":{"formatter":{"id":"5b4941ec-341f-4481-b133-a964a8f3dc29","type":"BasicTickFormatter"},"plot":{"id":"e843137e-5c59-4acd-859f-ec3127e86a78","type":"Plot"},"ticker":{"id":"486391ac-00b8-4432-b989-7bce82a20387","type":"BasicTicker"}},"id":"d6f6c955-4781-4b11-a0ec-469a8e433f30","type":"LinearAxis"},{"attributes":{"plot":{"id":"e843137e-5c59-4acd-859f-ec3127e86a78","type":"Plot"},"ticker":{"id":"7894893a-a08e-4e5b-b351-39255368e34b","type":"BasicTicker"}},"id":"d9f61f15-faf1-4db4-9ac7-91cfe49e0d74","type":"Grid"},{"attributes":{"below":[{"id":"a00a6f8e-9717-4ec6-8212-1002aa2c85b8","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d6f6c955-4781-4b11-a0ec-469a8e433f30","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e335d769-ac5f-4e12-9cbb-d9af34280aa4","type":"GlyphRenderer"},{"id":"a00a6f8e-9717-4ec6-8212-1002aa2c85b8","type":"LinearAxis"},{"id":"d6f6c955-4781-4b11-a0ec-469a8e433f30","type":"LinearAxis"},{"id":"d9f61f15-faf1-4db4-9ac7-91cfe49e0d74","type":"Grid"},{"id":"798cba6f-bd0e-4550-8050-33c5f1ede789","type":"Grid"}],"title":null,"tool_events":{"id":"98bd9c5a-645e-428c-92db-62ae6fff1ad0","type":"ToolEvents"},"toolbar":{"id":"ec3e6323-ac76-40cf-ac82-203ae167029b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e765e9e1-f193-439c-af0c-540df473faf9","type":"DataRange1d"},"y_range":{"id":"b12caedd-1d7a-40e5-a241-6f1b1a59b160","type":"DataRange1d"}},"id":"e843137e-5c59-4acd-859f-ec3127e86a78","type":"Plot"},{"attributes":{"callback":null},"id":"e765e9e1-f193-439c-af0c-540df473faf9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"907db14a-ea4f-4b38-8501-df915145db5c","type":"BasicTickFormatter"},"plot":{"id":"e843137e-5c59-4acd-859f-ec3127e86a78","type":"Plot"},"ticker":{"id":"7894893a-a08e-4e5b-b351-39255368e34b","type":"BasicTicker"}},"id":"a00a6f8e-9717-4ec6-8212-1002aa2c85b8","type":"LinearAxis"},{"attributes":{"data_source":{"id":"637d3b7f-d5b7-45e5-b2af-9bc5a88abf8d","type":"ColumnDataSource"},"glyph":{"id":"07fec16c-820e-48e9-8756-be7dc95335cd","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e335d769-ac5f-4e12-9cbb-d9af34280aa4","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b12caedd-1d7a-40e5-a241-6f1b1a59b160","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ec3e6323-ac76-40cf-ac82-203ae167029b","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"07fec16c-820e-48e9-8756-be7dc95335cd","type":"SquareCross"},{"attributes":{},"id":"907db14a-ea4f-4b38-8501-df915145db5c","type":"BasicTickFormatter"},{"attributes":{},"id":"98bd9c5a-645e-428c-92db-62ae6fff1ad0","type":"ToolEvents"}],"root_ids":["e843137e-5c59-4acd-859f-ec3127e86a78"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"d87df648-b827-41f9-a281-3573af797920","elementid":"dd8289d0-a6a2-4723-9b87-3615bf03a86d","modelid":"e843137e-5c59-4acd-859f-ec3127e86a78"}];
                  
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