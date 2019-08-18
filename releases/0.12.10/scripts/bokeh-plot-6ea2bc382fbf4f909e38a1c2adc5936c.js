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
      };var element = document.getElementById("9f7eadcd-25d2-43fa-aa72-c097b6eae2a4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f7eadcd-25d2-43fa-aa72-c097b6eae2a4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"0d6a4b55-ad88-4ff6-b8a2-b54b4df09ecb":{"roots":{"references":[{"attributes":{"months":[0,2,4,6,8,10]},"id":"80e139af-2ade-425b-b3a4-add274188845","type":"MonthsTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c5e3b72e-be72-4aca-b809-ecd6a58c10de","type":"HoverTool"}]},"id":"6d34a086-9014-41b0-9ea8-b64fe46555c8","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"639efa1b-1b2d-4fb0-990f-2c0881b11fb6","type":"Line"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"e2d1cb3f-f1b6-4375-827e-14d88a7e9a65","type":"AdaptiveTicker"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.3},"line_color":{"value":"white"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4a6ed36-0d15-4684-ab15-cd1d180208f6","type":"Circle"},{"attributes":{"callback":null},"id":"f974edd6-6397-418f-9fa2-eabefc3f485f","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"5aa2193e-ccff-45cf-bdb4-43fbd173c639","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2be5a3f-6aab-4d4e-a3c6-7be0e759241f","type":"BasicTicker"}},"id":"dc11a06f-83b5-44ed-8161-ec7b0443aeb0","type":"Grid"},{"attributes":{"callback":null},"id":"4b84cde7-1b74-4d65-9e07-5d66c82faf14","type":"DataRange1d"},{"attributes":{"data_source":{"id":"03ec6f20-2f8a-45f0-9ea0-cabbb20e1f0a","type":"ColumnDataSource"},"glyph":{"id":"d1ad9d32-ddc9-46e8-89c3-8ce956435b3e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"639efa1b-1b2d-4fb0-990f-2c0881b11fb6","type":"Line"},"selection_glyph":null,"view":{"id":"477eb127-d747-4cd7-89ce-04762346c115","type":"CDSView"}},"id":"2d3f2568-4b9b-49a6-960e-f708fc4fb56d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5aa2193e-ccff-45cf-bdb4-43fbd173c639","subtype":"Figure","type":"Plot"},"ticker":{"id":"da1a5e3f-bb89-4a4d-9cea-a1db75b4f22d","type":"DatetimeTicker"}},"id":"db0b9f90-0e35-40e7-85b0-fabfd997109d","type":"Grid"},{"attributes":{"formatter":{"id":"149eb10a-71f1-4208-93b6-b7782d70799b","type":"BasicTickFormatter"},"plot":{"id":"5aa2193e-ccff-45cf-bdb4-43fbd173c639","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2be5a3f-6aab-4d4e-a3c6-7be0e759241f","type":"BasicTicker"}},"id":"f575d2cd-4897-4d9c-a469-5bc31d52c892","type":"LinearAxis"},{"attributes":{"formatter":{"id":"48c51903-caa9-4694-b423-e25abb3e63b8","type":"DatetimeTickFormatter"},"plot":{"id":"5aa2193e-ccff-45cf-bdb4-43fbd173c639","subtype":"Figure","type":"Plot"},"ticker":{"id":"da1a5e3f-bb89-4a4d-9cea-a1db75b4f22d","type":"DatetimeTicker"}},"id":"280a1237-169c-44bd-9136-16b9d0ded863","type":"DatetimeAxis"},{"attributes":{"callback":null,"mode":"hline","renderers":[{"id":"9f9556b1-eb97-4ce6-a395-cbc738c153e3","type":"GlyphRenderer"}],"tooltips":null},"id":"c5e3b72e-be72-4aca-b809-ecd6a58c10de","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.05},"fill_color":{"value":"grey"},"line_color":{"value":null},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a1fdf8f-41b6-440b-a84e-899b676b4f3b","type":"Circle"},{"attributes":{"line_color":{"value":"gray"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"d1ad9d32-ddc9-46e8-89c3-8ce956435b3e","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AADyke23ckIAADDb7bdyQgAAbiTut3JCAACsbe63ckIAAOq27rdyQgAAKADvt3JCAABmSe+3ckIAAKSS77dyQgAA4tvvt3JCAAAgJfC3ckIAAF5u8LdyQgAAnLfwt3JCAADaAPG3ckIAABhK8bdyQgAAVpPxt3JCAACU3PG3ckIAANIl8rdyQgAAEG/yt3JCAABOuPK3ckIAAIwB87dyQgAAykrzt3JCAAAIlPO3ckIAAEbd87dyQgAAhCb0t3JCAADCb/S3ckIAAAC59LdyQgAAPgL1t3JCAAB8S/W3ckIAALqU9bdyQgAA+N31t3JCAAA2J/a3ckIAAHRw9rdyQgAAsrn2t3JCAADwAve3ckIAAC5M97dyQgAAbJX3t3JCAACq3ve3ckIAAOgn+LdyQgAAJnH4t3JCAABkuvi3ckIAAKID+bdyQgAA4Ez5t3JCAAAelvm3ckIAAFzf+bdyQgAAmij6t3JCAADYcfq3ckIAABa7+rdyQgAAVAT7t3JCAACSTfu3ckIAANCW+7dyQgAADuD7t3JCAABMKfy3ckIAAIpy/LdyQgAAyLv8t3JCAAAGBf23ckIAAERO/bdyQgAAgpf9t3JCAADA4P23ckIAAP4p/rdyQgAAPHP+t3JCAAB6vP63ckIAALgF/7dyQgAA9k7/t3JCAAA0mP+3ckIAAHLh/7dyQgAAsCoAuHJCAADucwC4ckIAACy9ALhyQgAAagYBuHJCAACoTwG4ckIAAOaYAbhyQgAAJOIBuHJCAABiKwK4ckIAAKB0ArhyQgAA3r0CuHJCAAAcBwO4ckIAAFpQA7hyQgAAmJkDuHJCAADW4gO4ckIAABQsBLhyQgAAUnUEuHJCAACQvgS4ckIAAM4HBbhyQgAADFEFuHJCAABKmgW4ckIAAIjjBbhyQgAAxiwGuHJCAAAEdga4ckIAAEK/BrhyQgAAgAgHuHJCAAC+UQe4ckIAAPyaB7hyQgAAOuQHuHJCAAB4LQi4ckIAALZ2CLhyQgAA9L8IuHJCAAAyCQm4ckIAAHBSCbhyQgAArpsJuHJCAADs5Am4ckIAACouCrhyQgAAaHcKuHJCAACmwAq4ckIAAOQJC7hyQgAAIlMLuHJCAABgnAu4ckIAAJ7lC7hyQgAA3C4MuHJCAAAaeAy4ckIAAFjBDLhyQgAAlgoNuHJCAADUUw24ckIAABKdDbhyQgAAUOYNuHJCAACOLw64ckIAAMx4DrhyQgAACsIOuHJCAABICw+4ckIAAIZUD7hyQgAAxJ0PuHJCAAAC5w+4ckIAAEAwELhyQgAAfnkQuHJCAAC8whC4ckIAAPoLEbhyQgAAOFURuHJCAAB2nhG4ckIAALTnEbhyQgAA8jASuHJCAAAwehK4ckIAAG7DErhyQgAArAwTuHJCAADqVRO4ckIAACifE7hyQgAAZugTuHJCAACkMRS4ckIAAOJ6FLhyQgAAIMQUuHJCAABeDRW4ckIAAJxWFbhyQgAA2p8VuHJCAAAY6RW4ckIAAFYyFrhyQgAAlHsWuHJCAADSxBa4ckIAABAOF7hyQgAATlcXuHJCAACMoBe4ckIAAMrpF7hyQgAACDMYuHJCAABGfBi4ckIAAITFGLhyQgAAwg4ZuHJCAAAAWBm4ckIAAD6hGbhyQgAAfOoZuHJCAAC6Mxq4ckIAAPh8GrhyQgAANsYauHJCAAB0Dxu4ckIAALJYG7hyQgAA8KEbuHJCAAAu6xu4ckIAAGw0HLhyQgAAqn0cuHJCAADoxhy4ckIAACYQHbhyQgAAZFkduHJCAACioh24ckIAAODrHbhyQgAAHjUeuHJCAABcfh64ckIAAJrHHrhyQgAA2BAfuHJCAAAWWh+4ckIAAFSjH7hyQgAAkuwfuHJCAADQNSC4ckIAAA5/ILhyQgAATMgguHJCAACKESG4ckIAAMhaIbhyQgAABqQhuHJCAABE7SG4ckIAAII2IrhyQgAAwH8iuHJCAAD+yCK4ckIAADwSI7hyQgAAelsjuHJCAAC4pCO4ckIAAPbtI7hyQgAANDckuHJCAABygCS4ckIAALDJJLhyQgAA7hIluHJCAAAsXCW4ckIAAGqlJbhyQgAAqO4luHJCAADmNya4ckIAACSBJrhyQgAAYsomuHJCAACgEye4ckIAAN5cJ7hyQgAAHKYnuHJCAABa7ye4ckIAAJg4KLhyQgAA1oEouHJCAAAUyyi4ckIAAFIUKbhyQgAAkF0puHJCAADOpim4ckIAAAzwKbhyQgAASjkquHJCAACIgiq4ckIAAMbLKrhyQgAABBUruHJCAABCXiu4ckIAAICnK7hyQgAAvvAruHJCAAD8OSy4ckIAADqDLLhyQgAAeMwsuHJCAAC2FS24ckIAAPReLbhyQgAAMqgtuHJCAABw8S24ckIAAK46LrhyQgAA7IMuuHJCAAAqzS64ckIAAGgWL7hyQgAApl8vuHJCAADkqC+4ckIAACLyL7hyQgAAYDswuHJCAACehDC4ckIAANzNMLhyQgAAGhcxuHJCAABYYDG4ckIAAJapMbhyQgAA1PIxuHJCAAASPDK4ckIAAFCFMrhyQgAAjs4yuHJCAADMFzO4ckIAAAphM7hyQgAASKozuHJCAACG8zO4ckIAAMQ8NLhyQgAAAoY0uHJCAABAzzS4ckIAAH4YNbhyQgAAvGE1uHJCAAD6qjW4ckIAADj0NbhyQgAAdj02uHJCAAC0hja4ckIAAPLPNrhyQgAAMBk3uHJCAABuYje4ckIAAKyrN7hyQgAA6vQ3uHJCAAAoPji4ckIAAGaHOLhyQgAApNA4uHJCAADiGTm4ckIAACBjObhyQgAAXqw5uHJCAACc9Tm4ckIAANo+OrhyQgAAGIg6uHJCAABW0Tq4ckIAAJQaO7hyQgAA0mM7uHJCAAAQrTu4ckIAAE72O7hyQgAAjD88uHJCAADKiDy4ckIAAAjSPLhyQgAARhs9uHJCAACEZD24ckIAAMKtPbhyQgAAAPc9uHJCAAA+QD64ckIAAHyJPrhyQgAAutI+uHJCAAD4Gz+4ckIAADZlP7hyQgAAdK4/uHJC","dtype":"float64","shape":[288]},"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]}},"id":"03ec6f20-2f8a-45f0-9ea0-cabbb20e1f0a","type":"ColumnDataSource"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"b2223e32-5333-402f-a259-1de5141758fc","type":"DaysTicker"},{"attributes":{},"id":"48c51903-caa9-4694-b423-e25abb3e63b8","type":"DatetimeTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6d9789d-1589-47da-b0b9-39523fcf17a8","type":"Circle"},{"attributes":{"months":[0,6]},"id":"62095150-0c9e-4c4f-93a6-305c68a51393","type":"MonthsTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"acde5fac-cbf1-459c-84a0-34605f9f70d7","type":"MonthsTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"865f8933-bd73-4042-8d58-1ad3d9ec3c9d","type":"DaysTicker"},{"attributes":{"days":[1,8,15,22]},"id":"d8a28bf5-ab26-4e3b-bc24-af9f36406964","type":"DaysTicker"},{"attributes":{"below":[{"id":"280a1237-169c-44bd-9136-16b9d0ded863","type":"DatetimeAxis"}],"left":[{"id":"f575d2cd-4897-4d9c-a469-5bc31d52c892","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"280a1237-169c-44bd-9136-16b9d0ded863","type":"DatetimeAxis"},{"id":"db0b9f90-0e35-40e7-85b0-fabfd997109d","type":"Grid"},{"id":"f575d2cd-4897-4d9c-a469-5bc31d52c892","type":"LinearAxis"},{"id":"dc11a06f-83b5-44ed-8161-ec7b0443aeb0","type":"Grid"},{"id":"2d3f2568-4b9b-49a6-960e-f708fc4fb56d","type":"GlyphRenderer"},{"id":"9f9556b1-eb97-4ce6-a395-cbc738c153e3","type":"GlyphRenderer"}],"title":{"id":"d6edb367-3ba4-4d23-9624-680c44c45d48","type":"Title"},"toolbar":{"id":"6d34a086-9014-41b0-9ea8-b64fe46555c8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f974edd6-6397-418f-9fa2-eabefc3f485f","type":"DataRange1d"},"x_scale":{"id":"faa74c7d-c0a3-4acf-bfb2-38634ba769d7","type":"LinearScale"},"y_range":{"id":"4b84cde7-1b74-4d65-9e07-5d66c82faf14","type":"DataRange1d"},"y_scale":{"id":"167ba3f5-0783-46de-b84f-374f1edfab18","type":"LinearScale"}},"id":"5aa2193e-ccff-45cf-bdb4-43fbd173c639","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"03ec6f20-2f8a-45f0-9ea0-cabbb20e1f0a","type":"ColumnDataSource"}},"id":"477eb127-d747-4cd7-89ce-04762346c115","type":"CDSView"},{"attributes":{},"id":"16b9b6d4-860e-4925-824c-1ef1f466de7a","type":"YearsTicker"},{"attributes":{},"id":"167ba3f5-0783-46de-b84f-374f1edfab18","type":"LinearScale"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"0ba929f2-4212-4674-be04-fd4ed0f67317","type":"AdaptiveTicker"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"d6edb367-3ba4-4d23-9624-680c44c45d48","type":"Title"},{"attributes":{"data_source":{"id":"7b8cc342-cf1e-4ab9-878b-cc95d21bb515","type":"ColumnDataSource"},"glyph":{"id":"1a1fdf8f-41b6-440b-a84e-899b676b4f3b","type":"Circle"},"hover_glyph":{"id":"c4a6ed36-0d15-4684-ab15-cd1d180208f6","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"b6d9789d-1589-47da-b0b9-39523fcf17a8","type":"Circle"},"selection_glyph":null,"view":{"id":"98161b44-156a-4f6a-97d6-2df91840a2d6","type":"CDSView"}},"id":"9f9556b1-eb97-4ce6-a395-cbc738c153e3","type":"GlyphRenderer"},{"attributes":{"days":[1,15]},"id":"844d8714-4df2-47c4-aad1-42facd389179","type":"DaysTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AADyke23ckIAADDb7bdyQgAAbiTut3JCAACsbe63ckIAAOq27rdyQgAAKADvt3JCAABmSe+3ckIAAKSS77dyQgAA4tvvt3JCAAAgJfC3ckIAAF5u8LdyQgAAnLfwt3JCAADaAPG3ckIAABhK8bdyQgAAVpPxt3JCAACU3PG3ckIAANIl8rdyQgAAEG/yt3JCAABOuPK3ckIAAIwB87dyQgAAykrzt3JCAAAIlPO3ckIAAEbd87dyQgAAhCb0t3JCAADCb/S3ckIAAAC59LdyQgAAPgL1t3JCAAB8S/W3ckIAALqU9bdyQgAA+N31t3JCAAA2J/a3ckIAAHRw9rdyQgAAsrn2t3JCAADwAve3ckIAAC5M97dyQgAAbJX3t3JCAACq3ve3ckIAAOgn+LdyQgAAJnH4t3JCAABkuvi3ckIAAKID+bdyQgAA4Ez5t3JCAAAelvm3ckIAAFzf+bdyQgAAmij6t3JCAADYcfq3ckIAABa7+rdyQgAAVAT7t3JCAACSTfu3ckIAANCW+7dyQgAADuD7t3JCAABMKfy3ckIAAIpy/LdyQgAAyLv8t3JCAAAGBf23ckIAAERO/bdyQgAAgpf9t3JCAADA4P23ckIAAP4p/rdyQgAAPHP+t3JCAAB6vP63ckIAALgF/7dyQgAA9k7/t3JCAAA0mP+3ckIAAHLh/7dyQgAAsCoAuHJCAADucwC4ckIAACy9ALhyQgAAagYBuHJCAACoTwG4ckIAAOaYAbhyQgAAJOIBuHJCAABiKwK4ckIAAKB0ArhyQgAA3r0CuHJCAAAcBwO4ckIAAFpQA7hyQgAAmJkDuHJCAADW4gO4ckIAABQsBLhyQgAAUnUEuHJCAACQvgS4ckIAAM4HBbhyQgAADFEFuHJCAABKmgW4ckIAAIjjBbhyQgAAxiwGuHJCAAAEdga4ckIAAEK/BrhyQgAAgAgHuHJCAAC+UQe4ckIAAPyaB7hyQgAAOuQHuHJCAAB4LQi4ckIAALZ2CLhyQgAA9L8IuHJCAAAyCQm4ckIAAHBSCbhyQgAArpsJuHJCAADs5Am4ckIAACouCrhyQgAAaHcKuHJCAACmwAq4ckIAAOQJC7hyQgAAIlMLuHJCAABgnAu4ckIAAJ7lC7hyQgAA3C4MuHJCAAAaeAy4ckIAAFjBDLhyQgAAlgoNuHJCAADUUw24ckIAABKdDbhyQgAAUOYNuHJCAACOLw64ckIAAMx4DrhyQgAACsIOuHJCAABICw+4ckIAAIZUD7hyQgAAxJ0PuHJCAAAC5w+4ckIAAEAwELhyQgAAfnkQuHJCAAC8whC4ckIAAPoLEbhyQgAAOFURuHJCAAB2nhG4ckIAALTnEbhyQgAA8jASuHJCAAAwehK4ckIAAG7DErhyQgAArAwTuHJCAADqVRO4ckIAACifE7hyQgAAZugTuHJCAACkMRS4ckIAAOJ6FLhyQgAAIMQUuHJCAABeDRW4ckIAAJxWFbhyQgAA2p8VuHJCAAAY6RW4ckIAAFYyFrhyQgAAlHsWuHJCAADSxBa4ckIAABAOF7hyQgAATlcXuHJCAACMoBe4ckIAAMrpF7hyQgAACDMYuHJCAABGfBi4ckIAAITFGLhyQgAAwg4ZuHJCAAAAWBm4ckIAAD6hGbhyQgAAfOoZuHJCAAC6Mxq4ckIAAPh8GrhyQgAANsYauHJCAAB0Dxu4ckIAALJYG7hyQgAA8KEbuHJCAAAu6xu4ckIAAGw0HLhyQgAAqn0cuHJCAADoxhy4ckIAACYQHbhyQgAAZFkduHJCAACioh24ckIAAODrHbhyQgAAHjUeuHJCAABcfh64ckIAAJrHHrhyQgAA2BAfuHJCAAAWWh+4ckIAAFSjH7hyQgAAkuwfuHJCAADQNSC4ckIAAA5/ILhyQgAATMgguHJCAACKESG4ckIAAMhaIbhyQgAABqQhuHJCAABE7SG4ckIAAII2IrhyQgAAwH8iuHJCAAD+yCK4ckIAADwSI7hyQgAAelsjuHJCAAC4pCO4ckIAAPbtI7hyQgAANDckuHJCAABygCS4ckIAALDJJLhyQgAA7hIluHJCAAAsXCW4ckIAAGqlJbhyQgAAqO4luHJCAADmNya4ckIAACSBJrhyQgAAYsomuHJCAACgEye4ckIAAN5cJ7hyQgAAHKYnuHJCAABa7ye4ckIAAJg4KLhyQgAA1oEouHJCAAAUyyi4ckIAAFIUKbhyQgAAkF0puHJCAADOpim4ckIAAAzwKbhyQgAASjkquHJCAACIgiq4ckIAAMbLKrhyQgAABBUruHJCAABCXiu4ckIAAICnK7hyQgAAvvAruHJCAAD8OSy4ckIAADqDLLhyQgAAeMwsuHJCAAC2FS24ckIAAPReLbhyQgAAMqgtuHJCAABw8S24ckIAAK46LrhyQgAA7IMuuHJCAAAqzS64ckIAAGgWL7hyQgAApl8vuHJCAADkqC+4ckIAACLyL7hyQgAAYDswuHJCAACehDC4ckIAANzNMLhyQgAAGhcxuHJCAABYYDG4ckIAAJapMbhyQgAA1PIxuHJCAAASPDK4ckIAAFCFMrhyQgAAjs4yuHJCAADMFzO4ckIAAAphM7hyQgAASKozuHJCAACG8zO4ckIAAMQ8NLhyQgAAAoY0uHJCAABAzzS4ckIAAH4YNbhyQgAAvGE1uHJCAAD6qjW4ckIAADj0NbhyQgAAdj02uHJCAAC0hja4ckIAAPLPNrhyQgAAMBk3uHJCAABuYje4ckIAAKyrN7hyQgAA6vQ3uHJCAAAoPji4ckIAAGaHOLhyQgAApNA4uHJCAADiGTm4ckIAACBjObhyQgAAXqw5uHJCAACc9Tm4ckIAANo+OrhyQgAAGIg6uHJCAABW0Tq4ckIAAJQaO7hyQgAA0mM7uHJCAAAQrTu4ckIAAE72O7hyQgAAjD88uHJCAADKiDy4ckIAAAjSPLhyQgAARhs9uHJCAACEZD24ckIAAMKtPbhyQgAAAPc9uHJCAAA+QD64ckIAAHyJPrhyQgAAutI+uHJCAAD4Gz+4ckIAADZlP7hyQgAAdK4/uHJC","dtype":"float64","shape":[288]},"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]}},"id":"7b8cc342-cf1e-4ab9-878b-cc95d21bb515","type":"ColumnDataSource"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"cbf3c0f5-280c-4a92-9166-016687b46151","type":"AdaptiveTicker"},{"attributes":{},"id":"faa74c7d-c0a3-4acf-bfb2-38634ba769d7","type":"LinearScale"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"e2d1cb3f-f1b6-4375-827e-14d88a7e9a65","type":"AdaptiveTicker"},{"id":"cbf3c0f5-280c-4a92-9166-016687b46151","type":"AdaptiveTicker"},{"id":"0ba929f2-4212-4674-be04-fd4ed0f67317","type":"AdaptiveTicker"},{"id":"b2223e32-5333-402f-a259-1de5141758fc","type":"DaysTicker"},{"id":"865f8933-bd73-4042-8d58-1ad3d9ec3c9d","type":"DaysTicker"},{"id":"d8a28bf5-ab26-4e3b-bc24-af9f36406964","type":"DaysTicker"},{"id":"844d8714-4df2-47c4-aad1-42facd389179","type":"DaysTicker"},{"id":"acde5fac-cbf1-459c-84a0-34605f9f70d7","type":"MonthsTicker"},{"id":"80e139af-2ade-425b-b3a4-add274188845","type":"MonthsTicker"},{"id":"a5f1399e-d278-42a8-a647-8298e347c364","type":"MonthsTicker"},{"id":"62095150-0c9e-4c4f-93a6-305c68a51393","type":"MonthsTicker"},{"id":"16b9b6d4-860e-4925-824c-1ef1f466de7a","type":"YearsTicker"}]},"id":"da1a5e3f-bb89-4a4d-9cea-a1db75b4f22d","type":"DatetimeTicker"},{"attributes":{},"id":"149eb10a-71f1-4208-93b6-b7782d70799b","type":"BasicTickFormatter"},{"attributes":{"months":[0,4,8]},"id":"a5f1399e-d278-42a8-a647-8298e347c364","type":"MonthsTicker"},{"attributes":{"source":{"id":"7b8cc342-cf1e-4ab9-878b-cc95d21bb515","type":"ColumnDataSource"}},"id":"98161b44-156a-4f6a-97d6-2df91840a2d6","type":"CDSView"},{"attributes":{},"id":"b2be5a3f-6aab-4d4e-a3c6-7be0e759241f","type":"BasicTicker"}],"root_ids":["5aa2193e-ccff-45cf-bdb4-43fbd173c639"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"0d6a4b55-ad88-4ff6-b8a2-b54b4df09ecb","elementid":"9f7eadcd-25d2-43fa-aa72-c097b6eae2a4","modelid":"5aa2193e-ccff-45cf-bdb4-43fbd173c639"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
