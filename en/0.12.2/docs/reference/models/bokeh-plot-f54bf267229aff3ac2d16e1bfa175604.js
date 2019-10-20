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
      };var element = document.getElementById("bd1a43d3-606a-4fed-8d15-e88b8f038cca");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bd1a43d3-606a-4fed-8d15-e88b8f038cca' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"64ab9bae-bedc-475e-83b5-838c5e76291e":{"roots":{"references":[{"attributes":{"plot":{"id":"de4a1760-4126-44bc-9f4f-af065f532c33","type":"Plot"},"ticker":{"id":"08ec636f-7a15-4899-bdd7-2fee15fd72e0","type":"BasicTicker"}},"id":"697b92fc-24cb-49ad-a8d2-050892a37f16","type":"Grid"},{"attributes":{},"id":"7923a556-d620-4c09-8b59-c76f1923e706","type":"ToolEvents"},{"attributes":{"formatter":{"id":"90b266a7-9168-4165-a7de-6ef45d666c56","type":"BasicTickFormatter"},"plot":{"id":"de4a1760-4126-44bc-9f4f-af065f532c33","type":"Plot"},"ticker":{"id":"1f94ba1f-6e51-44bf-bb85-3458b35271a6","type":"BasicTicker"}},"id":"7dff8d90-31f6-45b0-b2c4-06cb46613e68","type":"LinearAxis"},{"attributes":{},"id":"612d0902-dc10-459c-bc98-cfd47e23e5cd","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f4658e26-a647-4489-b159-3a7c33447191","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3d0cddcd-e524-473b-a6d4-2a23843c0e8f","type":"ColumnDataSource"},"glyph":{"id":"abf9c351-1389-4cbe-9896-1541590d0ede","type":"HBar"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"34b1dc8b-61f0-4f6b-a8dc-cb54d1f0f63c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"612d0902-dc10-459c-bc98-cfd47e23e5cd","type":"BasicTickFormatter"},"plot":{"id":"de4a1760-4126-44bc-9f4f-af065f532c33","type":"Plot"},"ticker":{"id":"08ec636f-7a15-4899-bdd7-2fee15fd72e0","type":"BasicTicker"}},"id":"b9579530-b48e-4504-8201-a4d216472774","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f70d91e0-3dec-4742-b811-0bb044d0ef00","type":"Toolbar"},{"attributes":{"below":[{"id":"b9579530-b48e-4504-8201-a4d216472774","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7dff8d90-31f6-45b0-b2c4-06cb46613e68","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"34b1dc8b-61f0-4f6b-a8dc-cb54d1f0f63c","type":"GlyphRenderer"},{"id":"b9579530-b48e-4504-8201-a4d216472774","type":"LinearAxis"},{"id":"7dff8d90-31f6-45b0-b2c4-06cb46613e68","type":"LinearAxis"},{"id":"697b92fc-24cb-49ad-a8d2-050892a37f16","type":"Grid"},{"id":"57a80d69-ed78-40ef-82fd-bfda8f8d538c","type":"Grid"}],"title":null,"tool_events":{"id":"7923a556-d620-4c09-8b59-c76f1923e706","type":"ToolEvents"},"toolbar":{"id":"f70d91e0-3dec-4742-b811-0bb044d0ef00","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f4658e26-a647-4489-b159-3a7c33447191","type":"DataRange1d"},"y_range":{"id":"08ea1561-1be1-4b51-b34f-e21feac8f303","type":"DataRange1d"}},"id":"de4a1760-4126-44bc-9f4f-af065f532c33","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"de4a1760-4126-44bc-9f4f-af065f532c33","type":"Plot"},"ticker":{"id":"1f94ba1f-6e51-44bf-bb85-3458b35271a6","type":"BasicTicker"}},"id":"57a80d69-ed78-40ef-82fd-bfda8f8d538c","type":"Grid"},{"attributes":{},"id":"90b266a7-9168-4165-a7de-6ef45d666c56","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"08ea1561-1be1-4b51-b34f-e21feac8f303","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"y":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0]}},"id":"3d0cddcd-e524-473b-a6d4-2a23843c0e8f","type":"ColumnDataSource"},{"attributes":{},"id":"08ec636f-7a15-4899-bdd7-2fee15fd72e0","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"abf9c351-1389-4cbe-9896-1541590d0ede","type":"HBar"},{"attributes":{},"id":"1f94ba1f-6e51-44bf-bb85-3458b35271a6","type":"BasicTicker"}],"root_ids":["de4a1760-4126-44bc-9f4f-af065f532c33"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"64ab9bae-bedc-475e-83b5-838c5e76291e","elementid":"bd1a43d3-606a-4fed-8d15-e88b8f038cca","modelid":"de4a1760-4126-44bc-9f4f-af065f532c33"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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