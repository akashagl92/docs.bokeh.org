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
      };var element = document.getElementById("fa9b3635-129d-4c22-93cd-8e261eceb791");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa9b3635-129d-4c22-93cd-8e261eceb791' but no matching script tag was found. ")
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
                  var docs_json = {"8188da4c-74e7-4bd7-95ae-fba3b6885cf9":{"roots":{"references":[{"attributes":{"callback":null,"end":7.49,"start":0.4099999999999999},"id":"7d469332-b2f1-4151-beb3-7935316b62bb","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"2f1eaf05-bb58-401f-b3b9-4dadb5c347f7","type":"Triangle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"958a656e-5df7-4514-a917-25036388d291","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"}],"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa"],"x_values":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4],"y_values":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2]}},"id":"74626742-4982-4205-b8a8-763dee5279cc","type":"ColumnDataSource"},{"attributes":{},"id":"681ee136-55a9-421e-82bf-19b7231ab407","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"}],"species":["virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"],"x_values":[6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y_values":[2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"64283da5-aa00-4a70-953f-4a06e53bc2d1","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":2.74,"start":-0.13999999999999999},"id":"ded164b6-80c6-4a00-b69d-3ae6026c428c","type":"Range1d"},{"attributes":{"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"}},"id":"8192f28f-60d0-4bb0-b116-7ddd2e8e63eb","type":"SaveTool"},{"attributes":{"overlay":{"id":"958a656e-5df7-4514-a917-25036388d291","type":"BoxAnnotation"},"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"}},"id":"bb445210-d6ed-4546-a800-a6dc1f0dcc65","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"}],"species":["versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor"],"x_values":[4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1],"y_values":[1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3]}},"id":"8040cc6f-5103-4565-81b1-909ba7b93896","type":"ColumnDataSource"},{"attributes":{},"id":"62415ddf-bb8c-4c65-830c-8c3286184852","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"4d8e9054-ff92-43fe-bef7-352564d433d7","type":"Circle"},{"attributes":{"data_source":{"id":"8040cc6f-5103-4565-81b1-909ba7b93896","type":"ColumnDataSource"},"glyph":{"id":"9044f681-15bd-4fc9-9b0e-bce855b51c4d","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"65afedb7-aa0c-4f37-aa98-f26c580de775","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"}},"id":"0e461ada-b66b-42de-bb3a-6f544384b436","type":"PanTool"},{"attributes":{},"id":"fe3df649-ff5e-448d-b3e1-83ebe43be3da","type":"ToolEvents"},{"attributes":{"below":[{"id":"115b6208-379d-4301-8615-3447ee289d31","type":"LinearAxis"}],"height":400,"left":[{"id":"d14fd4a8-42f5-4788-bce8-fef35eb9460c","type":"LinearAxis"}],"renderers":[{"id":"958a656e-5df7-4514-a917-25036388d291","type":"BoxAnnotation"},{"id":"48732979-f04a-4d01-a909-36f7362bc301","type":"GlyphRenderer"},{"id":"65afedb7-aa0c-4f37-aa98-f26c580de775","type":"GlyphRenderer"},{"id":"525b0817-5235-479d-aecd-421fcfca69ba","type":"GlyphRenderer"},{"id":"7df82db8-23b5-452d-8ab1-c341e39ce7bf","type":"Legend"},{"id":"115b6208-379d-4301-8615-3447ee289d31","type":"LinearAxis"},{"id":"d14fd4a8-42f5-4788-bce8-fef35eb9460c","type":"LinearAxis"},{"id":"7f9e6d22-9bf0-447b-8865-b222b94d19ec","type":"Grid"},{"id":"51abb05b-da5f-48c9-9064-a1493d36bae0","type":"Grid"}],"title":{"id":"5f0faa08-8c0a-4b13-aa2a-e285f7f57c5c","type":"Title"},"tool_events":{"id":"fe3df649-ff5e-448d-b3e1-83ebe43be3da","type":"ToolEvents"},"toolbar":{"id":"d8d1c1d4-61fd-4e6c-abbe-15333f1f284b","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"7d469332-b2f1-4151-beb3-7935316b62bb","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ded164b6-80c6-4a00-b69d-3ae6026c428c","type":"Range1d"}},"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"}},"id":"e5547694-7dac-49a8-bf1e-43305d5ce1a1","type":"ResetTool"},{"attributes":{"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"}},"id":"2819b070-0566-41c0-85a3-c2346aaaf604","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"64283da5-aa00-4a70-953f-4a06e53bc2d1","type":"ColumnDataSource"},"glyph":{"id":"2f1eaf05-bb58-401f-b3b9-4dadb5c347f7","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"525b0817-5235-479d-aecd-421fcfca69ba","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"},"ticker":{"id":"00339b3f-b835-49c6-a6af-2959ddfc07b5","type":"BasicTicker"}},"id":"7f9e6d22-9bf0-447b-8865-b222b94d19ec","type":"Grid"},{"attributes":{"legends":[["setosa",[{"id":"48732979-f04a-4d01-a909-36f7362bc301","type":"GlyphRenderer"}]],["versicolor",[{"id":"65afedb7-aa0c-4f37-aa98-f26c580de775","type":"GlyphRenderer"}]],["virginica",[{"id":"525b0817-5235-479d-aecd-421fcfca69ba","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"}},"id":"7df82db8-23b5-452d-8ab1-c341e39ce7bf","type":"Legend"},{"attributes":{"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"}},"id":"1127532f-515a-4d6c-8816-fbf44637f746","type":"HelpTool"},{"attributes":{},"id":"4898416f-d466-444f-b8c4-c93d1b1806b3","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Iris Dataset Color and Marker by Species"},"id":"5f0faa08-8c0a-4b13-aa2a-e285f7f57c5c","type":"Title"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"9044f681-15bd-4fc9-9b0e-bce855b51c4d","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"},"ticker":{"id":"4898416f-d466-444f-b8c4-c93d1b1806b3","type":"BasicTicker"}},"id":"51abb05b-da5f-48c9-9064-a1493d36bae0","type":"Grid"},{"attributes":{"data_source":{"id":"74626742-4982-4205-b8a8-763dee5279cc","type":"ColumnDataSource"},"glyph":{"id":"4d8e9054-ff92-43fe-bef7-352564d433d7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"48732979-f04a-4d01-a909-36f7362bc301","type":"GlyphRenderer"},{"attributes":{},"id":"00339b3f-b835-49c6-a6af-2959ddfc07b5","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0e461ada-b66b-42de-bb3a-6f544384b436","type":"PanTool"},{"id":"2819b070-0566-41c0-85a3-c2346aaaf604","type":"WheelZoomTool"},{"id":"bb445210-d6ed-4546-a800-a6dc1f0dcc65","type":"BoxZoomTool"},{"id":"8192f28f-60d0-4bb0-b116-7ddd2e8e63eb","type":"SaveTool"},{"id":"e5547694-7dac-49a8-bf1e-43305d5ce1a1","type":"ResetTool"},{"id":"1127532f-515a-4d6c-8816-fbf44637f746","type":"HelpTool"}]},"id":"d8d1c1d4-61fd-4e6c-abbe-15333f1f284b","type":"Toolbar"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"62415ddf-bb8c-4c65-830c-8c3286184852","type":"BasicTickFormatter"},"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"},"ticker":{"id":"00339b3f-b835-49c6-a6af-2959ddfc07b5","type":"BasicTicker"}},"id":"115b6208-379d-4301-8615-3447ee289d31","type":"LinearAxis"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"681ee136-55a9-421e-82bf-19b7231ab407","type":"BasicTickFormatter"},"plot":{"id":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1","subtype":"Chart","type":"Plot"},"ticker":{"id":"4898416f-d466-444f-b8c4-c93d1b1806b3","type":"BasicTicker"}},"id":"d14fd4a8-42f5-4788-bce8-fef35eb9460c","type":"LinearAxis"}],"root_ids":["9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"8188da4c-74e7-4bd7-95ae-fba3b6885cf9","elementid":"fa9b3635-129d-4c22-93cd-8e261eceb791","modelid":"9fc04c45-e5f9-4eaf-82a8-206d9b6cedc1"}];
                  
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