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
      };var element = document.getElementById("33ca59f4-6b90-4ec4-9a94-71e68f37d808");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '33ca59f4-6b90-4ec4-9a94-71e68f37d808' but no matching script tag was found. ")
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
                  var docs_json = {"92b42e5e-4dff-4423-803b-bd32ab419713":{"roots":{"references":[{"attributes":{"callback":null},"id":"a8e1aa5b-7c75-43e0-a5d0-10e296907741","type":"DataRange1d"},{"attributes":{"data_source":{"id":"8bfd4ae5-d3f5-480a-ba04-6a00d7ab99e6","type":"ColumnDataSource"},"glyph":{"id":"693315e7-0419-48dd-b32b-834cdc3f4d5e","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1c315eef-85c2-4df2-8f29-d60a349d262b","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3db0c777-880a-4a98-a595-b89aae4c84e3","type":"BasicTickFormatter"},"plot":{"id":"88791af8-ee8f-4d19-b3ad-9ddc44b01596","type":"Plot"},"ticker":{"id":"36a1da45-2071-4e1e-9231-cfa07ff9cacf","type":"BasicTicker"}},"id":"066d6623-aee1-410d-aa7a-68c0cdb661c6","type":"LinearAxis"},{"attributes":{},"id":"7c3038d8-5b62-4f90-b2ce-a2ef5932d6be","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"066d6623-aee1-410d-aa7a-68c0cdb661c6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a63da911-b820-4961-862d-1cfb97b3a8ae","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"1c315eef-85c2-4df2-8f29-d60a349d262b","type":"GlyphRenderer"},{"id":"066d6623-aee1-410d-aa7a-68c0cdb661c6","type":"LinearAxis"},{"id":"a63da911-b820-4961-862d-1cfb97b3a8ae","type":"LinearAxis"},{"id":"cb685ae5-af28-4e55-a5fc-e76dfd37b4cf","type":"Grid"},{"id":"b36d899f-9a4d-44a4-bffb-aaf77076c6bc","type":"Grid"}],"title":null,"tool_events":{"id":"5e75957e-fb81-42aa-b016-97d87638cd90","type":"ToolEvents"},"toolbar":{"id":"c7086d36-eb3e-494b-bc61-854fbf399b83","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3c32c3b6-48f7-4cca-bd5f-c3c48407bd0b","type":"DataRange1d"},"y_range":{"id":"a8e1aa5b-7c75-43e0-a5d0-10e296907741","type":"DataRange1d"}},"id":"88791af8-ee8f-4d19-b3ad-9ddc44b01596","type":"Plot"},{"attributes":{},"id":"d8cde6b8-193d-4e5d-8928-29702db57808","type":"BasicTicker"},{"attributes":{},"id":"3db0c777-880a-4a98-a595-b89aae4c84e3","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c7086d36-eb3e-494b-bc61-854fbf399b83","type":"Toolbar"},{"attributes":{"formatter":{"id":"7c3038d8-5b62-4f90-b2ce-a2ef5932d6be","type":"BasicTickFormatter"},"plot":{"id":"88791af8-ee8f-4d19-b3ad-9ddc44b01596","type":"Plot"},"ticker":{"id":"d8cde6b8-193d-4e5d-8928-29702db57808","type":"BasicTicker"}},"id":"a63da911-b820-4961-862d-1cfb97b3a8ae","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"8bfd4ae5-d3f5-480a-ba04-6a00d7ab99e6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"88791af8-ee8f-4d19-b3ad-9ddc44b01596","type":"Plot"},"ticker":{"id":"36a1da45-2071-4e1e-9231-cfa07ff9cacf","type":"BasicTicker"}},"id":"cb685ae5-af28-4e55-a5fc-e76dfd37b4cf","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"88791af8-ee8f-4d19-b3ad-9ddc44b01596","type":"Plot"},"ticker":{"id":"d8cde6b8-193d-4e5d-8928-29702db57808","type":"BasicTicker"}},"id":"b36d899f-9a4d-44a4-bffb-aaf77076c6bc","type":"Grid"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"693315e7-0419-48dd-b32b-834cdc3f4d5e","type":"Annulus"},{"attributes":{},"id":"5e75957e-fb81-42aa-b016-97d87638cd90","type":"ToolEvents"},{"attributes":{},"id":"36a1da45-2071-4e1e-9231-cfa07ff9cacf","type":"BasicTicker"},{"attributes":{"callback":null},"id":"3c32c3b6-48f7-4cca-bd5f-c3c48407bd0b","type":"DataRange1d"}],"root_ids":["88791af8-ee8f-4d19-b3ad-9ddc44b01596"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"92b42e5e-4dff-4423-803b-bd32ab419713","elementid":"33ca59f4-6b90-4ec4-9a94-71e68f37d808","modelid":"88791af8-ee8f-4d19-b3ad-9ddc44b01596"}];
                  
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