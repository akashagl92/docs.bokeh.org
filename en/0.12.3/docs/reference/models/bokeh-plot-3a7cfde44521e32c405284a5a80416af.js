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
      };var element = document.getElementById("71dac46a-9ddd-4c74-9502-cb49aae97edf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71dac46a-9ddd-4c74-9502-cb49aae97edf' but no matching script tag was found. ")
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
                  var docs_json = {"7dd3cc4b-7e09-4615-aeb2-f0a55f51a979":{"roots":{"references":[{"attributes":{"callback":null},"id":"7778c67f-83ff-4903-9c1e-1d8f6da0aa2b","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"e87260c7-bc05-4cd3-aa7d-2d7ad3c9e4fd","type":"ColumnDataSource"},{"attributes":{},"id":"d8b842f4-2957-4aa1-80f2-7c8cdcac1220","type":"BasicTickFormatter"},{"attributes":{},"id":"a488a24a-97da-4481-86fc-410503f738de","type":"BasicTicker"},{"attributes":{},"id":"f8932dac-04ab-4fbb-a784-947219af29ab","type":"BasicTicker"},{"attributes":{"plot":{"id":"476e5951-4420-4021-a5d9-4add2da76562","type":"Plot"},"ticker":{"id":"f8932dac-04ab-4fbb-a784-947219af29ab","type":"BasicTicker"}},"id":"02b07aac-a089-408b-a76e-2c207f6c2e37","type":"Grid"},{"attributes":{},"id":"bc1f17d3-78b7-47da-9da1-8197f82f542a","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"57cb39ee-b1fe-437a-a7e4-1fbdde86aa61","type":"Toolbar"},{"attributes":{"formatter":{"id":"d8b842f4-2957-4aa1-80f2-7c8cdcac1220","type":"BasicTickFormatter"},"plot":{"id":"476e5951-4420-4021-a5d9-4add2da76562","type":"Plot"},"ticker":{"id":"a488a24a-97da-4481-86fc-410503f738de","type":"BasicTicker"}},"id":"174ea393-610a-4a20-923f-271e8b897c2f","type":"LinearAxis"},{"attributes":{"below":[{"id":"30f047aa-b51f-4308-bd23-c18068c07a76","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"174ea393-610a-4a20-923f-271e8b897c2f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a193a0da-743c-463e-b2c5-ee6d1411d87c","type":"GlyphRenderer"},{"id":"30f047aa-b51f-4308-bd23-c18068c07a76","type":"LinearAxis"},{"id":"174ea393-610a-4a20-923f-271e8b897c2f","type":"LinearAxis"},{"id":"02b07aac-a089-408b-a76e-2c207f6c2e37","type":"Grid"},{"id":"07f66bfb-1f7c-451e-b158-6cd723524746","type":"Grid"}],"title":null,"tool_events":{"id":"34ca4f1b-b799-4ee6-8410-abee8f85015a","type":"ToolEvents"},"toolbar":{"id":"57cb39ee-b1fe-437a-a7e4-1fbdde86aa61","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7778c67f-83ff-4903-9c1e-1d8f6da0aa2b","type":"DataRange1d"},"y_range":{"id":"7a033d98-4fba-4d23-8eed-49691e215bb2","type":"DataRange1d"}},"id":"476e5951-4420-4021-a5d9-4add2da76562","type":"Plot"},{"attributes":{"formatter":{"id":"bc1f17d3-78b7-47da-9da1-8197f82f542a","type":"BasicTickFormatter"},"plot":{"id":"476e5951-4420-4021-a5d9-4add2da76562","type":"Plot"},"ticker":{"id":"f8932dac-04ab-4fbb-a784-947219af29ab","type":"BasicTicker"}},"id":"30f047aa-b51f-4308-bd23-c18068c07a76","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"476e5951-4420-4021-a5d9-4add2da76562","type":"Plot"},"ticker":{"id":"a488a24a-97da-4481-86fc-410503f738de","type":"BasicTicker"}},"id":"07f66bfb-1f7c-451e-b158-6cd723524746","type":"Grid"},{"attributes":{"data_source":{"id":"e87260c7-bc05-4cd3-aa7d-2d7ad3c9e4fd","type":"ColumnDataSource"},"glyph":{"id":"eeff84fe-479c-46cf-8065-827313f7d8e2","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a193a0da-743c-463e-b2c5-ee6d1411d87c","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7a033d98-4fba-4d23-8eed-49691e215bb2","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"eeff84fe-479c-46cf-8065-827313f7d8e2","type":"Asterisk"},{"attributes":{},"id":"34ca4f1b-b799-4ee6-8410-abee8f85015a","type":"ToolEvents"}],"root_ids":["476e5951-4420-4021-a5d9-4add2da76562"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"7dd3cc4b-7e09-4615-aeb2-f0a55f51a979","elementid":"71dac46a-9ddd-4c74-9502-cb49aae97edf","modelid":"476e5951-4420-4021-a5d9-4add2da76562"}];
                  
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