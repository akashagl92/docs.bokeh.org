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
      };var element = document.getElementById("499f778b-1a8f-4231-8420-ed6019cc410c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '499f778b-1a8f-4231-8420-ed6019cc410c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"fb47107f-649c-4aa8-a163-614fd4739c0b":{"roots":{"references":[{"attributes":{"below":[{"id":"52ab5ba7-3730-41b5-9dad-a9b01530d57e","type":"LinearAxis"}],"left":[{"id":"64a88801-5786-4dfb-8eb6-d6472b17ee17","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"52ab5ba7-3730-41b5-9dad-a9b01530d57e","type":"LinearAxis"},{"id":"318a706e-546b-47c8-8991-1ee87a386f84","type":"Grid"},{"id":"64a88801-5786-4dfb-8eb6-d6472b17ee17","type":"LinearAxis"},{"id":"e042a6b8-d26c-452d-a902-1073f646c13b","type":"Grid"},{"id":"66b6a437-0991-48f9-8160-15a08921b5ac","type":"Legend"},{"id":"45d363a4-e775-43da-ae4c-db5c0f0b1b7e","type":"GlyphRenderer"}],"title":{"id":"edc19097-fbd5-493e-8173-957cd648b54d","type":"Title"},"tool_events":{"id":"cc16f6a1-bb43-41bf-b15c-d1e11d9bebf0","type":"ToolEvents"},"toolbar":{"id":"61dd2674-32e8-4c8b-964e-5d0b97bd7684","type":"Toolbar"},"x_range":{"id":"571e036c-4990-4017-afb5-c3823027d009","type":"Range1d"},"y_range":{"id":"3fd8b2a4-6913-4c36-8e62-6fa4b78baf10","type":"Range1d"}},"id":"fa2824ec-2acb-4678-a0db-ac57d4e3ce13","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"fa2824ec-2acb-4678-a0db-ac57d4e3ce13","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3a00c0b-e4f7-4a2e-97dd-830b24a65352","type":"BasicTicker"}},"id":"318a706e-546b-47c8-8991-1ee87a386f84","type":"Grid"},{"attributes":{},"id":"cc16f6a1-bb43-41bf-b15c-d1e11d9bebf0","type":"ToolEvents"},{"attributes":{"callback":null,"end":3},"id":"3fd8b2a4-6913-4c36-8e62-6fa4b78baf10","type":"Range1d"},{"attributes":{"data_source":{"id":"626ed40c-2c26-448a-b85b-2448cf1c253d","type":"ColumnDataSource"},"glyph":{"id":"61726949-c09c-487d-b7f9-743e55d59ed9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89711b2f-b2c7-4434-8403-8ac336f4ad2a","type":"Circle"},"selection_glyph":null},"id":"45d363a4-e775-43da-ae4c-db5c0f0b1b7e","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"037d82c5-aff0-48e9-a58b-67c76f01a11e","type":"SaveTool"}]},"id":"61dd2674-32e8-4c8b-964e-5d0b97bd7684","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"edc19097-fbd5-493e-8173-957cd648b54d","type":"Title"},{"attributes":{"formatter":{"id":"45b76d4b-5047-47ff-8f7e-a332b262bec7","type":"BasicTickFormatter"},"plot":{"id":"fa2824ec-2acb-4678-a0db-ac57d4e3ce13","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ed28475-b968-441a-86c4-a396638a63de","type":"BasicTicker"}},"id":"64a88801-5786-4dfb-8eb6-d6472b17ee17","type":"LinearAxis"},{"attributes":{},"id":"45b76d4b-5047-47ff-8f7e-a332b262bec7","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"89711b2f-b2c7-4434-8403-8ac336f4ad2a","type":"Circle"},{"attributes":{"callback":null,"end":7},"id":"571e036c-4990-4017-afb5-c3823027d009","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"fa2824ec-2acb-4678-a0db-ac57d4e3ce13","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ed28475-b968-441a-86c4-a396638a63de","type":"BasicTicker"}},"id":"e042a6b8-d26c-452d-a902-1073f646c13b","type":"Grid"},{"attributes":{"items":[{"id":"1fbf1898-1615-4fbb-8dd4-e2b17da04316","type":"LegendItem"}],"plot":{"id":"fa2824ec-2acb-4678-a0db-ac57d4e3ce13","subtype":"Figure","type":"Plot"}},"id":"66b6a437-0991-48f9-8160-15a08921b5ac","type":"Legend"},{"attributes":{},"id":"4a2a65c0-5177-456b-a60c-b45ee163ddc6","type":"BasicTickFormatter"},{"attributes":{},"id":"3ed28475-b968-441a-86c4-a396638a63de","type":"BasicTicker"},{"attributes":{},"id":"c3a00c0b-e4f7-4a2e-97dd-830b24a65352","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"61726949-c09c-487d-b7f9-743e55d59ed9","type":"Circle"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"45d363a4-e775-43da-ae4c-db5c0f0b1b7e","type":"GlyphRenderer"}]},"id":"1fbf1898-1615-4fbb-8dd4-e2b17da04316","type":"LegendItem"},{"attributes":{"plot":{"id":"fa2824ec-2acb-4678-a0db-ac57d4e3ce13","subtype":"Figure","type":"Plot"}},"id":"037d82c5-aff0-48e9-a58b-67c76f01a11e","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["color","x","y","label"],"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]}},"id":"626ed40c-2c26-448a-b85b-2448cf1c253d","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4a2a65c0-5177-456b-a60c-b45ee163ddc6","type":"BasicTickFormatter"},"plot":{"id":"fa2824ec-2acb-4678-a0db-ac57d4e3ce13","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3a00c0b-e4f7-4a2e-97dd-830b24a65352","type":"BasicTicker"}},"id":"52ab5ba7-3730-41b5-9dad-a9b01530d57e","type":"LinearAxis"}],"root_ids":["fa2824ec-2acb-4678-a0db-ac57d4e3ce13"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"fb47107f-649c-4aa8-a163-614fd4739c0b","elementid":"499f778b-1a8f-4231-8420-ed6019cc410c","modelid":"fa2824ec-2acb-4678-a0db-ac57d4e3ce13"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
