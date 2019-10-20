(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("86a9b3c4-3f40-4083-93fe-9a8cc265c561");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '86a9b3c4-3f40-4083-93fe-9a8cc265c561' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"e577fdab-a638-4eaf-9f87-feb1e5cb7ba1":{"roots":{"references":[{"attributes":{"children":[{"id":"5a7b3b1d-09f6-49fb-8bff-a2afd56ca70f","type":"ToolbarBox"},{"id":"f37ecf12-96aa-4860-b75a-4630f79b9ba6","type":"Column"}]},"id":"d069ae3d-9116-488d-a48e-1fdc64b41554","type":"Column"},{"attributes":{"callback":null},"id":"7095642a-d15f-4281-b51a-8c7b3baed5ee","type":"HoverTool"},{"attributes":{"below":[{"id":"c36e2433-f389-48b6-ab35-4d092e793679","type":"LinearAxis"}],"left":[{"id":"596dc370-7339-4c60-bb48-21c9d2f0d0d8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c36e2433-f389-48b6-ab35-4d092e793679","type":"LinearAxis"},{"id":"fff0a347-4a89-4981-9f36-aefdc6073464","type":"Grid"},{"id":"596dc370-7339-4c60-bb48-21c9d2f0d0d8","type":"LinearAxis"},{"id":"7107e63c-7bd1-432c-9b04-5cdd16329d16","type":"Grid"},{"id":"831c08b6-0ad0-44c4-bfb9-82fd27f8a595","type":"BoxAnnotation"},{"id":"e8ea5246-158b-47c1-aa0d-cdd9e1c54de9","type":"PolyAnnotation"},{"id":"c53e7277-76c0-44ad-b4a5-98bd2b5c003f","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"53452ca1-13e3-4e36-9d44-17f998bb676e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"89cd072e-b031-49e8-b583-5ef518b4aa28","type":"DataRange1d"},"x_scale":{"id":"ab0a31c4-e70d-439e-89dd-afb179afc504","type":"LinearScale"},"y_range":{"id":"ffa196a9-0146-486e-beb7-ee9adc0fb430","type":"DataRange1d"},"y_scale":{"id":"646c1fe4-9c22-4383-9bec-240a1dda603a","type":"LinearScale"}},"id":"868894f2-5111-433d-91fe-b89ccce7fa76","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"c3075e9c-8bcf-4eca-be4d-17e21e2a78cd","type":"HoverTool"},{"attributes":{},"id":"dade7d56-cc71-4586-b219-53c615e88595","type":"BasicTickFormatter"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"4e8ec02a-2843-4675-ac90-06e4745e4721","type":"BooleanFilter"},{"attributes":{},"id":"5aa46752-5947-4712-83ea-000757654d38","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"6a6bb39a-5779-4e30-85bf-e0610b302af9","type":"PolyAnnotation"}},"id":"d203eca7-ad25-44cd-b031-7ecd6c6931e9","type":"LassoSelectTool"},{"attributes":{},"id":"2e2ac018-9656-4e9a-8f2c-a952e57ee892","type":"BasicTicker"},{"attributes":{"plot":{"id":"75b83a4f-7353-4cc1-bab7-8c9f1909a8af","subtype":"Figure","type":"Plot"},"ticker":{"id":"96dc829a-2169-43dc-a5dc-4766b0d59e02","type":"BasicTicker"}},"id":"a7ac0b9b-fc64-4200-a73d-c24a9190253b","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8dd21d3b-6bfd-41a6-a3bd-ced463c43af9","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"ae5e7a66-196e-4c21-aaad-11c288a10cf4","type":"LinearAxis"}],"left":[{"id":"812ddbbe-44da-4665-a1e8-e5458d6ce390","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ae5e7a66-196e-4c21-aaad-11c288a10cf4","type":"LinearAxis"},{"id":"a7ac0b9b-fc64-4200-a73d-c24a9190253b","type":"Grid"},{"id":"812ddbbe-44da-4665-a1e8-e5458d6ce390","type":"LinearAxis"},{"id":"a3020078-2693-44d2-b80d-b885170ee391","type":"Grid"},{"id":"8dd21d3b-6bfd-41a6-a3bd-ced463c43af9","type":"BoxAnnotation"},{"id":"6a6bb39a-5779-4e30-85bf-e0610b302af9","type":"PolyAnnotation"},{"id":"7d66f1b5-87df-46d2-b8fc-e919855da855","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"5afc8169-493e-44f2-91eb-61cf171d2c89","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"134fdb56-3a57-4742-b496-afe4e05b522b","type":"DataRange1d"},"x_scale":{"id":"28669c9f-8d61-41b0-8d49-6d9056c95884","type":"LinearScale"},"y_range":{"id":"f86651a6-9c69-4698-8c43-37e741cbf2b8","type":"DataRange1d"},"y_scale":{"id":"5524577f-d22c-4844-8828-205657450a60","type":"LinearScale"}},"id":"75b83a4f-7353-4cc1-bab7-8c9f1909a8af","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28669c9f-8d61-41b0-8d49-6d9056c95884","type":"LinearScale"},{"attributes":{},"id":"6515a88b-340a-4dca-8ddd-28579a19c8ca","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"831c08b6-0ad0-44c4-bfb9-82fd27f8a595","type":"BoxAnnotation"},{"attributes":{"filters":[{"id":"4e8ec02a-2843-4675-ac90-06e4745e4721","type":"BooleanFilter"}],"source":{"id":"37a7e242-6564-46ce-b397-b9159ac52c11","type":"ColumnDataSource"}},"id":"51a602dc-166e-42c1-9fe5-87175ef25651","type":"CDSView"},{"attributes":{"data_source":{"id":"37a7e242-6564-46ce-b397-b9159ac52c11","type":"ColumnDataSource"},"glyph":{"id":"d41d43d5-06ee-450e-8535-e3c3bd1a094f","type":"Circle"},"hover_glyph":{"id":"b370a058-9c61-4a4e-829a-14249fbc4020","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"753ade32-2ee1-402a-bb26-5eae34315bc2","type":"Circle"},"selection_glyph":null,"view":{"id":"755ce0d8-6260-4bf3-9ff1-6ee5920e41d2","type":"CDSView"}},"id":"7d66f1b5-87df-46d2-b8fc-e919855da855","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"6a6bb39a-5779-4e30-85bf-e0610b302af9","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"01a42856-1c4a-4fe7-b0b1-36745e4b769b","type":"BoxSelectTool"},{"id":"5c87bd5e-11e0-4dfd-8397-8f9826034ef8","type":"LassoSelectTool"},{"id":"c3075e9c-8bcf-4eca-be4d-17e21e2a78cd","type":"HoverTool"},{"id":"8e5569c5-ee34-4261-a542-22dab9ff278f","type":"HelpTool"}]},"id":"53452ca1-13e3-4e36-9d44-17f998bb676e","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c277745c-21ff-4e16-b790-5a51e7cdb9d6","type":"BoxSelectTool"},{"id":"d203eca7-ad25-44cd-b031-7ecd6c6931e9","type":"LassoSelectTool"},{"id":"7095642a-d15f-4281-b51a-8c7b3baed5ee","type":"HoverTool"},{"id":"e15575b3-e79b-434c-81a4-87e3db616005","type":"HelpTool"}]},"id":"5afc8169-493e-44f2-91eb-61cf171d2c89","type":"Toolbar"},{"attributes":{},"id":"ab0a31c4-e70d-439e-89dd-afb179afc504","type":"LinearScale"},{"attributes":{"source":{"id":"37a7e242-6564-46ce-b397-b9159ac52c11","type":"ColumnDataSource"}},"id":"755ce0d8-6260-4bf3-9ff1-6ee5920e41d2","type":"CDSView"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"97beadf6-37c5-40cf-94d8-47188a8d9d22","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"37a7e242-6564-46ce-b397-b9159ac52c11","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"dade7d56-cc71-4586-b219-53c615e88595","type":"BasicTickFormatter"},"plot":{"id":"75b83a4f-7353-4cc1-bab7-8c9f1909a8af","subtype":"Figure","type":"Plot"},"ticker":{"id":"96dc829a-2169-43dc-a5dc-4766b0d59e02","type":"BasicTicker"}},"id":"ae5e7a66-196e-4c21-aaad-11c288a10cf4","type":"LinearAxis"},{"attributes":{"callback":null},"id":"134fdb56-3a57-4742-b496-afe4e05b522b","type":"DataRange1d"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"c277745c-21ff-4e16-b790-5a51e7cdb9d6","type":"BoxSelectTool"},{"id":"d203eca7-ad25-44cd-b031-7ecd6c6931e9","type":"LassoSelectTool"},{"id":"7095642a-d15f-4281-b51a-8c7b3baed5ee","type":"HoverTool"},{"id":"e15575b3-e79b-434c-81a4-87e3db616005","type":"HelpTool"},{"id":"01a42856-1c4a-4fe7-b0b1-36745e4b769b","type":"BoxSelectTool"},{"id":"5c87bd5e-11e0-4dfd-8397-8f9826034ef8","type":"LassoSelectTool"},{"id":"c3075e9c-8bcf-4eca-be4d-17e21e2a78cd","type":"HoverTool"},{"id":"8e5569c5-ee34-4261-a542-22dab9ff278f","type":"HelpTool"}]},"id":"5a7b3b1d-09f6-49fb-8bff-a2afd56ca70f","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"07c810ac-ed27-498f-96d9-03d68401784f","type":"Circle"},{"attributes":{"callback":null},"id":"89cd072e-b031-49e8-b583-5ef518b4aa28","type":"DataRange1d"},{"attributes":{},"id":"96dc829a-2169-43dc-a5dc-4766b0d59e02","type":"BasicTicker"},{"attributes":{},"id":"a5b76a62-ccf0-4b66-8d55-5e5924bae7dc","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"753ade32-2ee1-402a-bb26-5eae34315bc2","type":"Circle"},{"attributes":{"formatter":{"id":"a5b76a62-ccf0-4b66-8d55-5e5924bae7dc","type":"BasicTickFormatter"},"plot":{"id":"868894f2-5111-433d-91fe-b89ccce7fa76","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5eefd38-cd70-4584-a2b6-e6dcd85e4d57","type":"BasicTicker"}},"id":"596dc370-7339-4c60-bb48-21c9d2f0d0d8","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"fdb1ad0a-bb4f-455e-b386-61c7a5a80a61","type":"Circle"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"b370a058-9c61-4a4e-829a-14249fbc4020","type":"Circle"},{"attributes":{},"id":"5524577f-d22c-4844-8828-205657450a60","type":"LinearScale"},{"attributes":{},"id":"e15575b3-e79b-434c-81a4-87e3db616005","type":"HelpTool"},{"attributes":{},"id":"b5eefd38-cd70-4584-a2b6-e6dcd85e4d57","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ffa196a9-0146-486e-beb7-ee9adc0fb430","type":"DataRange1d"},{"attributes":{"plot":{"id":"868894f2-5111-433d-91fe-b89ccce7fa76","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e2ac018-9656-4e9a-8f2c-a952e57ee892","type":"BasicTicker"}},"id":"fff0a347-4a89-4981-9f36-aefdc6073464","type":"Grid"},{"attributes":{"formatter":{"id":"5aa46752-5947-4712-83ea-000757654d38","type":"BasicTickFormatter"},"plot":{"id":"868894f2-5111-433d-91fe-b89ccce7fa76","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e2ac018-9656-4e9a-8f2c-a952e57ee892","type":"BasicTicker"}},"id":"c36e2433-f389-48b6-ab35-4d092e793679","type":"LinearAxis"},{"attributes":{},"id":"646c1fe4-9c22-4383-9bec-240a1dda603a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"e8ea5246-158b-47c1-aa0d-cdd9e1c54de9","type":"PolyAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"75b83a4f-7353-4cc1-bab7-8c9f1909a8af","subtype":"Figure","type":"Plot"},"ticker":{"id":"82b20405-a739-4f6c-b5e6-9246bf32082f","type":"BasicTicker"}},"id":"a3020078-2693-44d2-b80d-b885170ee391","type":"Grid"},{"attributes":{"formatter":{"id":"6515a88b-340a-4dca-8ddd-28579a19c8ca","type":"BasicTickFormatter"},"plot":{"id":"75b83a4f-7353-4cc1-bab7-8c9f1909a8af","subtype":"Figure","type":"Plot"},"ticker":{"id":"82b20405-a739-4f6c-b5e6-9246bf32082f","type":"BasicTicker"}},"id":"812ddbbe-44da-4665-a1e8-e5458d6ce390","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"e8ea5246-158b-47c1-aa0d-cdd9e1c54de9","type":"PolyAnnotation"}},"id":"5c87bd5e-11e0-4dfd-8397-8f9826034ef8","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"d41d43d5-06ee-450e-8535-e3c3bd1a094f","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"868894f2-5111-433d-91fe-b89ccce7fa76","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5eefd38-cd70-4584-a2b6-e6dcd85e4d57","type":"BasicTicker"}},"id":"7107e63c-7bd1-432c-9b04-5cdd16329d16","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"8dd21d3b-6bfd-41a6-a3bd-ced463c43af9","type":"BoxAnnotation"},"renderers":[{"id":"7d66f1b5-87df-46d2-b8fc-e919855da855","type":"GlyphRenderer"}]},"id":"c277745c-21ff-4e16-b790-5a51e7cdb9d6","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"37a7e242-6564-46ce-b397-b9159ac52c11","type":"ColumnDataSource"},"glyph":{"id":"fdb1ad0a-bb4f-455e-b386-61c7a5a80a61","type":"Circle"},"hover_glyph":{"id":"97beadf6-37c5-40cf-94d8-47188a8d9d22","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"07c810ac-ed27-498f-96d9-03d68401784f","type":"Circle"},"selection_glyph":null,"view":{"id":"51a602dc-166e-42c1-9fe5-87175ef25651","type":"CDSView"}},"id":"c53e7277-76c0-44ad-b4a5-98bd2b5c003f","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"75b83a4f-7353-4cc1-bab7-8c9f1909a8af","subtype":"Figure","type":"Plot"},{"id":"868894f2-5111-433d-91fe-b89ccce7fa76","subtype":"Figure","type":"Plot"}]},"id":"187357cb-1bc8-42ba-8d50-23e3099ac6c1","type":"Row"},{"attributes":{"callback":null,"overlay":{"id":"831c08b6-0ad0-44c4-bfb9-82fd27f8a595","type":"BoxAnnotation"},"renderers":[{"id":"c53e7277-76c0-44ad-b4a5-98bd2b5c003f","type":"GlyphRenderer"}]},"id":"01a42856-1c4a-4fe7-b0b1-36745e4b769b","type":"BoxSelectTool"},{"attributes":{},"id":"8e5569c5-ee34-4261-a542-22dab9ff278f","type":"HelpTool"},{"attributes":{},"id":"82b20405-a739-4f6c-b5e6-9246bf32082f","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f86651a6-9c69-4698-8c43-37e741cbf2b8","type":"DataRange1d"},{"attributes":{"children":[{"id":"187357cb-1bc8-42ba-8d50-23e3099ac6c1","type":"Row"}]},"id":"f37ecf12-96aa-4860-b75a-4630f79b9ba6","type":"Column"}],"root_ids":["d069ae3d-9116-488d-a48e-1fdc64b41554"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e577fdab-a638-4eaf-9f87-feb1e5cb7ba1","elementid":"86a9b3c4-3f40-4083-93fe-9a8cc265c561","modelid":"d069ae3d-9116-488d-a48e-1fdc64b41554"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
