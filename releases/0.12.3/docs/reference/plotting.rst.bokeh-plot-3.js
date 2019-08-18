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
      };var element = document.getElementById("d9e844d5-3d24-4e56-9ad7-49a54c7ff995");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd9e844d5-3d24-4e56-9ad7-49a54c7ff995' but no matching script tag was found. ")
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
                  var docs_json = {"bae1f65a-f24d-4a5c-ac84-b4ad6460088b":{"roots":{"references":[{"attributes":{},"id":"053a7e65-d972-4c5f-9ec3-c047e6eea50e","type":"ToolEvents"},{"attributes":{"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"}},"id":"0d4c98fb-c30a-4b98-9b01-9d6479f5a26c","type":"ResetTool"},{"attributes":{"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"},"ticker":{"id":"0eb4544c-1907-4bea-b27e-f69800b4c930","type":"BasicTicker"}},"id":"dcb42894-bf54-4cdc-9eab-db0651780c91","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"94f84880-4c38-4967-9b1c-d042506c1461","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"}},"id":"b7e4dae2-3b69-4d4c-96e5-9c0ad4ffc269","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"96d97be0-fadf-4f06-8ddf-3ca70fe0a659","type":"CircleCross"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"fdaef942-c87b-447a-a381-64007f3e2b7c","type":"CircleCross"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"044f3bd0-305b-43af-8bc8-d0e30fe8a503","type":"PanTool"},{"id":"b7e4dae2-3b69-4d4c-96e5-9c0ad4ffc269","type":"WheelZoomTool"},{"id":"08160d0e-5048-4f4c-b5c7-5d03b9051de7","type":"BoxZoomTool"},{"id":"4b6ba719-0700-448d-8db7-5ec8f49c16f5","type":"SaveTool"},{"id":"0d4c98fb-c30a-4b98-9b01-9d6479f5a26c","type":"ResetTool"},{"id":"ba634c6a-e6b7-43af-95a5-48f72651686a","type":"HelpTool"}]},"id":"c5cdbda8-43d6-44d9-abe3-68ced6f23a26","type":"Toolbar"},{"attributes":{"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"}},"id":"4b6ba719-0700-448d-8db7-5ec8f49c16f5","type":"SaveTool"},{"attributes":{"formatter":{"id":"5ca555a5-3bcc-4b8d-a6b0-f612bcff8f19","type":"BasicTickFormatter"},"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"},"ticker":{"id":"42556e1a-3db9-44dc-ac16-983dba850c77","type":"BasicTicker"}},"id":"c45f0177-6626-484c-a935-095ce47f3d2b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4d30c355-05a4-4d6b-b1b1-989af1c27499","type":"DataRange1d"},{"attributes":{"overlay":{"id":"94f84880-4c38-4967-9b1c-d042506c1461","type":"BoxAnnotation"},"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"}},"id":"08160d0e-5048-4f4c-b5c7-5d03b9051de7","type":"BoxZoomTool"},{"attributes":{},"id":"42556e1a-3db9-44dc-ac16-983dba850c77","type":"BasicTicker"},{"attributes":{"below":[{"id":"46547af1-60aa-471b-bd8b-7c2f63dc69d7","type":"LinearAxis"}],"left":[{"id":"c45f0177-6626-484c-a935-095ce47f3d2b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"46547af1-60aa-471b-bd8b-7c2f63dc69d7","type":"LinearAxis"},{"id":"dcb42894-bf54-4cdc-9eab-db0651780c91","type":"Grid"},{"id":"c45f0177-6626-484c-a935-095ce47f3d2b","type":"LinearAxis"},{"id":"1530e0b3-b0ff-44bd-922c-4570e096ddd0","type":"Grid"},{"id":"94f84880-4c38-4967-9b1c-d042506c1461","type":"BoxAnnotation"},{"id":"89307461-f1d3-4a3e-91b4-2610aaca4309","type":"GlyphRenderer"}],"title":{"id":"cbe6d6a0-186f-4e1a-8759-f4e6516a3fbb","type":"Title"},"tool_events":{"id":"053a7e65-d972-4c5f-9ec3-c047e6eea50e","type":"ToolEvents"},"toolbar":{"id":"c5cdbda8-43d6-44d9-abe3-68ced6f23a26","type":"Toolbar"},"x_range":{"id":"15db8b01-5f90-4678-8bdf-302c51793276","type":"DataRange1d"},"y_range":{"id":"4d30c355-05a4-4d6b-b1b1-989af1c27499","type":"DataRange1d"}},"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":null},"id":"cbe6d6a0-186f-4e1a-8759-f4e6516a3fbb","type":"Title"},{"attributes":{"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"}},"id":"ba634c6a-e6b7-43af-95a5-48f72651686a","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"1b2e8b77-4474-4564-9cd6-2400ccc85146","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"}},"id":"044f3bd0-305b-43af-8bc8-d0e30fe8a503","type":"PanTool"},{"attributes":{"data_source":{"id":"1b2e8b77-4474-4564-9cd6-2400ccc85146","type":"ColumnDataSource"},"glyph":{"id":"fdaef942-c87b-447a-a381-64007f3e2b7c","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":{"id":"96d97be0-fadf-4f06-8ddf-3ca70fe0a659","type":"CircleCross"},"selection_glyph":null},"id":"89307461-f1d3-4a3e-91b4-2610aaca4309","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ab443c29-c327-444d-9c42-1b37c96ed872","type":"BasicTickFormatter"},"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"},"ticker":{"id":"0eb4544c-1907-4bea-b27e-f69800b4c930","type":"BasicTicker"}},"id":"46547af1-60aa-471b-bd8b-7c2f63dc69d7","type":"LinearAxis"},{"attributes":{},"id":"5ca555a5-3bcc-4b8d-a6b0-f612bcff8f19","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"373d7fb3-b1fd-482d-a66c-21445ce70838","subtype":"Figure","type":"Plot"},"ticker":{"id":"42556e1a-3db9-44dc-ac16-983dba850c77","type":"BasicTicker"}},"id":"1530e0b3-b0ff-44bd-922c-4570e096ddd0","type":"Grid"},{"attributes":{"callback":null},"id":"15db8b01-5f90-4678-8bdf-302c51793276","type":"DataRange1d"},{"attributes":{},"id":"ab443c29-c327-444d-9c42-1b37c96ed872","type":"BasicTickFormatter"},{"attributes":{},"id":"0eb4544c-1907-4bea-b27e-f69800b4c930","type":"BasicTicker"}],"root_ids":["373d7fb3-b1fd-482d-a66c-21445ce70838"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"bae1f65a-f24d-4a5c-ac84-b4ad6460088b","elementid":"d9e844d5-3d24-4e56-9ad7-49a54c7ff995","modelid":"373d7fb3-b1fd-482d-a66c-21445ce70838"}];
                  
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