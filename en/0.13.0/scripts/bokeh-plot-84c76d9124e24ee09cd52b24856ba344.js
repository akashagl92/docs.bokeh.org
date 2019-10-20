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
      };var element = document.getElementById("be186868-a020-4bde-8b54-d754137eaa73");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'be186868-a020-4bde-8b54-d754137eaa73' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"223d54d6-7678-4b74-a597-7f6564e6df46":{"roots":{"references":[{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"79736e6a-de1a-43e5-9f17-dc598bf86fdf","type":"MonthsTicker"},{"attributes":{},"id":"7c087a00-99ad-4ae4-984e-39a3e95f8105","type":"YearsTicker"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.3},"line_color":{"value":"white"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4db905c-29a0-46a5-9633-247f731df17c","type":"Circle"},{"attributes":{},"id":"c5e5e890-f729-47be-b2bd-8be0dd71bd53","type":"Selection"},{"attributes":{},"id":"208d36db-8c18-4df3-934b-a60a18722aa6","type":"UnionRenderers"},{"attributes":{},"id":"bb884bf5-0ad6-4ab7-b04c-9ce392644c28","type":"Selection"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"5ab3e388-36f5-4a0b-9e99-e734e5501a00","type":"AdaptiveTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"2eb5cf64-621e-434d-a268-8845b6a4ca40","type":"AdaptiveTicker"},{"attributes":{},"id":"825a45b9-cdd3-4e10-a824-12bcfbe5f04a","type":"BasicTickFormatter"},{"attributes":{"days":[1,8,15,22]},"id":"ebc99286-83a3-4691-a555-be07ffea25de","type":"DaysTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"7a33e96e-c52b-41e0-b3d0-8e3c0364c9f5","type":"DaysTicker"},{"attributes":{"below":[{"id":"094d2308-9fe0-4742-bb13-d5105762e046","type":"DatetimeAxis"}],"left":[{"id":"caa10195-7043-411f-bffe-26044608c93f","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"094d2308-9fe0-4742-bb13-d5105762e046","type":"DatetimeAxis"},{"id":"df74b477-1d88-4e81-b396-90346483d839","type":"Grid"},{"id":"caa10195-7043-411f-bffe-26044608c93f","type":"LinearAxis"},{"id":"2f19bbbf-4e24-4677-b67d-0ea49f211aae","type":"Grid"},{"id":"c447854d-c94e-4c83-a3c5-02744a0655ef","type":"GlyphRenderer"},{"id":"59b651c3-fcdb-444a-8be9-65f43e06217c","type":"GlyphRenderer"}],"title":{"id":"b7a13cdc-fda4-433e-8acc-457359a12ec5","type":"Title"},"toolbar":{"id":"79b05e70-4e44-4462-bf1f-d170c4ff6168","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0a34a9cd-8965-4c89-8dfd-01c399e9119a","type":"DataRange1d"},"x_scale":{"id":"fd3331fa-b5a9-4008-8e15-6d25e16ec001","type":"LinearScale"},"y_range":{"id":"6a365156-44b6-4fb0-be43-b5931db832fd","type":"DataRange1d"},"y_scale":{"id":"c1a5f7be-4c70-4e11-91ab-247fc96b2e28","type":"LinearScale"}},"id":"ecc0584f-be35-4a10-8009-5636b4776b27","subtype":"Figure","type":"Plot"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"5cabb911-9863-4594-aa6e-335ced0946ff","type":"DaysTicker"},{"attributes":{"callback":null,"mode":"hline","renderers":[{"id":"59b651c3-fcdb-444a-8be9-65f43e06217c","type":"GlyphRenderer"}],"tooltips":null},"id":"16c9f134-c18b-480f-b434-734cd632dfa0","type":"HoverTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AADyke23ckIAADDb7bdyQgAAbiTut3JCAACsbe63ckIAAOq27rdyQgAAKADvt3JCAABmSe+3ckIAAKSS77dyQgAA4tvvt3JCAAAgJfC3ckIAAF5u8LdyQgAAnLfwt3JCAADaAPG3ckIAABhK8bdyQgAAVpPxt3JCAACU3PG3ckIAANIl8rdyQgAAEG/yt3JCAABOuPK3ckIAAIwB87dyQgAAykrzt3JCAAAIlPO3ckIAAEbd87dyQgAAhCb0t3JCAADCb/S3ckIAAAC59LdyQgAAPgL1t3JCAAB8S/W3ckIAALqU9bdyQgAA+N31t3JCAAA2J/a3ckIAAHRw9rdyQgAAsrn2t3JCAADwAve3ckIAAC5M97dyQgAAbJX3t3JCAACq3ve3ckIAAOgn+LdyQgAAJnH4t3JCAABkuvi3ckIAAKID+bdyQgAA4Ez5t3JCAAAelvm3ckIAAFzf+bdyQgAAmij6t3JCAADYcfq3ckIAABa7+rdyQgAAVAT7t3JCAACSTfu3ckIAANCW+7dyQgAADuD7t3JCAABMKfy3ckIAAIpy/LdyQgAAyLv8t3JCAAAGBf23ckIAAERO/bdyQgAAgpf9t3JCAADA4P23ckIAAP4p/rdyQgAAPHP+t3JCAAB6vP63ckIAALgF/7dyQgAA9k7/t3JCAAA0mP+3ckIAAHLh/7dyQgAAsCoAuHJCAADucwC4ckIAACy9ALhyQgAAagYBuHJCAACoTwG4ckIAAOaYAbhyQgAAJOIBuHJCAABiKwK4ckIAAKB0ArhyQgAA3r0CuHJCAAAcBwO4ckIAAFpQA7hyQgAAmJkDuHJCAADW4gO4ckIAABQsBLhyQgAAUnUEuHJCAACQvgS4ckIAAM4HBbhyQgAADFEFuHJCAABKmgW4ckIAAIjjBbhyQgAAxiwGuHJCAAAEdga4ckIAAEK/BrhyQgAAgAgHuHJCAAC+UQe4ckIAAPyaB7hyQgAAOuQHuHJCAAB4LQi4ckIAALZ2CLhyQgAA9L8IuHJCAAAyCQm4ckIAAHBSCbhyQgAArpsJuHJCAADs5Am4ckIAACouCrhyQgAAaHcKuHJCAACmwAq4ckIAAOQJC7hyQgAAIlMLuHJCAABgnAu4ckIAAJ7lC7hyQgAA3C4MuHJCAAAaeAy4ckIAAFjBDLhyQgAAlgoNuHJCAADUUw24ckIAABKdDbhyQgAAUOYNuHJCAACOLw64ckIAAMx4DrhyQgAACsIOuHJCAABICw+4ckIAAIZUD7hyQgAAxJ0PuHJCAAAC5w+4ckIAAEAwELhyQgAAfnkQuHJCAAC8whC4ckIAAPoLEbhyQgAAOFURuHJCAAB2nhG4ckIAALTnEbhyQgAA8jASuHJCAAAwehK4ckIAAG7DErhyQgAArAwTuHJCAADqVRO4ckIAACifE7hyQgAAZugTuHJCAACkMRS4ckIAAOJ6FLhyQgAAIMQUuHJCAABeDRW4ckIAAJxWFbhyQgAA2p8VuHJCAAAY6RW4ckIAAFYyFrhyQgAAlHsWuHJCAADSxBa4ckIAABAOF7hyQgAATlcXuHJCAACMoBe4ckIAAMrpF7hyQgAACDMYuHJCAABGfBi4ckIAAITFGLhyQgAAwg4ZuHJCAAAAWBm4ckIAAD6hGbhyQgAAfOoZuHJCAAC6Mxq4ckIAAPh8GrhyQgAANsYauHJCAAB0Dxu4ckIAALJYG7hyQgAA8KEbuHJCAAAu6xu4ckIAAGw0HLhyQgAAqn0cuHJCAADoxhy4ckIAACYQHbhyQgAAZFkduHJCAACioh24ckIAAODrHbhyQgAAHjUeuHJCAABcfh64ckIAAJrHHrhyQgAA2BAfuHJCAAAWWh+4ckIAAFSjH7hyQgAAkuwfuHJCAADQNSC4ckIAAA5/ILhyQgAATMgguHJCAACKESG4ckIAAMhaIbhyQgAABqQhuHJCAABE7SG4ckIAAII2IrhyQgAAwH8iuHJCAAD+yCK4ckIAADwSI7hyQgAAelsjuHJCAAC4pCO4ckIAAPbtI7hyQgAANDckuHJCAABygCS4ckIAALDJJLhyQgAA7hIluHJCAAAsXCW4ckIAAGqlJbhyQgAAqO4luHJCAADmNya4ckIAACSBJrhyQgAAYsomuHJCAACgEye4ckIAAN5cJ7hyQgAAHKYnuHJCAABa7ye4ckIAAJg4KLhyQgAA1oEouHJCAAAUyyi4ckIAAFIUKbhyQgAAkF0puHJCAADOpim4ckIAAAzwKbhyQgAASjkquHJCAACIgiq4ckIAAMbLKrhyQgAABBUruHJCAABCXiu4ckIAAICnK7hyQgAAvvAruHJCAAD8OSy4ckIAADqDLLhyQgAAeMwsuHJCAAC2FS24ckIAAPReLbhyQgAAMqgtuHJCAABw8S24ckIAAK46LrhyQgAA7IMuuHJCAAAqzS64ckIAAGgWL7hyQgAApl8vuHJCAADkqC+4ckIAACLyL7hyQgAAYDswuHJCAACehDC4ckIAANzNMLhyQgAAGhcxuHJCAABYYDG4ckIAAJapMbhyQgAA1PIxuHJCAAASPDK4ckIAAFCFMrhyQgAAjs4yuHJCAADMFzO4ckIAAAphM7hyQgAASKozuHJCAACG8zO4ckIAAMQ8NLhyQgAAAoY0uHJCAABAzzS4ckIAAH4YNbhyQgAAvGE1uHJCAAD6qjW4ckIAADj0NbhyQgAAdj02uHJCAAC0hja4ckIAAPLPNrhyQgAAMBk3uHJCAABuYje4ckIAAKyrN7hyQgAA6vQ3uHJCAAAoPji4ckIAAGaHOLhyQgAApNA4uHJCAADiGTm4ckIAACBjObhyQgAAXqw5uHJCAACc9Tm4ckIAANo+OrhyQgAAGIg6uHJCAABW0Tq4ckIAAJQaO7hyQgAA0mM7uHJCAAAQrTu4ckIAAE72O7hyQgAAjD88uHJCAADKiDy4ckIAAAjSPLhyQgAARhs9uHJCAACEZD24ckIAAMKtPbhyQgAAAPc9uHJCAAA+QD64ckIAAHyJPrhyQgAAutI+uHJCAAD4Gz+4ckIAADZlP7hyQgAAdK4/uHJC","dtype":"float64","shape":[288]},"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]},"selected":{"id":"c5e5e890-f729-47be-b2bd-8be0dd71bd53","type":"Selection"},"selection_policy":{"id":"208d36db-8c18-4df3-934b-a60a18722aa6","type":"UnionRenderers"}},"id":"211b7dd8-7715-434b-990a-cdc2986f146b","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"b7a13cdc-fda4-433e-8acc-457359a12ec5","type":"Title"},{"attributes":{"days":[1,15]},"id":"ef0fcd32-01ac-480d-9ccb-445e1584d8ef","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16c9f134-c18b-480f-b434-734cd632dfa0","type":"HoverTool"}]},"id":"79b05e70-4e44-4462-bf1f-d170c4ff6168","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"56799a37-6e70-495e-a7a3-9289cf1c5d3b","type":"Circle"},{"attributes":{"callback":null},"id":"0a34a9cd-8965-4c89-8dfd-01c399e9119a","type":"DataRange1d"},{"attributes":{"source":{"id":"03b6bd5d-dbc9-4195-83fb-7df2c99e9919","type":"ColumnDataSource"}},"id":"0003560b-d736-467a-a467-c4e9f06217b3","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AADyke23ckIAADDb7bdyQgAAbiTut3JCAACsbe63ckIAAOq27rdyQgAAKADvt3JCAABmSe+3ckIAAKSS77dyQgAA4tvvt3JCAAAgJfC3ckIAAF5u8LdyQgAAnLfwt3JCAADaAPG3ckIAABhK8bdyQgAAVpPxt3JCAACU3PG3ckIAANIl8rdyQgAAEG/yt3JCAABOuPK3ckIAAIwB87dyQgAAykrzt3JCAAAIlPO3ckIAAEbd87dyQgAAhCb0t3JCAADCb/S3ckIAAAC59LdyQgAAPgL1t3JCAAB8S/W3ckIAALqU9bdyQgAA+N31t3JCAAA2J/a3ckIAAHRw9rdyQgAAsrn2t3JCAADwAve3ckIAAC5M97dyQgAAbJX3t3JCAACq3ve3ckIAAOgn+LdyQgAAJnH4t3JCAABkuvi3ckIAAKID+bdyQgAA4Ez5t3JCAAAelvm3ckIAAFzf+bdyQgAAmij6t3JCAADYcfq3ckIAABa7+rdyQgAAVAT7t3JCAACSTfu3ckIAANCW+7dyQgAADuD7t3JCAABMKfy3ckIAAIpy/LdyQgAAyLv8t3JCAAAGBf23ckIAAERO/bdyQgAAgpf9t3JCAADA4P23ckIAAP4p/rdyQgAAPHP+t3JCAAB6vP63ckIAALgF/7dyQgAA9k7/t3JCAAA0mP+3ckIAAHLh/7dyQgAAsCoAuHJCAADucwC4ckIAACy9ALhyQgAAagYBuHJCAACoTwG4ckIAAOaYAbhyQgAAJOIBuHJCAABiKwK4ckIAAKB0ArhyQgAA3r0CuHJCAAAcBwO4ckIAAFpQA7hyQgAAmJkDuHJCAADW4gO4ckIAABQsBLhyQgAAUnUEuHJCAACQvgS4ckIAAM4HBbhyQgAADFEFuHJCAABKmgW4ckIAAIjjBbhyQgAAxiwGuHJCAAAEdga4ckIAAEK/BrhyQgAAgAgHuHJCAAC+UQe4ckIAAPyaB7hyQgAAOuQHuHJCAAB4LQi4ckIAALZ2CLhyQgAA9L8IuHJCAAAyCQm4ckIAAHBSCbhyQgAArpsJuHJCAADs5Am4ckIAACouCrhyQgAAaHcKuHJCAACmwAq4ckIAAOQJC7hyQgAAIlMLuHJCAABgnAu4ckIAAJ7lC7hyQgAA3C4MuHJCAAAaeAy4ckIAAFjBDLhyQgAAlgoNuHJCAADUUw24ckIAABKdDbhyQgAAUOYNuHJCAACOLw64ckIAAMx4DrhyQgAACsIOuHJCAABICw+4ckIAAIZUD7hyQgAAxJ0PuHJCAAAC5w+4ckIAAEAwELhyQgAAfnkQuHJCAAC8whC4ckIAAPoLEbhyQgAAOFURuHJCAAB2nhG4ckIAALTnEbhyQgAA8jASuHJCAAAwehK4ckIAAG7DErhyQgAArAwTuHJCAADqVRO4ckIAACifE7hyQgAAZugTuHJCAACkMRS4ckIAAOJ6FLhyQgAAIMQUuHJCAABeDRW4ckIAAJxWFbhyQgAA2p8VuHJCAAAY6RW4ckIAAFYyFrhyQgAAlHsWuHJCAADSxBa4ckIAABAOF7hyQgAATlcXuHJCAACMoBe4ckIAAMrpF7hyQgAACDMYuHJCAABGfBi4ckIAAITFGLhyQgAAwg4ZuHJCAAAAWBm4ckIAAD6hGbhyQgAAfOoZuHJCAAC6Mxq4ckIAAPh8GrhyQgAANsYauHJCAAB0Dxu4ckIAALJYG7hyQgAA8KEbuHJCAAAu6xu4ckIAAGw0HLhyQgAAqn0cuHJCAADoxhy4ckIAACYQHbhyQgAAZFkduHJCAACioh24ckIAAODrHbhyQgAAHjUeuHJCAABcfh64ckIAAJrHHrhyQgAA2BAfuHJCAAAWWh+4ckIAAFSjH7hyQgAAkuwfuHJCAADQNSC4ckIAAA5/ILhyQgAATMgguHJCAACKESG4ckIAAMhaIbhyQgAABqQhuHJCAABE7SG4ckIAAII2IrhyQgAAwH8iuHJCAAD+yCK4ckIAADwSI7hyQgAAelsjuHJCAAC4pCO4ckIAAPbtI7hyQgAANDckuHJCAABygCS4ckIAALDJJLhyQgAA7hIluHJCAAAsXCW4ckIAAGqlJbhyQgAAqO4luHJCAADmNya4ckIAACSBJrhyQgAAYsomuHJCAACgEye4ckIAAN5cJ7hyQgAAHKYnuHJCAABa7ye4ckIAAJg4KLhyQgAA1oEouHJCAAAUyyi4ckIAAFIUKbhyQgAAkF0puHJCAADOpim4ckIAAAzwKbhyQgAASjkquHJCAACIgiq4ckIAAMbLKrhyQgAABBUruHJCAABCXiu4ckIAAICnK7hyQgAAvvAruHJCAAD8OSy4ckIAADqDLLhyQgAAeMwsuHJCAAC2FS24ckIAAPReLbhyQgAAMqgtuHJCAABw8S24ckIAAK46LrhyQgAA7IMuuHJCAAAqzS64ckIAAGgWL7hyQgAApl8vuHJCAADkqC+4ckIAACLyL7hyQgAAYDswuHJCAACehDC4ckIAANzNMLhyQgAAGhcxuHJCAABYYDG4ckIAAJapMbhyQgAA1PIxuHJCAAASPDK4ckIAAFCFMrhyQgAAjs4yuHJCAADMFzO4ckIAAAphM7hyQgAASKozuHJCAACG8zO4ckIAAMQ8NLhyQgAAAoY0uHJCAABAzzS4ckIAAH4YNbhyQgAAvGE1uHJCAAD6qjW4ckIAADj0NbhyQgAAdj02uHJCAAC0hja4ckIAAPLPNrhyQgAAMBk3uHJCAABuYje4ckIAAKyrN7hyQgAA6vQ3uHJCAAAoPji4ckIAAGaHOLhyQgAApNA4uHJCAADiGTm4ckIAACBjObhyQgAAXqw5uHJCAACc9Tm4ckIAANo+OrhyQgAAGIg6uHJCAABW0Tq4ckIAAJQaO7hyQgAA0mM7uHJCAAAQrTu4ckIAAE72O7hyQgAAjD88uHJCAADKiDy4ckIAAAjSPLhyQgAARhs9uHJCAACEZD24ckIAAMKtPbhyQgAAAPc9uHJCAAA+QD64ckIAAHyJPrhyQgAAutI+uHJCAAD4Gz+4ckIAADZlP7hyQgAAdK4/uHJC","dtype":"float64","shape":[288]},"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]},"selected":{"id":"bb884bf5-0ad6-4ab7-b04c-9ce392644c28","type":"Selection"},"selection_policy":{"id":"64a29455-8dba-4eef-a33a-dc1856e469c6","type":"UnionRenderers"}},"id":"03b6bd5d-dbc9-4195-83fb-7df2c99e9919","type":"ColumnDataSource"},{"attributes":{},"id":"64a29455-8dba-4eef-a33a-dc1856e469c6","type":"UnionRenderers"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"8156e94d-a313-4dcd-842f-f907e9f90d78","type":"AdaptiveTicker"},{"id":"5ab3e388-36f5-4a0b-9e99-e734e5501a00","type":"AdaptiveTicker"},{"id":"2eb5cf64-621e-434d-a268-8845b6a4ca40","type":"AdaptiveTicker"},{"id":"5cabb911-9863-4594-aa6e-335ced0946ff","type":"DaysTicker"},{"id":"7a33e96e-c52b-41e0-b3d0-8e3c0364c9f5","type":"DaysTicker"},{"id":"ebc99286-83a3-4691-a555-be07ffea25de","type":"DaysTicker"},{"id":"ef0fcd32-01ac-480d-9ccb-445e1584d8ef","type":"DaysTicker"},{"id":"79736e6a-de1a-43e5-9f17-dc598bf86fdf","type":"MonthsTicker"},{"id":"b23650a4-9413-4b76-85cb-3d2f61571d87","type":"MonthsTicker"},{"id":"37fb4e4a-b5d5-4670-b0d9-7e97094f8bbd","type":"MonthsTicker"},{"id":"b5c6b5fa-81c2-45b7-bbfe-7a9aaaa295b0","type":"MonthsTicker"},{"id":"7c087a00-99ad-4ae4-984e-39a3e95f8105","type":"YearsTicker"}]},"id":"836a2c0d-edd5-428f-970e-6ba3feaf3f4a","type":"DatetimeTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"8156e94d-a313-4dcd-842f-f907e9f90d78","type":"AdaptiveTicker"},{"attributes":{},"id":"fd3331fa-b5a9-4008-8e15-6d25e16ec001","type":"LinearScale"},{"attributes":{"source":{"id":"211b7dd8-7715-434b-990a-cdc2986f146b","type":"ColumnDataSource"}},"id":"9a3b5e40-3fb6-4ef7-bd22-e47224ce57b6","type":"CDSView"},{"attributes":{"plot":{"id":"ecc0584f-be35-4a10-8009-5636b4776b27","subtype":"Figure","type":"Plot"},"ticker":{"id":"836a2c0d-edd5-428f-970e-6ba3feaf3f4a","type":"DatetimeTicker"}},"id":"df74b477-1d88-4e81-b396-90346483d839","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"6c7d9365-bdd5-47c1-8433-00dfd32d72e7","type":"Line"},{"attributes":{"formatter":{"id":"79e96272-b5e6-432b-9240-6bafeb9f190c","type":"DatetimeTickFormatter"},"plot":{"id":"ecc0584f-be35-4a10-8009-5636b4776b27","subtype":"Figure","type":"Plot"},"ticker":{"id":"836a2c0d-edd5-428f-970e-6ba3feaf3f4a","type":"DatetimeTicker"}},"id":"094d2308-9fe0-4742-bb13-d5105762e046","type":"DatetimeAxis"},{"attributes":{"data_source":{"id":"03b6bd5d-dbc9-4195-83fb-7df2c99e9919","type":"ColumnDataSource"},"glyph":{"id":"0eeb0cea-75c3-4e6c-af56-ec94b826421c","type":"Circle"},"hover_glyph":{"id":"c4db905c-29a0-46a5-9633-247f731df17c","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"56799a37-6e70-495e-a7a3-9289cf1c5d3b","type":"Circle"},"selection_glyph":null,"view":{"id":"0003560b-d736-467a-a467-c4e9f06217b3","type":"CDSView"}},"id":"59b651c3-fcdb-444a-8be9-65f43e06217c","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"6a365156-44b6-4fb0-be43-b5931db832fd","type":"DataRange1d"},{"attributes":{"line_color":"gray","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"d07cff5d-9abd-471f-bd06-c26d565fc067","type":"Line"},{"attributes":{},"id":"c1a5f7be-4c70-4e11-91ab-247fc96b2e28","type":"LinearScale"},{"attributes":{"formatter":{"id":"825a45b9-cdd3-4e10-a824-12bcfbe5f04a","type":"BasicTickFormatter"},"plot":{"id":"ecc0584f-be35-4a10-8009-5636b4776b27","subtype":"Figure","type":"Plot"},"ticker":{"id":"769c8b9d-5751-4518-b4f3-383cda2dcf1c","type":"BasicTicker"}},"id":"caa10195-7043-411f-bffe-26044608c93f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"211b7dd8-7715-434b-990a-cdc2986f146b","type":"ColumnDataSource"},"glyph":{"id":"d07cff5d-9abd-471f-bd06-c26d565fc067","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c7d9365-bdd5-47c1-8433-00dfd32d72e7","type":"Line"},"selection_glyph":null,"view":{"id":"9a3b5e40-3fb6-4ef7-bd22-e47224ce57b6","type":"CDSView"}},"id":"c447854d-c94e-4c83-a3c5-02744a0655ef","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.05},"fill_color":{"value":"grey"},"line_color":{"value":null},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"0eeb0cea-75c3-4e6c-af56-ec94b826421c","type":"Circle"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"b23650a4-9413-4b76-85cb-3d2f61571d87","type":"MonthsTicker"},{"attributes":{},"id":"79e96272-b5e6-432b-9240-6bafeb9f190c","type":"DatetimeTickFormatter"},{"attributes":{"months":[0,4,8]},"id":"37fb4e4a-b5d5-4670-b0d9-7e97094f8bbd","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"b5c6b5fa-81c2-45b7-bbfe-7a9aaaa295b0","type":"MonthsTicker"},{"attributes":{},"id":"769c8b9d-5751-4518-b4f3-383cda2dcf1c","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ecc0584f-be35-4a10-8009-5636b4776b27","subtype":"Figure","type":"Plot"},"ticker":{"id":"769c8b9d-5751-4518-b4f3-383cda2dcf1c","type":"BasicTicker"}},"id":"2f19bbbf-4e24-4677-b67d-0ea49f211aae","type":"Grid"}],"root_ids":["ecc0584f-be35-4a10-8009-5636b4776b27"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"223d54d6-7678-4b74-a597-7f6564e6df46","roots":{"ecc0584f-be35-4a10-8009-5636b4776b27":"be186868-a020-4bde-8b54-d754137eaa73"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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